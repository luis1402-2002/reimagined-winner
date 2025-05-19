import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse } from 'ai';
import { createArtifact } from '@/lib/db/actions';

export async function POST(req: NextRequest) {
  try {
    const { type, userId, chatId, prompt, initialContent } = await req.json();
    
    // Construir prompt para criação de artefato
    let artifactPrompt = '';
    
    switch (type) {
      case 'text':
        artifactPrompt = `Crie um documento de texto sobre: "${prompt}". 
        O documento deve ser bem estruturado, com introdução, desenvolvimento e conclusão.`;
        break;
      case 'sheet':
        artifactPrompt = `Crie uma planilha sobre: "${prompt}". 
        A planilha deve conter dados estruturados em formato tabular.`;
        break;
      case 'code':
        artifactPrompt = `Crie um código sobre: "${prompt}". 
        O código deve ser bem comentado e seguir as melhores práticas.`;
        break;
      case 'image':
        artifactPrompt = `Descreva detalhadamente uma imagem sobre: "${prompt}".
        A descrição será usada para gerar uma imagem.`;
        break;
      default:
        artifactPrompt = `Crie um conteúdo sobre: "${prompt}".`;
    }
    
    // Criar stream de resposta
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: [
        { role: 'system', content: 'Você é um assistente especializado em criar artefatos de alta qualidade.' },
        { role: 'user', content: artifactPrompt }
      ],
      stream: true,
    });
    
    // Registrar artefato no banco de dados
    if (userId) {
      await createArtifact({
        userId,
        chatId,
        type,
        title: prompt,
        content: initialContent || JSON.stringify({}),
      });
    }
    
    // Retornar resposta em streaming
    return new StreamingTextResponse(response.body);
  } catch (error) {
    console.error('Erro na API de artefatos:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação de criação de artefato' },
      { status: 500 }
    );
  }
}

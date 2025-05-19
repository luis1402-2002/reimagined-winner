import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, Message } from 'ai';
import { createSearch } from '@/lib/db/actions';

export async function POST(req: NextRequest) {
  try {
    const { messages, userId, query } = await req.json();
    
    // Registrar pesquisa no banco de dados
    if (userId && query) {
      await createSearch({
        userId,
        query,
        results: JSON.stringify([]),
        createdAt: new Date(),
      });
    }
    
    // Construir prompt para pesquisa
    const searchPrompt = `
      Você é um assistente de pesquisa especializado. 
      O usuário está buscando informações sobre: "${query || messages[messages.length - 1].content}".
      Por favor, forneça uma resposta detalhada com base nas informações disponíveis.
      Inclua fontes e referências sempre que possível.
    `;
    
    // Adicionar prompt de pesquisa às mensagens
    const searchMessages = [
      ...messages,
      { role: 'system', content: searchPrompt }
    ];
    
    // Criar stream de resposta
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: searchMessages.map((message: Message) => ({
        role: message.role,
        content: message.content,
      })),
      stream: true,
    });
    
    // Retornar resposta em streaming
    return new StreamingTextResponse(response.body);
  } catch (error) {
    console.error('Erro na API de pesquisa:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação de pesquisa' },
      { status: 500 }
    );
  }
}

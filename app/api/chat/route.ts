import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, Message } from 'ai';
import { getModel } from '@/lib/ai/registry';

export async function POST(req: NextRequest) {
  try {
    const { messages, model = 'openai:gpt-4.1' } = await req.json();
    
    // Obter o modelo apropriado
    const selectedModel = getModel(model);
    
    // Criar stream de resposta
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: messages.map((message: Message) => ({
        role: message.role,
        content: message.content,
      })),
      stream: true,
    });
    
    // Retornar resposta em streaming
    return new StreamingTextResponse(response.body);
  } catch (error) {
    console.error('Erro na API de chat:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação de chat' },
      { status: 500 }
    );
  }
}

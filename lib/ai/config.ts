import { createOpenAI, openai } from '@ai-sdk/openai';

// Configuração padrão da OpenAI
export const openaiConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  // Outras configurações conforme necessário
};

// Instância padrão da OpenAI
export const defaultOpenAI = openai;

// Função para criar instância customizada
export const createCustomOpenAI = (config = {}) => {
  return createOpenAI({
    ...openaiConfig,
    ...config
  });
};

// Mapeamento de modelos XAI para OpenAI
export const modelMapping = {
  'grok-2-vision-1212': 'gpt-4.1',
  'grok-3-mini-beta': 'gpt-4.1-mini',
  'grok-2-1212': 'gpt-4.1',
  'grok-2-image': 'dall-e-3',
};

// Função para obter modelo OpenAI equivalente
export const getOpenAIModel = (xaiModel: string) => {
  return modelMapping[xaiModel] || 'gpt-4.1';
};

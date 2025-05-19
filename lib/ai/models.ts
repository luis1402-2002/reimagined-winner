export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'Modelo principal para chat e pesquisa',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Usa raciocínio avançado',
  },
];

// Modelos de teste para ambiente de desenvolvimento
export const chatModel = {
  invoke: async ({ messages }) => {
    return { content: 'Resposta simulada para chat' };
  }
};

export const reasoningModel = {
  invoke: async ({ messages }) => {
    return { content: '<think>Raciocínio simulado</think>Resposta simulada com raciocínio' };
  }
};

export const titleModel = {
  invoke: async ({ messages }) => {
    return { content: 'Título simulado' };
  }
};

export const artifactModel = {
  invoke: async ({ messages }) => {
    return { content: 'Conteúdo de artefato simulado' };
  }
};

export const translations = {
  common: {
    search: 'Pesquisar',
    create: 'Criar',
    save: 'Salvar',
    cancel: 'Cancelar',
    loading: 'Carregando...',
    error: 'Erro',
    success: 'Sucesso',
    send: 'Enviar',
    delete: 'Excluir',
    edit: 'Editar',
    share: 'Compartilhar',
  },
  auth: {
    login: 'Entrar',
    logout: 'Sair',
    email: 'Email',
    password: 'Senha',
    forgotPassword: 'Esqueceu a senha?',
    signUp: 'Cadastrar',
    loginSuccess: 'Login realizado com sucesso',
    loginError: 'Erro ao fazer login',
    accessDenied: 'Acesso negado',
    welcomeBack: 'Bem-vindo de volta',
  },
  chat: {
    newChat: 'Nova conversa',
    placeholder: 'Digite sua mensagem...',
    send: 'Enviar',
    thinking: 'Pensando...',
    noMessages: 'Nenhuma mensagem ainda',
    history: 'Histórico de conversas',
    deleteChat: 'Excluir conversa',
    clearHistory: 'Limpar histórico',
    chat: 'Chat',
  },
  search: {
    placeholder: 'Pesquisar na web...',
    noResults: 'Nenhum resultado encontrado',
    searching: 'Pesquisando...',
    webResults: 'Resultados da web',
    imageResults: 'Resultados de imagens',
    videoResults: 'Resultados de vídeos',
    search: 'Pesquisa',
    sources: 'Fontes',
    relatedQuestions: 'Perguntas relacionadas',
  },
  artifacts: {
    document: 'Documento',
    spreadsheet: 'Planilha',
    code: 'Código',
    image: 'Imagem',
    create: 'Criar artefato',
    edit: 'Editar artefato',
    delete: 'Excluir artefato',
    share: 'Compartilhar artefato',
    preview: 'Visualizar',
    download: 'Baixar',
    untitled: 'Sem título',
  },
  models: {
    chatModel: 'Modelo de chat',
    reasoningModel: 'Modelo de raciocínio',
    selectModel: 'Selecionar modelo',
  },
  welcome: {
    title: 'Bem-vindo ao SolutoMIND',
    subtitle: 'Sua plataforma de pesquisa e criação de artefatos com IA',
    description: 'Exclusivo para colaboradores do Grupo Soluto',
    getStarted: 'Começar',
  }
};

// Hook para usar traduções
export function useTranslation() {
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value: any = translations;
      for (const k of keys) {
        if (value[k] === undefined) return key;
        value = value[k];
      }
      return value;
    }
  };
}

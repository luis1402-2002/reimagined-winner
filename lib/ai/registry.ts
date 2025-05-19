import { createProviderRegistry, extractReasoningMiddleware, wrapLanguageModel } from 'ai';
import { openai } from '@ai-sdk/openai';
import { defaultOpenAI, createCustomOpenAI } from './config';

export const registry = createProviderRegistry({
  openai,
  // Outros provedores podem ser mantidos para flexibilidade futura
});

export function getModel(model: string) {
  const [provider, ...modelNameParts] = model.split(':') ?? [];
  const modelName = modelNameParts.join(':');
  
  // Padronizar para OpenAI se não especificado
  if (!provider || provider === 'xai') {
    return openai('gpt-4.1');
  }
  
  return registry.languageModel(
    model as Parameters<typeof registry.languageModel>[0]
  );
}

export function isProviderEnabled(providerId: string): boolean {
  switch (providerId) {
    case 'openai':
      return !!process.env.OPENAI_API_KEY;
    // Outros provedores podem ser mantidos para flexibilidade
    default:
      return false;
  }
}

export function getToolCallModel(model?: string) {
  // Padronizar para OpenAI
  return getModel('openai:gpt-4.1');
}

export function isReasoningModel(model: string): boolean {
  if (typeof model !== 'string') {
    return false;
  }
  return model.includes('gpt-4.1');
}

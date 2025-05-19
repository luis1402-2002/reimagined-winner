import { db } from '@/lib/db';
import { users, chats, artifacts, searches } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// Funções para usuários
export async function getUsers() {
  return await db.select().from(users);
}

export async function getUserById(id: string) {
  return await db.select().from(users).where(eq(users.id, id));
}

export async function getUserByEmail(email: string) {
  return await db.select().from(users).where(eq(users.email, email));
}

// Funções para chats
export async function getChats(userId: string) {
  return await db.select().from(chats).where(eq(chats.userId, userId));
}

export async function getChatById(id: string) {
  return await db.select().from(chats).where(eq(chats.id, id));
}

export async function createChat(userId: string, title: string) {
  return await db.insert(chats).values({
    userId,
    title,
    messages: JSON.stringify([]),
    createdAt: new Date(),
  });
}

export async function updateChat(id: string, data: any) {
  return await db.update(chats).set(data).where(eq(chats.id, id));
}

export async function deleteChat(id: string) {
  return await db.delete(chats).where(eq(chats.id, id));
}

// Funções para artefatos
export async function getArtifacts(userId: string) {
  return await db.select().from(artifacts).where(eq(artifacts.userId, userId));
}

export async function getArtifactById(id: string) {
  return await db.select().from(artifacts).where(eq(artifacts.id, id));
}

export async function createArtifact(data: any) {
  return await db.insert(artifacts).values({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export async function updateArtifact(id: string, data: any) {
  return await db.update(artifacts).set({
    ...data,
    updatedAt: new Date(),
  }).where(eq(artifacts.id, id));
}

export async function deleteArtifact(id: string) {
  return await db.delete(artifacts).where(eq(artifacts.id, id));
}

// Funções para pesquisas
export async function getSearches(userId: string) {
  return await db.select().from(searches).where(eq(searches.userId, userId));
}

export async function createSearch(data: any) {
  return await db.insert(searches).values({
    ...data,
    createdAt: new Date(),
  });
}

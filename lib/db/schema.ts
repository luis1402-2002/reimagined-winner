import { pgTable, serial, text, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const chats = pgTable('chats', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  title: text('title'),
  createdAt: timestamp('created_at').defaultNow(),
  messages: jsonb('messages'),
  shared: boolean('shared').default(false),
});

export const artifacts = pgTable('artifacts', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  chatId: text('chat_id'),
  type: text('type').notNull(),
  title: text('title'),
  content: jsonb('content'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  shared: boolean('shared').default(false),
});

export const searches = pgTable('searches', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  chatId: text('chat_id'),
  query: text('query').notNull(),
  results: jsonb('results'),
  createdAt: timestamp('created_at').defaultNow(),
});

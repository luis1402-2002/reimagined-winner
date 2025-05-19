import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const db = drizzle(sql);

export async function initializeDb() {
  try {
    console.log('Initializing database...');
    
    // Verificar se as tabelas existem
    const tablesExist = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      );
    `;
    
    if (!tablesExist.rows[0].exists) {
      console.log('Creating tables...');
      
      // Criar tabela de usuários
      await sql`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name TEXT,
          email TEXT NOT NULL UNIQUE,
          image TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;
      
      // Criar tabela de chats
      await sql`
        CREATE TABLE IF NOT EXISTS chats (
          id SERIAL PRIMARY KEY,
          user_id TEXT NOT NULL,
          title TEXT,
          messages JSONB,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          shared BOOLEAN DEFAULT FALSE
        );
      `;
      
      // Criar tabela de artefatos
      await sql`
        CREATE TABLE IF NOT EXISTS artifacts (
          id SERIAL PRIMARY KEY,
          user_id TEXT NOT NULL,
          chat_id TEXT,
          type TEXT NOT NULL,
          title TEXT,
          content JSONB,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          shared BOOLEAN DEFAULT FALSE
        );
      `;
      
      // Criar tabela de pesquisas
      await sql`
        CREATE TABLE IF NOT EXISTS searches (
          id SERIAL PRIMARY KEY,
          user_id TEXT NOT NULL,
          chat_id TEXT,
          query TEXT NOT NULL,
          results JSONB,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;
      
      console.log('Tables created successfully');
    } else {
      console.log('Tables already exist');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error initializing database:', error);
    return { success: false, error };
  }
}

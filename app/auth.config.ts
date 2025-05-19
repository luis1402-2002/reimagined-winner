import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      
      return true;
    },
    async signIn({ user, account, profile }) {
      // Verificar domínio de email
      const email = user.email;
      if (!email) return false;
      
      // Permitir apenas emails do domínio gruposoluto.com.br
      return email.endsWith('@gruposoluto.com.br');
    },
  },
  providers: [], // Configurado em auth.ts
};

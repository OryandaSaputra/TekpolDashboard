import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import type { Role } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        loginType: { label: "Login Type", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        guestName: { label: "Guest Name", type: "text" },
      },
      async authorize(credentials) {
        const loginType = (credentials?.loginType as string | undefined) ?? "staff";

        // Mode guest (tanpa password)
        if (loginType === "guest" && credentials?.guestName) {
          return {
            id: "guest-" + Date.now().toString(),
            name: String(credentials.guestName),
          };
        }

        // Mode staff (email + password)
        const email = String(credentials?.email ?? "");
        const password = String(credentials?.password ?? "");

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.passwordHash) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email ?? undefined,
        };
      },
    }),
  ],
  callbacks: {
    // Simpan role & isPic di token
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
        token.role = dbUser?.role as Role | undefined;
        token.isPic = Boolean(dbUser?.isPic);
      }
      return token as JWT;
    },
    // Pindahkan ke session.user.*
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.role = token.role as Role | undefined;
        session.user.isPic = Boolean(token.isPic);
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

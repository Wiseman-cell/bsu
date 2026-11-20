import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "campusconnect-student",
      name: "CampusConnect Student Portal",
      credentials: {
        admissionNumber: { label: "Admission Number", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.admissionNumber || !credentials?.password) return null;

        const profile = await prisma.studentProfile.findUnique({
          where: { admissionNumber: credentials.admissionNumber },
          include: { user: true },
        });

        if (!profile || !profile.user) return null;

        const valid = await bcrypt.compare(credentials.password, profile.user.passwordHash);
        if (!valid) return null;

        return {
          id: profile.user.id,
          name: profile.fullName,
          email: profile.user.email,
          role: profile.user.role.toLowerCase(),
        };
      },
    }),
    CredentialsProvider({
      id: "campusconnect-staff",
      name: "CampusConnect Staff Portal",
      credentials: {
        staffId: { label: "Staff ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.staffId || !credentials?.password) return null;

        const profile = await prisma.staffProfile.findUnique({
          where: { staffId: credentials.staffId },
          include: { user: true },
        });

        if (!profile || !profile.user) return null;

        const valid = await bcrypt.compare(credentials.password, profile.user.passwordHash);
        if (!valid) return null;

        return {
          id: profile.user.id,
          name: profile.fullName,
          email: profile.user.email,
          role: profile.user.role.toLowerCase(),
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/portal/student",
    error: "/portal/student",
  },
};

const handler = NextAuth(authOptions);
export { handler };

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    include: { studentProfile: true, staffProfile: true },
  });
}

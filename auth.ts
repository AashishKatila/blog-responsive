import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const users = [{
  id:1, username: process.env.NEXT_USER1_USERNAME,password: process.env.NEXT_USER1_PASSWORD
},
{
  id:2, username: process.env.NEXT_USER2_USERNAME,password: process.env.NEXT_USER2_PASSWORD
},
{
  id:3, username: process.env.NEXT_USER3_USERNAME,password: process.env.NEXT_USER3_PASSWORD
},]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find(
          (user) =>
            user.username === credentials?.username &&
            user.password === credentials?.password
        );
 
        if (user) {
          return { id: user.id, name: user.username } as any;
        }

        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, 
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string ;
      return session;
    },
  },
})
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
  session: { 
    // jwt: true,
    strategy: "jwt" 
  },
  // pages: {
  //   signIn: '/',
  // },
  // callbacks: {
  // },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, // Make sure to add conditional logic so that the name of the cookie does not include `__Secure-` on localhost
      options: { // All of these options must be specified, even if you're not changing them
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
        domain: process.env.DOMAIN // Ideally, you should use an environment variable for this
      }
    },
  },
  callbacks: {
    // async jwt(token) {
    //   console.log('JWT Token:', token);
    //   return token;
    // },
    // async jwt({ token, user }) {
    //   console.log('JWT Token:', token.token.token.token);
    //   return token;
    // },
    // async jwt( token, user ) {
    //   console.log('JWT Token:', token);
    //   return token;
    // },
    // Other callbacks...
  },
}

export default NextAuth(authOptions)

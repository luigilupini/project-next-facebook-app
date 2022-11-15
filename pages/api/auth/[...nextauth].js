/* # Add API route:
https://next-auth.js.org/getting-started/example
To add NextAuth.js to a project create a file called `[...nextauth].js` in pages
`/api/auth` folder. This contains a dynamic route handler for NextAuth.js, which
will also contain all of your global NextAuth.js configurations. All requests to
`/api/auth/*` (signIn, callback, signOut, etc.) is handled by NextAuth.js. */
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here:
  ],
};
export default NextAuth(authOptions);

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getToken } from "next-auth/jwt";
import { connectToDB, dbQuery } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  session: { jwr: true },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        //check if credentials are valid (username and password). query DB
        //create db client connection
        const client = await connectToDB();
        //create db query object
        const queryObject = {
          query: "SELECT * FROM users WHERE username=?",
          values: [credentials.username],
        };
        const results = await dbQuery(client, queryObject);

        //check if db returns any rows for given username. if not throw error user not found
        const user = results[0] || undefined;

        if (!user) {
          throw new Error("user not found.");
        }

        //check if passwords match if not throw error
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("wrong username or password");
        }

        //if all checks pass return user info. here can be returned some fixed object (email,name and image) since username is primary id return it under name.
        return {
          email: user.email,
          name: user.username,
        };
      },
    }),
  ],
});

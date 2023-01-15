import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import model from "../../../db/models";
import { compare } from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      async authorize(credentials, _) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          throw new Error("Missing username or password");
        }
        const user = await model.user.findOne({
          where: {
            email,
          },
        });
        console.log("user", user)
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.dataValues?.password))) {
          throw new Error("Invalid username or password");
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
});
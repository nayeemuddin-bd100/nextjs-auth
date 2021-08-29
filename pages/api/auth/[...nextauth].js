import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
   /*  Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }), */
    /* Providers.Email({
      server: {
        host: "",
        port: "",
        auth: {
          user: "",
          pass: "",
        },
      },
      form: "",
    }), */
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
// export default (req, res) => NextAuth(req, res, options);
export default NextAuth(options)


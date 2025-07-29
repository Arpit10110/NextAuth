import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
        clientId:process.env.Google_ClientID,
        clientSecret:process.env.Google_Secret
    }),
    CredentialProvider({
        name:"Credential",
        credentials:{
            email:{
                label:"Email",
                type:"email"
            },
            password:{
                label:"Password",
                type:"password",
            }
        }
    })

  ],
})
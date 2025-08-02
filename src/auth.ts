import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { UserModel } from "./model/userModel";
import bcrypt from "bcryptjs";
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
        },
    authorize: async (credential)=>{
       const email = credential.email as string | undefined ;
       const password = credential.password as string | undefined;
        if(!email || !password){
            throw new CredentialsSignin("Please enter your email and password");
        }else{

            const user = await UserModel.findOne({email});
            if(!user){
                throw new CredentialsSignin("User not found...Please register");
            }
            if(!user.password){
                // throw the erroe if the password is not set means user has done the signup using the google or ther providers
                throw new CredentialsSignin("Please Login using google or ther providers");
            }
            const isPasswordMatch = await bcrypt.compare(password,user.password);

            if(!isPasswordMatch){
                throw new CredentialsSignin("Incorrect password");
            }
            return {email:user.email,name:user.name,userid:user._id};
        }
    }
    })
    
  ],
  
})
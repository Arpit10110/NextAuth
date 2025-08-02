import { NextResponse } from "next/server";
import { signIn } from "@/auth";

export const POST = async (req: Request) => {
    const res = await req.json();
    const { email, password } = res;
    await signIn("credentials",{
        email,
        password,
        redirectTo:"/"
    })
    return NextResponse.json({
        success:true,
        message:"User logged in successfully"
    })
}
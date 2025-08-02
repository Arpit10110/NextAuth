import { NextResponse } from "next/server";
import { UserModel } from "@/model/userModel"
import bcrypt from "bcryptjs";
import { connectdb } from "@/db/dbconnect";
export const POST = async(req:Request)=>{
    try {
        const res = await req.json(); 
        const { name, email, password } = res;
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectdb();
        await UserModel.create({
            name,
            email,
            password:hashedPassword
        })
        return NextResponse.json({
            success:true,
            message:"User registered successfully",
        })

    } catch (error:any) {
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
}
import { NextResponse } from "next/server"; 
export const GET = async()=>{
    try {
        return NextResponse.json({
            message:"Hello World",
            success:true
        })
    } catch (error:any) {
        return NextResponse.json({
            message:error.message,
            success:false
        })
    }
}
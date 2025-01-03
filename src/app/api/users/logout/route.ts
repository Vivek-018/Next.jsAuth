import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message:"logout successful",
            success:true
        })
         
        response.cookies.set("token","",{httpOnly:true, expires:new Date(0)});
        
        return response;

    } catch (error: unknown) {
        // return NextResponse.json({
        //     error:error.message
        // },{status:500})

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // If it's not an instance of Error, return a generic error message
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel";
import { NextRequest , NextResponse } from "next/server"; 
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest){
    try {
        
          const reqBody = await request.json();
          const {email,password} = reqBody;
          console.log(reqBody);

          // check if user exists
         const user = await User.findOne({email})

         if(!user){
            return NextResponse.json({error:"User does not exists"},{status:400})
         }

         console.log("user exists", user);
      
         // check if password is correct
         const validPassword = await bcryptjs.compare(password,user.password);

         if(!validPassword){
            return NextResponse.json({
                error:"Invalid password"
            },{status:400})
         }

         // create token data
         const tokendata = {
            id:user._id,
            username:user.username,
            email:user.email
         }

         // create token
        const token = await jwt.sign(tokendata,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response = NextResponse.json({
            message:"Login successful",
            success:true,
        })
       response.cookies.set("token",token,{
        httpOnly:true
       })

       return response;

    } catch (error:any) {
        // return NextResponse.json({error:error.message},{status:500})
        // Check if the error is an instance of Error before accessing properties
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // If it's not an instance of Error, return a generic error message
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });

    }
}



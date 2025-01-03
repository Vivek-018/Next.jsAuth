// // import {connect} from '@/dbConfig/dbConfig';
// // import { NextRequest,NextResponse } from 'next/server';
// // import User from "@/models/userModel";

// // connect()
// // export async function POST(request:NextRequest){
// //     try {
        
// //       const reqBody = await request.json();
// //       const {token} = reqBody
// //       console.log(token);

// //      const user = await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}});

// //      if(!user){
// //         return NextResponse.json({error:"Invalid token"},{status:400})
// //      }
// //      console.log(user);
// //      user.isVerified = true;
// //      user.verifyToken = undefined;
// //      user.verifyTokenExpiry = undefined
// //      await user.save();

// //      return NextResponse.json({message:"Email verified succesfully",success:true})
         
// //     } catch (error:any) {
// //         return NextResponse.json({error:error.message},{status:500})
// //     }



// // }



// import {connect} from "@/dbConfig/dbConfig";
// import { NextRequest, NextResponse } from "next/server";
// import User from "@/models/userModel";



// connect()


// export async function POST(request: NextRequest){

//     try {
//         const reqBody = await request.json()
//         const {token} = reqBody
//         console.log(token);

//         const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});

//         if (!user) {
//             return NextResponse.json({error: "Invalid token"}, {status: 400})
//         }
//         console.log(user);

//         user.isVerified = true;
//         user.verifyToken = undefined;
//         user.verifyTokenExpiry = undefined;
//         await user.save();
        
//         return NextResponse.json({
//             message: "Email verified successfully",
//             success: true
//         })


//     } catch (error:any) {
//         return NextResponse.json({error: error.message}, {status: 500})
//     }

// }


import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        
        if (!reqBody || !reqBody.token) {
            return NextResponse.json({ error: "Token is required" }, { status: 400 });
        }

        const { token } = reqBody;
        console.log("Received token:", token);

        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }

        console.log("User found:", user);

        // Update user verification status
        user.isVerified = true; // Fix typo here
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message: "Email verified successfully",
            success: true,
        });
    } catch (error: unknown) {
        // console.error("Error during email verification:", error);
        // return NextResponse.json({ error: error.message }, { status: 500 });
        if (error instanceof Error) {
            console.error("Error during email verification:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
         }
      
        // If it's not an instance of Error, return a generic error message
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
      
    }
}

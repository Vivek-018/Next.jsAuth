// "use client";
// import axios from "axios";
// import Link from 'next/link';
// import {toast} from "react-hot-toast";
// import {useRouter} from "next/navigation";
// import { useState } from "react";

// export default function ProfilePage() {
//      const router = useRouter()
//      const [data , setData] = useState("nothing")

//       const logout = async()=>{
//              try {
//               await axios.get('/api/users/logout') 
//               toast.success('Logout succesful')
//               router.push("/login");
//              } catch (error:any) {
//                 console.log(error.message);
//                 toast.error(error.message);
//              }
//       }

//       const getUserDetails = async ()=>{
//        const res = await axios.get('/api/users/me')

//        console.log(res.data);
//        setData(res.data.data._id);


//       }

//         return (
//             <div className="flex flex-col items-center justify-center min-h-screen py-2">
//                 <h1>Profile</h1>
//                 <hr />
//                 <p>Profile page</p>
//                 <h2 className="p-3 rounded bg-green-500">{data==="nothing" ? "Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
          
//             <button
//             onClick={logout} 
//             className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                  Logout
//             </button>
//             <button
//             onClick={getUserDetails} 
//             className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                  Get User
//             </button>
//             </div>
//         );
// }


// ui code by the ai 


"use client";

import axios from "axios";
import Link from 'next/link';
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")

    const logout = async() => {
        try {
            await axios.get('/api/users/logout') 
            toast.success('Logout succesful')
            router.push("/login");
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl font-bold text-blue-600 mb-2">Profile Dashboard</h1>
                                    <div className="h-1 w-24 bg-blue-500 mx-auto rounded"></div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                                    <h2 className="text-lg font-medium text-gray-900 mb-2">User ID</h2>
                                    <div className="p-3 rounded-lg bg-white border border-gray-200">
                                        {data === "nothing" ? (
                                            <p className="text-gray-500 text-sm">Click "Get User" to fetch your ID</p>
                                        ) : (
                                            <Link 
                                                href={`/profile/${data}`}
                                                className="text-blue-600 hover:text-blue-800 break-all"
                                            >
                                                {data}
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6">
                                    <button
                                        onClick={getUserDetails}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Get User Details
                                    </button>
                                    
                                    <button
                                        onClick={logout}
                                        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
"use client";

import axios from "axios";  
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react"; 

export default function VerifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    // Use useCallback to memoize the function
    const verifyUserEmail = useCallback(async () => {
        try {
            await axios.post('/api/users/verifyemail', { token });
            setVerified(true);
        } catch (error: unknown) {  
            if (axios.isAxiosError(error)) { 
                setError(true);
                console.log(error.response?.data);  
            } else {
                setError(true);
                console.log("An unknown error occurred");
            }
        }
    }, [token]); 

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();  // Call verifyUserEmail only when token is set
        }
    }, [token, verifyUserEmail]);  // Add verifyUserEmail to the dependency array

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                </div>
            )}
        </div>
    );
}

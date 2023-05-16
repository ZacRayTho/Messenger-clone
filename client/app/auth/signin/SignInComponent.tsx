"use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";

function SignInComponent() {
  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          signIn("facebook", {
            callbackUrl:
              "https://3000-zacraytho-messengerclon-jnnmibw4iff.ws-us97.gitpod.io/",
          })
        }
      >
        Sign in with Facebook
      </button>
    </div>
  );
}

export default SignInComponent;

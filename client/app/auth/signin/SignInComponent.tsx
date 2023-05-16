'use client'
import React from "react";
import { signIn } from "next-auth/react"

function SignInComponent() {
  return (
    <div>
      <button onClick={() => signIn(process.env.FACEBOOK_CLIENT_ID, {
        callbackUrl: "https://3000-zacraytho-messengerclon-jnnmibw4iff.ws-us97.gitpod.io"
      })}>Sign in with Facebook</button>
    </div>
  );
}

export default SignInComponent;

'use client'
import React from "react";
import { signIn } from "next-auth/react"

function SignInComponent() {
  return (
    <div>
      <button onClick={() => signIn(process.env.FACEBOOK_CLIENT_ID)}>Sign in with Facebook</button>
    </div>
  );
}

export default SignInComponent;

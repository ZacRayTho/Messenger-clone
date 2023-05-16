import Image from "next/image";
import React, { useEffect, useState } from "react";
import SignInComponent from "./SignInComponent";
import { getProviders } from "next-auth/react";

async function SignInPage() {
  // const providers = await getProviders();
  // console.log(providers);

  return (
    <div>
      <div className="grid justify-center">
        <Image
          className="rounded-full mx-2 object-cover"
          width={700}
          height={700}
          src="https://links.papareact.com/161"
          alt="Profile Picture"
        />
      </div>

      <SignInComponent />
    </div>
  );
}

export default SignInPage;

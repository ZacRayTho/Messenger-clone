import Image from "next/image";
import React, { useEffect, useState } from "react";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  return (
    <div>
      <div>
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

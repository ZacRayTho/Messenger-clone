'use client'
import { getProviders } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    async function fetchProviders() {
      const providersData = await getProviders();
      // setProviders(providersData);
    }
    fetchProviders();
  }, []);

  return (
    <div>
      <div>
        {typeof window !== 'undefined' && (
          <Image
            className="rounded-full mx-2 object-cover"
            width={700}
            height={700}
            src="https://links.papareact.com/161"
            alt="Profile Picture"
          />
        )}
      </div>

      {providers && <SignInComponent providers={providers} />}
    </div>
  );
}

export default SignInPage;

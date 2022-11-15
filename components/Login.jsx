import Image from "next/image";
import logo from "../public/facebook-logo.png";
import { signIn } from "next-auth/client";

import { LoginIcon } from "@heroicons/react/solid";

export default function Logon() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col rounded-lg py-10 shadow-lg">
        <Image
          src={logo}
          height={400}
          width={400}
          style={{ objectFit: "contain" }}
          alt="logo"
        />

        <button
          onClick={signIn}
          className="group m-4 mx-auto flex w-fit gap-2 rounded-lg bg-gray-100 p-4 font-medium text-gray-700 hover:bg-gray-200"
        >
          <LoginIcon className="text-gray-600-500 h-6 w-6 group-hover:text-blue-500" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}

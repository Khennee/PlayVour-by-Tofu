"use client"; 

import React from "react";
import { useRouter } from "next/navigation";
import GoogleBtn from "../components/GoogleBtn";

const LogInPage: React.FC = () => {
  const navigate = useRouter();

  const handleSignUpButton = () => {
    navigate.push("/signup");
  };

  const handleSubmitButton = () => { 
    navigate.push("/home")
  }

  return (
    <div className="flex flex-col items-center bg-bgcolor min-h-screen p-8 carter-one-font">

      <div className="flex mb-4 mt-12">
        <h1 className="text-titlecolor text-7xl font-bold mb-4"
        >
          Play
        </h1>

        <h1 className="text-white text-7xl font-bold mb-4"
        >
          Vour
        </h1>
      </div>

      <div className="w-full max-w-md mt-4">
        <h1 className=" text-titlecolor text-4xl font-bold mb-2"
        >
          Log In
        </h1>

        <div className="flex items-center mb-2">
          <h2 className="text-lg mr-2"
          >
            Don&apos;t have an account? 
          </h2>
          <button 
          className="text-titlecolor text-lg" 
          onClick={ handleSignUpButton }
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <input 
            className="w-full p-3 border border-gray-300 rounded text-bgcolor" 
            type="text" 
            placeholder="Username" 
            />
          </div>

          <div>
            <input 
            className="w-full p-3 border border-gray-300 rounded text-bgcolor" 
            type="password" 
            placeholder="Password" 
            />
          </div>
        </form>

      </div>

      <button 
    className="mt-12 bg-titlecolor bg-opacity-100 pl-10 pr-10 p-4 rounded text-bgcolor"
      onClick={ handleSubmitButton }
      >
        Confirm
      </button>

      <h1 className="mt-4 opacity-40 text-lg"
      >
        Or
      </h1>

      <h1 className="mt-4 opacity-40 text-lg"
      >
        - - - - - - Others - - - - - -
        </h1>

      <div className="mt-8">
        <GoogleBtn />
      </div>

    </div>
  );
};

export default LogInPage;

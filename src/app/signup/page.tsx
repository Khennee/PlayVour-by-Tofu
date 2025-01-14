"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import GoogleBtn from "../components/GoogleBtn";

const SignUpPage: React.FC = () => {
    const navigate = useRouter();
    const [selectedRole, setSelectedRole] = useState<"user" | "merchant" | null>(null);

    const handleLogInButton = () => {
        navigate.push("/login");
    };

    const handleCheckboxChange = (role: "user" | "merchant") => {
        setSelectedRole(selectedRole === role ? null : role);
    };

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
                    Sign Up
                </h1>

                <div className="flex items-center mb-2">
                    <h2 className="text-lg mr-2"
                    >
                        Already have an account?
                    </h2>
                    <button 
                    className="text-titlecolor text-lg" 
                    onClick={handleLogInButton}
                    >
                        Log In
                    </button>
                </div>

                <form className="space-y-4">
                    <div>
                        <input className="w-full p-3 border border-gray-300 rounded text-bgcolor" 
                        type="text" 
                        placeholder="Username" 
                        />
                    </div>

                    <div>
                        <input 
                        className="w-full p-3 border border-gray-300 rounded text-bgcolor" 
                        type="password" 
                        placeholder="Password" />
                    </div>

                    <div>
                        <input
                            className="w-full p-3 border border-gray-300 rounded text-bgcolor"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-16 text-lg">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="user-checkbox"
                                checked={selectedRole === "user"}
                                onChange={() => handleCheckboxChange("user")}
                                className="peer opacity-0 w-6 h-6 border-2 border-gray-300 rounded-sm focus:ring-0"
                            />
                            <label
                                htmlFor="user-checkbox"
                                className="w-6 h-6 peer-checked:bg-titlecolor peer-checked:border-titlecolor cursor-pointer border-2 border-gray-300 rounded-sm"
                            ></label>
                            <span>
                                User
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="merchant-checkbox"
                                checked={selectedRole === "merchant"}
                                onChange={() => handleCheckboxChange("merchant")}
                                className="peer opacity-0 w-6 h-6 border-2 border-gray-300 rounded-sm focus:ring-0"
                            />
                            <label
                                htmlFor="merchant-checkbox"
                                className="w-6 h-6 peer-checked:bg-titlecolor peer-checked:border-titlecolor cursor-pointer border-2 border-gray-300 rounded-sm"
                            ></label>
                            <span>
                                Merchant
                            </span>
                        </div>
                    </div>
                </form>
            </div>

            <button 
            className="mt-12 bg-titlecolor bg-opacity-100 pl-10 pr-10 p-4 rounded text-bgcolor"
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

export default SignUpPage;

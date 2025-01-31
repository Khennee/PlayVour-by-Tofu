"use client"; 

import { useRouter } from "next/navigation";

const AboutButton = () => { 
    const navigate = useRouter();

    const handleAboutButton = () => { 
        navigate.push("/about")
      }

    return( 
        <div className="mt-8 underline cursor-pointer group">
            <h1 className="opacity-50 group-hover:opacity-100 group-hover:text-white"
            onClick={handleAboutButton}
            >
                About
            </h1>
        </div>
    )
}

export default AboutButton;
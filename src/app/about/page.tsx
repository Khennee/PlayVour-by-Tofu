"use client"; 

import { useRouter } from "next/navigation";

const AboutPage = () => {
    const navigate = useRouter();
    
    const handleBackButton = () => { 
        navigate.push("/login");
    }

    const teamMembers = [
        { 
            name: "Lorem Ipsum", 
            title: "CEO", 
            role: "Full-stack Developer" 
        },
        { 
            name: "Lorem Ipsum", 
            title: "COO", 
            role: "Full-stack Developer" 
        },
        { 
            name: "Lorem Ipsum", 
            title: "CTO", 
            role: "Full-stack Developer - Designer" 
        },
        { 
            name: "Lorem Ipsum", 
            title: "CIO", 
            role: "Full-stack Developer" 
        },
        { 
            name: "Lorem Ipsum", 
            title: "CMO", 
            role: "Marketing" 
        },
        { 
            name: "Lorem Ipsum", 
            title: "CAO", 
            role: "Front-end Developer - Designer" 
        },
    ];

    return (
        <div className="flex flex-col items-center mt-12">

            <div className="text-2xl text-titlecolor">
                <h1>About Us!</h1>
            </div>
                
            <div className="self-start mt-4">
                <h1 
                    className="cursor-pointer px-6" 
                    onClick={handleBackButton}
                >
                    <img 
                    className="w-6 h-6"
                    src="/images/back.png" 
                    alt="" 
                    />
                </h1>
            </div>

            <div className="mt-4 px-6">
                {teamMembers.map((member, index) => (
                    <div 
                    key={index} 
                    className="mt-4 text-center"
                    >
                        <h1 className="text-xl font-semibold">{member.name}</h1>
                        <h2 className="text-lg text-titlecolor">{member.title}</h2>
                        <h3 className="text-md">{member.role}</h3>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <h1 className="text-xl text-titlecolor"
                >
                    Contact Us!
                </h1>
                <div className="mt-4 text-left px-6">
                    <h2>Instagram: loremipsum@gmail.com</h2>
                    <h2>Facebook: loremipsum@gmail.com</h2>
                    <h2>Youtube: loremipsum@gmail.com</h2>
                    <h2>LinkedIn: loremipsum@gmail.com</h2>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;

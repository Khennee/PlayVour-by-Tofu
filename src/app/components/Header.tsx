import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

const Header = () => { 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null); 
    const navigate = useRouter();

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleVoucherButton = () => { 
        navigate.push("/vouchers")
    }

    const handleHomeButton = () => { 
        navigate.push("/home")
    }

    const handleLogOutButton = () => { 
        navigate.push("/login")
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="mb-4 mt-4 w-full px-4">
                <div className="flex flex-row items-center justify-start w-full space-x-4">
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg shadow-sm flex-1"
                        >
                            <Image
                                src={`/images/photo1.png`}
                                alt={`Image ${index + 1}`}
                                width={300}
                                height={300}
                                className="rounded-md w-full h-auto"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center justify-between w-full px-4 relative">
                <h1 className="text-left">
                    <img
                        src="/images/voucher.png"
                        alt=""
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onClick={ handleVoucherButton }
                    />
                </h1>

                <div 
                    className="flex items-center text-3xl cursor-pointer"
                    onClick={ handleHomeButton}
                    >
                    <h1 className="text-titlecolor">
                        Play
                    </h1>
                    <h1 className="text-white">
                        Vour
                    </h1>
                </div>

                <h1 className="text-right relative">
                    <img
                        src="/images/profile.png"
                        alt=""
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onClick={toggleModal}
                    />

                    {isModalOpen && (
                        <div
                            ref={modalRef} 
                            className="absolute right-0 mt-4 bg-bgcolor rounded-lg p-4 shadow-lg w-28 sm:w-28 md:w-28"
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <ul className="space-y-4 text-lg text-titlecolor">
                                <li className="cursor-pointer hover:text-white">
                                    Account
                                </li>

                                <li className="cursor-pointer hover:text-white">
                                    Settings
                                </li>
                                
                                <li 
                                    className="cursor-pointer hover:text-red-500"
                                    onClick={ handleLogOutButton }
                                    >
                                    Log Out
                                </li>
                            </ul>
                        </div>
                    )}
                </h1>
            </div>
        </div>
    );
}

export default Header;

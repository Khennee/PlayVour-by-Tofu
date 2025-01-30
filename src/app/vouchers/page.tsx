"use client";

import Header from "../components/Header";
import { useRouter } from "next/navigation";

const VoucherInventory = () => { 
    const navigate = useRouter();

    const handleBackButton = () => { 
        navigate.push("/home")
    }
    return( 
        <div className="flex flex-col items-center bg-bgcolor min-h-screen">
           <Header/>

           <div className="flex flex-row items-center justify-between w-full px-10 mt-4">
                <h1 className="text-left">
                    <img 
                    src="/images/back.png" 
                    alt="" 
                    className="w-6 h-6 rounded-full cursor-pointer"
                    onClick={ handleBackButton }
                    />
                </h1>

                <div className="flex gap-10 ml-auto">
                    <h1 className="cursor-pointer">
                        Shop
                    </h1>
                    <h1 className="flex flex-row gap-1 cursor-pointer">
                        Sort
                        <img 
                        src="/images/sort.png" 
                        alt="" 
                        className="w-6 h-6 rounded-full cursor-pointer"
                        />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default VoucherInventory;
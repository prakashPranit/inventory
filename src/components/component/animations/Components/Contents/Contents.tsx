import React from "react";
import Image from "next/image";

import HeroImage from "../../../../../../public/images/hero-image.png"
import {Button} from "@/components/ui/button"



const Contents = () => {
    return (
        <section >
    <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl pl-2 pr-2 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white ">Data Management tool for everyone and everything</h1>
            <p className=" pl-2 pr-8 max-w-2xl mb-6 font-normal text-black-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From inventory management to data visualisation,
             companies around the world use<span>Prakash </span>  to simplify their 
            data managment needs.</p>
            <Button className="bg-black ml-2 mb-3 "> Explore and Start the journey</Button>
         
            
        </div>
        <div className=" lg:mt-0 lg:col-span-7 lg:flex">
         <Image
             alt="hero image"
            src={HeroImage}/>
     
        </div>                
    </div>
</section>
    
    );
};

export default Contents;

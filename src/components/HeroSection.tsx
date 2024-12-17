
import { resumeLink } from "@/lib/link";
import Image from "next/image";
import Link from "next/link";

const HeroSection = async () => {
    return (
        <div className="container my-10 flex justify-center mx-auto">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl text-transparent font-extrabold text-white ">Hi!</h1>
                        <h1 className="text-lg md:text-4xl lg:text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 font-Inter ">I&apos;m Towfique</h1>
                        <p className="text-lg md:text-xl lg:text-2xl my-6 text-white">
                        I’m a Next.js developer skilled in JavaScript, TypeScript, React, TailwindCSS, and Prisma, turning ideas into seamless digital experiences.                        </p>
                    </div>
                    <div className="flex justify-evenly">
                        <a href={resumeLink} target="_blank" className="bg-gradient-to-r text-base from-blue-500 via-purple-500 to-pink-600 rounded-full px-4 py-2 text-white font-extrabold">
                        Resume
                        </a>
                        <Link href="/contact" className="bg-gradient-to-r from-blue-500 text-base via-purple-500 to-pink-600 rounded-full px-4 py-2 text-white font-extrabold">
                        Contact
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="flex justify-end">
                        <Image src="/heroImage.svg" height={500} width={500} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

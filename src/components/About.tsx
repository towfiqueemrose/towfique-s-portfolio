import Link from "next/link";

export default function About() {
    return (
        <div className="container my-10 flex flex-col gap-6 justify-center items-center mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-transparent font-extrabold text-gray-400 ">About Me</h1>
            <h1 className="font-bold text-blue-500 font-Inter text-2xl md:text-3xl lg:text-4xl">Who am I?</h1>
            <p className="text-lg md:text-xl lg:text-2xl my-6 text-white">I&apos;m
                <b className="text-xl md:text-2xl lg:text-3xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 font-Inter ">
                    Towfique Emrose</b>, a passionate Next.js developer who crafts dynamic, scalable, and user-focused web applications.
                With expertise in <b className="text-yellow-400">JavaScript</b>, <b className="text-blue-700">TypesScript</b>,
                <b className="text-sky-400"> React</b>, <b className="text-blue-400">TailwindCSS</b>,
                and <b className="text-gray-500">Prisma</b>. I specialize in turning ideas into seamless digital experiences.
            </p>
            <Link href="/about" className=" text-base  rounded-full px-4 py-2 text-black bg-white font-extrabold">For More Details...</Link>
        </div>
    )
}

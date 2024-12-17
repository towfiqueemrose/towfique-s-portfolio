import Image from "next/image";
import Link from "next/link";

export default function DevProfile() {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Developer Profiles</h1>
        <h2 className=" m-2 md:text-xl text-lg text-white">My Code and Projects</h2>
        <div className="flex justify-center items-center gap-10 mt-5">
            <Link href="https://github.com/towfiqueemrose" target="_blank">
            <Image src="/github.svg" width={70} height={70} alt="" className="bg-white rounded-full"/>
            </Link>
            <Link href="https://gitlab.com/towfiqueemrose" target="_blank">
            <Image src="/gitlab.svg" width={70} height={70} alt="" className="bg-white rounded-full"/>
            </Link>
        </div>
    </div>
  )
}

import ProgressList from "@/components/ProgressList";
import Image from "next/image";
import myImage from "../../../public/myImage.jpg"; {/*mannually import image for lazy loading*/}

export default function AboutMePage() {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <h1 className="text-blue-600 font-bold text-6xl">
          About Me
        </h1>
      </div>
      <div className="flex mt-10  flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 mr-16 md:mt-3">
        <div className="flex items-center justify-center">
          <Image
            src={myImage}
            height={300}
            width={300}
            alt=""
            className="rounded-full"
            placeholder="blur"
          />;  {/*placeholder for lazy loading*/}
        </div>
          <p className="text-lg  mt-4 text-white">Hello, my name is Towfique Emrose, and I hold a degree in Management. While my academic background has equipped me with valuable insights into business and organizational principles, my heart has always been captivated by the world of technology.

            From an early age, I have been deeply passionate about exploring how technology can solve real-world problems and simplify lives. I thrive on the excitement of learning new tools, frameworks, and techniques that empower me to craft innovative solutions and impactful digital experiences.

            For me, technology is more than just a tool—it&apos;s a medium through which I can transform ideas into reality, connect people, and create meaningful change.

            Whether it&apos;s building dynamic web applications, experimenting with new frameworks, or diving into the latest trends in development, I am driven by an insatiable curiosity and a commitment to excellence.
          </p>
          <div className="gap-1 mt-10">
            <h1 className="text-3xl font-bold text-gray-400">Goal</h1>
            <p className="text-lg mt-2 text-white">My goal is to become a proficient full-stack developer.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:ml-16">
          <div className="border border-gray-400 rounded-lg p-4">
            <ProgressList />
          </div>
        </div>
      </div>
    </div>
  )
}

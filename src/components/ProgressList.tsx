import { Progress } from "./ui/progress";


export default function ProgressList() {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="gap-3">
        <h1 className="text-xl font-bold text-orange-600 ">HTML</h1>
        <Progress value={85} className="mt-1" />
      </div>
      <div className="gap-3">
        <h1 className="text-xl font-bold text-sky-400">Tailwind CSS</h1>
        <Progress value={85} className="mt-1" />
      </div>      
      <div className="gap-">
        <h1 className="text-xl font-bold text-yellow-400 ">JavaScript</h1>
        <Progress value={65} className="mt-1" />
      </div>
      <div className=" gap-3">
        <h1 className="text-xl font-bold text-blue-700 ">TypeScript</h1>
        <Progress value={60} className="mt-1" />
      </div>
      <div className="gap-3">
        <h1 className="text-xl font-bold text-sky-600 ">React</h1>
        <Progress value={70} className="mt-1" />
      </div>
      <div className="gap-3">
        <h1 className="text-xl font-bold text-white ">NextJS</h1>
        <Progress value={80} className="mt-1" />
      </div>
      <div className="gap-3">
        <h1 className="text-xl font-bold text-gray-500 ">Prisma</h1>
        <Progress value={75} className="mt-1" />
      </div>
    </div>
  )
}

import ProjectList from "@/components/ProjectList";
import { fetchProjects } from "@/lib/actions";


export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className="">
      <h1 className="text-white font-bold text-2xl flex justify-center md:text-4xl">My Projects List</h1>
      <ProjectList projects={projects} />
    </div>
  )
}

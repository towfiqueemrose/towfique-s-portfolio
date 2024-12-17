"use server";

import prisma from "./client";

export const fetchProjects = async () => {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });
        return projects;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return []; // Return an empty array in case of error
    }
}

export const fetchSingleProject = async ({id}: {id: string}) => {
    try {
        const project = await prisma.project.findUnique({
            where: {id}
        })
        // Explicitly return null if no project is found
        return project || null
    } catch (error) {
        console.error("Error fetching project:", error);
        return null
    }
}

export const createModelFeedback = async (formData: {
    name: string;
    email: string;
    desc: string;
    phone?: number;
  }) => {
    try {
      const feedback = await prisma.feedback.create({
        data: {
          name: formData.name,
          email: formData.email,
          desc: formData.desc,
          phone: formData.phone
        }
      });
      return { success: true, data: feedback };
    } catch (error) {
      console.error("Error creating model feedback:", error);
      return { success: false, error: "Failed to submit feedback" };
    }
  };

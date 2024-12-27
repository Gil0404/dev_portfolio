"use client";
import React, { useEffect, useState } from "react";
import Card from "../reusable/cards";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/firebase/database";

export type projecttype = {
  id: string;
  info: string;
  name: string;
  git: string;
  link: string;
  pic: string;
  tools: string[];
};
export default function Project() {
  const [projects, setProjects] = useState<projecttype[]>([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectRequest = collection(firestore, "projects");
        const projectsnap = await getDocs(projectRequest);

        const projectList = (await projectsnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))) as projecttype[];
        setProjects(projectList);
        console.log(projects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, []);

  return (
    <div className="w-screen max-w-max h-screen flex max-h-max items-center justify-center mx-auto ">
      <div className=" h-hero w-full flex-col flex">
        <div className="h-full w-full ">
          <h1 className="font-extrabold text-3xl md:ml-28 md:mt-16  xs:ml-10 sm:mt-0 text-primary ">
            Project
          </h1>
          <div className=" justify-center items-center  h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 ">
            {projects.map((project) => (
              <Card
                id={project.id}
                name={project.name}
                git={project.git}
                link={project.link}
                pic={project.pic}
                key={project.id}
                info={project.info}
                tools={project.tools}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

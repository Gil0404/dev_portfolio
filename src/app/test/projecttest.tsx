"use client";
import { firestore } from "@/firebase/database";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

export default function ProjectTest() {
  const [projects, setProjects] = useState([]); // State to store projects data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Function to fetch projects from Firestore
    const fetchProjects = async () => {
      try {
        const projectRequest = collection(firestore, "projects");
        const projectsnap = await getDocs(projectRequest);

        // Map over the documents and get their data
        const projectList: any = projectsnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjects(projectList); // Set the projects data to the state
      } catch (error) {
        console.error("Error getting projects:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProjects(); // Call the function to fetch data
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div>
      <h1>Projects List</h1>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.git}</li>
          ))}
        </ul>
        <img src={project.pic} className="w-52 aspect-square" />
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

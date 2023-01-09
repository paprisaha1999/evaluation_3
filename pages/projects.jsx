import React from "react";

const Projects = ({ projects }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          padding: "50px",
        }}
      >
        {projects.map((project) => (
          <div
            style={{ border: "1px solid gray", padding: "15px" }}
            key={project.id}
          >
            <h2>{project.name}</h2>
            <p>{project.full_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  let res = await fetch(
    "https://api.github.com/search/repositories?q=user:paprisaha1999+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await res.json();
  return {
    props: {
      projects: data.items,
    },
  };
}

export default Projects;

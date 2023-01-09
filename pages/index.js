import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, projects }) {
  return (
    <>
      <Head>
        <title>Papri-Portfolio</title>
        <meta name="description" content="Generated by create next app"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link real="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <div style={{ display: "flex" }}>
          <div>
            <div
              style={{
                border: "1px solid gray",
                width: "400px",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <Image
                style={{ borderRadius: "50%" }}
                src={data.avatar_url}
                alt="xyz"
                width={150}
                height={150}
              />
              <h2 style={{ textAlign: "center" }}>Papri Saha</h2>
              <p style={{ color: "gray", textAlign: "center" }}>
                @{data.login}
              </p>
              <p style={{ textAlign: "center" }}>
                Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS |
                ReactJS | HTML | CSS | Chakra-UI
              </p>
              <div style={{ display: "flex", gap: "30px" }}>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "20%",
                    padding: "12px",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Resume
                </button>
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "20%",
                    padding: "12px",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
            <div
              style={{
                border: "1px solid gray",
                width: "400px",
                padding: "10px",
              }}
            >
              <p style={{ padding: "10px" }}>
                <span
                  style={{
                    backgroundColor: "cyan",
                    marginLeft: "10px",
                    padding: "3px",
                  }}
                >
                  TypeScript
                </span>
                <span
                  style={{
                    backgroundColor: "cyan",
                    marginLeft: "10px",
                    padding: "3px",
                  }}
                >
                  JavaScript
                </span>
                <span
                  style={{
                    backgroundColor: "cyan",
                    marginLeft: "10px",
                    padding: "3px",
                  }}
                >
                  ReactJS
                </span>
                <span
                  style={{
                    backgroundColor: "cyan",
                    marginLeft: "10px",
                    padding: "3px",
                  }}
                >
                  HTML
                </span>
                <span
                  style={{
                    backgroundColor: "cyan",
                    marginLeft: "10px",
                    padding: "3px",
                  }}
                >
                  CSS
                </span>
              </p>
            </div>
          </div>
          <div>
            <h1 style={{ textAlign: "center", marginBottom: "-10px" }}>
              Projects
            </h1>
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
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let res = await fetch("https://api.github.com/users/paprisaha1999");
  let res1 = await fetch(
    "https://api.github.com/search/repositories?q=user:paprisaha1999+fork:true&sort=updated&per_page=10&type=Repositories"
  );

  let d = await res.json();
  let data1 = await res1.json();

  return {
    props: {
      data: d,
      projects: data1.items,
    },
  };
}

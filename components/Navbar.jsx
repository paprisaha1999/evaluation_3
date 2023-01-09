import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#edf2f7",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "50px",
          padding: "5px",
        }}
      >
        <h4>
          <Link style={{ color: "black", textDecoration: "none" }} href="/">
            Papri Saha
          </Link>
        </h4>
        <h4>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            href="/projects"
          >
            Projects
          </Link>
        </h4>
        <h4>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            href="/experience"
          >
            Experience
          </Link>
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          marginRight: "10px",
        }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/106386112?s=400&u=009cf6575c822741a1d2a90957d7a8bf38c8750a&v=4"
          alt="xyz"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Navbar;

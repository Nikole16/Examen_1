import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

interface Names {
  name: string;
}

function MyPhoto() {
  const [repoNames, setRepoNames] = useState<string[]>([]);

  async function getRepoNames(): Promise<string[]> {
    const repos = (await fetch(
      "https://api.github.com/users/Nikole16/repos"
    ).then((response) => response.json())) as Names[];
    const repoNames = repos.map((repo) => repo.name);
    return repoNames;
  }

  useEffect(() => {
    async function fetchData() {
      const names = await getRepoNames();
      setRepoNames(names);
    }
    fetchData();
  }, []);

  return (
    <Carousel style={{ color: "white" }}>
      {repoNames.map((name, index) => (
        <Carousel.Item key={index} style={{ color: "white" }}>
          <img
            className="d-block w-100 "
            style={{ color: "white" }}
            src={`https://via.placeholder.com/800x400?text=${name}`}
            alt={name}
          />
          <Carousel.Caption style={{ color: "white" }}>
            <h3>{name}</h3>
            <p>{name}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyPhoto;
// import React from "react";
// import Image from "next/image";

// function MyPhoto() {
//   return (
//     <div>
//       <img
//         src="/laptop.jpg"
//         className="img-fluid w-100"
//         alt="laptop"
//         style={{ zIndex: 1, maxHeight: "100%", maxWidth: "100%" }}
//       />
//     </div>
//   );
// }

// export default MyPhoto;

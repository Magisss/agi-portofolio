import React from "react";
import { SiJavascript } from "react-icons/si";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Roles</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={SiJavascript}
            title={"Full Stack Developer"}
            disc={`Versatile fullstack developer proficient in front-end (HTML, CSS, JS) and back-end (Node.js) technologies. Designing intuitive interfaces, optimizing performance, and managing databases. Skilled in collaboration, troubleshooting, and delivering scalable solutions. Let's build innovative applications together!`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={RiLayoutMasonryFill}
            title={"Frontend Developer"}
            disc={`Experienced frontend developer adept in React and Vue.js. Crafting immersive web experiences with pixel-perfect designs. Expertise in component-based architecture and responsive layouts. Collaborative and driven to deliver high-performance applications. Let's create exceptional digital solutions together!`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaServer}
            title={"Backend Developer"}
            disc={`Seasoned backend developer specializing in Node.js and Express. Proficient in database management (MongoDB, PostgreSQL) and RESTful API development. Skilled in optimizing performance and implementing secure authentication. Strong problem-solving and collaboration abilities.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

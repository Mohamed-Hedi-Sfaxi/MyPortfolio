import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "FeelinYourSkin",
    image: projectOne,
    description: (
      <>
        <p>
          Collaborating with a group of dedicated classmates, I actively
          contributed to a class project aimed at creating an innovative
          skincare application. Throughout the project, we worked
          synergistically, leveraging our diverse skill sets to develop a
          user-friendly interface and comprehensive features. By conducting
          extensive research and incorporating expert advice, we crafted a
          personalized skincare solution that analyzed users' skin conditions
          and provided tailored recommendations.
        </p>
      </>
    ),
    github: "https://github.com/Mohamed-Hedi-Sfaxi/FeelinYourSkin",
    demo: "",
  },
  2: {
    title: "Smart Fire Detection",
    image: projectTwo,
    description: (
      <>
        <p>
          In a collaborative effort with my classmates, we undertook a class
          project to design and develop a comprehensive system aimed at
          enhancing home security by effectively combating leaks and fires. Our
          innovative solution incorporated IoT technology and a sophisticated
          fire management model consisting of three alert levels.
        </p>
      </>
    ),
    github: "https://github.com/Mohamed-Hedi-Sfaxi/Smart-Fire-Detection",
    demo: "",
  },
  3: {
    title: "Pong Game",
    image: projectThree,
    description: (
      <>
        <p>
          Using Python, I embarked on the exciting journey of recreating the
          iconic Pong game. Through coding and creative problem-solving, I
          successfully developed a captivating and nostalgic gaming experience.
          Implementing the game's mechanics, including the bouncing ball,
          paddles, and scorekeeping, proved to be an engaging challenge. This
          project not only strengthened my programming skills but also allowed
          me to pay homage to a timeless classic in the world of video games.
        </p>
      </>
    ),
    github: "https://github.com/Mohamed-Hedi-Sfaxi/Pong_Game",
    demo: "",
  },
};

export default projects;

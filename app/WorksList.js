import Link from "next/link";
// import {works} from "./worksData"


const works = [
  {
    name: "What the pup?!",
    description: "Page for perusing dog breeds",
    url: "https://ceridwenroberts.github.io/whatthepup/",
    skills: ["JS", "API:s", "CSS", "html"],
    slug: "what-the-pup",
  },

  {
    name: "Mastermind",
    description: "The classic board game. 1 player ",
    url: "https://ceridwenroberts.github.io/mastermind-game/",
    skills: ["JS", "jQuery", "CSS", "html"],
  },

  {
    name: "Birthday Countdown",
    description: "Shows time to input date",
    url: "",
    skills: ["React", "CSS", "html"],
  },

  {
    name: "Get it?",
    description: "Get jokes from JokeAPI",
    url: "https://randomjokes-j6w1zm8vk-ceridwenroberts.vercel.app/",
    skills: ["React w/ Tanstack", "CSS"],
  },
];
// console.log(works);

export default function WorksList() {  
return (
    <ul>
      {works.map((work, index) => (
        <Link href={work.url} key={work.name}>
            <h2>{work.name}</h2>
          </Link>
      ))
      }
    </ul>
  );

}

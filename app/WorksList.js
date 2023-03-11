import Link from "next/link";

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
console.log(works);

export default function WorksList() {  
return (
    <ul>
      <Link href={`/works`}>Works-main Link</Link>
      {works.map((work, index) => (
        <li key={index}>
            <h2>{work.name}</h2>
          <Link href={`/${work.slug}`}>{work.name}</Link>
        </li>
      ))
      }
    </ul>
  );

}

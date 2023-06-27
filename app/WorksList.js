import Link from "next/link";
// import {works} from "./worksData"
import { works } from "./api/hello/worksData"

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

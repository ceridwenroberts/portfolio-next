
abour error.js backup

"use client"; // Error components must be Client components

// export default function Error({
//   error,
//   reset,
// }, {
//   error: Error,
//   reset: () => void,
// }) {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);

//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <button
//         onClick={
//           // Attempt to recover by trying to re-render the segment
//           () => reset()
//         }
//       >
//         Try again
//       </button>
//     </div>
//   );
// }

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}





<section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* Single card */}
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/tmk.jpg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Tailwind Master Kit
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
        </div>
      </div>
    </section>

     title: 'Get it?',
    description: 'Get jokes from JokeAPI',
    url: 'https://randomjokes-j6w1zm8vk-ceridwenroberts.vercel.app/',
    skills: [ 'React w/ Tanstack', 'CSS' ],
    slug: '',
    src: '',
    alt: '',
    width: 500,
    height: 500





    import React from 'react'
import Link from 'next/link';
import works from '@/app/api/hello/worksData'
import devStyle from 'app/devCSS.css'
import Image from 'next/image';
import { whatThePupPreview } from '/public/whatThePupPreview.png'


export default function WorkCard({ url, title, src, alt, height, width }) {
  console.log({ url, title });

  return (
  <div style={{
    display: "grid",
    gridGap: "8px",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto)",
  }}>
      {/* <div className={devStyle} style={{ position: "relative", height: "400px", margin: "10px" }}> */}
    <Link href={url} key={title} className={devStyle}>
      <h1>{title} </h1>
        <Image
          src={src}
          alt={alt}
          // className={styles.vercelLogo}
          // width={500}
          // height={500}
          placeholder='blur'
          blurDataURL={src}
          priority
          fill
          sizes='100vw'
          onError={console.log("error om image fetch")}
          style={{
            objectFit: 'cover'
          }}
        />


    </Link>
      {/* </div> */}
  </div>
  );
}


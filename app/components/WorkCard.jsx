import React from 'react'
import Link from 'next/link';
import works from '@/app/api/hello/worksData'
import devStyle from 'app/devCSS.css'
import Image from 'next/image';
import { whatThePupPreview } from '/public/whatThePupPreview.png'


export default function WorkCard({ url, title, src, alt, height, width }) {
  return (
    // <div style={{
    //   display: "grid",
    //   gridGap: "8px",
    //   gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto)",
    // }}>
    <div className={devStyle} style={{ position: "relative", height: "300px" }}>
      <Link href={url} key={title} className={devStyle}>
        <h1>{title} </h1>
        <Image
          src={src}
          alt={alt}
          // width={500}
          // height={400}
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
    </div>
    // </div>
  );
}


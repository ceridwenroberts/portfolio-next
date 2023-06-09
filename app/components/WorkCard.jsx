import React from 'react'
import Link from 'next/link';
import works from '@/app/api/hello/worksData'
import devStyle from 'app/devCSS.css'
import Image from 'next/image';
import {whatThePupPreview } from '/public/whatThePupPreview.png'


export default function WorkCard({url, title, src, alt, height, width}) {
  console.log({url, title});

const defaultImgSrc = "/public/whatThePupPreview.png"
  // <Link href={work.url} key={work.name}>
  // <h2>{work.name}</h2>
// </Link>
return ( <div className={devStyle.coloring}>
  <Link href={url} key={title} className={devStyle}>
    <div  className={devStyle}>
      <Image 
      src="/public/whatThePupPrieview.png" 
      alt={alt} 
      height={height} 
      width={width} 
      />
      <h1>{title} </h1>
    </div>

</Link>
</div>
); 
}


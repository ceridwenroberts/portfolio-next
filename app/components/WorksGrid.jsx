import React from 'react'
import { works } from '../api/hello/worksData'
import WorkCard from './WorkCard';
import { devStyles } from 'app/devCSS.css'

export default function WorksGrid() {

    const devStyle = {
        border: "1px solid blue"
    }

    const worksCards = works.map((card, i) => {
        // console.log({ works });
        if (typeof card === 'object' && card !== null) {

            return (
                <WorkCard
                    key={card.name}
                    title={card.name}
                    description={card.description}
                    url={card.url}
                    skills={card.skills}
                    slug={card.slug}
                    src={card.image.src}
                    alt={card.image.alt}
                    width={500}
                    height={500}
                />
            );
        }
        return null; // Ignore non-object elements in the works array
    });

    return <>
        <div style={
            {
                padding: "32px",
            }
        }>

            <div style={{
                display: "grid",
                gridGap: "24px",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto)",
                // display: "flex",
                // flexDirection:"column"
            }}>
                {worksCards}
            </div>
        </div>
    </>
}

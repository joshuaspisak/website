import React from 'react';
import ImageGallery from 'react-image-gallery';

const pictures = [
    {
      original: '/images/bond-data.png',
      thumbnail: '/images/bond-data.png',
      description: `A Tableau heatmap showing bond data by state (2023)`,
      originalHeight: '450px',
    },
    {
        original: '/images/business-report-table-of-contents.png',
        thumbnail: '/images/business-report-table-of-contents.png',
        description: `The table of contents page for a business report for a coffee shop (2023)`,
        originalHeight: '450px',
    },
    {
        original: '/images/cafh-logo.jpeg',
        thumbnail: '/images/cafh-logo.jpeg',
        description: `The logo for The Collegiate Alliance for Fighting Homelessness, a charity I founded (2022)`,
        originalHeight: '450px',
    },
    {
        original: '/images/cafh-website.png',
        thumbnail: '/images/cafh-website.png',
        description: `The website for the CAFH charity (2023)`,
        originalHeight: '450px',
    },
    {
        original: '/images/combine-research.png',
        thumbnail: '/images/combine-research.png',
        description: `Results from a research study I did on the NFL Combine (2022)`,
        originalHeight: '450px',
    },
    {
        original: '/images/c-plus-plus-code.png',
        thumbnail: '/images/c-plus-plus-code.png',
        description: `C++ code from a game I made in my CS 162 class (2023)`,
        originalHeight: '450px',
    },
    {
        original: '/images/literary-review.png',
        thumbnail: '/images/literary-review.png',
        description: `A literary review on 'green' bond papers (2023)`,
        originalHeight: '450px',
    },
    {
        original: '/images/occupod.jpg',
        thumbnail: '/images/occupod.jpg',
        description: `A woman using a nanoshelter from the project I am working on (2023)`,
        originalHeight: '450px',
    },
    {
        original: '/images/pallet-arrival.jpg',
        thumbnail: '/images/pallet-arrival.jpg',
        description: `The pallet of Target products that arrived for my micro business (2023)`,
        originalHeight: '450px',
    },
    {
        original: '/images/volunteer-project.jpg',
        thumbnail: '/images/volunteer-project.jpg',
        description: `A group of volunteers at the local homeless center (2023)`,
        originalHeight: '450px',
    },
]

function GalleryPage() {
    return (
        <>
            <h2>Gallery of Projects</h2>
            <p>A small sample of the work I have done in recent times.</p>

            <article className="gallery">
                <ImageGallery items={pictures} />
            </article>
        </>
    );
}

export default GalleryPage;
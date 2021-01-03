import React from  'react';
import image from  '../bgimg.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="portfolio pic" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h2 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Welcome! I'm Didy.</h2>
            </section>
        </main>
    )
}
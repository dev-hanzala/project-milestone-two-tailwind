import React from 'react'

interface HeroProps {
  heading: string
  bg: string
  children: React.ReactNode
}

const Hero = ({ heading, bg, children }: HeroProps) => {
  return (
    <div className="relative h-[calc(100vh-80px)]">
      <div
        className="bg-cover bg-top bg-no-repeat h-full"
        style={{ backgroundImage: `url(${bg})`, filter: 'brightness(50%)' }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1
          className="font-extrabold mb-2 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mx-1"
        >
          {heading}
        </h1>
        <p
          className="font-semibold text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mx-1"
        >
          {children}
        </p>
      </div>
    </div>
  );
}

export default Hero
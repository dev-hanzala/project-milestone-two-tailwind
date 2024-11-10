import Image from "next/image";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero heading="Hanzala Waseem" bg="/images/bg.jpg">
        Web Developer & Student
      </Hero>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8 text-white">
        <div className="sm:order-last">
          <h2 className="text-6xl font-bold mb-8">About Me</h2>
          <p className="text-3xl">
            I am a web developer specializing in Next.js. I build performant and
            responsive apps using technologies like Tailwind CSS.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/profile-picture.png"
            alt="Profile Picture"
            fill
            className="rounded-[20px] object-cover"
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 text-white">
        <div className="flex justify-between flex-col place-items-center shadow-lg p-8 h-full bg-black rounded-[20px]">
          <h3 className="text-4xl font-bold mb-4">Next.js</h3>
          <p className="text-lg">
            Next.js is a full-stack React framework that can be used for server
            side rendering, static site generation, and more. I have extensive
            experience with Next.js and use it for most of my projects.
          </p>
          <Image
            src="/svgs/nextjs.svg"
            alt="Next.js Logo"
            width={240}
            height={240}
            className="inline-block invert p-2"
          />
        </div>
        <div className="flex justify-between flex-col place-items-center shadow-lg p-8 h-full bg-black rounded-[20px]">
          <h3 className="text-4xl font-bold mb-4">Tailwind CSS</h3>
          <p className="text-lg">
            Tailwind CSS is a utility-first CSS framework that allows you to
            quickly create consistent and responsive designs. I have extensive
            experience with Tailwind CSS and use it for most of my projects.
            <Image
              src="/svgs/tailwindcss.svg"
              alt="Next.js Logo"
              width={240}
              height={240}
              className="inline-block p-2"
            />
          </p>
        </div>
        <div className="flex justify-between flex-col place-items-center shadow-lg p-8 h-full bg-black rounded-[20px]">
          <h3 className="text-4xl font-bold mb-4">TypeScript</h3>
          <p className="text-lg">
            TypeScript is a statically typed version of JavaScript that allows
            you to create robust and maintainable code. I have extensive
            experience with TypeScript and use it for most of my projects.
            <Image
              src="/svgs/typescript.svg"
              alt="Next.js Logo"
              width={240}
              height={240}
              className="inline-block  p-2"
            />
          </p>
        </div>
      </section>
    </>
  );
}

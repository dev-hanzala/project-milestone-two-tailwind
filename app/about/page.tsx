import Hero from "@/components/Hero";

const About = () => {
  return (
    <div>
      <Hero heading="About Me" bg="/images/about.jpg">
        I am a web developer specializing in Next.js. I build performant and
        responsive apps using technologies like Tailwind CSS. I am currently
        graduating high school and attending the GIAIC program.
      </Hero>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 bg-black rounded-[20px]">
            <h3 className="text-4xl font-bold mb-4">Next.js</h3>
            <p className="text-lg">
              Next.js is a full-stack React framework that can be used for server
              side rendering, static site generation, and more. I have extensive
              experience with Next.js and use it for most of my projects.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-black rounded-[20px]">
            <h3 className="text-4xl font-bold mb-4">Tailwind CSS</h3>
            <p className="text-lg">
              Tailwind CSS is a utility-first CSS framework that allows you to
              quickly create consistent and responsive designs. I have extensive
              experience with Tailwind CSS and use it for most of my projects.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-black rounded-[20px]">
            <h3 className="text-4xl font-bold mb-4">JavaScript</h3>
            <p className="text-lg">
              JavaScript is a high-level, dynamic, and interpreted programming
              language that is used for client-side scripting on the web. I have
              extensive experience with JavaScript and use it for most of my
              projects.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-black rounded-[20px]">
            <h3 className="text-4xl font-bold mb-4">TypeScript</h3>
            <p className="text-lg">
              TypeScript is a superset of JavaScript that adds optional static
              typing and other features. I have extensive experience with TypeScript
              and use it for most of my projects.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-black rounded-[20px]">
            <h3 className="text-4xl font-bold mb-4">React</h3>
            <p className="text-lg">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components. I have extensive
              experience with React and use it for most of my projects.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-black rounded-[20px]">
            <h3 className="text-4xl font-bold mb-4">Node.js</h3>
            <p className="text-lg">
              Node.js is a cross-platform, open-source JavaScript runtime environment
              that allows you to build server-side applications. I have experience
              with Node.js and use it for some of my projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

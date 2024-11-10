import Hero from "@/components/Hero";

import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Hero heading="Reach Out" bg="/images/contact.jpg">
        Want to get in touch? Feel free to reach out to me via email or connect
        with me on LinkedIn. I&apos;m always open to discuss new projects, creative
        ideas, or opportunities to be part of your vision.
      </Hero>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link href="https://www.linkedin.com/in/dev-hanzala/" passHref>
            <div className="p-8 bg-gray-800 rounded-[20px] hover:bg-gray-700 h-full">
              <h3 className="text-4xl font-bold mb-4">LinkedIn</h3>
              <p className="text-lg">
                Feel free to connect with me on LinkedIn. I am always open to
                discussing new projects, ideas, and opportunities.
              </p>
            </div>
          </Link>
          <Link href="mailto:hanzala-waseem@proton.me" passHref>
            <div className="p-8 bg-gray-800 rounded-[20px] hover:bg-gray-700 h-full">
              <h3 className="text-4xl font-bold mb-4">Email</h3>
              <p className="text-lg">
                If you have any questions, or would like to get in touch, feel
                free to email me. I will get back to you as soon as possible.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;

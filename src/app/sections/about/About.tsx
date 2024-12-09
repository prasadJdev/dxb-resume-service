import React from "react";

function About() {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto  px-8 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 py-16 xl:py-24"
      id="about-us"
    >
      <div className="home-content max-w-2xl md:text-3xl lg:pr-24">
        <h3 className="text-5xl font-secondary font-medium text-primary">Hi, I am</h3>
        <h2 className="text-7xl font-secondary font-semibold leading-relaxed text-tertiary">Shikha</h2>

        <p className="text-xl font-primary mb-8">
          For over <strong>6+ years</strong>, I&apos;ve been helping professionals stand out with optimized resumes,
          LinkedIn profiles, and global CV distribution. What started as a passion to help others has grown into a
          mission to open doors to career success. <br />
          <br />
          <span>Let&apos;s work together to take your career to the next level!</span>
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="border bg-goldBg rounded-md text-primary px-4 py-4 text-sm flex flex-col items-center gap-2 ">
            <h6 className="font-semibold font-secondary text-secondary text-xl">6 years</h6>
            <p className="text-lg font-primary font-medium">Experienced</p>
          </div>

          <div className="border bg-goldBg rounded-md text-primary px-4 py-4 text-sm flex flex-col items-center gap-2 ">
            <h6 className="font-semibold font-secondary text-secondary text-xl">300+</h6>
            <p className="text-lg font-primary font-medium">Social Media Family</p>
          </div>

          <div className="border bg-goldBg rounded-md text-primary px-4 py-4 text-sm flex flex-col items-center gap-2 ">
            <h6 className="font-semibold font-secondary text-secondary text-xl">4.5</h6>
            <p className="text-lg font-primary font-medium">Star Reviews</p>
          </div>
        </div>
      </div>

      <div className="rounded-s-3xl overflow-hidden">
        <img src="https://i.postimg.cc/k5kz0TjQ/1381511-588644811197844-1671954779-n.jpg" alt="Shikha" />
      </div>
    </section>
  );
}

export default About;

import React from "react";
import { BriefcaseIcon, FileScan, Store } from "lucide-react";

const atsSolutions = [
  {
    icon: FileScan,
    description:
      "Craft resumes using industry-specific keywords to improve Applicant Tracking System (ATS) visibility and ranking.",
  },
  {
    icon: FileScan,
    description:
      "Design ATS-friendly layouts that balance simplicity for parsing systems with professional aesthetics for human reviewers.",
  },
  {
    icon: FileScan,
    description:
      "Align resumes to specific job descriptions by emphasizing relevant skills, experiences, and achievements.",
  },
];

const linkdlnSolutions = [
  {
    icon: BriefcaseIcon,
    description:
      "Revamp profiles with compelling headlines, summaries, and experience sections tailored to attract recruiters and align with industry standards.",
  },
  {
    icon: BriefcaseIcon,
    description: "Strategically incorporate industry-specific keywords to boost discoverability in LinkedIn searches.",
  },
  {
    icon: BriefcaseIcon,
    description:
      "Help identify key skills to showcase and guide on obtaining endorsements and professional recommendations.",
  },
];

const cvSolutions = [
  {
    icon: Store,
    description: "Submit CVs to industry-specific job boards and portals tailored to the client’s career goals.",
  },
  {
    icon: Store,
    description: "Distribute CVs directly to a network of recruiters and hiring managers in relevant industries.",
  },
  {
    icon: Store,
    description: "Craft personalized email pitches and distribute CVs to potential employers and relevant contacts.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className=" px-4 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 py-12 sm:py-8 md:py-12 ">
      <h2 className="text-4xl mb-[6rem] font-bold text-center font-secondary text-primary">Our Services</h2>
      <div className="flex flex-wrap gap-12 items-center justify-center mt-12 mx-auto isolate">
        <div className="transition duration-500 max-w-80 lg:translate-y-8 ease-in-out hover:bg-primaryContrast bg-primary/5 cursor-pointer ring-[#ffffff1a] hover:ring-primary ring-1 p-8 rounded-3xl text-primary">
          <div className="text-lg font-semibold text-primary font-secondary text-center">ATS-Optimized Resumes</div>
          <p className="my-4 text-sm text-primary font-medium text-center font-primary">
            Ensure your resume gets noticed by employers and passes automated screenings. Europass CV: Perfect for
            European job applications, tailored to meet global standards
          </p>

          <div className="overflow-hidden rounded-lg relative">
            {atsSolutions.map((item) => (
              <div key={item.description} className="flex group items-start p-2 transition duration-150 ease-in-out">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center  sm:h-5 sm:w-5">
                  <item.icon aria-hidden="true" className="text-secondary" />
                </div>
                <p className="ml-4 text-sm text-gray-500 font-primary font-medium">{item.description}</p>
              </div>
            ))}

            <div className="relative inset-0 mt-4 flex items-center justify-center">
              <a href="#" className="text-sm font-semibold leading-6 group-hover:underline  text-secondary">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="transition duration-500 max-w-80 lg:-translate-y-8 ease-in-out hover:bg-primaryContrast bg-primary/5 cursor-pointer ring-[#ffffff1a] hover:ring-primary ring-1 p-8 rounded-3xl text-primary">
          <div className="text-lg font-semibold text-primary font-secondary text-center">LinkedIn Optimization</div>
          <p className="my-4 text-sm text-primary font-medium text-center font-primary">
            Boost your online presence with a profile that attracts recruiters and expands your network.
          </p>

          <div className="overflow-hidden rounded-lg relative">
            {linkdlnSolutions.map((item) => (
              <div key={item.description} className="flex group items-start p-2 transition duration-150 ease-in-out">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center  sm:h-5 sm:w-5">
                  <item.icon aria-hidden="true" className="text-secondary" />
                </div>
                <p className="ml-4 text-sm text-gray-500 font-primary font-medium">{item.description}</p>
              </div>
            ))}

            <div className="relative inset-0 mt-4 flex items-center justify-center">
              <a href="#" className="text-sm font-semibold leading-6 group-hover:underline  text-secondary">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="transition duration-500 max-w-80 lg:translate-y-8 ease-in-out hover:bg-primaryContrast bg-primary/5 cursor-pointer ring-[#ffffff1a] hover:ring-primary ring-1 p-8 rounded-3xl text-primary">
          <div className="text-lg font-semibold text-primary font-secondary text-center">CV Distribution</div>
          <p className="my-4 text-sm text-primary font-medium text-center font-primary">
            We&apos;ll send your resume to top companies in your industry, increasing your chances of landing the job.
          </p>

          <div className="overflow-hidden rounded-lg relative">
            {cvSolutions.map((item) => (
              <div key={item.description} className="flex group items-start p-2 transition duration-150 ease-in-out">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center  sm:h-5 sm:w-5">
                  <item.icon className="text-secondary" aria-hidden="true" />
                </div>
                <p className="ml-4 text-sm text-gray-500 font-primary font-medium">{item.description}</p>
              </div>
            ))}

            <div className="relative inset-0 mt-4 flex items-center justify-center">
              <a href="#" className="text-sm font-semibold leading-6 group-hover:underline  text-secondary">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

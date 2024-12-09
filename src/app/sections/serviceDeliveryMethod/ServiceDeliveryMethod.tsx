import { cn } from "@/lib/utils";
import { FileSymlink, HandCoins, Linkedin, ReceiptText, ReplaceAllIcon } from "lucide-react";

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="absolute top-6 right-6 text-7xl text-[#EBEBEB] font-extrabold group-hover:text-primary">
        {index + 1}
      </div>
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-secondary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 font-primary dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const features = [
  {
    title: "Payment Confirmation",
    description: "Once payment is received, we'll send you a sample file for your review.",
    //   icon: <BadgeDollarSignIcon />,
    icon: <HandCoins />,
  },
  {
    title: "Unlimited Revisions",
    description:
      "You'll have unlimited editing options to ensure your resume meets your expectations before finalizing it.",
    icon: <ReplaceAllIcon />,
  },
  {
    title: "Final Delivery",
    description: "After finalizing, you will receive your ATS-friendly CV, Europass CV, and Cover Letter",
    icon: <ReceiptText />,
  },
  {
    title: "LinkedIn Optimization:",
    description:
      "Once your CV is complete, we'll begin optimizing your LinkedIn profile, which will be completed within 4 days.",
    icon: <Linkedin />,
  },
  {
    title: "CV Distribution",
    description: "You can simply share passwords instead of buying new seats",
    icon: <FileSymlink />,
  },
];

function ServiceDeliveryMethod() {
  return (
    <section
      id="service-delivery-method"
      className="py-12 max-w-5xl mx-auto  px-4 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 sm:py-8 md:py-12 xl:py-24"
    >
      <h2 className="text-4xl mb-4 font-bold text-center font-secondary text-primary">Service Delivery Method</h2>
      <p className="text-lg mb-8 text-center text-primary font-primary">
        We are committed in supporting you every step of the way!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center justify-center relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ServiceDeliveryMethod;

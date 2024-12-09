import React from "react";

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-12 max-w-5xl mx-auto flex gap-12 flex-wrap px-4 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 sm:py-8 md:py-12 xl:py-24"
    >
      <div className="border p-6 rounded-xl border-primary flex flex-col gap-6">
        <div className="flex gap-4 overflow-x-auto">
          <div className="border border-primary rounded-[100px] p-1 text-[10px] font-medium font-primary">
            Draft Resume
          </div>
          <div className="border border-primary rounded-[100px] p-1 text-[10px] font-medium font-primary">
            Unlimited Edits
          </div>
          <div className="border border-primary rounded-[100px] p-1 text-[10px] font-medium font-primary">
            ATS friendly
          </div>
          <div className="border border-primary rounded-[100px] p-1 text-[10px] font-medium font-primary">
            Euro Pass
          </div>
          <div className="border border-primary rounded-[100px] p-1 text-[10px] font-medium font-primary">Word</div>
          <div className="border border-primary rounded-[100px] p-1 text-[10px] font-medium font-primary">PDF</div>
        </div>

        <h4 className="text-2xl font-bold text-primary font-secondary">Full CV Package </h4>

        <hr />

        <p className="text-lg font-primary">
          Sample file within 24 hours<sup className="text-tertiary">*</sup>{" "}
        </p>
      </div>
    </section>
  );
}

export default Pricing;

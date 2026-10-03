import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";

const AdmissionsCTA = () => {
  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-tis-red py-24 text-white md:py-32 lg:py-40"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 25%), radial-gradient(circle at 80% 80%, white 0, transparent 25%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Admissions
            </p>

            <h2 className="mt-6 font-display text-[clamp(3.5rem,7vw,8rem)] leading-[0.9] tracking-[-0.045em]">
              Your child&apos;s journey{" "}
              <span className="italic text-tis-cream">
                starts here.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Discover a learning environment designed to help
              students grow with confidence, curiosity and purpose.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="https://admission.tis.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-tis-ink transition hover:bg-tis-cream"
              >
                Apply for Admission

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://tis.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition hover:bg-white hover:text-tis-ink"
              >
                Visit Official Website
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
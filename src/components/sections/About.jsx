import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import { schoolImages } from "../../data/assets";

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-tis-paper py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                    src={schoolImages.about}
                    alt="TIS students practising archery"
                    className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                    />
              </div>

              <div className="absolute -right-4 -bottom-6 max-w-[220px] rounded-3xl bg-tis-red p-6 text-white shadow-xl md:-right-8 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Since
                </p>

                <p className="mt-1 font-display text-5xl">
                  2012
                </p>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  Inspiring young minds in Dehradun.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-tis-red" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tis-red">
                  About TIS
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="max-w-3xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.95] tracking-[-0.04em]">
                A modern school with a{" "}
                <span className="italic text-tis-red">
                  timeless purpose.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-tis-muted">
                    Tula&apos;s International School was established in
                    2012 under the aegis of Rishabh Educational Trust,
                    with a vision to provide students seamless
                    opportunities for learning and growth.
                </p>
            </Reveal>

            <Reveal delay={0.22}>
                <p className="mt-5 max-w-2xl leading-7 text-tis-muted">
                    Located in Dehradun, TIS brings together academic
                    excellence, creativity, sports and a nurturing
                    residential environment to support the holistic
                    development of every student.
                </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#academics"
                className="group mt-9 inline-flex items-center gap-3 font-semibold text-tis-ink"
              >
                Discover our approach

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tis-red text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

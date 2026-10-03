import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import { schoolImages } from "../../data/assets";

const campusItems = [
  "Boarding Life",
  "Smart Classrooms",
  "Library",
  "Clubs & Societies",
];

const CampusExperience = () => {
  return (
    <section
      id="campus"
      className="relative overflow-hidden bg-tis-ink py-24 text-white md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.2rem]">
                <img
                    src={schoolImages.campus}
                    alt="TIS students taking part in swimming"
                    className="aspect-[4/5] w-full object-cover"
                />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/60">
                    Campus Life
                  </p>

                  <p className="mt-1 font-display text-2xl">
                    Learn. Live. Grow.
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-tis-red" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tis-red">
                  Campus Experience
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
                <h2 className="font-display text-[clamp(3rem,5.8vw,6.6rem)] leading-[0.94] tracking-[-0.04em]">
                    A home away from{" "}
                    <span className="italic text-tis-cream">
                        home.
                    </span>
                </h2>
            </Reveal>

            <Reveal delay={0.16}>
                <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
                    Life at TIS combines interactive learning, sports,
                    music, arts and residential experiences in an
                    environment designed to build independence,
                    friendships and confidence.
                </p>
            </Reveal>

            <div className="mt-10 border-t border-white/10">
              {campusItems.map((item, index) => (
                <Reveal
                  key={item}
                  delay={0.2 + index * 0.05}
                  y={18}
                >
                  <div className="group flex items-center justify-between border-b border-white/10 py-5">
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-semibold text-white/30">
                        0{index + 1}
                      </span>

                      <span className="font-display text-2xl md:text-3xl">
                        {item}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusExperience;

import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import { schoolImages } from "../../data/assets";

const sports = [
  {
    name: "Archery",
    image: schoolImages.sports.archery,
  },
  {
    name: "Swimming",
    image: schoolImages.sports.swimming,
  },
  {
    name: "Football",
    image: schoolImages.sports.football,
  },
  {
    name: "Horse Riding",
    image: schoolImages.sports.horseRiding,
  },
  {
    name: "Basketball",
    image: schoolImages.sports.basketball,
  },
  {
    name: "Cricket",
    image: schoolImages.sports.cricket,
  },
];

const Sports = () => {
  return (
    <section
      id="sports"
      className="overflow-hidden bg-tis-paper py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-tis-red" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tis-red">
                  Beyond Academics
                </p>
              </div>

                <h2 className="font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.93] tracking-[-0.045em]">
                    More than a facility.{" "}
                    <span className="italic text-tis-red">
                        A foundation for growth.
                    </span>
                </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-md text-lg leading-8 text-tis-muted">
                TIS offers a wide range of sporting opportunities that
                help students build discipline, resilience, teamwork and
                confidence beyond the classroom.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sports.map((sport, index) => (
            <Reveal
              key={sport.name}
              delay={index * 0.05}
              y={25}
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[390px]"
            >
              <article
                data-cursor="interactive"
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="h-[470px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                        0{index + 1}
                      </span>

                      <h3 className="mt-2 font-display text-3xl">
                        {sport.name}
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur transition-all duration-300 group-hover:bg-white group-hover:text-tis-ink">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;

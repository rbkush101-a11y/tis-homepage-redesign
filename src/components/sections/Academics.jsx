import { ArrowUpRight, BookOpen, Brain, Laptop, Users } from "lucide-react";
import Reveal from "../animation/Reveal";

const academicPoints = [
  {
    icon: BookOpen,
    title: "CBSE Curriculum",
    description:
      "A structured academic foundation designed to build conceptual clarity and confidence.",
  },
  {
    icon: Brain,
    title: "Experiential Learning",
    description:
      "Learning extends beyond textbooks through projects, discussion and real-world application.",
  },
  {
    icon: Laptop,
    title: "Future-Ready Classrooms",
    description:
      "Technology-supported learning environments encourage curiosity and independent thinking.",
  },
  {
    icon: Users,
    title: "Student-Centred Growth",
    description:
      "Small-group guidance helps students strengthen academics, communication and leadership.",
  },
];

const Academics = () => {
  return (
    <section
      id="academics"
      className="bg-tis-ink py-24 text-white md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-tis-red" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tis-red">
                  Academics
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-[clamp(3rem,5.5vw,6.3rem)] leading-[0.95] tracking-[-0.04em]">
                Learning built for{" "}
                <span className="italic text-tis-cream">
                  tomorrow.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
                Strong fundamentals meet modern learning methods
                to help students think deeply, communicate clearly
                and approach challenges with confidence.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <a
                href="#sports"
                className="group mt-9 inline-flex items-center gap-3 font-semibold"
              >
                Explore student life

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tis-red transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2">
            {academicPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.07}
                  y={25}
                  className="bg-[#20201c] p-7 transition-colors duration-300 hover:bg-[#282823] md:p-9"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tis-red">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-8 font-display text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {item.description}
                  </p>

                  <div className="mt-10 h-px w-full bg-white/10" />

                  <span className="mt-5 block text-xs font-semibold tracking-[0.2em] text-white/35">
                    0{index + 1}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
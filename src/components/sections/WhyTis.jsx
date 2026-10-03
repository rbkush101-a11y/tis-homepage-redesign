import {
  ArrowUpRight,
  Music,
  Palette,
  Trophy,
  UsersRound,
} from "lucide-react";
import Reveal from "../animation/Reveal";

const experiences = [
  {
    icon: Trophy,
    number: "01",
    title: "Sports",
    description:
      "Structured sports programmes help students develop discipline, resilience and teamwork.",
  },
  {
    icon: Music,
    number: "02",
    title: "Music",
    description:
      "Creative expression gives students another language for confidence, focus and individuality.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Arts",
    description:
      "Artistic exploration encourages imagination, observation and original thinking.",
  },
  {
    icon: UsersRound,
    number: "04",
    title: "Community",
    description:
      "Boarding life creates meaningful friendships, independence and a strong sense of belonging.",
  },
];

const WhyTis = () => {
  return (
    <section
      id="boarding"
      className="overflow-hidden bg-tis-cream py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-tis-red" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tis-red">
                Life at TIS
              </p>
            </div>

            <h2 className="font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.93] tracking-[-0.045em]">
                Endless opportunities to{" "}
                <span className="italic text-tis-red">
                    explore and grow.
                </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-tis-muted">
                At TIS, education extends beyond lessons. Students
                are encouraged to explore academics, music, art,
                drama, sports and experiences that help them discover
                their potential.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                y={30}
              >
                <article
                  data-cursor="interactive"
                  className="group flex min-h-[390px] flex-col rounded-[2rem] border border-black/10 bg-tis-paper p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-tis-muted">
                      {item.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tis-ink text-white transition-all duration-300 group-hover:bg-tis-red">
                      <Icon size={19} />
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-display text-4xl tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-tis-muted">
                      {item.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                        Discover
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTis;
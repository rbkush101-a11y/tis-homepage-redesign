import Reveal from "../animation/Reveal";

const stats = [
  {
    value: "22",
    label: "Acre Campus",
  },
  {
    value: "16+",
    label: "Olympic Sports",
  },
  {
    value: "24×7",
    label: "Medical Assistance",
  },
  {
    value: "6:1",
    label: "Student Teacher Ratio",
  },
];

const Stats = () => {
  return (
    <section className="relative z-20 bg-tis-red text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.07}
            y={25}
            className={`flex min-h-[190px] flex-col justify-between px-5 py-8 sm:px-8 lg:min-h-[220px] lg:px-10 lg:py-10 ${
              index !== stats.length - 1
                ? "border-r border-white/15"
                : ""
            } ${
              index < 2
                ? "border-b border-white/15 lg:border-b-0"
                : ""
            }`}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-white/60">
              0{index + 1}
            </span>

            <div>
              <h3 className="font-display text-[clamp(3.5rem,6vw,6.5rem)] leading-none">
                {stat.value}
              </h3>

              <p className="mt-3 max-w-[170px] text-xs font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Stats;
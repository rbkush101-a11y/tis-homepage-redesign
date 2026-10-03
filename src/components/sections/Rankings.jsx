import Reveal from "../animation/Reveal";

const rankings = [
  {
    rank: "#1",
    location: "In Dehradun",
    source: "Education Today",
  },
  {
    rank: "#2",
    location: "In Uttarakhand",
    source: "Education Today",
  },
  {
    rank: "#1",
    location: "In North India",
    source: "Outlook",
  },
  {
    rank: "#4",
    location: "In India",
    source: "Education Today",
  },
];

const Rankings = () => {
  return (
    <section className="bg-tis-cream py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-tis-red" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tis-red">
                Recognition
              </p>
            </div>

            <h2 className="font-display text-[clamp(3rem,6vw,6.7rem)] leading-[0.94] tracking-[-0.045em]">
              Excellence that gets{" "}
              <span className="italic text-tis-red">
                recognised.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((item, index) => (
            <Reveal
              key={`${item.source}-${item.location}`}
              delay={index * 0.07}
              y={25}
            >
              <article className="group min-h-[290px] rounded-[2rem] border border-black/10 bg-tis-paper p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.1)]">
                <span className="text-xs font-semibold tracking-[0.2em] text-tis-muted">
                  0{index + 1}
                </span>

                <div className="mt-16">
                  <h3 className="font-display text-6xl text-tis-red md:text-7xl">
                    {item.rank}
                  </h3>

                  <p className="mt-5 font-semibold">
                    {item.location}
                  </p>

                  <p className="mt-1 text-sm text-tis-muted">
                    {item.source}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Rankings;

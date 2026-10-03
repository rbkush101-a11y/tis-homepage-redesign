import { Quote } from "lucide-react";
import Reveal from "../animation/Reveal";

const testimonials = [
  {
    quote:
      "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
    name: "Namita Agarwal",
    role: "Mother of Krishna Agarwal",
  },
  {
    quote:
      "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
    name: "Sandeep Kumar",
    role: "Father of Aryan",
  },
  {
    quote:
      "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.",
    name: "Ashu Arora",
    role: "Mother of Manisha Changrani",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-tis-paper py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-tis-red" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tis-red">
                  Parent Stories
                </p>
              </div>

              <h2 className="font-display text-[clamp(3rem,5.5vw,6rem)] leading-[0.94] tracking-[-0.04em]">
                Trusted by the{" "}
                <span className="italic text-tis-red">
                  people who matter most.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-lg text-lg leading-8 text-tis-muted">
                A strong school experience is reflected not only in
                results, but in the confidence students carry home.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.quote}
                delay={index * 0.08}
                y={25}
              >
                <article className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-9">
                  <Quote className="text-tis-red" size={30} />

                  <blockquote className="mt-6 font-display text-2xl leading-[1.35] tracking-[-0.02em] md:text-3xl">
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="mt-8 border-t border-black/10 pt-5">
                    <p className="font-semibold">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-tis-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

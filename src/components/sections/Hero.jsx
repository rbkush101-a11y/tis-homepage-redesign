import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import { schoolImages } from "../../data/assets";

const Hero = () => {
  const { scrollY } = useScroll();

  const imageY = useTransform(
    scrollY,
    [0, 800],
    [0, 120]
  );

  const imageScale = useTransform(
    scrollY,
    [0, 800],
    [1.03, 1.12]
  );

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-tis-ink text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          y: imageY,
          scale: imageScale,
        }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${schoolImages.hero}')`,
            }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-end px-5 pb-20 pt-32 md:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-[900px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-tis-red" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-sm">
              Boarding & Day School · Dehradun
            </p>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="max-w-[850px] font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.045em]"
          >
            Where education becomes{" "}
            <span className="italic text-tis-cream">
              an experience.
            </span>

            
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
          >
            A leading boarding and day school in Dehradun,
            combining academic excellence, holistic development
            and opportunities that prepare students to become
            confident global citizens.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#admissions"
              className="flex items-center gap-3 rounded-full bg-tis-red px-6 py-4 text-sm font-semibold transition hover:bg-tis-red-dark"
            >
              Apply for Admission
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#about"
              className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold backdrop-blur transition hover:bg-white hover:text-tis-ink"
            >
              Explore TIS
              <ArrowDown size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

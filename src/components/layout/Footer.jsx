import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Academics",
    href: "#academics",
  },
  {
    label: "Boarding Life",
    href: "#boarding",
  },
  {
    label: "Beyond Academics",
    href: "#sports",
  },
  {
    label: "Admissions",
    href: "#admissions",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#10100e] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mt-5 max-w-lg leading-7 text-white/50">
              A modern boarding and day school experience in
              Dehradun focused on academics, character, creativity
              and holistic development.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {footerLinks.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="w-fit text-sm text-white/70 transition hover:text-white"
                    >
                        {item.label}
                    </a>
                ))}
              </div>
            </div>

            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Admissions
                </p>

                <a
                    href="https://admission.tis.edu.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                    Apply Online

                    <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                </a>

                <p className="mt-6 max-w-xs text-sm leading-6 text-white/45">
                    Dhoolkot, P.O – Selaqui,
                    Chakrata Road, Dehradun-248011,
                    Uttarakhand
                </p>

                <p className="mt-4 text-sm text-white/45">
                    Admission Helpline: +91-9837983791
                </p>

                <p className="mt-1 text-sm text-white/45">
                    info@tis.edu.in
                </p>
                </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 TIS Homepage Redesign.
          </p>

          <p>
            Frontend Developer Assessment Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

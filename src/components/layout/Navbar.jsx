import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Boarding Life", href: "#boarding" },
  { label: "Beyond Academics", href: "#sports" },
  { label: "Admissions", href: "#admissions" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (!menuOpen) return undefined;

    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-black/5 bg-tis-paper/90 text-tis-ink shadow-sm backdrop-blur-xl"
            : "bg-transparent text-white"
        }`}
      >
        <nav className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a
            href="#top"
            className="font-display text-2xl font-semibold"
          >
            TIS
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className={`hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:flex ${
                scrolled
                  ? "bg-tis-red text-white hover:bg-tis-red-dark"
                  : "bg-white text-tis-ink hover:bg-tis-cream"
              }`}
            >
              Apply Now
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
                scrolled
                  ? "border-black/10"
                  : "border-white/30 bg-white/10"
              }`}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Site navigation"
            className="fixed inset-0 z-[80] bg-tis-ink text-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col px-6 py-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl">
                  TIS
                </span>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="my-auto flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 py-5 font-display text-4xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 700,
    damping: 45,
    mass: 0.15,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 700,
    damping: 45,
    mass: 0.15,
  });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");

    const updateCursorSupport = () => {
      setEnabled(pointerQuery.matches);
    };

    updateCursorSupport();

    pointerQuery.addEventListener(
      "change",
      updateCursorSupport
    );

    return () => {
      pointerQuery.removeEventListener(
        "change",
        updateCursorSupport
      );
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-enabled");

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseOver = (event) => {
      if (!(event.target instanceof Element)) return;

      const interactive = event.target.closest(
        "a, button, [data-cursor='interactive']"
      );

      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove(
        "custom-cursor-enabled"
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-white/80 mix-blend-difference"
        animate={{
          width: hovering ? 58 : 34,
          height: hovering ? 58 : 34,
          opacity: hovering ? 0.9 : 0.6,
        }}
        transition={{
          duration: 0.18,
        }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
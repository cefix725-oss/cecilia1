import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpStatProps {
  value: string;
  label: string;
}

const CountUpStat = ({ value, label }: CountUpStatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Extract numeric part and suffix (e.g., "1000+" → 1000, "+")
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNum = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;

  useEffect(() => {
    if (!isInView || targetNum <= 0) return;

    let frameId: number;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * targetNum);

      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(`${targetNum}${suffix}`);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, targetNum, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center px-6 py-8"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
        {numericMatch ? displayValue : value}
      </div>
      <div className="font-body text-sm text-muted-foreground tracking-wide uppercase">{label}</div>
    </motion.div>
  );
};

export default CountUpStat;

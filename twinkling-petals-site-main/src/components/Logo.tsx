import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  animate?: boolean;
}

const Logo = ({ className, size = "md", showTagline = true, animate = false }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-7xl",
  };

  const taglineSizes = {
    sm: "text-[8px] px-2 py-0.5",
    md: "text-[10px] px-3 py-1",
    lg: "text-xs px-4 py-1.5",
    xl: "text-sm px-5 py-2",
  };

  const letters = "Twinkling Petals".split("");
  const colors = [
    "text-rainbow-red",
    "text-rainbow-orange", 
    "text-rainbow-yellow",
    "text-rainbow-green",
    "text-rainbow-blue",
    "text-rainbow-purple",
    "text-rainbow-pink",
    "text-rainbow-red",
    "text-rainbow-orange",
    "text-rainbow-yellow",
    "text-rainbow-green",
    "text-rainbow-blue",
    "text-rainbow-purple",
    "text-rainbow-pink",
    "text-rainbow-red",
    "text-rainbow-orange",
  ];

  const MotionWrapper = animate ? motion.div : "div";
  const MotionSpan = animate ? motion.span : "span";

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <MotionWrapper
        className={cn("font-display font-bold tracking-tight", sizeClasses[size])}
        {...(animate && {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, ease: "easeOut" },
        })}
      >
        {letters.map((letter, index) => (
          <MotionSpan
            key={index}
            className={cn(
              letter === " " ? "mx-1" : colors[index % colors.length],
              "inline-block"
            )}
            {...(animate && {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 + index * 0.03, duration: 0.4 },
            })}
          >
            {letter === " " ? "\u00A0" : letter}
          </MotionSpan>
        ))}
      </MotionWrapper>

      {showTagline && (
        <motion.div
          className={cn(
            "mt-2 rounded-full bg-secondary text-secondary-foreground font-display font-semibold uppercase tracking-wider",
            taglineSizes[size]
          )}
          {...(animate && {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.8, duration: 0.4 },
          })}
        >
          Pre School / Day Care
        </motion.div>
      )}
    </div>
  );
};

export default Logo;

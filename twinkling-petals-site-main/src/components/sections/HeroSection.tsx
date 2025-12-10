import { motion } from "framer-motion";
import { Phone, Sparkles, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Day Care"];

const infoChips = [
  { icon: Clock, text: "8 AM – 7 PM Day Care" },
  { icon: Shield, text: "CCTV Surveillance" },
  { icon: Users, text: "Small Classes" },
];

const HeroSection = () => {
  const scrollToAdmissions = () => {
    const element = document.getElementById("admissions");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient-bg"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pastel-yellow opacity-60"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-16 w-48 h-48 rounded-full bg-pastel-green opacity-50"
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-pastel-blue opacity-50"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-pastel-purple opacity-40"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-display font-medium text-foreground/80">
                CREATIVE LEARNING • 18 MONTHS – 12 YEARS
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              A joyful start to your child's{" "}
              <span className="gradient-rainbow-text">learning journey</span>.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Where every child blossoms in a safe, fun, and colourful environment. 
              Our expert educators nurture curiosity and creativity through play-based learning.
            </motion.p>

            {/* Program Pills */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {programs.map((program, index) => (
                <motion.span
                  key={program}
                  className="px-4 py-2 rounded-full bg-white shadow-soft text-sm font-display font-medium text-foreground/80 hover:shadow-card transition-shadow cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {program}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button variant="hero" size="xl" onClick={scrollToAdmissions}>
                <Sparkles className="w-5 h-5" />
                Enquire Now
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="tel:+919035854071">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </Button>
            </motion.div>

            {/* Info Chips */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {infoChips.map((chip, index) => (
                <div
                  key={chip.text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <chip.icon className="w-4 h-4 text-secondary" />
                  <span>{chip.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Mascot Card */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-white shadow-card overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Placeholder for mascot - colorful gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink via-pastel-yellow to-pastel-green" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <motion.div
                      className="text-8xl mb-4"
                      animate={{ rotate: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🌸
                    </motion.div>
                    <p className="font-display font-bold text-xl text-foreground/80">
                      Where Learning Blooms
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-rainbow-yellow shadow-card flex items-center justify-center text-2xl"
                animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl bg-rainbow-green shadow-card flex items-center justify-center text-2xl"
                animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                🎨
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-rainbow-blue shadow-card flex items-center justify-center text-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                📚
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

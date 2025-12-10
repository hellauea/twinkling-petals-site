import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import GallerySection from "@/components/sections/GallerySection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Logo from "@/components/Logo";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setShowIntro(false);
    } else {
      // Auto-dismiss intro after animation
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background decorative shapes */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 rounded-full bg-pastel-pink"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.div
              className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-pastel-yellow"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.div
              className="absolute top-40 right-32 w-20 h-20 rounded-full bg-pastel-green"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />

            {/* Main logo */}
            <Logo size="xl" animate />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Always rendered, just hidden during intro */}
      <motion.div 
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, delay: showIntro ? 0 : 0.2 }}
      >
        <Navbar showLogo={!showIntro} />
        
        <main>
          <HeroSection />
          <ProgramsSection />
          <WhyUsSection />
          <GallerySection />
          <AdmissionsSection />
          <ContactSection />
        </main>

        <Footer />
        <FloatingButtons />
      </motion.div>
    </>
  );
};

export default Index;

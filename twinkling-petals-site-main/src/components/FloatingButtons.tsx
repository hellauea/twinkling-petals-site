import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToAdmissions = () => {
    const element = document.getElementById("admissions");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    {
      icon: GraduationCap,
      label: "Admissions",
      variant: "fab-primary" as const,
      onClick: scrollToAdmissions,
      delay: 0,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      variant: "fab-whatsapp" as const,
      href: "https://wa.me/919035854071",
      delay: 0.1,
    },
    {
      icon: Phone,
      label: "Call Us",
      variant: "fab-secondary" as const,
      href: "tel:+919035854071",
      delay: 0.2,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          {buttons.map((button, index) => (
            <motion.div
              key={button.label}
              initial={{ opacity: 0, scale: 0.3, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.3, y: 20 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 300,
                delay: button.delay,
              }}
            >
              {button.href ? (
                <Button
                  variant={button.variant}
                  size="fab"
                  asChild
                  aria-label={button.label}
                >
                  <a
                    href={button.href}
                    target={button.href.startsWith("http") ? "_blank" : undefined}
                    rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <button.icon className="w-6 h-6" />
                  </a>
                </Button>
              ) : (
                <Button
                  variant={button.variant}
                  size="fab"
                  onClick={button.onClick}
                  aria-label={button.label}
                >
                  <button.icon className="w-6 h-6" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;

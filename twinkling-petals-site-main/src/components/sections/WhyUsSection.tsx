import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Music,
  Heart,
  PartyPopper,
  Mic,
  Zap,
  GraduationCap,
  MessageCircle,
  Gamepad2,
} from "lucide-react";

const features = [
  { icon: Shield, title: "CCTV Surveillance", description: "24/7 security monitoring" },
  { icon: Users, title: "Low Student-Teacher Ratio", description: "Personalized attention" },
  { icon: Music, title: "Co-Curriculars", description: "Music, dance & art" },
  { icon: Heart, title: "Safe Atmosphere", description: "Child-friendly spaces" },
  { icon: PartyPopper, title: "Celebrations", description: "Festivals & events" },
  { icon: Mic, title: "Stage Exposure", description: "Build confidence" },
  { icon: Zap, title: "Power Backup", description: "Uninterrupted learning" },
  { icon: GraduationCap, title: "Expert Staff", description: "Trained educators" },
  { icon: MessageCircle, title: "Communication Skills", description: "Speech development" },
  { icon: Gamepad2, title: "Indoor Play", description: "Safe play areas" },
];

const WhyUsSection = () => {
  return (
    <section id="why" className="py-20 md:py-28 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pastel-yellow via-pastel-pink to-pastel-green opacity-30"
        style={{
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-display font-semibold text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Everything Your Child Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide a nurturing environment with world-class facilities and dedicated care.
          </p>
        </motion.div>

        {/* Features Grid - Wooden Board Style */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Board background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl shadow-card transform rotate-1" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl shadow-card" />

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative pins */}
          <div className="absolute -top-3 left-1/4 w-6 h-6 rounded-full bg-rainbow-red shadow-lg" />
          <div className="absolute -top-3 right-1/4 w-6 h-6 rounded-full bg-rainbow-blue shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;

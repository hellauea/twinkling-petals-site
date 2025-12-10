import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap, Award, Sun } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Playgroup",
    age: "18 months – 2.5 years",
    color: "bg-pastel-pink",
    iconColor: "text-rainbow-pink",
    features: [
      "Sensory play activities",
      "Early social interaction",
      "Music & movement sessions",
    ],
  },
  {
    icon: BookOpen,
    title: "Nursery",
    age: "2.5 – 3.5 years",
    color: "bg-pastel-yellow",
    iconColor: "text-rainbow-orange",
    features: [
      "Pre-reading & pre-writing",
      "Creative arts & crafts",
      "Basic number concepts",
    ],
  },
  {
    icon: GraduationCap,
    title: "Junior KG (LKG)",
    age: "3.5 – 4.5 years",
    color: "bg-pastel-green",
    iconColor: "text-rainbow-green",
    features: [
      "Phonics introduction",
      "Math foundations",
      "Environmental awareness",
    ],
  },
  {
    icon: Award,
    title: "Senior KG (UKG)",
    age: "4.5 – 5.5 years",
    color: "bg-pastel-blue",
    iconColor: "text-rainbow-blue",
    features: [
      "School readiness program",
      "Reading & writing skills",
      "Critical thinking activities",
    ],
  },
  {
    icon: Sun,
    title: "Day Care",
    age: "18 months – 12 years",
    color: "bg-pastel-purple",
    iconColor: "text-rainbow-purple",
    features: [
      "Extended hours (8AM – 7PM)",
      "Nutritious meals included",
      "Homework assistance",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-display font-semibold text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our Programs
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Programs Tailored for Every Age
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From playgroup to day care, we offer comprehensive programs designed to nurture 
            your child's growth at every stage.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <program.icon className={`w-7 h-7 ${program.iconColor}`} />
              </div>

              {/* Title & Age */}
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-4">
                {program.age}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {program.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/70 flex items-start gap-2"
                  >
                    <span className="text-secondary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 ${program.color} opacity-20 rounded-bl-3xl rounded-tr-2xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

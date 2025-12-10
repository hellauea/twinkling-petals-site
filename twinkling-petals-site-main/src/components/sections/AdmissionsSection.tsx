import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const infoItems = [
  {
    icon: CalendarDays,
    title: "Admissions Open",
    description: "For academic year 2025-26",
  },
  {
    icon: Users,
    title: "Age Groups",
    description: "18 months to 12 years",
  },
  {
    icon: Clock,
    title: "Preschool Timings",
    description: "9:00 AM – 12:30 PM",
  },
  {
    icon: Clock,
    title: "Day Care Timings",
    description: "8:00 AM – 7:00 PM",
  },
];

const classOptions = [
  { value: "playgroup", label: "Playgroup" },
  { value: "nursery", label: "Nursery" },
  { value: "junior-kg", label: "Junior KG (LKG)" },
  { value: "senior-kg", label: "Senior KG (UKG)" },
  { value: "daycare", label: "Day Care" },
];

const AdmissionsSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    phone: "",
    email: "",
    classType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="admissions" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Admissions
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Begin Your Child's{" "}
              <span className="gradient-rainbow-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Take the first step towards a bright future. Fill out the enquiry
              form and our team will reach out to you within 24 hours.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4 rounded-2xl bg-muted/50 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 text-secondary mb-2" />
                  <h3 className="font-display font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.p
              className="mt-6 text-sm text-muted-foreground flex items-start gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
              Small class sizes ensure personalized attention for every child.
            </motion.p>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl shadow-card p-6 md:p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-pastel-pink to-pastel-yellow opacity-50" />

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your enquiry has been submitted successfully. We'll contact
                    you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        childName: "",
                        childAge: "",
                        parentName: "",
                        phone: "",
                        email: "",
                        classType: "",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    Enquiry Form
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Child's Name *</Label>
                      <Input
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="Enter child's name"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Child's Age *</Label>
                      <Input
                        id="childAge"
                        name="childAge"
                        type="number"
                        min="1"
                        max="12"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="Age in years"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent's Name *</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent's name"
                      required
                      className="rounded-xl"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="classType">Select Class</Label>
                    <Select
                      value={formData.classType}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, classType: value }))
                      }
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Choose a program" />
                      </SelectTrigger>
                      <SelectContent>
                        {classOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific questions or requirements?"
                      rows={3}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;

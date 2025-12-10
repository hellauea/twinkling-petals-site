import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
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
            Contact Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Visit us or reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* School Name */}
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Twinkling Petals
              </h3>
              <p className="text-secondary font-display font-semibold">
                Pre School / Day Care
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Address */}
              <motion.div
                className="flex gap-4 p-4 rounded-2xl bg-card shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-xl bg-pastel-pink flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rainbow-pink" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Address
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    701, 7th Cross, KHB Colony Main Rd,
                    <br />
                    Kaval Bairasandra, Bengaluru,
                    <br />
                    Karnataka 560032
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.a
                href="tel:+919035854071"
                className="flex gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-pastel-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-rainbow-green" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Phone
                  </h4>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    +91 90358 54071
                  </p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:twinklingpetalspreschool@gmail.com"
                className="flex gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-pastel-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-rainbow-blue" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Email
                  </h4>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors break-all">
                    twinklingpetalspreschool@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div
                className="flex gap-4 p-4 rounded-2xl bg-card shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-pastel-yellow flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-rainbow-orange" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    School Hours
                  </h4>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p>Saturday: 9:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3899481279413!2d77.58784!3d13.0226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzIxLjQiTiA3N8KwMzUnMTYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Twinkling Petals Location"
              className="absolute inset-0"
            />
            
            {/* Fallback overlay with location info */}
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/80 to-pastel-blue/80 flex items-center justify-center">
              <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-card max-w-xs">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-display font-bold text-lg text-foreground mb-2">
                  Find Us Here
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  KHB Colony Main Rd, Kaval Bairasandra, Bengaluru
                </p>
                <a
                  href="https://maps.google.com/?q=13.0226,77.58784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

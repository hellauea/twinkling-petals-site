import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "/images/hero-banner.jpeg",
    caption: "Joyful moments at Twinkling Petals",
    alt: "Children playing happily at Twinkling Petals Preschool",
  },
  {
    id: 2,
    src: "/images/classroom-activity.jpeg",
    caption: "Interactive classroom activities",
    alt: "Children participating in a classroom activity",
  },
  {
    id: 3,
    src: "/images/outdoor-play.jpeg",
    caption: "Safe outdoor play in our play area",
    alt: "Kids playing in the outdoor play area",
  },
  {
    id: 4,
    src: "/images/teacher-with-kids.jpeg",
    caption: "Caring teachers with children",
    alt: "Teacher guiding a group of children",
  },
  {
    id: 5,
    src: "/images/school-facility.jpeg",
    caption: "Bright and cheerful facilities",
    alt: "Preschool classroom and facilities",
  },
  {
    id: 6,
    src: "/images/preschool-logo.jpeg",
    caption: "Twinkling Petals identity",
    alt: "Twinkling Petals Preschool logo",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] =
    useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/30">
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
            className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground font-display font-semibold text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Gallery
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Glimpses of Joy (TEST)
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the vibrant world of Twinkling Petals through our gallery.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-hover transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Actual image */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display font-semibold text-sm md:text-base">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-hover bg-black"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white font-display font-bold text-lg">
                    {selectedImage.caption}
                  </p>
                </div>

                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close gallery"
                >
                  <X className="w-6 h-6" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;

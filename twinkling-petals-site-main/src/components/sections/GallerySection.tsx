import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    caption: "Art & Craft Activities",
    color: "from-rainbow-pink to-rainbow-orange",
    emoji: "🎨",
  },
  {
    id: 2,
    caption: "Outdoor Play Time",
    color: "from-rainbow-green to-rainbow-blue",
    emoji: "🌳",
  },
  {
    id: 3,
    caption: "Learning Through Play",
    color: "from-rainbow-yellow to-rainbow-orange",
    emoji: "🧩",
  },
  {
    id: 4,
    caption: "Music & Dance",
    color: "from-rainbow-purple to-rainbow-pink",
    emoji: "🎵",
  },
  {
    id: 5,
    caption: "Festival Celebrations",
    color: "from-rainbow-orange to-rainbow-yellow",
    emoji: "🎉",
  },
  {
    id: 6,
    caption: "Story Time Sessions",
    color: "from-rainbow-blue to-rainbow-purple",
    emoji: "📚",
  },
  {
    id: 7,
    caption: "Science Exploration",
    color: "from-rainbow-green to-rainbow-yellow",
    emoji: "🔬",
  },
  {
    id: 8,
    caption: "Annual Day Performance",
    color: "from-rainbow-pink to-rainbow-purple",
    emoji: "🎭",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

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
            Glimpses of Joy
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
              {/* Gradient background as placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.color}`} />
              
              {/* Emoji placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-7xl opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300">
                  {image.emoji}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
                className="relative max-w-3xl w-full aspect-square rounded-3xl overflow-hidden shadow-hover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedImage.color}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-9xl mb-4">{selectedImage.emoji}</span>
                  <p className="text-white font-display font-bold text-2xl">
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

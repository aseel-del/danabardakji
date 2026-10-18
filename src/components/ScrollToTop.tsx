import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleIcon } from "./common/GoogleIcon";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-[5.5rem] right-5 sm:right-7 z-40 group floating-scroll-to-top"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.9 }}
            animate={
              isClicked
                ? { y: [0, -14, 0] }
                : { y: [0, -4, 0] }
            }
            transition={
              isClicked
                ? { duration: 0.6, ease: "easeOut" }
                : { repeat: Infinity, duration: 2.4, ease: "easeInOut" }
            }
            className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-navy/90 hover:bg-brand-navy text-brand-mint border border-brand-mint/40 shadow-soft-lg hover:shadow-mint-glow backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            {/* Ambient glow ring */}
            <span className="absolute inset-0 rounded-2xl bg-brand-mint/20 animate-ping opacity-25 pointer-events-none" />

            <motion.div
              animate={isClicked ? { y: -25, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <GoogleIcon name="arrow_upward" className="text-xl text-brand-mint group-hover:text-white transition-colors" />
            </motion.div>

            {/* Cute trailing dot */}
            <span className="absolute bottom-1.5 w-1 h-1 rounded-full bg-brand-gold group-hover:scale-150 transition-transform" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

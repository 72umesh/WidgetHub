import { motion } from "framer-motion";
function HeroSection() {
  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {" "}
        Explore, Test, and Use Interactive Widgets!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {" "}
        A collection of mini-projects and components built with React. Browse,
        try, and integrate them into your projects easily!
      </motion.p>
    </section>
  );
}
export default HeroSection;

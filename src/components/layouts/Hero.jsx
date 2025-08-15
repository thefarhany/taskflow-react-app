import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Manage tasks with ease using{" "}
          <span className="text-primary">TaskFlow</span>
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Organize projects, track progress, and boost productivity. Everything
          you need to stay on top of your workflow.
        </p>

        <div className="mt-6">
          <Button size="lg">Start Free Trial</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="w-full max-w-md h-64 bg-muted rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-muted-foreground">[App Mockup]</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

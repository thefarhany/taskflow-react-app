import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";

const CTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <motion.div
        className="container mx-auto text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap tingkatkan produktivitas tim Anda?
        </h2>
        <p className="mb-8 text-lg">
          Bergabunglah dengan ribuan tim yang sudah menggunakan TaskFlow untuk
          bekerja lebih efektif.
        </p>
        <Button size="lg" variant="secondary">
          Join Now
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;

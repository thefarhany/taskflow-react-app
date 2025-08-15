import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      q: "Apa itu TaskFlow?",
      a: "TaskFlow adalah aplikasi manajemen tugas dan proyek yang membantu individu maupun tim untuk tetap terorganisir.",
    },
    {
      q: "Apakah ada versi gratis?",
      a: "Ya, tersedia paket Free dengan fitur dasar seperti hingga 3 proyek dan task management sederhana.",
    },
    {
      q: "Bisakah saya berkolaborasi dengan tim?",
      a: "Tentu! Paket Pro dan Enterprise mendukung kolaborasi tim, pembagian peran, dan fitur tambahan lainnya.",
    },
    {
      q: "Apakah data saya aman?",
      a: "Kami menggunakan enkripsi standar industri dan opsi integrasi keamanan tambahan untuk pelanggan Enterprise.",
    },
    {
      q: "Bagaimana jika butuh bantuan?",
      a: "Tersedia dokumentasi lengkap, support via email, serta dedicated support untuk paket Enterprise.",
    },
    {
      q: "Apakah saya bisa membatalkan kapan saja?",
      a: "Ya, Anda bebas upgrade, downgrade, atau membatalkan langganan kapan saja.",
    },
  ];

  return (
    <section id="faq" className="container mx-auto px-4 py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-2">
          Jawaban untuk pertanyaan yang sering ditanyakan tentang TaskFlow.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;

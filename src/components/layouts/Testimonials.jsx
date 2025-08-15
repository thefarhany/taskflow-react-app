import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "https://i.pravatar.cc/150?img=32",
      quote:
        "TaskFlow has completely changed how our team collaborates. Simple, elegant, and super effective!",
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/150?img=12",
      quote:
        "The best task manager I've used so far. Clean design and intuitive to use every day.",
    },
    {
      name: "Emily Clark",
      role: "Freelancer",
      image: "https://i.pravatar.cc/150?img=25",
      quote:
        "Managing multiple clients is no longer stressful thanks to TaskFlow. Highly recommended!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="container mx-auto px-4 py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">What our users say</h2>
        <p className="text-muted-foreground mt-2">
          Trusted by professionals across industries.
        </p>
      </motion.div>

      <div className="relative flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl"
          >
            <Card>
              <CardHeader className="flex flex-col items-center text-center">
                <Avatar className="w-16 h-16 mb-4">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="italic text-muted-foreground">
                  “{testimonial.quote}”
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

import { BarChart, CheckCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Easy Task Management",
      description:
        "Create, update, and track tasks with a simple and intuitive interface.",
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
    },
    {
      title: "Smart Scheduling",
      description:
        "Plan your days efficiently with calendar integration and reminders.",
      icon: <Clock className="w-8 h-8 text-primary" />,
    },
    {
      title: "Collaboration",
      description:
        "Invite teammates, assign roles, and work together seamlessly.",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track productivity and project progress with visual insights.",
      icon: <BarChart className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 md:px-8 py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
        <p className="text-muted-foreground mt-2">
          Everything you need to boost productivity and manage your workflow.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-3">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

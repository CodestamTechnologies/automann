"use client";

import { motion } from "framer-motion";
import { Heart, Users, DollarSign, Home, Phone } from "lucide-react";

const helpOptions = [
  {
    icon: Heart,
    title: "Adopt",
    description: "Give a loving home to an animal in need. Our adoption process is designed to ensure the perfect match for both you and your new family member.",
    features: ["Free adoption counseling", "Health check included", "30-day trial period", "Lifetime support"],
    color: "from-primary to-accent",
    action: "Browse Animals"
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our community of dedicated volunteers. From walking dogs to helping with events, there&apos;s a way for everyone to make a difference.",
    features: ["Flexible schedules", "Training provided", "Community events", "Make new friends"],
    color: "from-accent to-primary",
    action: "Join Us"
  },
  {
    icon: DollarSign,
    title: "Donate",
    description: "Your financial support helps us provide medical care, food, and shelter for animals in need. Every dollar makes a difference.",
    features: ["Tax deductible", "Monthly giving options", "Sponsor an animal", "See your impact"],
    color: "from-primary to-accent",
    action: "Donate Now"
  },
  {
    icon: Home,
    title: "Foster",
    description: "Provide temporary care for animals while they wait for their forever homes. Perfect for those who can&apos;t commit to permanent adoption.",
    features: ["All supplies provided", "Medical care covered", "Support network", "Flexible duration"],
    color: "from-accent to-primary",
    action: "Apply to Foster"
  }
];

const urgentNeeds = [
  {
    title: "Emergency Medical Fund",
    description: "Help us cover urgent medical expenses for injured animals",
    amount: "$5,000",
    progress: 75
  },
  {
    title: "Winter Shelter Supplies",
    description: "Provide warm bedding and heating for our winter shelter",
    amount: "$2,500",
    progress: 60
  },
  {
    title: "Mobile Vet Clinic",
    description: "Support our mobile clinic serving rural communities",
    amount: "$8,000",
    progress: 45
  }
];

export default function HowToHelp() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-6">
            How You Can <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Help</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to make a difference in the lives of animals in need. 
            Choose the option that works best for you and your lifestyle.
          </p>
        </motion.div>

        {/* Help Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {helpOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="story-frame rounded-2xl p-8 hover:soft-glow transition-all duration-500 gentle-scale h-full">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <option.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {option.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {option.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r ${option.color} text-primary-foreground font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                >
                  {option.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgent Needs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Urgent Needs
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These critical needs require immediate attention. Your support can make all the difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {urgentNeeds.map((need, index) => (
            <motion.div
              key={need.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rescue-card rounded-2xl p-6"
            >
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {need.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {need.description}
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{need.progress}%</span>
                </div>
                <div className="w-full bg-secondary/50 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${need.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">{need.amount}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Donate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="story-frame rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Emergency Rescue</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Found an animal in distress? We&apos;re available 24/7 for emergency rescues.
            </p>
            <a
              href="tel:5551234357"
              className="inline-flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>(555) 123-HELP</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




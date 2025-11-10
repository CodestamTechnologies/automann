"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Do I need coding knowledge to use this platform?",
    answer: "No coding knowledge is required! Our platform is designed with a user-friendly drag-and-drop interface. You can build chatbots, set up campaigns, and automate messages without writing a single line of code.",
  },
  {
    id: 2,
    question: "Is this using the official WhatsApp API?",
    answer: "Yes, we use the official WhatsApp Business API. This ensures reliability, security, and compliance with WhatsApp's policies. Your messages are sent through WhatsApp's official infrastructure.",
  },
  {
    id: 3,
    question: "How many messages can I send per month?",
    answer: "Message limits depend on your plan. Starter plan includes up to 1,000 messages/month, Growth plan includes up to 10,000 messages/month, and Pro Partner plan includes unlimited messages. You can also purchase additional message credits if needed.",
  },
  {
    id: 4,
    question: "Can I integrate with my existing CRM?",
    answer: "Yes! We support integrations with popular CRMs like HubSpot, Zoho, Salesforce, and more. You can also use our API or webhooks to connect with custom systems. Our team can help you set up the integration.",
  },
  {
    id: 5,
    question: "How does the chatbot builder work?",
    answer: "Our chatbot builder uses a visual flow editor. Simply drag and drop conversation blocks, set up triggers, and define responses. You can create complex conversation flows, add AI-powered responses, and even integrate with external APIs.",
  },
  {
    id: 6,
    question: "What kind of support do you provide?",
    answer: "Support varies by plan. Starter includes email support, Growth includes priority support, and Pro Partner includes dedicated account management. All plans include access to our knowledge base and video tutorials.",
  },
  {
    id: 7,
    question: "Can I use multiple WhatsApp numbers?",
    answer: "Yes! Growth and Pro Partner plans support multiple WhatsApp numbers. This is perfect for agencies managing multiple clients or businesses with different departments. Each number can have its own chatbot and campaigns.",
  },
  {
    id: 8,
    question: "Is there a free trial?",
    answer: "Yes, all plans include a free trial period. You can test all features without any credit card required. Contact us to start your free trial and see how WhatsApp automation can transform your business.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-green-400/8 to-emerald-500/8 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e05_1px,transparent_1px),linear-gradient(to_bottom,#22c55e05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative green elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px green-accent-line"></div>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="feature-icon mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50">
            <HelpCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
            <span className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about WhatsApp automation
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="minimal-card overflow-hidden border border-green-100/50 dark:border-green-900/30 hover:border-green-300/50 dark:hover:border-green-700/50 bg-gradient-to-br from-green-50/20 to-emerald-50/10 dark:from-green-950/15 dark:to-emerald-950/10"
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-50/50 dark:hover:bg-green-950/20 transition-colors"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors"
          >
            Contact Support
            <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


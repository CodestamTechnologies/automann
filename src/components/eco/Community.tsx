"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Calendar, Star, Quote } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Wellness Coach",
      avatar: "https://maxm-imggenurl.web.val.run/professional headshot of asian woman smiling, natural lighting, wellness coach, friendly appearance",
      content: "EcoVibe has transformed how I approach sustainable living. The community support and quality products make the journey so much easier.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Environmental Scientist",
      avatar: "https://maxm-imggenurl.web.val.run/professional headshot of african american man, scientist, friendly smile, natural background",
      content: "As a scientist, I appreciate the research-backed approach to sustainability. The impact metrics are impressive and transparent.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Yoga Instructor",
      avatar: "https://maxm-imggenurl.web.val.run/professional headshot of latina woman, yoga instructor, peaceful expression, natural setting",
      content: "The mindful approach to sustainable living aligns perfectly with my yoga practice. This community truly understands holistic wellness.",
      rating: 5
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "25,000+", icon: Users },
    { label: "Monthly Discussions", value: "1,200+", icon: MessageCircle },
    { label: "Events Hosted", value: "150+", icon: Calendar },
    { label: "Average Rating", value: "4.9/5", icon: Star }
  ];

  const upcomingEvents = [
    {
      title: "Zero Waste Workshop",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      attendees: 45,
      type: "Virtual"
    },
    {
      title: "Sustainable Gardening Meetup",
      date: "March 22, 2024",
      time: "10:00 AM EST",
      attendees: 28,
      type: "In-Person"
    },
    {
      title: "Mindful Living Circle",
      date: "March 29, 2024",
      time: "7:00 PM EST",
      attendees: 62,
      type: "Virtual"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Our Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join Like-Minded Souls
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of people who share your passion for sustainable living and conscious choices.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-background rounded-2xl p-6 organic-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-3"
              >
                <stat.icon className="h-6 w-6" />
              </motion.div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8"
            >
              What Our Community Says
            </motion.h3>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-background rounded-2xl p-6 organic-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          • {testimonial.role}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                        <p className="text-muted-foreground italic pl-4">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8"
            >
              Upcoming Events
            </motion.h3>

            <div className="space-y-4 mb-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 organic-shadow hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Virtual' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-2">
                    {event.date} • {event.time}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {event.attendees} attending
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                    >
                      Join Event
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Community CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-earth rounded-2xl p-8 text-center text-white"
            >
              <h4 className="text-xl font-bold mb-3">
                Ready to Join Our Community?
              </h4>
              <p className="text-white/90 mb-6">
                Connect with like-minded individuals and start your sustainable living journey together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Join Community
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
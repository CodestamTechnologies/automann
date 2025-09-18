"use client";

import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart, Leaf } from "lucide-react";
import { useState } from "react";

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Bamboo Fiber Yoga Mat",
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 234,
      image: "https://maxm-imggenurl.web.val.run/premium bamboo yoga mat on wooden floor, natural lighting, eco-friendly fitness equipment, sustainable materials, zen atmosphere",
      badge: "Best Seller",
      description: "Made from 100% organic bamboo fiber with natural rubber base"
    },
    {
      id: 2,
      name: "Organic Cotton Tote Bag Set",
      price: 45,
      originalPrice: 65,
      rating: 4.9,
      reviews: 189,
      image: "https://maxm-imggenurl.web.val.run/set of organic cotton tote bags in natural colors, reusable shopping bags, eco-friendly lifestyle, sustainable fashion",
      badge: "Eco Choice",
      description: "Set of 3 reusable bags made from certified organic cotton"
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      price: 32,
      originalPrice: 45,
      rating: 4.7,
      reviews: 456,
      image: "https://maxm-imggenurl.web.val.run/sleek stainless steel water bottle with bamboo cap, outdoor setting, sustainable hydration, eco-friendly design",
      badge: "Popular",
      description: "Double-walled insulation with bamboo cap and leak-proof design"
    },
    {
      id: 4,
      name: "Natural Skincare Gift Set",
      price: 78,
      originalPrice: 95,
      rating: 4.9,
      reviews: 312,
      image: "https://maxm-imggenurl.web.val.run/luxury natural skincare products gift set, organic cosmetics, botanical ingredients, spa-like presentation",
      badge: "New",
      description: "Complete skincare routine with organic botanical ingredients"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf className="h-4 w-4" />
            <span>Featured Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sustainable Essentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of eco-friendly products that make sustainable living effortless and beautiful.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group relative bg-card rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
              >
                <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500" />
              </motion.button>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredProduct === product.id ? 1 : 0,
                  y: hoveredProduct === product.id ? 0 : 20
                }}
                className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <span>View All Products</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
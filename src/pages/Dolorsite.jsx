import React from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  Box,
  Lightbulb,
  HandCoins,
  Gem,
  Settings,
  TrendingUp,
  Puzzle,
  Target,
} from "lucide-react";

const Dolorsite = () => {
  const items = [
    {
      icon: BarChart2,
      title: "Build a Portfolio",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: Box,
      title: "Smart Project Design",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: HandCoins,
      title: "Earn Cryption Tokens",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: Gem,
      title: "Secure Investments",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: Settings,
      title: "Custom Strategies",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: TrendingUp,
      title: "Blockchain Advisory",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: Puzzle,
      title: "Legal Framework",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
    {
      icon: Target,
      title: "ICO/TGE Promotion",
      description:
        "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Lorem Ipsum
        </h2>
        <h3 className="text-6xl font-light text-black mb-8">
          Dolor Sit Amet
        </h3>
        <p className="text-gray-600 max-w-7xl mx-auto text-2xl mt-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-12xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 px-6">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-start space-x-8 text-left p-6   transition-all duration-300"
            >
              {/* Animated Icon */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <IconComponent size={80} className="text-green-500 flex-shrink-0" />
              </motion.div>

              {/* Text Content */}
              <div>
                <h4 className="text-3xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dolorsite;

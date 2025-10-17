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
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          Lorem Ipsum
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-black mb-6">
          Dolor Sit Amet
        </h3>
        <p className="text-gray-600 max-w-5xl mx-auto text-base sm:text-lg md:text-2xl mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 px-4 sm:px-8 md:px-12">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <IconComponent size={60} className="text-green-500 flex-shrink-0" />
              </div>

              {/* Text */}
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Dolorsite;

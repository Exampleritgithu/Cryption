import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive portfolio website built using React.js and Tailwind CSS to showcase my projects and skills.",
    image: "https://picsum.photos/seed/portfolio/400/250",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack online store built with React, Node.js, and MongoDB with product filtering, user authentication, and cart functionality.",
    image: "https://picsum.photos/seed/ecommerce/400/250",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather App",
    description:
      "A weather forecasting app using OpenWeather API with live search and responsive design for mobile and desktop.",
    image: "https://picsum.photos/seed/weather/400/250",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "School Management System",
    description:
      "A web-based platform for managing student records, attendance, grading, and communication, built with Django and React.",
    image: "https://picsum.photos/seed/school/400/250",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Restaurant Finder App",
    description:
      "A React Native mobile app that helps users find nearby restaurants, view menus, and read reviews using Google Maps API.",
    image: "https://picsum.photos/seed/restaurant/400/250",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Travel Blog Platform",
    description:
      "A blogging platform for travelers built with Next.js and Firebase, featuring authentication, photo uploads, and SEO optimization.",
    image: "https://picsum.photos/seed/travel/400/250",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Online Learning Portal",
    description:
      "A learning management system with video courses, quizzes, and progress tracking using MERN stack.",
    image: "https://picsum.photos/seed/learning/400/250",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app using Socket.io and Node.js allowing users to join rooms, send messages, and share files.",
    image: "https://picsum.photos/seed/chat/400/250",
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          My <span className="text-green-500">Portfolio</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
          Here are some of my favorite projects I've worked on. Each one was
          created with passion, attention to detail, and a focus on solving
          real-world problems.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-semibold hover:underline"
                >
                  View Project
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

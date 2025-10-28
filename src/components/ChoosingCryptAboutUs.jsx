import React from "react";

const services = [
  {
    id: 1,
    title: "Smart Wallet",
    image:
      "https://images.unsplash.com/photo-1518443998063-18e426bb6b86?auto=format&fit=crop&w=800&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
  },
  {
    id: 2,
    title: "Lifetime Support",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
  },
  {
    id: 3,
    title: "Quality Services",
    image:
      "https://images.unsplash.com/photo-1581092334442-2f12d4b3e8d6?auto=format&fit=crop&w=800&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
  },
];

const ChoosingCryptAboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Why Choosing <span className="text-emerald-500">Crypt</span>
        </h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-block border-2 border-emerald-500 text-emerald-500 font-bold px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-white transition"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosingCryptAboutUs;

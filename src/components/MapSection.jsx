import React from "react";

const MapSection = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Google Map Embed */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.97874447635!2d-73.98715533714574!3d40.75889537577264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d2a3d7d7%3A0xdbc5cd09b35f6b8e!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1688700888698!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 grayscale"
      ></iframe>

      {/* Optional overlay with location info */}
      <div className="absolute top-8 left-8 bg-white shadow-md p-4 rounded-md max-w-xs">
        <h2 className="text-lg font-semibold text-gray-800">Manhattan</h2>
        <p className="text-gray-500 text-sm">New York, NY, USA</p>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Manhattan,+New+York,+NY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:underline text-sm"
        >
          View larger map
        </a>
      </div>
    </section>
  );
};

export default MapSection;

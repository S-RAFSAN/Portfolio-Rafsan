// @flow strict
import React from "react";

// Example certificates data
const certificates = [
  {
    title: "Complete Web Development Course With Programming Hero",
    issuer: "Programming Hero",
    year: "",
    image: "/course-2.png",
    link: "https://web.programming-hero.com/course-details",
    description:
      "Completed the Complete Web Development Course With Programming Hero. This course helped me strengthen my understanding of web development concepts and essential for building efficient and scalable applications.",
  },
  {
    title: "Next Level Web Development Course With Programming Hero",
    issuer: "Programming Hero",
    year: "",
    image: "/course-3.jpg",
    link: "https://next.programming-hero.com/",
    description:
      "Completed the Next Level Web Development Course With Programming Hero. This course helped me strengthen my understanding of web development concepts and essential for building efficient and scalable applications.",
  },
  {
    title: "Full Stack Web Development with JavaScript (MERN)",
    issuer: "Ostad",
    year: "",
    image: "/course-1.jpg",
    link: "https://ostad.app/course/mern",
    description:
      "Completed the Full Stack Web Development with JavaScript (MERN) Course With Ostad. This course helped me strengthen my understanding of web development concepts and essential for building efficient and scalable applications.",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-gradient-to-b from-[#0d1224] via-[#111637] to-[#0d1224] py-20 text-white overflow-hidden"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wide">
          <span className="bg-gradient-to-r from-[#16f2b3] to-[#4ad7ff] bg-clip-text text-transparent">
            COURSES & TRAININGS
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl shadow-lg hover:shadow-[#16f2b3]/40 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#16f2b3]/40 transition-all duration-500"></div>

              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-46 object-contain mb-4 rounded-md transition-transform duration-500 group-hover:scale-105"
              />

              <h3 className="text-lg font-semibold mb-1 text-[#16f2b3] group-hover:text-[#4ad7ff] transition-colors duration-300">
                {cert.title}
              </h3>

              <p className="text-xs text-gray-400 mb-2">
                {cert.issuer} • {cert.year}
              </p>
              <p className="text-sm text-gray-300 leading-snug">
                {cert.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

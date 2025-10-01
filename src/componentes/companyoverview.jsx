import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";
import img11 from "../assets/img/img11.png";
import img12 from "../assets/img/img12.png";
import img13 from "../assets/img/img13.png";
import img14 from "../assets/img/img14.png";

const Companyoverview = () => {
  const images = [img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
  const [startIndex, setStartIndex] = useState(0);

  // Auto slide every 1 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Select 5 images at a time
  const visibleImages = [
    ...images.slice(startIndex, startIndex + 5),
    ...(startIndex + 5 > images.length
      ? images.slice(0, (startIndex + 5) % images.length)
      : []),
  ];

  return (
    <div>
      {/* First Motion Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 2, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.6,
        }}
        viewport={{ once: false }}
        className="grid grid-cols-2 gap-10 px-20 py-16 items-center"
      >
        {/* Left Section */}
        <div>
          <h1 className="text-6xl font-semibold leading-tight">
            Translating <br />
            technology into a <br />
            positive impact
          </h1>
          <p className="text-md mt-6 text-gray-600">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let’s rise to new heights
            with the power of digital transformation.
          </p>
          <button className="mt-6 text-orange-600 font-semibold hover:underline">
            LEARN MORE →
          </button>
        </div>

        {/* Right Section with Vertical Line */}
        <div className="relative pl-10">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-10 text-center">
            <div>
              <h2 className="text-5xl font-bold">48+</h2>
              <p className="text-gray-600">Years of continual excellence</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold">7700+</h2>
              <p className="text-gray-600">Change makers driving revolution</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold">16+</h2>
              <p className="text-gray-600">Countries with our presence</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold">300+</h2>
              <p className="text-gray-600">Active clients across the globe</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Second Motion Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 2, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.8,
        }}
        viewport={{ once: false }}
      > 
        <div className="text-center mt-8">
          <p className="text-4xl">
            We rethink business growth for you through our collective
          </p>
          <p className="text-4xl">
            experience with strategic partner ecosystem.
          </p>
        </div>
      </motion.div>

      {/* ✅ Auto-sliding Image Carousel */}
      <div className="flex justify-center items-center mt-12 bg-white">
        <div className="flex gap-8 mb-5 overflow-hidden">
          {visibleImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`carousel-img-${index}`}
              className="h-32 w-40 object-contain"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 4 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companyoverview;

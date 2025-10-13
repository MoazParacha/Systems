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

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

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
        className="py-8 px-4 md:py-16 lg:py-16"
      >
        {/* ✅ Wrapper for Left + Line + Right */}
        <div className="relative flex flex-col md:flex-row md:px-10 lg:flex-row lg:items-center justify-between lg:px-20">
          
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Translating <br />
              technology into a <br />
              positive impact
            </h1>
            <p className="text-xs mt-4 lg:text-sm md:text-md lg:text-md lg:mt-6 text-gray-600">
              Our approach allows us to deliver exceptional experiences <br />
              that drive growth and success for all stakeholders. Let’s rise <br />
              to new heights with the power of digital transformation.
            </p>
            <button className="mt-4 lg:mt-6 text-orange-600 font-semibold hover:underline">
              LEARN MORE →
            </button>
          </div>

          {/* ✅ Vertical Line (Center) */}
          <div className="hidden md:block lg:block absolute left-1/2 top-0 transform -translate-x-1/2 md:-translate-x-1 h-full w-[1px] bg-gray-300"></div>

          {/* Right Section (Stats) */}
          <div className="mt-6 lg:w-1/2 text-left flex flex-col items-start md:items-center md:text-center lg:items-center lg:text-center lg:gap-8">
  {/* First Row */}
  <div className="mt-4 md:flex md:gap-12 lg:gap-16">
    <div>
      <h2 className="text-4xl lg:text-5xl font-bold">48+</h2>
      <p className="mt-2 text-xs md:text-sm lg:text-sm text-gray-600">
        Years of continual excellence
      </p>
    </div>
    <div className="mt-10 md:mt-0">
      <h2 className="text-4xl lg:text-5xl font-bold">7700+</h2>
      <p className="mt-2 text-xs md:text-sm lg:text-sm text-gray-600">
        Change makers driving revolution
      </p>
    </div>
  </div>

  {/* Second Row */}
  <div className="mt-10 md:mt-20 md:flex md:gap-12 lg:gap-16">
    <div>
      <h2 className="text-4xl lg:text-5xl font-bold">16+</h2>
      <p className="mt-2 text-xs md:text-sm lg:text-sm text-gray-600">
        Countries with our presence
      </p>
    </div>
    <div className="mt-10 md:mt-0">
      <h2 className="text-4xl lg:text-5xl font-bold">300+</h2>
      <p className="mt-2 text-xs md:text-sm lg:text-sm text-gray-600">
        Active clients across the globe
      </p>
    </div>
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
        <div className="text-xl md:text-3xl lg:text-4xl text-center mt-8">
          <p>We rethink business growth for you through our collective</p>
          <p>experience with strategic partner ecosystem.</p>
        </div>
      </motion.div>

      {/* ✅ Auto-sliding Image Carousel */}
<div className="flex justify-center items-center lg:mt-12 bg-white">
  {/* For small screens: only 1 big image */}
  <div className="flex justify-center items-center w-full overflow-hidden sm:hidden">
    <motion.img
      key={visibleImages[0]}
      src={visibleImages[0]}
      alt="carousel-img"
      className="object-contain h-64 w-80 transition-all duration-500"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    />
  </div>

  {/* For medium and large screens: multiple smaller images */}
  <div className="hidden sm:flex gap-8 mb-5 overflow-hidden">
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

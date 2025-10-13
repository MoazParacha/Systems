import { useState, useEffect } from "react";
import first from "../assets/videos/first.mp4";
import second from "../assets/videos/second.mp4";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto-slide logic (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-screen z-0">
      {/* ✅ Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {/* ✅ Slide 1 */}
        <div className="w-[100vw] h-screen relative flex-shrink-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={first} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/80 flex flex-col pt-40  md:pb-70 md:justify-center md:items-start md:px-20  lg:pb-70 lg:justify-center lg:items-start lg:px-20 lg:pb-20 text-white">
            <h1 className="text-4xl mt-1 pl-13 md:text-7xl lg:text-7xl font-bold lg:pl-18">We</h1>
            <h1 className="text-4xl mt-1 pl-13 md:text-7xl lg:text-7xl font-bold lg:pl-18">reimagine</h1>
            <h1 className="text-4xl mt-1 pl-13 md:text-7xl lg:text-7xl font-bold lg:pl-18">tomorrow</h1>

            <p className="text-xs mt-8 pl-13 md:text-2xl lg:text-2xl lg:max-w-xl lg:pl-18">
              Driving growth and molding the future through transformative change.
            </p>

            <div className="pl-13 lg:pl-18">
              <button
                className="mt-25 md:mt-8 lg:mt-8 px-10 py-3 bg-white text-black border border-white rounded-lg
                  hover:bg-gray-800 hover:text-white hover:outline-none hover:ring-4
                  hover:ring-gray-400 transition transform hover:scale-110"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Slide 2 */}
        <div className="w-[100vw] h-screen relative flex-shrink-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={second} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/80 flex flex-col pt-45  md:pb-70 md:justify-center md:items-start md:px-20  lg:pb-70 lg:justify-center lg:items-start lg:px-20 lg:pb-20 text-white">
            <h1 className="text-4xl mt-1 pl-13 md:text-7xl lg:text-7xl font-bold lg:pl-18">AI That Dares</h1>
            <h1 className="text-4xl mt-1 pl-13 md:text-7xl lg:text-7xl font-bold lg:pl-18">To Disrupt</h1>

            <p className="text-xs mt-8 pl-13 md:text-2xl lg:text-2xl lg:max-w-xl lg:pl-18">
              Hyper-personalization at the speed <br /> of your thoughts.
            </p>

            <div className="pl-13 lg:pl-18">
              <button
                className="mt-30 md:mt-8 lg:mt-8 px-10 py-3 bg-white text-black border border-white rounded-lg
                  hover:bg-gray-800 hover:text-white hover:outline-none hover:ring-4
                  hover:ring-gray-400 transition transform hover:scale-110"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Left Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 1))}
        className="absolute left-6 top-1/2 -translate-y-15 rounded-full transition transform hover:scale-110 z-10"
      >
        <ChevronLeftIcon className="h-8 w-8 text-white" />
      </button>

      {/* ✅ Right Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev < 1 ? prev + 1 : 0))}
        className="absolute right-6 top-1/2 -translate-y-15  rounded-full transition transform hover:scale-110 z-10"
      >
        <ChevronRightIcon className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};

export default Herosection;

import { useState, useEffect } from "react";
import first from "../assets/videos/first.mp4";
import second from "../assets/videos/second.mp4";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < 1 ? prev + 1 : 0)); // toggle between 0 and 1
    }, 5000); // every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-130 z-0">
      {/* Slide Container */}
      <div
        className={`flex transition-transform duration-700`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1 */}
        <div className="w-screen h-screen relative flex-shrink-0">
          <video autoPlay loop muted playsInline className="w-full h-screen object-cover">
            <source src={first} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/90 flex flex-col justify-center items-start px-20 pb-20 text-white">
            <h1 className="text-7xl font-bold pl-18">We</h1>
            <h1 className="mt-3 text-7xl font-bold pl-18">reimagine</h1>
            <h1 className="mt-3 text-7xl font-bold pl-18">tomorrow</h1>

            <p className="mt-7 text-2xl max-w-xl pl-18">
              Driving growth and molding the future through transformative change.
            </p>

            <div className="pl-18">
              <button className="
                  mt-8 px-10 py-3 bg-white text-black 
                  border border-white rounded-lg hover:bg-gray-800 
                  hover:text-white hover:outline-none hover:ring-4 hover:ring-gray-400 
                  transition transform hover:scale-110">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-screen h-screen relative flex-shrink-0">
          <video autoPlay loop muted playsInline className="w-full h-screen object-cover">
            <source src={second} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/90 flex flex-col justify-center items-start px-15 pb-30 text-white">
            <h1 className="text-7xl font-bold pl-18">AI That Dares</h1>
            <h1 className="mt-3 text-7xl font-bold pl-18">To Disrupt</h1>

            <p className="mt-7 text-2xl max-w-xl pl-18">
              Hyper-personalization at the speed <br /> of your thoughts.
            </p>

            <div className="pl-18">
              <button className="
                  mt-8 px-10 py-3 bg-white text-black 
                  border border-white rounded-lg hover:bg-gray-800 
                  hover:outline-none hover:ring-4 hover:ring-gray-400 
                  hover:text-white transition transform hover:scale-110">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 1))}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition transform hover:scale-110 z-10"
      >
        <ChevronLeftIcon className="h-8 w-8 text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev < 1 ? prev + 1 : 0))}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition transform hover:scale-110 z-10"
      >
        <ChevronRightIcon className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};

export default Herosection;
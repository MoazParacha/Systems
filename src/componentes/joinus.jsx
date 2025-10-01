import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import third from "../assets/videos/third.mp4"

const Joinus = () => {
return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-150 object-cover"
      >
        <source src={third} type="video/mp4" />
      </video>

      {/* Overlay Content */}
    <motion.div
        initial={{ opacity: 0, y: 100 }}   // start niche aur invisible
        whileInView={{ opacity: 2, y: 0 }} // jab viewport me aaye to upar aa jaye
        transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1,
        }}
        viewport={{ once: false}}
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-88 text-white z-10"
    >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-88 text-white z-10">
        <h1 className="text-4xl md:text-6xl drop-shadow-lg">
          Your next starts right here
        </h1>
        <Link to="/Careers">
            <button className="
                mt-6 px-6 py-3 border border-white
                text-lg rounded-md hover:bg-white 
                hover:outline-none hover:ring-4 hover:ring-gray-400 
                hover:text-black transition duration-300">
                JOIN US
            </button>
        </Link>
        </div>
    </motion.div>
    </div>
  );
};

export default Joinus;
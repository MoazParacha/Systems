import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contactus = () => {
    return (
        <div className="text-center p-10 sm:p-20 md:p-30 lg:p-40">
            <motion.div
                initial={{ opacity: 0, y: 100 }}   // start niche aur invisible
                whileInView={{ opacity:2 , y: 0 }} // jab viewport me aaye to upar aa jaye
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                viewport={{ once: true }} // ek hi baar chale scroll par
            >
                <div className="text-3xl md:text-6xl lg:text-7xl md:text font-semibold">How can we help you?</div>
                <p className="text-sm md:text-xl lg:text-2xl mt-4">
                    Are you ready to push boundaries and explore new frontiers of innovation?
                </p>
            </motion.div>

            <Link to="Contact">
                <button
                    style={{ willChange: "transform" }}
                    className="
                        mt-8 text-lg rounded-md bg-gray-700 text-white border px-12 py-2 shadow-md 
                        focus:outline-none focus:ring-4 focus:ring-gray-400
                        hover:outline-none hover:ring-4 hover:ring-gray-400 
                        transition-transform duration-500 shadow-md
                        hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
                        motion-reduce:transition-none motion-reduce:transform-none
                        ease-in-out
                    "
                >
                    Let's work Together
                </button>
            </Link>
        </div>
    );
};

export default Contactus;
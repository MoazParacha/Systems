import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img15 from "../assets/img/img15.png";
import img16 from "../assets/img/img16.png";
import img17 from "../assets/img/img17.png";
import img18 from "../assets/img/img18.png";
import img19 from "../assets/img/img19.png";
import img20 from "../assets/img/img20.png";

const Feature = () => {
  return (
    <div className="bg-gray-800 pt-16 pb-16">
      {/* Heading */}
      <div className="text-center text-white text-3xl sm:text-4xl font-semibold">
        Featured Insights
      </div>

      {/* First Row */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-16 items-center px-4">
          {/* 1️⃣ Card 1 */}
          <motion.div
            className="relative w-full sm:w-[22rem] md:w-[24rem] h-[28rem] overflow-hidden rounded-lg"
            whileHover="hover"
          >
            <motion.img
              src={img15}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{ hover: { scale: 2 } }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 left-4 right-4 p-4">
              <div className="text-white text-base sm:text-lg md:text-xl font-semibold">
                NEWSROOM
              </div>
              <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-semibold">
                Systems Limited in partnership with Boston Health AI powers the launch of Hami
              </p>
            </div>

            <motion.p
              className="absolute bottom-16 left-4 right-4 mb-4 px-4 text-white text-sm sm:text-base md:text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{ hover: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Systems Limited has partnered with Boston Health AI and C10 Labs to launch Hami,
              the world’s first AI-powered physician assistant.
            </motion.p>

            <motion.div
              className="absolute bottom-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-base sm:text-lg">Read more</Link>
            </motion.div>
          </motion.div>

          {/* 2️⃣ Card 2 */}
          <motion.div
            className="relative w-full sm:w-[22rem] md:w-[24rem] h-[28rem] overflow-hidden rounded-lg"
            whileHover="hover"
          >
            <motion.img
              src={img16}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{ hover: { scale: 2, filter: "blur(5px)" } }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 left-4 right-4 p-4">
              <div className="text-white text-base sm:text-lg md:text-xl font-semibold">
                NEWSROOM
              </div>
              <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-semibold">
                Systems Limited achieves the 2025-2026 Microsoft AI Business Solutions Inner Circle award
              </p>
            </div>

            <motion.p
              className="absolute bottom-16 left-4 right-4 mb-4 px-4 text-white text-sm sm:text-base md:text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{ hover: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Recognized for top-tier sales performance and innovation in delivering impactful AI solutions.
            </motion.p>

            <motion.div
              className="absolute bottom-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-base sm:text-lg">Read more</Link>
            </motion.div>
          </motion.div>

          {/* 3️⃣ Card 3 */}
          <motion.div
            className="relative w-full sm:w-[22rem] md:w-[24rem] h-[28rem] overflow-hidden rounded-lg"
            whileHover="hover"
          >
            <motion.img
              src={img17}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{ hover: { scale: 2, filter: "blur(8px)" } }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 left-4 right-4 p-4">
              <div className="text-white text-base sm:text-lg md:text-xl font-semibold">
                NEWSROOM
              </div>
              <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-semibold">
                Systems Limited wins Forbes Asia’s Best Under a Billion 2024
              </p>
            </div>

            <motion.p
              className="absolute bottom-16 left-4 right-4 mb-4 px-4 text-white text-sm sm:text-base md:text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{ hover: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Leading the way, year after year—Systems Limited wins Forbes Asia’s Best Under a Billion for the fifth time.
            </motion.p>

            <motion.div
              className="absolute bottom-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-base sm:text-lg">Read more</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Second Row */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-10 sm:mt-16 items-center px-4">
          {/* 4️⃣ Card 4 */}
          <motion.div
            className="relative w-full sm:w-[22rem] md:w-[24rem] h-[28rem] overflow-hidden rounded-lg"
            whileHover="hover"
          >
            <motion.img
              src={img18}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{ hover: { scale: 2 } }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 left-4 right-4 p-4">
              <div className="text-white text-base sm:text-lg md:text-xl font-semibold">
                NEWSROOM
              </div>
              <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-semibold">
                Mashreq and Systems Limited Expand Strategic Partnership to Advance Digital Banking
              </p>
            </div>

            <motion.p
              className="absolute bottom-16 left-4 right-4 mb-4 px-4 text-white text-sm sm:text-base md:text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{ hover: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Renewed partnership to accelerate digital transformation in Pakistan’s financial sector.
            </motion.p>

            <motion.div
              className="absolute bottom-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-base sm:text-lg">Read more</Link>
            </motion.div>
          </motion.div>

          {/* 5️⃣ Card 5 */}
          <motion.div
            className="relative w-full sm:w-[22rem] md:w-[24rem] h-[28rem] overflow-hidden rounded-lg"
            whileHover="hover"
          >
            <motion.img
              src={img19}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{ hover: { scale: 2 } }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 left-4 right-4 p-4">
              <div className="text-white text-base sm:text-lg md:text-xl font-semibold">
                Case Study
              </div>
              <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-semibold">
                Enhancing enterprise mobility through customer-inclusive app
              </p>
            </div>

            <motion.p
              className="absolute bottom-16 left-4 right-4 mb-4 px-4 text-white text-sm sm:text-base md:text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{ hover: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Mobile app empowers customers with secure transactions and 24/7 support, driving growth.
            </motion.p>

            <motion.div
              className="absolute bottom-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-base sm:text-lg">Read more</Link>
            </motion.div>
          </motion.div>

          {/* 6️⃣ Card 6 */}
          <motion.div
            className="relative w-full sm:w-[22rem] md:w-[24rem] h-[28rem] overflow-hidden rounded-lg"
            whileHover="hover"
          >
            <motion.img
              src={img20}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{ hover: { scale: 2 } }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 left-4 right-4 p-4">
              <div className="text-white text-base sm:text-lg md:text-xl font-semibold">
                NEWSROOM
              </div>
              <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-semibold">
                Systems Limited’s Country Model Bank now available on Temenos Exchange
              </p>
            </div>

            <motion.p
              className="absolute bottom-16 left-4 right-4 mb-4 px-4 text-white text-sm sm:text-base md:text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{ hover: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              A pre-configured solution that integrates seamlessly with Temenos Core Banking to ensure compliance.
            </motion.p>

            <motion.div
              className="absolute bottom-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-base sm:text-lg">Read more</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Feature;

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
      <div className="text-center text-white text-4xl">Featured Insights</div>

      <div>
       <motion.div
       initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 2, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          
        }}
        viewport={{ once: false }}
       >
         <div className="flex justify-center gap-6 mt-16 items-center">
          {/* 🔥 Image with Framer Motion animations */}
          <motion.div
            className="relative w-75 h-115 overflow-hidden rounded-lg"
            whileHover="hover"
          >
            {/* Image with zoom effect */}
            <motion.img
              src={img15}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{
                hover: { scale: 3 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Always visible top text */}
            <div className="absolute top-4 left-4 pl-4 pt-4 pr-4 right-4">
              <div className="text-white text-xl font-semibold">NEWSROOM</div>
              <p className="text-white text-2xl mt-2 font-semibold">
                Systems Limited in partnership with Boston Health AI powers the launch of Hami
              </p>
            </div>

            {/* ✅ Description (Right se aayega) */}
            <motion.p
              className="absolute bottom-16 left-4 mb-4 pl-4 pr-4 right-4 text-white text-md font-normal"
              initial={{ opacity: 0, x: 100 }}  // right side se start
              variants={{
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Systems Limited has partnered with Boston Health AI and C10 Labs to launch Hami,
              the world’s first AI-powered physician assistant.
            </motion.p>

            {/* ✅ Read More (Neeche se aayega) */}
            <motion.div
              className="absolute bottom-4 pr-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}   // neeche se start
              variants={{
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-lg">Read more</Link>
            </motion.div>
          </motion.div>

          {/* 🔥 Second Card Example */}
          <motion.div
            className="relative w-75 h-115 overflow-hidden rounded-lg"
            whileHover="hover"
          >
            <motion.img
              src={img16}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{
                hover: { scale: 3,  filter:"blur(5px)"  },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 pt-4 left-4 pl-4 pr-4 right-4">
              <div className="text-white text-xl font-semibold">NEWSROOM</div>
              <p className="text-white text-2xl mt-2 font-semibold">
                Systems Limited achieves the 2025-2026 Microsoft AI Business Solutions Inner Circle award
              </p>
            </div>

            {/* ✅ Description Right Se */}
            <motion.p
              className="absolute bottom-4 left-4 pl-4 mb-7 pr-4 right-4 text-white text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Systems Limited recognized in Microsoft Inner Circle 2025–2026 for AI Business Solutions,
              honoring top-tier sales performance and innovation in delivering impactful AI solutions.
            </motion.p>

            {/* ✅ Read More Neeche Se */}
            <motion.div
              className="absolute bottom-4 pr-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-lg">Read more</Link>
            </motion.div>

          </motion.div>

          {/* Third simple image */}
          <motion.div
            className="relative w-75 h-115 overflow-hidden rounded-lg"
            whileHover="hover"
          
          >
            <motion.img
              src={img17}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{
                hover: { scale: 3,filter:"blur(10px)" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 pt-4 left-4 pl-4 pr-4 right-4">
              <div className="text-white text-xl font-semibold">NEWSROOM</div>
              <p className="text-white text-2xl mt-2 font-semibold">
                Systems Limited wins Forbes Asia’s Best Under a Billion 2024
              </p>
            </div>

            <motion.p
              className="absolute bottom-36 left-4 pl-4 mb-7 pr-4 right-4 text-white text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Leading the way, year after year—Systems Limited wins Forbes Asia’s Best Under a Billion 2024 for fifth time
            </motion.p>

            <motion.div
              className="absolute bottom-4 pr-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-lg">Read more</Link>
            </motion.div>

          </motion.div>
        </div>
       </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 2, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{ once: false }}
        >
            <div className="flex justify-center gap-6 mt-10 items-center">
          <motion.div
            className="relative w-75 h-115 overflow-hidden rounded-lg"
            whileHover="hover"
          
          >
            <motion.img
              src={img18}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{
                hover: { scale: 3 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 pt-4 left-4 pl-4 pr-4 right-4">
              <div className="text-white text-xl font-semibold">NEWSROOM</div>
              <p className="text-white text-2xl mt-2 font-semibold">
                Mashreq and Systems Limited Expand Strategic Partnership to Advance Digital Banking
              </p>
            </div>

            <motion.p
              className="absolute bottom-0 left-4 pl-4 mb-7 pr-4 pt-30 right-4 text-white text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Systems Limited and Mashreq have renewed and expanded their strategic partnership, building on two years of successful collaboration to accelerate digital transformation in Pakistan’s
            </motion.p>

            <motion.div
              className="absolute bottom-4 pr-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-lg">Read more</Link>
            </motion.div>

          </motion.div>

          <motion.div
            className="relative w-75 h-115 overflow-hidden rounded-lg"
            whileHover="hover"
          
          >
            <motion.img
              src={img19}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{
                hover: { scale: 3 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 pt-4 left-4 pl-4 pr-4 right-4">
              <div className="text-white text-xl font-semibold">Case study</div>
              <p className="text-white text-2xl mt-2 font-semibold">
                Enhancing enterprise mobility through customer-inclusive app
              </p>
            </div>

            <motion.p
              className="absolute bottom-11 left-4 pl-4 mb-7 pr-4 right-4 text-white text-md  font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Systems' mobile app lets customers manage accounts and transactions with 24/7 support. With over 2 million downloads, its simple, secure interface drives success.
            </motion.p>

            <motion.div
              className="absolute bottom-4 pr-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-lg">Read more</Link>
            </motion.div>

          </motion.div>

          <motion.div
            className="relative w-75 h-115 overflow-hidden rounded-lg"
            whileHover="hover"
          
          >
            <motion.img
              src={img20}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
              variants={{
                hover: { scale: 3 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="absolute top-4 pt-4 left-4 pl-4 pr-4 right-4">
              <div className="text-white text-xl font-semibold">NEWSROOM</div>
              <p className="text-white text-2xl mt-2 font-semibold">
                Systems Limited’s Country Model Bank now available on Temenos Exchange
              </p>
            </div>

            <motion.p
              className="absolute bottom-8 left-4 pl-4 mb-7 pr-4 right-4 text-white text-md font-normal"
              initial={{ opacity: 0, x: 100 }}
              variants={{
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Systems Country Model Bank (CMB) is a pre-configured solution that accelerates time to market and integrates with Temenos Core Banking to ensure seamless regulatory compliance.
            </motion.p>

            <motion.div
              className="absolute bottom-4 pr-4 right-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link className="hover:text-orange-600 text-lg">Read more</Link>
            </motion.div>

          </motion.div>
        </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Feature;

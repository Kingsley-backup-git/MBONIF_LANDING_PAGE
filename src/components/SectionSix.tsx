import SampleThree from "../assets/sampleThree.png";
import SampleFour from "../assets/sampleFour.png";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import { motion } from "framer-motion";
function SectionSix() {
  return (
    <div className="grid grid-cols-2 z-1  w-full  min-h-[100vh] mb-1.5  gap-1.5">
      <div className="cols-span-1 border relative border-white/50 overflow-hidden">
        <img
          src={SampleThree}
          alt=""
          className="w-full  object-cover h-full "
        />

        <div className="absolute bottom-4 left-5">
          <div className="shopTitle cursor-pointer relative gap-2 max-w-fit overflow-hidden  w-full flex items-center">
            <h1 className="text-white text-lg font-bold ">SHOP NOW</h1>
            <div className="flex relative justify-center items-center ">
              <RiArrowRightUpLongLine className="text-white arrowThree" />
              <RiArrowRightUpLongLine className="text-white absolute arrowFour   inset-0 m-auto" />
            </div>
          </div>

          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-balance uppercase font-bold mt-1 leading-17 text-white text-7xl"
          >
            explore our <br /> catalog
          </motion.h1>
        </div>
      </div>

      <div className="cols-span-1 border relative border-white/50 overflow-hidden">
        <img src={SampleFour} alt="" className="w-full h-full  object-cover" />

        <div className="absolute bottom-4 left-5">
          <div className="shopTitle cursor-pointer relative gap-2 max-w-fit overflow-hidden  w-full flex items-center">
            <h1 className="text-white text-lg font-bold ">ABOUT US</h1>
            <div className="flex relative justify-center items-center ">
              <RiArrowRightUpLongLine className="text-white arrowThree" />
              <RiArrowRightUpLongLine className="text-white absolute arrowFour   inset-0 m-auto" />
            </div>
          </div>

          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-balance uppercase font-bold mt-1 leading-17 text-white text-7xl"
          >
            Built for you <br /> to perform
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;

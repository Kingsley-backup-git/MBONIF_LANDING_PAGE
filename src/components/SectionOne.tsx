import ImgLeft from "../assets/IMG_1693.jpeg";
import ImgRightOne from "../assets/IMG_1692.jpeg";
import ImgRightTwo from "../assets/IMG_1695.jpeg";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import { motion } from "framer-motion";
function SectionOne() {
  return (
    <div className="flex flex-row gap-1.5 mb-1.5 z-1  w-full">
      <div className=" basis-[40%]">
        <div className="w-full sticky relative top-[calc(8vh+4px)] border border-white/50">
          <img src={ImgLeft} className="object-cover  w-full" />
          <div className="absolute top-4 left-5">
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
              className="text-balance font-bold mt-1 leading-17 text-white text-7xl"
            >
              NEW <br /> ARRIVALS
            </motion.h1>
          </div>
        </div>
      </div>

      <div className=" basis-[60%] grid grid-cols-2 gap-1.5">
        <div className="border cursor-pointer border-white/50 overflow-hidden relative card">
          <div className="w-full relative overflow-hidden">
            <img src={ImgRightOne} className=" object-cover w-full" />
            {/* <img
              src={ImgRightTwo}
              className=" object-cover card-img absolute w-full inset-0 h-full"
            /> */}
          </div>

          <div className="py-1 flex items-end bg-black border-white/50 border-t px-3">
            <div className="flex-1">
              <h1 className="font-bold text-sm text-white/40">Tops</h1>
              <h1 className="text-white font-bold text-xl">
                FREEDOM GRAPHIC TEE
              </h1>

              <p className="text-white font-bold text-xl mt-1.5">$85</p>
            </div>

            <div className="relative mb-1 overflow-hidden  w-[25px] flex justify-center items-center h-[25px]">
              <RiArrowRightUpLongLine className="text-white arrowOne" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTwo   inset-0 m-auto" />
            </div>
          </div>

          <h1 className="absolute top-1 left-2 text-white font-bold text-lg">
            New
          </h1>
        </div>
        <div className="border cursor-pointer border-white/50 overflow-hidden relative card">
          <div className="w-full relative overflow-hidden">
            <img src={ImgRightOne} className=" object-cover w-full" />
            {/* <img
              src={ImgRightTwo}
              className=" object-cover card-img absolute w-full inset-0 h-full"
            /> */}
          </div>

          <div className="py-1 flex items-end bg-black border-white/50 border-t px-3">
            <div className="flex-1">
              <h1 className="font-bold text-sm text-white/40">Tops</h1>
              <h1 className="text-white font-bold text-xl">
                FREEDOM GRAPHIC TEE
              </h1>

              <p className="text-white font-bold text-xl mt-1.5">$85</p>
            </div>

            <div className="relative mb-1 overflow-hidden  w-[25px] flex justify-center items-center h-[25px]">
              <RiArrowRightUpLongLine className="text-white arrowOne" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTwo   inset-0 m-auto" />
            </div>
          </div>

          <h1 className="absolute top-1 left-2 text-white font-bold text-lg">
            New
          </h1>
        </div>

        <div className="border cursor-pointer border-white/50 overflow-hidden relative card">
          <div className="w-full relative overflow-hidden">
            <img src={ImgRightTwo} className=" object-cover w-full" />
            {/* <img
              src={ImgRightTwo}
              className=" object-cover card-img absolute w-full inset-0 h-full"
            /> */}
          </div>

          <div className="py-1 flex items-end bg-black border-white/50 border-t px-3">
            <div className="flex-1">
              <h1 className="font-bold text-sm text-white/40">Tops</h1>
              <h1 className="text-white font-bold text-xl">
                FREEDOM GRAPHIC TEE
              </h1>

              <p className="text-white font-bold text-xl mt-1.5">$85</p>
            </div>

            <div className="relative mb-1 overflow-hidden  w-[25px] flex justify-center items-center h-[25px]">
              <RiArrowRightUpLongLine className="text-white arrowOne" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTwo   inset-0 m-auto" />
            </div>
          </div>

          <h1 className="absolute top-1 left-2 text-white font-bold text-lg">
            New
          </h1>
        </div>

        <div className="border cursor-pointer border-white/50 overflow-hidden relative card">
          <div className="w-full relative overflow-hidden">
            <img src={ImgRightOne} className=" object-cover w-full" />
            {/* <img
              src={ImgRightTwo}
              className=" object-cover card-img absolute w-full inset-0 h-full"
            /> */}
          </div>

          <div className="py-1 flex items-end bg-black border-white/50 border-t px-3">
            <div className="flex-1">
              <h1 className="font-bold text-sm text-white/40">Tops</h1>
              <h1 className="text-white font-bold text-xl">
                FREEDOM GRAPHIC TEE
              </h1>

              <p className="text-white font-bold text-xl mt-1.5">$85</p>
            </div>

            <div className="relative mb-1 overflow-hidden  w-[25px] flex justify-center items-center h-[25px]">
              <RiArrowRightUpLongLine className="text-white arrowOne" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTwo   inset-0 m-auto" />
            </div>
          </div>

          <h1 className="absolute top-1 left-2 text-white font-bold text-lg">
            New
          </h1>
        </div>

        <div className="border cursor-pointer border-white/50 overflow-hidden relative card">
          <div className="w-full relative overflow-hidden">
            <img src={ImgRightTwo} className=" object-cover w-full" />
            {/* <img
              src={ImgRightTwo}
              className=" object-cover card-img absolute w-full inset-0 h-full"
            /> */}
          </div>

          <div className="py-1 flex items-end bg-black border-white/50 border-t px-3">
            <div className="flex-1">
              <h1 className="font-bold text-sm text-white/40">Tops</h1>
              <h1 className="text-white font-bold text-xl">
                FREEDOM GRAPHIC TEE
              </h1>

              <p className="text-white font-bold text-xl mt-1.5">$85</p>
            </div>

            <div className="relative mb-1 overflow-hidden  w-[25px] flex justify-center items-center h-[25px]">
              <RiArrowRightUpLongLine className="text-white arrowOne" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTwo   inset-0 m-auto" />
            </div>
          </div>

          <h1 className="absolute top-1 left-2 text-white font-bold text-lg">
            New
          </h1>
        </div>

        <div className="border cursor-pointer border-white/50 overflow-hidden relative card">
          <div className="w-full relative overflow-hidden">
            <img src={ImgRightOne} className=" object-cover w-full" />
            {/* <img
              src={ImgRightTwo}
              className=" object-cover card-img absolute w-full inset-0 h-full"
            /> */}
          </div>

          <div className="py-1 flex items-end  bg-black border-white/50 border-t px-3">
            <div className="flex-1">
              <h1 className="font-bold text-sm text-white/40">Tops</h1>
              <h1 className="text-white font-bold text-xl">
                FREEDOM GRAPHIC TEE
              </h1>

              <p className="text-white font-bold text-xl mt-1.5">$85</p>
            </div>

            <div className="relative mb-1 overflow-hidden  w-[25px] flex justify-center items-center h-[25px]">
              <RiArrowRightUpLongLine className="text-white arrowOne" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTwo   inset-0 m-auto" />
            </div>
          </div>

          <h1 className="absolute top-1 left-2 text-white font-bold text-lg">
            New
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;

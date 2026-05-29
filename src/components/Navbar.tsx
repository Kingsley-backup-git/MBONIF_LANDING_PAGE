import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuSearch } from "react-icons/lu";
import { ImUser } from "react-icons/im";
import { AiFillShopping } from "react-icons/ai";
function Navbar() {
  const [count, setCount] = useState(0);
  const contents = [
    "Free returns within 30 days",
    "Free shipping on all orders",
    "Get 20% off items of $200 or more",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % contents.length);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="bg-black flex border-y border-white/80 ps-6 h-[8vh] border-b fixed top-0 left-0 w-full z-[99999]  items-stretch">
      <div className="flex-1 flex items-center">
        <h1 className="text-white font-bold">MBONIF</h1>

        <motion.h1
          key={count}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-white font-bold text-xl mx-auto"
        >
          {contents[count]}
        </motion.h1>
      </div>

      <div className="h-full flex items-center">
        <li className=" align-middle cursor-pointer item flex relative flex-col overflow-hidden justify-center items-center font-bold h-full border-l border-white/80">
          <div className="bg-black item-child relative text-white w-full h-full items-center justify-center flex px-7">
            SHOP
          </div>
        </li>
        <li className=" align-middle cursor-pointer itemOne flex relative flex-col overflow-hidden justify-center items-center font-bold h-full border-l border-white/80">
          <div className="bg-black itemOne-child relative text-white w-full h-full items-center justify-center flex px-7">
            ABOUT
          </div>
        </li>
        <li className=" align-middle cursor-pointer itemTwo flex relative flex-col overflow-hidden justify-center items-center font-bold h-full border-l border-white/80">
          <div className="bg-black itemTwo-child relative text-white w-full h-full items-center justify-center flex px-7">
            JOURNAL
          </div>
        </li>
        <li className=" align-middle cursor-pointer  itemThree flex relative flex-col overflow-hidden justify-center items-center font-bold h-full border-l border-white/80">
          <div className="bg-black itemThree-child relative text-white w-full h-full items-center justify-center flex px-7">
            CONTACT
          </div>
        </li>

        <li className="cursor-pointer hover:bg-white/20 duration-300 ease-linear px-3 flex relative flex-col overflow-hidden justify-center items-center font-bold h-full border-l border-white/80">
          <LuSearch className="text-white text-xl" />
        </li>

        <li className="cursor-pointer hover:bg-white/20 duration-300 ease-linear  px-3 flex relative flex-col overflow-hidden justify-center items-center font-bold h-full border-l border-white/80">
          <ImUser className="text-white text-xl" />
        </li>

        <li className="cursor-pointer hover:bg-white/20 duration-300 ease-linear px-3  flex relative flex-col overflow-hidden justify-center items-center font-bold h-full border-l border-white/80">
          <AiFillShopping className="text-white text-2xl" />
        </li>
      </div>
    </div>
  );
}

export default Navbar;

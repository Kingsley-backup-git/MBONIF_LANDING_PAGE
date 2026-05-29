import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "./assets/IMG_1695.jpeg";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import ImgOne from "./assets/IMG_1696.jpeg";
import ImgTwo from "./assets/IMG_1692.jpeg";
import SectionFour from "./components/SectionFour";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import SectionNine from "./components/SectionNine";
import SectionTen from "./components/SectionTen";
import SectionEleven from "./components/SectionEleven";
import Footer from "./components/Footer";

function App() {
  const slides = [
    {
      img: heroImg,
      header: "Between Seasons",
      subtext:
        "Stay ready for any weather with flexible gear built for performance. Quality fabrics blend with precision.",
      btnText: "OUTERWEAR",
    },
    {
      img: ImgOne,
      header: "Curated Gifts",
      subtext:
        "Find the perfect present with our curated selection of premium pieces. Timeless designs for those who appreciate quality.",
      btnText: "SHOP NOW",
    },
    {
      img: ImgTwo,
      header: "Just Dropped",
      subtext: "Limited edition release, available now",
      btnText: "SHOP NOW",
    },
  ];
  const { scrollY } = useScroll();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 2);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
    }
  }, [progress]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };
  const currentSlide = (val: number) => {
    setCurrent(val);
    setProgress(0);
  };

  // background moves slowly (subtle parallax)
  const y = useTransform(scrollY, [0, window.innerHeight], [0, 350]);
  return (
    <div className="relative  w-full min-h-screen">
      <div className="h-[8vh]"></div>
      <Navbar />
      <section className="relative h-[92vh] z-6 overflow-hidden bg-black">
        {/* Background image */}

        <div className="w-full h-full p-5">
          <motion.div style={{ y }} className="absolute inset-0 z-6 scale-110">
            <motion.img
              key={current}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src={slides[current].img}
              alt="hero"
              className="w-full min-h-full object-fill  object-center"
            />

            <motion.div
              key={`overlay-${current}`}
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black z-6 w-full h-full"
            ></motion.div>
          </motion.div>

          {/* Overlay content on hero */}
          <div className="relative gap-5 z-10 h-full flex items-end justify-between text-white">
            <div className="">
              <motion.button
                key={`btn-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                type="button"
                className="border-white/80 border  px-7 py-4 bg-black text-white"
              >
                {slides[current].btnText}
              </motion.button>
              <div className="overflow-hidden">
                <motion.h1
                  key={`title-${current}`}
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-white mt-2 font-bold text-8xl"
                >
                  {slides[current].header}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  key={`text-${current}`}
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-white/50 font-bold text-xl mt-2  text-pretty max-w-[550px] w-full"
                >
                  {slides[current].subtext}
                </motion.p>
              </div>
            </div>

            {/* images container */}
            <div className="flex items-center gap-1">
              {slides.map((slide, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => currentSlide(index)}
                    className={`max-w-[150px] cursor-pointer hover:opacity-100 relative w-full border-white/80 ${current === index ? "border opacity-100" : "opacity-30"}`}
                  >
                    <img
                      src={slide.img}
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute inset-0  bg-white/8 backdrop-grayscale-100"
                      style={{
                        width: current === index ? `${progress}%` : "0%",
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full h-full z-10 bg-black">
        <SectionOne />
        <SectionTwo />
        <SectionFour />
        <SectionThree />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
        <SectionEleven />
      </div>
      <Footer />

      <div className="h-[calc(100vh-8vh)]   w-full"></div>
    </div>
  );
}

export default App;

import ImgSample from "../assets/IMG_1695.jpeg";
import { FiInstagram } from "react-icons/fi";
import MarqueeImport from "react-fast-marquee";
const Marquee = (MarqueeImport as any).default ?? MarqueeImport;
function SectionEight() {
  const Images = [
    ImgSample,
    ImgSample,
    ImgSample,
    ImgSample,
    ImgSample,
    ImgSample,
    ImgSample,
  ];
  return (
    <Marquee speed={80} className="mt-1">
      <div className="flex  gap-1.5 h-[380px]">
        {Images.map((item, index) => (
          <div
            key={index}
            className="border-white/50 max-w-[350px] h-full group border relative w-full cursor-pointer overflow-hidden"
          >
            <img
              src={item}
              className="group-hover:scale-115 transition-all duration-300 w-full h-full object-cover"
            />
            <FiInstagram className="text-5xl opacity-0 group-hover:opacity-100 duration-300 ease-linear text-white absolute m-auto inset-0" />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default SectionEight;

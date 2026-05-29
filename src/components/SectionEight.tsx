import ImgSample from "../assets/IMG_1695.jpeg";
import DefaultMarqueeRow from "./defaultMarqueeRow";
import { FiInstagram } from "react-icons/fi";

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
    <div className="mt-1  h-[380px] ">
      <DefaultMarqueeRow speed={80}>
        {Images.map((item, index) => {
          return (
            <div
              key={index}
              className="border-white/50 max-w-[350px] h-full group border relative  w-full cursor-pointer overflow-hidden"
            >
              <img
                src={item}
                className=" group-hover:scale-115  transition-all duration-300 w-full h-full  object-cover "
              />
              <FiInstagram className="text-5xl opacity-0 group-hover:opacity-100 duration-300 ease-linear  text-white absolute m-auto inset-0" />
            </div>
          );
        })}
      </DefaultMarqueeRow>
    </div>
  );
}

export default SectionEight;

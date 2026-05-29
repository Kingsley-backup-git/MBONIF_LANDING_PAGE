import ImgSample from "../assets/sampleSix.png";
import ImgSampleTwo from "../assets/sampleSeven.png";
import ImgSampleThree from "../assets/sampleEight.png";
import { RiArrowRightUpLongLine } from "react-icons/ri";
function SectionEleven() {
  return (
    <div className="grid grid-cols-3 gap-1.5 mt-1.5 border ">
      <div className="border-white/50 cursor-pointer sectionEleven border overflow-hidden">
        <img src={ImgSample} className="object-cover" />
        <div className="p-5">
          <h1 className="text-white/60 text-xs ">12/6/24</h1>
          <h1 className="text-white mt-1 text-balance font-bold text-3xl">
            MOVING THROUGH CITIES
          </h1>

          <div className="container-item-one cursor-pointer relative gap-2 mt-3 max-w-fit overflow-hidden  w-full flex items-center">
            <h1 className="text-white text-lg font-bold ">READ ENTRY</h1>
            <div className="flex relative justify-center items-center ">
              <RiArrowRightUpLongLine className="text-white arrowNine" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTen  inset-0 m-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-white/50 cursor-pointer sectionTwelve border overflow-hidden">
        <img src={ImgSampleTwo} className="object-cover" />
        <div className="p-5">
          <h1 className="text-white/60 text-xs ">12/6/24</h1>
          <h1 className="text-white mt-1 text-balance font-bold text-3xl">
            NIGHT SHIFT
          </h1>{" "}
          <div className="container-item-two cursor-pointer relative gap-2 mt-3 max-w-fit overflow-hidden  w-full flex items-center">
            <h1 className="text-white text-lg font-bold ">READ ENTRY</h1>
            <div className="flex relative justify-center items-center ">
              <RiArrowRightUpLongLine className="text-white arrowEleven" />
              <RiArrowRightUpLongLine className="text-white absolute arrowTwelve   inset-0 m-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-white/50 border sectionThirteen cursor-pointer overflow-hidden">
        <img src={ImgSampleThree} className="object-cover" />
        <div className="p-5">
          <h1 className="text-white/60 text-xs ">12/6/24</h1>
          <h1 className="text-white mt-1 text-balance font-bold text-3xl">
            THE WEIGHT OF PURPOSE
          </h1>{" "}
          <div className="container-item-three mt-3  cursor-pointer relative gap-2 max-w-fit overflow-hidden  w-full flex items-center">
            <h1 className="text-white text-lg font-bold ">READ ENTRY</h1>
            <div className="flex relative justify-center items-center ">
              <RiArrowRightUpLongLine className="text-white arrowThirteen" />
              <RiArrowRightUpLongLine className="text-white absolute arrowFourteen  inset-0 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEleven;

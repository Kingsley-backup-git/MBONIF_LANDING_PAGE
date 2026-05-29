import imgSample from "../assets/sampleFive.png";
import { RiArrowRightUpLongLine } from "react-icons/ri";
function SectionTen() {
  return (
    <div className="flex border z-1  border-white/50 group cursor-pointer overflow-hidden sectionTen w-full divide-x divide-white/50">
      <div className="basis-[58%] overflow-hidden">
        <img
          src={imgSample}
          className="group-hover:scale-120 transition-all duration-300 ease-linear object cover"
        />
      </div>

      <div className="basis-[42%] bg-black w-full flex justify-center items-center">
        <div className="block mx-auto w-[88%]">
          <h1 className="text-white/60 text-xs ">12/6/24</h1>
          <h1 className="text-white font-bold text-6xl text-balance">
            The Evolution of Technical Wear
          </h1>{" "}
          <p className="text-white text-base mt-6 text-justify">
            The landscape of technical apparel has shifted dramatically. What
            began as purely functional design has transformed into something
            more considered - where performance meets architectural intention.
            This evolution mirrors our own journey in creating garments that
            serve both purpose and form.
          </p>
          <div className="container-item  relative gap-2 mt-5 max-w-fit overflow-hidden  w-full flex items-center">
            <h1 className="text-white text-lg font-bold ">READ ENTRY</h1>
            <div className="flex relative justify-center items-center ">
              <RiArrowRightUpLongLine className="text-white arrowSeven" />
              <RiArrowRightUpLongLine className="text-white absolute arrowEight   inset-0 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTen;

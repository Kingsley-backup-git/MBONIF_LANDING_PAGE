import { RiArrowRightUpLongLine } from "react-icons/ri";

function SectionNine() {
  return (
    <div className="flex items-end z-1 justify-between mt-24 px-6 pb-8">
      <div className="">
        <h1 className="font-bold text-7xl text-white uppercase">
          from the journal
        </h1>
        <p className="text-white/60 uppercase text-xl font-bold max-w-[380px] w-full mt-3">
          Exploring the principles of design and how we approach everyday
          pieces.
        </p>
      </div>

      <div className="followTitle cursor-pointer relative gap-2 max-w-fit overflow-hidden  w-full flex items-center">
        <h1 className="text-white text-lg font-bold ">VIEW ALL</h1>
        <div className="flex relative justify-center items-center ">
          <RiArrowRightUpLongLine className="text-white arrowFive" />
          <RiArrowRightUpLongLine className="text-white absolute arrowSix   inset-0 m-auto" />
        </div>
      </div>
    </div>
  );
}

export default SectionNine;

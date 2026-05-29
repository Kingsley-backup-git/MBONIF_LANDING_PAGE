import TopImg from "../assets/Top.png";
import BottomImg from "../assets/Bottom.png";
import OutwearsImg from "../assets/Outwears.png";
import BagsImg from "../assets/Bags.png";
import MarqueeRow from "./MarqueeRow";
function SectionThree() {
  return (
    <div className="grid grid-cols-4 z-1  gap-1.5 mb-1.5">
      <div className="bg-black relative overflow-hidden border-white/50  border">
        <img
          src={TopImg}
          className="w-full z-[999] relative h-full scale-120 hover:scale-135 duration-300 ease-linear py-7"
        />

        <MarqueeRow speed={45}>
          <h1 className="text-white/50 text-[4.6rem] font-bold">TOPS</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">TOPS</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">TOPS</h1>
        </MarqueeRow>
      </div>

      <div className="bg-black relative overflow-hidden border-white/50  border">
        <img
          src={BottomImg}
          className="w-full z-[999] relative h-full scale-120 hover:scale-135 duration-300 ease-linear py-7"
        />

        <MarqueeRow speed={45}>
          <h1 className="text-white/50 text-[4.6rem] font-bold">BOTTOMS</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">BOTTOMS</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">BOTTOMS</h1>
        </MarqueeRow>
      </div>

      <div className="bg-black relative overflow-hidden border-white/50  border">
        <img
          src={OutwearsImg}
          className="w-full z-[999] relative h-full scale-120 hover:scale-135 duration-300 ease-linear py-7"
        />

        <MarqueeRow speed={45}>
          <h1 className="text-white/50 text-[4.6rem] font-bold">OUTWEAR</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">OUTWEAR</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">OUTWEAR</h1>
        </MarqueeRow>
      </div>

      <div className="bg-black relative overflow-hidden border-white/50  border">
        <img
          src={BagsImg}
          className="w-full z-[999] relative h-full scale-120 hover:scale-135 duration-300 ease-linear py-7"
        />

        <MarqueeRow speed={45}>
          <h1 className="text-white/50 text-[4.6rem] font-bold">ACCESSORIES</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">ACCESSORIES</h1>
          <h1 className="text-white/50 text-[4.6rem] font-bold">ACCESSORIES</h1>
        </MarqueeRow>
      </div>
    </div>
  );
}

export default SectionThree;

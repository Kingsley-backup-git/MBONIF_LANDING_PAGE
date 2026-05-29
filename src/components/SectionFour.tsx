import SampleOne from "../assets/sampleOne.png";
import SampleTwo from "../assets/sampleTwo.png";
function SectionFour() {
  return (
    <div className="grid grid-cols-2 w-full flex mb-1.5 items-center gap-1.5">
      <div className="cols-span-1">
        <img src={SampleOne} alt="" className="w-full border border-white/50" />
      </div>

      <div className="cols-span-1">
        <img src={SampleTwo} alt="" className="w-full border border-white/50" />
      </div>
    </div>
  );
}

export default SectionFour;

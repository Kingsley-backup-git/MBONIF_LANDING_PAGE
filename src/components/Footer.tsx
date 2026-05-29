import { useEffect, useRef } from "react";
import fitty from "fitty";

function Footer() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const fit = fitty(ref.current, { minSize: 16, maxSize: 300 });
    return () => fit.unsubscribe();
  }, []);
  return (
    <div className="bg-black z-1 h-[calc(100vh-8vh)] top-[8vh] flex fixed left-0  flex-col    w-full">
      <div className="relative px-4  pb-4 overflow-hidden w-full flex-1 bg-black">
        <div className="relative z-10">
          <h2 className="text-white text-7xl font-bold">
            MOVE <br /> YOUR WAY.
          </h2>
        </div>

        {/* <div className="absolute  z-0 inset-0  w-full">
          <motion.h1
            initial={{ scale: 2 }}
            whileInView={{ scale: 1 }}
            className="text-white font-black leading-none whitespace-nowrap w-full opacity-10"
            style={{ fontSize: "clamp(1rem, 22vw, 100vw)" }}
          >
            MBONIF
          </motion.h1>
        </div> */}
      </div>

      <div className="py-7 border-t-white/70 border">
        <div className="flex px-6 pb-14">
          <div className="flex-1">
            <h1 className="text-white font-bold  text-xl">CATEGORIES</h1>
            <ul className="list-none flex flex-col gap-2 mt-3">
              <li className="text-white/50 font-bold text-base">ALL</li>
              <li className="text-white/50 font-bold text-base">TOPS</li>
              <li className="text-white/50 font-bold text-base">BOTTOM</li>
              <li className="text-white/50 font-bold text-base">OUTERWEAR</li>
            </ul>
          </div>

          <div className="flex-1">
            <h1 className="text-white font-bold  text-xl">SUPPORT</h1>
            <ul className="list-none flex flex-col gap-2 mt-3">
              <li className="text-white/50 font-bold text-base">MY ACCOUNT</li>
              <li className="text-white/50 font-bold text-base">
                PAYMENT METHODS
              </li>
              <li className="text-white/50 font-bold text-base">
                REFUNDS AND POLICY
              </li>
              <li className="text-white/50 font-bold text-base">
                SHIPPING & DELIVERY
              </li>
              <li className="text-white/50 font-bold text-base">
                TERMS & CONDITIONS
              </li>
              <li className="text-white/50 font-bold text-base">
                PRIVACY POLICY
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h1 className="text-white font-bold  text-xl">ABOUT</h1>
            <ul className="list-none flex flex-col gap-2 mt-3">
              <li className="text-white/50 font-bold text-base">ABOUT AXIOM</li>
              <li className="text-white/50 font-bold text-base">JOURNAL</li>
              <li className="text-white/50 font-bold text-base">CONTACT</li>
            </ul>
          </div>

          <div className="flex-1">
            <h1 className="text-white font-bold  text-xl">SOCIAL MEDIA</h1>
            <ul className="list-none flex flex-col gap-2 mt-3">
              <li className="text-white/50 font-bold text-base">INSTAGRAM</li>
              <li className="text-white/50 font-bold text-base">X TWITTER</li>
              <li className="text-white/50 font-bold text-base">YOUTUBE</li>
              <li className="text-white/50 font-bold text-base">FACEBOOK</li>
              <li className="text-white/50 font-bold text-base">TWITCH</li>
            </ul>
          </div>
        </div>

        <div className="border-t-white/70 flex items-center px-4 border py-6">
          <div className="flex-1">
            <div className="flex items-stretch">
              <input
                type="text"
                className="border border-r-0 max-w-[350px] outline-0 z-5 px-4 w-full border-white/50 py-2 text-white"
                placeholder="Email address"
              />
              <button
                type="button"
                className="bg-white text-xl text-black  border-white/50 border font-black px-10 cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <a className="text-white underline cursor-pointer decoration-white text-xs font-bold">
              TERMS & CONDITIONS
            </a>

            <a className="text-white underline cursor-pointer decoration-white text-xs font-bold">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

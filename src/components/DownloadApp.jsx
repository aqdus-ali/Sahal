import completeApp from "../assets/complete-app.png";

const DownloadApp = () => {
  return (
    <section
      id="download"
      className="
        bg-[#FFF4F6]
        py-[84px]
        font-[Montserrat]
        max-[860px]:py-[60px]
      "
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <div
          className="
            grid
            items-center
            gap-[40px]
            overflow-hidden
            rounded-[28px]
            bg-[linear-gradient(135deg,#FF3B5C,#FF705E)]
            px-[32px]
            py-[38px]
            text-white

            md:px-[42px]

            lg:grid-cols-[1fr_0.8fr]
            lg:px-[48px]
            lg:py-[44px]
          "
        >
          {/* LEFT */}
          <div className="max-w-[520px]">
            <h2
              className="
                text-[clamp(30px,4vw,42px)]
                font-extrabold
                leading-[1.15]
                text-white
              "
            >
              Get Sahal on your phone
            </h2>

            <p
              className="
                mt-3
                max-w-[500px]
                text-[15px]
                leading-[1.6]
                text-white/90
              "
            >
              Download the app and start discovering daily deals,
              sending gifts and topping up with Sahal Currency.
            </p>

            {/* Store Buttons */}
            <div className="mt-[26px] flex flex-wrap gap-[10px]">
              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-[12px]
                  bg-[#111111]
                  px-[18px]
                  py-[12px]
                  text-[13px]
                  font-bold
                  text-white
                  transition
                  duration-200
                  hover:-translate-y-[2px]
                "
              >
                🍎 App Store
              </a>

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-[12px]
                  bg-[#111111]
                  px-[18px]
                  py-[12px]
                  text-[13px]
                  font-bold
                  text-white
                  transition
                  duration-200
                  hover:-translate-y-[2px]
                "
              >
                ▶ Google Play
              </a>
            </div>
          </div>

          {/* RIGHT — PHONE MOCKUP */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                relative
                h-[500px]
                w-[242px]
                flex-shrink-0
                overflow-hidden
                rounded-[38px]
                border-[7px]
                border-[#17171C]
                bg-white
                shadow-[0_28px_50px_-16px_rgba(0,0,0,0.5)]
              "
            >
              {/* Manually scrollable app screen */}
              <div
                className="
                  h-full
                  overflow-y-auto
                  overscroll-contain
                  scroll-smooth
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                <img
                  src={completeApp}
                  alt="Sahal mobile app"
                  draggable="false"
                  className="
                    block
                    h-auto
                    w-full
                    select-none
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
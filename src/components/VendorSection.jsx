const steps = [
  {
    number: "1",
    title: "Register your store",
    text: "Create a vendor profile with your brand and delivery options.",
  },
  {
    number: "2",
    title: "List your products",
    text: "Add photos, variations, colours, specifications and prices.",
  },
  {
    number: "3",
    title: "Run deals & promotions",
    text: "Join Deal of the Day, Under SAR 20/30 and Trending sections.",
  },
  {
    number: "4",
    title: "Sell & get paid",
    text: "Accept orders, deliver standard or express, and receive payouts.",
  },
];

const bars = [35, 55, 42, 75, 62, 90, 80];

const VendorSection = () => {
  return (
    <section
      id="vendors"
      className="
        bg-white
        py-[84px]
        font-[Montserrat]
        max-[860px]:py-[60px]
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1160px]
          grid-cols-1
          items-center
          gap-[44px]
          px-[22px]
          lg:grid-cols-2
        "
      >
        {/* LEFT SIDE */}
        <div>
          <span
            className="
              mb-[14px]
              inline-block
              rounded-full
              bg-[rgba(85,229,232,0.30)]
              px-[14px]
              py-[7px]
              text-[12px]
              font-extrabold
              uppercase
              tracking-[1px]
              text-[#1F1F24]
            "
          >
            For vendors
          </span>

          <h2
            className="
              max-w-[470px]
              text-[clamp(28px,4vw,42px)]
              font-extrabold
              leading-[1.15]
              text-[#1F1F24]
            "
          >
            Grow your store with Sahal
          </h2>

          <p
            className="
              mt-3
              max-w-[560px]
              text-[16px]
              leading-[1.7]
              text-[#6B6B76]
            "
          >
            Reach thousands of shoppers, list products in minutes
            and run your own deals.
          </p>

          {/* Steps */}
          <div className="mt-[26px] grid gap-[14px]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-[18px]
                  border
                  border-[#EDEDF1]
                  bg-white
                  p-[18px]
                "
              >
                <div
                  className="
                    grid
                    h-[40px]
                    w-[40px]
                    shrink-0
                    place-items-center
                    rounded-[12px]
                    bg-[#55E5E8]
                    text-[15px]
                    font-extrabold
                    text-[#10282A]
                  "
                >
                  {step.number}
                </div>

                <div>
                  <h3
                    className="
                      text-[15px]
                      font-extrabold
                      text-[#1F1F24]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      leading-[1.55]
                      text-[#6B6B76]
                    "
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            rounded-[28px]
            bg-[linear-gradient(150deg,#1F1F2B,#101018)]
            p-[28px]
            text-white
            shadow-[0_14px_40px_-16px_rgba(40,20,40,0.22)]
          "
        >
          <h3
            className="
              text-[14px]
              font-semibold
              text-white/70
            "
          >
            Vendor sales (sample)
          </h3>

          <div
            className="
              mb-[18px]
              mt-[6px]
              text-[40px]
              font-extrabold
              leading-none
            "
          >
            SAR 24,860
          </div>

          {/* Bars */}
          <div
            className="
              flex
              h-[120px]
              items-end
              gap-[10px]
            "
          >
            {bars.map((height, index) => (
              <div
                key={index}
                className="
                  flex-1
                  rounded-t-[8px]
                  bg-[linear-gradient(to_top,#FF3B5C,#55E5E8)]
                "
                style={{
                  height: `${height}%`,
                }}
              />
            ))}
          </div>

          {/* Bottom Stats */}
          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-[10px]
            "
          >
            <span
              className="
                rounded-full
                bg-white/10
                px-[14px]
                py-2
                text-[12px]
                font-semibold
              "
            >
              📦 128 orders
            </span>

            <span
              className="
                rounded-full
                bg-white/10
                px-[14px]
                py-2
                text-[12px]
                font-semibold
              "
            >
              ⭐ 4.8 rating
            </span>

            <span
              className="
                rounded-full
                bg-white/10
                px-[14px]
                py-2
                text-[12px]
                font-semibold
              "
            >
              🔥 12 live deals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
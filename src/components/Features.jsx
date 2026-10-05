import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🔥",
    title: "Deal of the Day",
    description:
      "Fresh discounts every day with a live countdown timer.",
    colour: "#FCEBC3",
  },
  {
    icon: "🔍",
    title: "Smart Search",
    description:
      "Search history and recommendations help shoppers find faster.",
    colour: "#CFE6FB",
  },
  {
    icon: "♡",
    title: "Wishlist",
    description:
      "Save favourites and come back when the price is right.",
    colour: "#FBDCE6",
  },
  {
    icon: "🎁",
    title: "Send as Gift",
    description:
      "Buy for friends and family, or redeem gifts you receive.",
    colour: "#D9F4DE",
  },
  {
    icon: "👑",
    title: "VIP Club",
    description:
      "Exclusive perks and rewards for loyal Sahal shoppers.",
    colour: "#E7DAFB",
  },
  {
    icon: "🚚",
    title: "Standard & Express",
    description:
      "Choose 5-7 day or 1-2 day delivery at checkout.",
    colour: "#CFE6FB",
  },
  {
    icon: "📍",
    title: "Nearest Store",
    description:
      "Find the closest vendor and pick up faster.",
    colour: "#FCEBC3",
  },
  {
    icon: "⚡",
    title: "Sahal Currency",
    description:
      "Our own currency for payments, gifts and bonus deals.",
    colour: "#CFF7F8",
  },
];

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements =
      section.querySelectorAll(".feature-rv");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("feature-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="
        bg-white
        py-[84px]
        font-[Montserrat]
        max-[860px]:py-[60px]
      "
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        {/* Heading */}
        <div className="feature-rv mb-[44px]">
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
            Main features
          </span>

          <h2
            className="
              text-[clamp(28px,4vw,42px)]
              font-extrabold
              leading-[1.15]
              text-[#1F1F24]
            "
          >
            Everything shoppers love, in one app
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
            Built around the Sahal app design — simple to browse,
            rewarding to use.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          className="
            grid
            grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
            gap-[18px]
          "
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="
                feature-rv
                rounded-[22px]
                border
                border-[#EDEDF1]
                bg-white
                p-[26px]
                transition-shadow
                duration-300
                hover:shadow-[0_14px_40px_-16px_rgba(40,20,40,0.22)]
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-4
                  grid
                  h-[52px]
                  w-[52px]
                  place-items-center
                  rounded-[16px]
                  text-[25px]
                "
                style={{
                  backgroundColor: feature.colour,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-[17px]
                  font-extrabold
                  text-[#1F1F24]
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  text-[14px]
                  leading-[1.65]
                  text-[#6B6B76]
                "
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Reveal animation only */}
      <style>{`
        .feature-rv {
          opacity: 0;
          transform: translateY(34px);

          transition:
            opacity .8s cubic-bezier(.2,.7,.2,1),
            transform .8s cubic-bezier(.2,.7,.2,1),
            box-shadow .3s ease;
        }

        .feature-rv.feature-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-rv {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
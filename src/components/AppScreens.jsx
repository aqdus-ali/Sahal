import { useEffect, useRef } from "react";

import productDetails from "../assets/Productdetails.png";
import smartSearch from "../assets/SmartSearch.png";
import sideMenu from "../assets/SideMenu.png";

const screens = [
  {
    image: productDetails,
    title: "Product Details",
    subtitle: "Variations, delivery & gifting",
    scroll: true,
  },
  {
    image: smartSearch,
    title: "Smart Search",
    subtitle: "History & recommendations",
    scroll: true,
  },
  {
    image: sideMenu,
    title: "Side Menu",
    subtitle: "VIP, gifts & support",
    scroll: true,
  },
];

const PhoneMockup = ({ image, title, subtitle, scroll }) => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!scroll) return;

    const screen = screenRef.current;
    const img = imageRef.current;

    if (!screen || !img) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    let animationFrame = null;
    let running = true;
    let direction = 1;
    let position = 0;
    let lastTime = null;

    const speed = 20;

    const stopAutoScroll = () => {
      running = false;
    };

    const animate = (time) => {
      if (lastTime === null) {
        lastTime = time;
      }

      const deltaTime = Math.min(
        (time - lastTime) / 1000,
        0.04
      );

      lastTime = time;

      if (running) {
        const maxScroll =
          screen.scrollHeight - screen.clientHeight;

        if (maxScroll > 0) {
          position += speed * deltaTime * direction;

          if (position >= maxScroll) {
            position = maxScroll;
            direction = -1;
          }

          if (position <= 0) {
            position = 0;
            direction = 1;
          }

          screen.scrollTop = position;
        }
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      position = screen.scrollTop;
      lastTime = null;

      animationFrame =
        requestAnimationFrame(animate);
    };

    screen.addEventListener(
      "pointerdown",
      stopAutoScroll
    );

    screen.addEventListener(
      "wheel",
      stopAutoScroll,
      { passive: true }
    );

    screen.addEventListener(
      "touchstart",
      stopAutoScroll,
      { passive: true }
    );

    if (img.complete) {
      startAnimation();
    } else {
      img.addEventListener(
        "load",
        startAnimation,
        { once: true }
      );
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      img.removeEventListener(
        "load",
        startAnimation
      );

      screen.removeEventListener(
        "pointerdown",
        stopAutoScroll
      );

      screen.removeEventListener(
        "wheel",
        stopAutoScroll
      );

      screen.removeEventListener(
        "touchstart",
        stopAutoScroll
      );
    };
  }, [scroll]);

  return (
    <div className="text-center">
      <div
        className="
          relative
          mx-auto
          h-[500px]
          w-[242px]
          overflow-hidden
          rounded-[38px]
          border-[7px]
          border-[#17171C]
          bg-white
          shadow-[0_24px_55px_-18px_rgba(0,0,0,0.32)]
        "
      >
        <div
          ref={screenRef}
          className="
            h-full
            overflow-y-auto
            overscroll-none
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <img
            ref={imageRef}
            src={image}
            alt={title}
            draggable="false"
            className="
              block
              w-full
              select-none
            "
          />
        </div>
      </div>

      <h3
        className="
          mt-[12px]
          text-[14px]
          font-extrabold
          text-[#1F1F24]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-[2px]
          text-[12px]
          text-[#6B6B76]
        "
      >
        {subtitle}
      </p>
    </div>
  );
};

const AppScreens = () => {
  return (
    <section
      id="screens"
      className="
        bg-white
        py-[84px]
        font-[Montserrat]
        max-[860px]:py-[60px]
      "
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        {/* Heading */}
        <div className="mb-[40px] text-center">
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
            App screens
          </span>

          <h2
            className="
              text-[clamp(28px,4vw,42px)]
              font-extrabold
              leading-[1.15]
              text-[#1F1F24]
            "
          >
            Designed to be effortless
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[560px]
              text-[14px]
              leading-[1.7]
              text-[#6B6B76]
            "
          >
            Scroll inside each phone to explore the real app screens.
          </p>
        </div>

        {/* Phones */}
        <div
          className="
            flex
            flex-wrap
            items-start
            justify-center
            gap-[26px]
          "
        >
          {screens.map((screen) => (
            <PhoneMockup
              key={screen.title}
              {...screen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreens;
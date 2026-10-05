import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import heroScreen from "../assets/Sahal-home.png";
import "../styles/Hero.css";

const emojis = [
  "💄",
  "👗",
  "⌚",
  "👟",
  "🧥",
  "🎁",
  "🧸",
  "🧴",
  "🛍️",
  "👜",
  "🕶️",
  "💍",
  "🧩",
  "🍫",
  "⚡",
  "👠",
  "🎧",
  "💇",
];

const colours = [
  "#FBDCE6",
  "#E7DAFB",
  "#CFE6FB",
  "#D9F4DE",
  "#FCEBC3",
  "#CFF7F8",
];

const random = (min, max) =>
  min + Math.random() * (max - min);

const Hero = () => {
  const screenRef = useRef(null);
  const imageRef = useRef(null);

  const [iconCount, setIconCount] = useState(() =>
    typeof window !== "undefined" &&
    window.innerWidth < 700
      ? 16
      : 30
  );

  useEffect(() => {
    const updateCount = () => {
      setIconCount(
        window.innerWidth < 700 ? 16 : 30
      );
    };

    window.addEventListener(
      "resize",
      updateCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateCount
      );
    };
  }, []);

  const floatingItems = useMemo(() => {
    return Array.from(
      { length: iconCount },
      (_, index) => {
        const size = random(40, 86);

        return {
          icon: emojis[index % emojis.length],
          colour:
            colours[index % colours.length],

          left: `${random(0, 96)}%`,

          size,

          fontSize: size * 0.55,

          duration: `${random(16, 34)}s`,

          delay: `${-random(0, 30)}s`,

          opacity: random(
            0.16,
            0.32
          ).toFixed(2),

          rotateStart: `${random(
            -25,
            25
          )}deg`,

          rotateEnd: `${random(
            -60,
            60
          )}deg`,

          sway: `${random(-90, 90)}px`,
        };
      }
    );
  }, [iconCount]);

  /*
   * Smooth phone-screen auto scroll
   */
  useEffect(() => {
    const screen = screenRef.current;
    const image = imageRef.current;

    if (!screen || !image) return;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) return;

    let animationFrame = null;

    let running = true;
    let direction = 1;
    let position = 0;
    let lastTime = null;

    /*
     * Smaller number = slower scroll.
     * 20 looks smoother than the previous
     * frame-by-frame method.
     */
    const speed = 20;

    const stopAutoScroll = () => {
      running = false;
    };

    const animate = (time) => {
      if (lastTime === null) {
        lastTime = time;
      }

      /*
       * Limit delta so switching tabs
       * doesn't cause a large jump.
       */
      const deltaTime = Math.min(
        (time - lastTime) / 1000,
        0.04
      );

      lastTime = time;

      if (running) {
        const maxScroll =
          screen.scrollHeight -
          screen.clientHeight;

        if (maxScroll > 0) {
          position +=
            speed *
            deltaTime *
            direction;

          /*
           * Reverse smoothly at bottom
           */
          if (position >= maxScroll) {
            position = maxScroll;
            direction = -1;
          }

          /*
           * Reverse smoothly at top
           */
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

    /*
     * Stop automatic movement when
     * the visitor starts interacting.
     */
    screen.addEventListener(
      "pointerdown",
      stopAutoScroll
    );

    screen.addEventListener(
      "wheel",
      stopAutoScroll,
      {
        passive: true,
      }
    );

    screen.addEventListener(
      "touchstart",
      stopAutoScroll,
      {
        passive: true,
      }
    );

    /*
     * VERY IMPORTANT:
     * Start only when the Sahal screen
     * image has completely loaded.
     */
    if (image.complete) {
      startAnimation();
    } else {
      image.addEventListener(
        "load",
        startAnimation,
        {
          once: true,
        }
      );
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }

      image.removeEventListener(
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
  }, []);

  return (
    <header
      id="top"
      className="
        hero-section
        relative
        overflow-hidden
        py-[56px]
        pb-[80px]
        font-[Montserrat]
      "
    >
      {/* Background animated icons */}
      <div
        className="
          hero-bgfx
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        {floatingItems.map(
          (item, index) => (
            <div
              key={index}
              className="hero-fx"
              style={{
                left: item.left,

                width: `${item.size}px`,
                height: `${item.size}px`,

                fontSize: `${item.fontSize}px`,

                backgroundColor:
                  item.colour,

                animationDuration:
                  item.duration,

                animationDelay:
                  item.delay,

                "--fx-opacity":
                  item.opacity,

                "--fx-r0":
                  item.rotateStart,

                "--fx-r1":
                  item.rotateEnd,

                "--fx-sway":
                  item.sway,
              }}
            >
              {item.icon}
            </div>
          )
        )}
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1160px]
          grid-cols-1
          items-center
          gap-10
          px-[22px]
          lg:grid-cols-[1.1fr_0.9fr]
        "
      >
        {/* LEFT */}
        <div className="hero-reveal">
          <span
            className="
              mb-[14px]
              inline-block
              rounded-full
              bg-[#55E5E8]/30
              px-[14px]
              py-[7px]
              text-[12px]
              font-extrabold
              uppercase
              tracking-[1px]
              text-[#1F1F24]
            "
          >
            ⚡ The all-in-one shopping app
          </span>

          <h1
            className="
              text-[clamp(38px,6vw,68px)]
              font-extrabold
              leading-[1.05]
              tracking-[-1.5px]
              text-[#1F1F24]
            "
          >
            Shop smart.
            <br />

            <span className="text-[#FF3B5C]">
              Deals of the day,
            </span>

            <br />
            every day.
          </h1>

          <p
            className="
              mt-5
              max-w-[480px]
              text-[17px]
              leading-[1.7]
              text-[#6B6B76]
            "
          >
            Sahal brings shoppers,
            vendors and gifting together
            in one fast, colourful app —
            with its own Sahal Currency
            for easier payments and
            rewards.
          </p>

          {/* CTA */}
          <div className="mt-[30px] flex flex-wrap gap-3">
            <a
              href="#download"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[14px]
                bg-[#FF3B5C]
                px-6
                py-[14px]
                text-[14px]
                font-bold
                text-white
                shadow-[0_10px_22px_-8px_rgba(255,59,92,.6)]
                transition
                duration-200
                hover:-translate-y-[2px]
              "
            >
              ↓ Download App
            </a>

            <a
              href="#features"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[14px]
                border-2
                border-[#EDEDF1]
                bg-transparent
                px-6
                py-[14px]
                text-[14px]
                font-bold
                text-[#1F1F24]
                transition
                duration-200
                hover:-translate-y-[2px]
              "
            >
              Explore Features
            </a>
          </div>

          {/* Stats */}
          <div className="mt-[38px] flex flex-wrap gap-[30px]">
            <div>
              <strong className="block text-[26px] font-extrabold">
                50% Off
              </strong>

              <span className="text-[12px] font-semibold text-[#6B6B76]">
                Daily deals
              </span>
            </div>

            <div>
              <strong className="block text-[26px] font-extrabold">
                6+
              </strong>

              <span className="text-[12px] font-semibold text-[#6B6B76]">
                Categories
              </span>
            </div>

            <div>
              <strong className="block text-[26px] font-extrabold">
                1–2 days
              </strong>

              <span className="text-[12px] font-semibold text-[#6B6B76]">
                Express delivery
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            hero-reveal
            relative
            mx-auto
            flex
            w-full
            max-w-[420px]
            justify-center
          "
        >
          {/* Chip 1 */}
          <div
            className="
              hero-chip
              absolute
              left-0
              top-[40px]
              z-30
              rounded-[16px]
              bg-white
              px-[14px]
              py-[10px]
              text-[12px]
              font-bold
              shadow-[0_14px_40px_-16px_rgba(40,20,40,.22)]
            "
          >
            🔥 40% Off today
          </div>

          {/* Chip 2 */}
          <div
            className="
              hero-chip
              hero-chip-delay-1
              absolute
              right-[-10px]
              top-[200px]
              z-30
              rounded-[16px]
              bg-white
              px-[14px]
              py-[10px]
              text-[12px]
              font-bold
              shadow-[0_14px_40px_-16px_rgba(40,20,40,.22)]
            "
          >
            🎁 Send as Gift
          </div>

          {/* Chip 3 */}
          <div
            className="
              hero-chip
              hero-chip-delay-2
              absolute
              bottom-[50px]
              left-[10px]
              z-30
              rounded-[16px]
              bg-white
              px-[14px]
              py-[10px]
              text-[12px]
              font-bold
              shadow-[0_14px_40px_-16px_rgba(40,20,40,.22)]
            "
          >
            ⚡ Sahal Currency
          </div>

          {/* PHONE */}
          <div
            className="
              relative
              h-[620px]
              w-[300px]
              flex-shrink-0
              overflow-hidden
              rounded-[38px]
              border-[8px]
              border-[#17171c]
              bg-white
              shadow-[0_30px_60px_-20px_rgba(0,0,0,.45)]
            "
          >
            {/* Smooth scrolling screen */}
            <div
              ref={screenRef}
              className="
                hero-screen
                h-full
                overflow-y-auto
                pb-[58px]
              "
            >
              <img
                ref={imageRef}
                src={heroScreen}
                alt="Sahal app home screen"
                draggable="false"
                className="
                  block
                  w-full
                  select-none
                "
              />
            </div>

            {/* Bottom Navigation */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                flex
                h-[58px]
                items-center
                justify-around
                border-t
                border-[#EDEDF1]
                bg-white
                px-2
                text-[#555661]
              "
            >
              {/* Cart */}
              <div className="flex w-[48px] flex-col items-center justify-center gap-[2px]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="9"
                    cy="20"
                    r="1"
                  />

                  <circle
                    cx="19"
                    cy="20"
                    r="1"
                  />

                  <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 8H7" />
                </svg>

                <span className="text-[8px] font-medium">
                  Cart
                </span>
              </div>

              {/* Wishlist */}
              <div className="flex w-[48px] flex-col items-center justify-center gap-[2px]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
                </svg>

                <span className="text-[8px] font-medium">
                  Wishlist
                </span>
              </div>

              {/* Home */}
              <div className="relative flex w-[58px] justify-center">
                <button
                  type="button"
                  aria-label="Home"
                  className="
                    absolute
                    -top-[35px]
                    grid
                    h-[48px]
                    w-[48px]
                    place-items-center
                    rounded-full
                    bg-[#FF3B5C]
                    text-white
                    shadow-[0_8px_18px_-4px_rgba(255,59,92,0.65)]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[19px] w-[19px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11.5 12 4l9 7.5" />
                    <path d="M5 10.5V20h14v-9.5" />
                    <path d="M9 20v-5h6v5" />
                  </svg>
                </button>
              </div>

              {/* Search */}
              <div className="flex w-[48px] flex-col items-center justify-center gap-[2px]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                  />

                  <path d="m20 20-3.5-3.5" />
                </svg>

                <span className="text-[8px] font-medium">
                  Search
                </span>
              </div>

              {/* Profile */}
              <div className="flex w-[48px] flex-col items-center justify-center gap-[2px]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="3"
                  />

                  <path d="M6.5 20c.7-3.2 2.7-5 5.5-5s4.8 1.8 5.5 5" />
                </svg>

                <span className="text-[8px] font-medium">
                  Profile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
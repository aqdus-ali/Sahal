
import { useState } from "react";
import SahalLogo from "../assets/Sahal.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const closeMenu = () => setMenuOpen(false);

  const mobileLinkClass =
    "block rounded-lg px-3 py-[11px] text-[14px] leading-[20px] font-semibold text-[#6B6B76] transition-colors duration-200 hover:bg-[#FFF4F6] hover:text-[#FF3B5C]";

  // Language switcher, styled like Babble
  const LanguageSwitcher = () => (
    <div
      dir="ltr"
      className="
        flex
        shrink-0
        items-center
        rounded-full
        border
        border-[#EDEDF1]
        bg-white
        p-[3px]
        shadow-[0_2px_6px_rgba(0,0,0,0.08)]
      "
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`
          rounded-full
          px-3
          py-[6px]
          text-[12px]
          font-bold
          transition
          duration-200
          ${
            language === "en"
              ? "bg-[#FF3B5C] text-white"
              : "text-[#6B6B76] hover:text-[#FF3B5C]"
          }
        `}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        aria-pressed={language === "ar"}
        className={`
          rounded-full
          px-3
          py-[6px]
          text-[12px]
          font-bold
          transition
          duration-200
          ${
            language === "ar"
              ? "bg-[#FF3B5C] text-white"
              : "text-[#6B6B76] hover:text-[#FF3B5C]"
          }
        `}
      >
        عربي
      </button>
    </div>
  );

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[#EDEDF1]
        bg-white/95
        backdrop-blur-[12px]
        font-[Montserrat]
      "
    >
      {/* TOP NAVBAR */}
      <div
        className="
          mx-auto
          flex
          h-[68px]
          max-w-[1200px]
          items-center
          justify-between
          gap-3
          px-[22px]
        "
      >
        {/* LOGO */}
        <a
          href="#top"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={SahalLogo}
            alt="Sahal"
            className="h-[42px] w-auto object-contain"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <div
          className="
            hidden
            items-center
            gap-[20px]
            text-[13px]
            font-semibold
            text-[#6B6B76]
            lg:flex
            xl:gap-[26px]
            xl:text-[14px]
          "
        >
          <a href="#features" className="whitespace-nowrap hover:text-[#FF3B5C]">
            Features
          </a>

          <a href="#shop" className="whitespace-nowrap hover:text-[#FF3B5C]">
            Products
          </a>

          <a href="#vendors" className="whitespace-nowrap hover:text-[#FF3B5C]">
            Vendors
          </a>

          <a href="#currency" className="whitespace-nowrap hover:text-[#FF3B5C]">
            Sahal Currency
          </a>

          <a href="#screens" className="whitespace-nowrap hover:text-[#FF3B5C]">
            App Screens
          </a>

          <a href="#contact" className="whitespace-nowrap hover:text-[#FF3B5C]">
            Contact
          </a>
        </div>

        {/* DESKTOP RIGHT ACTIONS */}
        <div
          className="
            hidden
            shrink-0
            items-center
            gap-3
            lg:flex
          "
        >
          <LanguageSwitcher />

          <a
            href="#download"
            className="
              inline-flex
              items-center
              justify-center
              whitespace-nowrap
              rounded-[14px]
              bg-[#FF3B5C]
              px-5
              py-[14px]
              text-[13px]
              font-bold
              text-white
              shadow-[0_10px_22px_-8px_rgba(255,59,92,0.6)]
              transition
              duration-200
              hover:-translate-y-[2px]
              xl:px-6
              xl:text-[14px]
            "
          >
            Download App
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex
              h-[42px]
              w-[42px]
              shrink-0
              items-center
              justify-center
              rounded-[10px]
              border
              border-[#EDEDF1]
              bg-white
              text-[#1F1F24]
            "
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - OVERLAYS HERO */}
      {menuOpen && (
        <div
          className="
            absolute
            left-0
            top-full
            z-50
            w-full
            border-t
            border-[#EDEDF1]
            bg-white
            shadow-[0_12px_30px_rgba(0,0,0,0.08)]
            lg:hidden
          "
        >
          <div
            className="
              mx-auto
              max-w-[1160px]
              px-[22px]
              pb-[22px]
              pt-[18px]
            "
          >
            <div className="flex flex-col gap-[4px]">
              <a
                href="#features"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Features
              </a>

              <a
                href="#shop"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Products
              </a>

              <a
                href="#vendors"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Vendors
              </a>

              <a
                href="#currency"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Sahal Currency
              </a>

              <a
                href="#screens"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                App Screens
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Contact
              </a>
            </div>

            <a
              href="#download"
              onClick={closeMenu}
              className="
                mt-[14px]
                inline-flex
                w-full
                items-center
                justify-center
                rounded-[14px]
                bg-[#FF3B5C]
                px-6
                py-[14px]
                text-[14px]
                font-bold
                text-white
                shadow-[0_10px_22px_-8px_rgba(255,59,92,0.6)]
              "
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

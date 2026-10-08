import { useState } from "react";
import SahalLogo from "../assets/Sahal.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const mobileLinkClass =
    "block rounded-lg px-3 py-[11px] text-[14px] leading-[20px] font-semibold text-[#6B6B76] transition-colors duration-200 hover:bg-[#FFF4F6] hover:text-[#FF3B5C]";

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
        relative
      "
    >
      {/* Top Navbar */}
      <div
        className="
          mx-auto
          flex
          h-[68px]
          max-w-[1160px]
          items-center
          justify-between
          px-[22px]
        "
      >
        {/* Logo */}
        <a href="#top" onClick={closeMenu} className="flex items-center">
          <img
            src={SahalLogo}
            alt="Sahal"
            className="h-[42px] w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            items-center
            gap-[26px]
            text-[14px]
            font-semibold
            text-[#6B6B76]
            lg:flex
          "
        >
          <a href="#features" className="hover:text-[#FF3B5C]">
            Features
          </a>

          <a href="#shop" className="hover:text-[#FF3B5C]">
            Products
          </a>

          <a href="#vendors" className="hover:text-[#FF3B5C]">
            Vendors
          </a>

          <a href="#currency" className="hover:text-[#FF3B5C]">
            Sahal Currency
          </a>

          <a href="#screens" className="hover:text-[#FF3B5C]">
            App Screens
          </a>

          <a href="#contact" className="hover:text-[#FF3B5C]">
            Contact
          </a>
        </div>

        {/* Desktop Download Button */}
        <a
          href="#download"
          className="
            hidden
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
            transition
            duration-200
            hover:-translate-y-[2px]
            lg:inline-flex
          "
        >
          Download App
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-[10px]
            border
            border-[#EDEDF1]
            bg-white
            text-[#1F1F24]
            lg:hidden
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
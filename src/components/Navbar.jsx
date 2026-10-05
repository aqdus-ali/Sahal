import { useState } from "react";
import SahalLogo from "../assets/Sahal.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[#EDEDF1]
        bg-white/90
        backdrop-blur-[12px]
        font-[Montserrat]
      "
    >
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

        {/* Desktop Links */}
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
          <a
            href="#features"
            className="transition-colors duration-200 hover:text-[#FF3B5C]"
          >
            Features
          </a>

          <a
            href="#shop"
            className="transition-colors duration-200 hover:text-[#FF3B5C]"
          >
            Products
          </a>

          <a
            href="#vendors"
            className="transition-colors duration-200 hover:text-[#FF3B5C]"
          >
            Vendors
          </a>

          <a
            href="#currency"
            className="transition-colors duration-200 hover:text-[#FF3B5C]"
          >
            Sahal Currency
          </a>

          <a
            href="#screens"
            className="transition-colors duration-200 hover:text-[#FF3B5C]"
          >
            App Screens
          </a>

          <a
            href="#contact"
            className="transition-colors duration-200 hover:text-[#FF3B5C]"
          >
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

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            border-t
            border-[#EDEDF1]
            bg-white
            px-[22px]
            pb-6
            pt-4
            lg:hidden
          "
        >
          <div className="flex flex-col gap-1">
            <a
              href="#features"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-[14px] font-semibold text-[#6B6B76] hover:bg-[#FFF4F6] hover:text-[#FF3B5C]"
            >
              Features
            </a>

            <a
              href="#shop"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-[14px] font-semibold text-[#6B6B76] hover:bg-[#FFF4F6] hover:text-[#FF3B5C]"
            >
              Products
            </a>

            <a
              href="#vendors"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-[14px] font-semibold text-[#6B6B76] hover:bg-[#FFF4F6] hover:text-[#FF3B5C]"
            >
              Vendors
            </a>

            <a
              href="#currency"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-[14px] font-semibold text-[#6B6B76] hover:bg-[#FFF4F6] hover:text-[#FF3B5C]"
            >
              Sahal Currency
            </a>

            <a
              href="#screens"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-[14px] font-semibold text-[#6B6B76] hover:bg-[#FFF4F6] hover:text-[#FF3B5C]"
            >
              App Screens
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-[14px] font-semibold text-[#6B6B76] hover:bg-[#FFF4F6] hover:text-[#FF3B5C]"
            >
              Contact
            </a>
          </div>

          {/* Inline Mobile Download Button */}
          <a
            href="#download"
            onClick={closeMenu}
            className="
              mt-4
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
              transition
              duration-200
              hover:-translate-y-[2px]
            "
          >
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
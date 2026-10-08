import SahalLogo from "../assets/Sahal.png";

const Footer = () => {
  return (
    <footer
      className="
        bg-[#14141A]
        py-[36px]
        text-center
        font-[Montserrat]
        text-white
      "
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={SahalLogo}
            alt="Sahal"
            className="
              h-[42px]
              w-auto
              object-contain
              brightness-0
              invert
            "
          />
        </div>

        {/* Copyright */}
        <p
          className="
            mt-[10px]
            text-[13px]
            leading-[1.6]
            text-[#A3A3AF]
          "
        >
          © 2026 Sahal by ABH Group. Presentation preview — products shown
          are samples.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
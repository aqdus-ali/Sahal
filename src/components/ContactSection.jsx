import { useState } from "react";

const BuildingIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[22px] w-[22px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
    <path d="M16 8h3a1 1 0 0 1 1 1v12" />
    <path d="M8 7h2" />
    <path d="M8 11h2" />
    <path d="M8 15h2" />
    <path d="M13 7h1" />
    <path d="M13 11h1" />
    <path d="M13 15h1" />
    <path d="M2 21h20" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[22px] w-[22px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const ICloudIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[22px] w-[22px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.4 8.6 4.5 4.5 0 0 0 7 18Z" />
  </svg>
);

const gmailAddresses = [
  "Abhgroup786@gmail.com",
  "Ahmedbilal.786242@gmail.com",
  "sahalshop786242@gmail.com",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !message.trim()) return;

    const subject = encodeURIComponent(
      `Sahal enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `${message}\n\n${name}${email ? ` (${email})` : ""}`
    );

    window.location.href =
      `mailto:Abhgroup786@gmail.com` +
      `?cc=Ahmedbilal.786242@gmail.com,sahalshop786242@gmail.com,sahalshop@icloud.com` +
      `&subject=${subject}` +
      `&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="
        bg-white
        py-[84px]
        font-[Montserrat]
        max-[860px]:py-[60px]
      "
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">

        {/* Heading */}
        <div className="mb-[44px]">
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
            Contact us
          </span>

          <h2
            className="
              text-[clamp(28px,4vw,42px)]
              font-extrabold
              leading-[1.15]
              text-[#1F1F24]
            "
          >
            Talk to ABH Group
          </h2>

          <p
            className="
              mt-3
              max-w-[620px]
              text-[16px]
              leading-[1.7]
              text-[#6B6B76]
            "
          >
            Interested in selling on Sahal or partnering with us?
            Get in touch.
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="
            grid
            gap-[30px]
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >

          {/* Contact Info */}
          <div className="grid content-start gap-3">

            {/* Company */}
            <div
              className="
                flex
                items-center
                gap-[14px]
                rounded-[18px]
                border
                border-[#EDEDF1]
                bg-white
                p-4
              "
            >
              <div
                className="
                  grid
                  h-[42px]
                  w-[42px]
                  shrink-0
                  place-items-center
                  rounded-[12px]
                  bg-[#EFFCFC]
                  text-[#1F1F24]
                "
              >
                <BuildingIcon />
              </div>

              <div>
                <span
                  className="
                    block
                    text-[12px]
                    font-semibold
                    text-[#6B6B76]
                  "
                >
                  Company
                </span>

                <span
                  className="
                    text-[14px]
                    font-bold
                    text-[#1F1F24]
                  "
                >
                  ABH Group
                </span>
              </div>
            </div>

            {/* Combined Gmail Box */}
            <div
              className="
                flex
                items-start
                gap-[14px]
                rounded-[18px]
                border
                border-[#EDEDF1]
                bg-white
                p-4
              "
            >
              <div
                className="
                  grid
                  h-[42px]
                  w-[42px]
                  shrink-0
                  place-items-center
                  rounded-[12px]
                  bg-[#EFFCFC]
                  text-[#1F1F24]
                "
              >
                <MailIcon />
              </div>

              <div className="min-w-0 flex-1">
                <span
                  className="
                    mb-[7px]
                    block
                    text-[12px]
                    font-semibold
                    text-[#6B6B76]
                  "
                >
                  Email
                </span>

                <div className="grid gap-[5px]">
                  {gmailAddresses.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="
                        block
                        break-all
                        text-[14px]
                        font-bold
                        leading-[1.5]
                        text-[#1F1F24]
                        transition-colors
                        duration-200
                        hover:text-[#FF3B5C]
                      "
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* iCloud */}
            <div
              className="
                flex
                items-center
                gap-[14px]
                rounded-[18px]
                border
                border-[#EDEDF1]
                bg-white
                p-4
              "
            >
              <div
                className="
                  grid
                  h-[42px]
                  w-[42px]
                  shrink-0
                  place-items-center
                  rounded-[12px]
                  bg-[#EFFCFC]
                  text-[#1F1F24]
                "
              >
                <ICloudIcon />
              </div>

              <div className="min-w-0">
                <span
                  className="
                    block
                    text-[12px]
                    font-semibold
                    text-[#6B6B76]
                  "
                >
                  iCloud
                </span>

                <a
                  href="mailto:sahalshop@icloud.com"
                  className="
                    break-all
                    text-[14px]
                    font-bold
                    text-[#1F1F24]
                    transition-colors
                    duration-200
                    hover:text-[#FF3B5C]
                  "
                >
                  sahalshop@icloud.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              grid
              gap-[14px]
              rounded-[24px]
              border
              border-[#EDEDF1]
              bg-white
              p-[28px]
            "
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full
                rounded-[12px]
                border-2
                border-[#EDEDF1]
                bg-white
                px-[14px]
                py-[13px]
                text-[14px]
                font-medium
                text-[#1F1F24]
                outline-none
                transition-colors
                duration-200
                placeholder:text-[#6B6B76]
                focus:border-[#55E5E8]
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                rounded-[12px]
                border-2
                border-[#EDEDF1]
                bg-white
                px-[14px]
                py-[13px]
                text-[14px]
                font-medium
                text-[#1F1F24]
                outline-none
                transition-colors
                duration-200
                placeholder:text-[#6B6B76]
                focus:border-[#55E5E8]
              "
            />

            <textarea
              name="message"
              rows="4"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
              className="
                w-full
                resize-y
                rounded-[12px]
                border-2
                border-[#EDEDF1]
                bg-white
                px-[14px]
                py-[13px]
                text-[14px]
                font-medium
                text-[#1F1F24]
                outline-none
                transition-colors
                duration-200
                placeholder:text-[#6B6B76]
                focus:border-[#55E5E8]
              "
            />

            <button
              type="submit"
              className="
                mt-[2px]
                flex
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
                transition
                duration-200
                hover:-translate-y-[2px]
                hover:bg-[#ED2F50]
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
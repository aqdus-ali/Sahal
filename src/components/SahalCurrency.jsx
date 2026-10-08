import { useEffect, useState } from "react";

const packages = [
  {
    amount: "50",
    name: "Starter",
    price: "SAR 45",
    oldPrice: "SAR 55",
  },
  {
    amount: "120",
    name: "Plus",
    price: "SAR 99",
    oldPrice: "SAR 130",
  },
  {
    amount: "300",
    name: "Pro Pack",
    price: "SAR 229",
    oldPrice: "SAR 310",
    popular: true,
  },
  {
    amount: "700",
    name: "Elite Vault",
    price: "SAR 489",
    oldPrice: "SAR 690",
  },
];

const paymentMethods = [
  {
    key: "card",
    icon: "💳",
    label: "Credit / Debit Card",
  },
  {
    key: "mada",
    icon: "🏦",
    label: "mada",
  },
  {
    key: "apple",
    icon: "📱",
    label: "Apple Pay",
  },
  {
    key: "stc",
    icon: "💬",
    label: "STC Pay",
  },
];

const uses = [
  "🛍 Pay for products",
  "🎁 Send / redeem gifts",
  "👑 Join the VIP Club",
  "🔥 Unlock bonus deals",
];

const BoltIcon = () => (
  <svg
    viewBox="0 0 40 70"
    className="h-[36px] w-[22px] fill-white"
    aria-hidden="true"
  >
    <polygon points="22,0 4,34 17,32 8,70 36,26 21,29 30,6" />
  </svg>
);

const SahalCurrency = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [step, setStep] = useState(1);

  const [recipient, setRecipient] = useState("me");
  const [username, setUsername] = useState("");
  const [userFound, setUserFound] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const [message, setMessage] = useState("");

  const modalOpen = selectedPackage !== null;

  useEffect(() => {
    if (!modalOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [modalOpen]);

  const openModal = (item) => {
    setSelectedPackage(item);
    setStep(1);
    setRecipient("me");
    setUsername("");
    setUserFound(false);
    setPaymentMethod("card");
    setCardData({
      number: "",
      expiry: "",
      cvv: "",
    });
    setMessage("");
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setStep(1);
    setMessage("");
  };

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const findUser = () => {
    if (!username.trim()) {
      showMessage("⚠️ Enter a Sahal ID or username");
      return;
    }

    setUserFound(true);
  };

  const goToPayment = () => {
    if (recipient === "other" && !userFound) {
      showMessage("⚠️ Find the user first");
      return;
    }

    setStep(2);
  };

  const goToReview = () => {
    if (paymentMethod === "card") {
      const missing =
        !cardData.number.trim() ||
        !cardData.expiry.trim() ||
        !cardData.cvv.trim();

      if (missing) {
        showMessage("⚠️ Please fill in the card details");
        return;
      }
    }

    setStep(3);
  };

  const confirmPayment = () => {
    setStep(4);

    setTimeout(() => {
      setStep(5);
    }, 1500);
  };

  const updateCard = (field, value) => {
    setCardData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <section
        id="currency"
        className="
          bg-[linear-gradient(135deg,#17171f,#232333)]
          py-[84px]
          font-[Montserrat]
          text-white
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
                bg-[rgba(85,229,232,0.28)]
                px-[14px]
                py-[7px]
                text-[12px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-white
              "
            >
              Sahal Currency
            </span>

            <h2
              className="
                text-[clamp(28px,4vw,42px)]
                font-extrabold
                leading-[1.15]
                text-white
              "
            >
              Our own currency. Faster. Smarter.
            </h2>

            <p
              className="
                mt-3
                max-w-[560px]
                text-[16px]
                leading-[1.7]
                text-[#B9B9C7]
              "
            >
              Top up Sahal Currency to pay for products, send gifts and unlock
              VIP perks — with web-exclusive bonus packages.
            </p>
          </div>

          {/* Packages */}
          <div
            className="
              grid
              grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
              gap-[18px]
            "
          >
            {packages.map((item) => (
              <article
                key={item.amount}
                className={`
                  relative
                  rounded-[24px]
                  bg-white/[0.07]
                  p-[26px]
                  transition-all
                  duration-300

                  ${
                    item.popular
                      ? `
                        border-2
                        border-[#55E5E8]
                        shadow-[0_0_40px_-10px_#55E5E8]
                      `
                      : `
                        border
                        border-white/[0.14]
                        hover:border-[#55E5E8]
                      `
                  }
                `}
              >
                {item.popular && (
                  <span
                    className="
                      absolute
                      -top-[12px]
                      left-5
                      rounded-full
                      bg-[#55E5E8]
                      px-3
                      py-[5px]
                      text-[10px]
                      font-extrabold
                      uppercase
                      text-[#10282A]
                    "
                  >
                    Most Popular
                  </span>
                )}

                <div
                  className="
                    mb-4
                    grid
                    h-[62px]
                    w-[62px]
                    place-items-center
                    rounded-full
                    bg-[radial-gradient(circle_at_30%_30%,#9CF6F8,#2BC3C9)]
                    shadow-[0_0_24px_-4px_#55E5E8]
                  "
                >
                  <BoltIcon />
                </div>

                <h3 className="text-[30px] font-extrabold leading-none">
                  {item.amount}
                </h3>

                <p className="mt-1 text-[13px] text-[#B9B9C7]">
                  Sahal Currency · {item.name}
                </p>

                <div className="mt-4 text-[20px] font-extrabold">
                  {item.price}

                  <s
                    className="
                      ml-2
                      text-[12px]
                      font-medium
                      text-[#8D8D9C]
                    "
                  >
                    {item.oldPrice}
                  </s>
                </div>

                <button
                  type="button"
                  onClick={() => openModal(item)}
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#55E5E8]
                    px-6
                    py-[14px]
                    text-[14px]
                    font-bold
                    text-[#10282A]
                    transition
                    duration-200
                    hover:-translate-y-[2px]
                  "
                >
                  Top Up
                </button>
              </article>
            ))}
          </div>

          {/* Uses */}
          <div className="mt-[34px] flex flex-wrap gap-3">
            {uses.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-white/[0.08]
                  px-[18px]
                  py-[10px]
                  text-[13px]
                  font-semibold
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TOP UP MODAL */}
      {modalOpen && selectedPackage && (
        <div
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[rgba(10,10,18,0.62)]
            p-[18px]
            backdrop-blur-[4px]
          "
        >
          <div
            className="
              relative
              max-h-[92vh]
              w-full
              max-w-[460px]
              overflow-y-auto
              rounded-[26px]
              bg-white
              p-[28px]
              text-[#1F1F24]
              shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="
                absolute
                right-[14px]
                top-[14px]
                grid
                h-[34px]
                w-[34px]
                place-items-center
                rounded-full
                bg-[#FFF4F6]
                text-[15px]
                text-[#1F1F24]
              "
            >
              ✕
            </button>

            {/* Progress */}
            {step <= 3 && (
              <div className="mb-[18px] flex gap-[6px] pr-10">
                {[1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className={`
                      h-[5px]
                      flex-1
                      rounded-full
                      ${
                        item <= step
                          ? "bg-[#FF3B5C]"
                          : "bg-[#EDEDF1]"
                      }
                    `}
                  />
                ))}
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <>
                <h3 className="text-[21px] font-extrabold">
                  Who is receiving this?
                </h3>

                <p
                  className="
                    mb-[18px]
                    mt-[6px]
                    text-[13px]
                    leading-[1.6]
                    text-[#6B6B76]
                  "
                >
                  {selectedPackage.amount} Sahal Currency ·{" "}
                  {selectedPackage.price}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setRecipient("me");
                    setUserFound(false);
                  }}
                  className={`
                    mb-[10px]
                    flex
                    w-full
                    items-center
                    gap-[14px]
                    rounded-[16px]
                    border-2
                    px-4
                    py-[14px]
                    text-left
                    transition

                    ${
                      recipient === "me"
                        ? "border-[#FF3B5C] bg-[#FFF2F4]"
                        : "border-[#EDEDF1]"
                    }
                  `}
                >
                  <span className="text-[22px]">👤</span>

                  <span>
                    <strong className="block text-[14px]">
                      My Account
                    </strong>

                    <small className="mt-[2px] block text-[12px] text-[#6B6B76]">
                      Add directly to your Sahal wallet
                    </small>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setRecipient("other");
                    setUserFound(false);
                  }}
                  className={`
                    mb-[10px]
                    flex
                    w-full
                    items-center
                    gap-[14px]
                    rounded-[16px]
                    border-2
                    px-4
                    py-[14px]
                    text-left
                    transition

                    ${
                      recipient === "other"
                        ? "border-[#FF3B5C] bg-[#FFF2F4]"
                        : "border-[#EDEDF1]"
                    }
                  `}
                >
                  <span className="text-[22px]">🎁</span>

                  <span>
                    <strong className="block text-[14px]">
                      Another Sahal User
                    </strong>

                    <small className="mt-[2px] block text-[12px] text-[#6B6B76]">
                      Send to a friend or customer
                    </small>
                  </span>
                </button>

                {recipient === "other" && (
                  <>
                    <div className="mt-1 flex gap-2">
                      <input
                        type="text"
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
                          setUserFound(false);
                        }}
                        placeholder="Sahal ID / Username"
                        className="
                          min-w-0
                          flex-1
                          rounded-[12px]
                          border-2
                          border-[#EDEDF1]
                          px-[14px]
                          py-[13px]
                          text-[14px]
                          outline-none
                          focus:border-[#55E5E8]
                        "
                      />

                      <button
                        type="button"
                        onClick={findUser}
                        className="
                          rounded-[14px]
                          bg-[#55E5E8]
                          px-[18px]
                          text-[13px]
                          font-bold
                          text-[#10282A]
                        "
                      >
                        Find
                      </button>
                    </div>

                    {userFound && (
                      <div
                        className="
                          mt-2
                          text-[13px]
                          font-bold
                          text-[#1FA85A]
                        "
                      >
                        ✓ Found: {username}
                      </div>
                    )}
                  </>
                )}

                <button
                  type="button"
                  onClick={goToPayment}
                  className="
                    mt-[14px]
                    flex
                    w-full
                    justify-center
                    rounded-[14px]
                    bg-[#FF3B5C]
                    px-6
                    py-[14px]
                    text-[14px]
                    font-bold
                    text-white
                  "
                >
                  Continue
                </button>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h3 className="text-[21px] font-extrabold">
                  Payment method
                </h3>

                <p
                  className="
                    mb-[18px]
                    mt-[6px]
                    text-[13px]
                    leading-[1.6]
                    text-[#6B6B76]
                  "
                >
                  Choose how you would like to pay.
                </p>

                {paymentMethods.map((method) => (
                  <button
                    key={method.key}
                    type="button"
                    onClick={() =>
                      setPaymentMethod(method.key)
                    }
                    className={`
                      mb-[10px]
                      flex
                      w-full
                      items-center
                      gap-[14px]
                      rounded-[16px]
                      border-2
                      px-4
                      py-[14px]
                      text-left

                      ${
                        paymentMethod === method.key
                          ? "border-[#FF3B5C] bg-[#FFF2F4]"
                          : "border-[#EDEDF1]"
                      }
                    `}
                  >
                    <span className="text-[22px]">
                      {method.icon}
                    </span>

                    <strong className="text-[14px]">
                      {method.label}
                    </strong>
                  </button>
                ))}

                {paymentMethod === "card" && (
                  <div className="mt-2">
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={19}
                      value={cardData.number}
                      onChange={(event) =>
                        updateCard("number", event.target.value)
                      }
                      placeholder="Card number"
                      className="
                        w-full
                        rounded-[12px]
                        border-2
                        border-[#EDEDF1]
                        px-[14px]
                        py-[13px]
                        text-[14px]
                        outline-none
                        focus:border-[#55E5E8]
                      "
                    />

                    <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
                      <input
                        type="text"
                        maxLength={5}
                        value={cardData.expiry}
                        onChange={(event) =>
                          updateCard("expiry", event.target.value)
                        }
                        placeholder="MM/YY"
                        className="
                          w-full
                          rounded-[12px]
                          border-2
                          border-[#EDEDF1]
                          px-[14px]
                          py-[13px]
                          text-[14px]
                          outline-none
                          focus:border-[#55E5E8]
                        "
                      />

                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        value={cardData.cvv}
                        onChange={(event) =>
                          updateCard("cvv", event.target.value)
                        }
                        placeholder="CVV"
                        className="
                          w-full
                          rounded-[12px]
                          border-2
                          border-[#EDEDF1]
                          px-[14px]
                          py-[13px]
                          text-[14px]
                          outline-none
                          focus:border-[#55E5E8]
                        "
                      />
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={goToReview}
                  className="
                    mt-[14px]
                    flex
                    w-full
                    justify-center
                    rounded-[14px]
                    bg-[#FF3B5C]
                    px-6
                    py-[14px]
                    text-[14px]
                    font-bold
                    text-white
                  "
                >
                  Review Purchase
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="
                    mx-auto
                    mt-3
                    block
                    text-[13px]
                    font-bold
                    text-[#6B6B76]
                  "
                >
                  ← Back
                </button>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <h3 className="text-[21px] font-extrabold">
                  Review & confirm
                </h3>

                <p
                  className="
                    mb-[18px]
                    mt-[6px]
                    text-[13px]
                    leading-[1.6]
                    text-[#6B6B76]
                  "
                >
                  Check your details before paying.
                </p>

                <div
                  className="
                    mb-4
                    rounded-[16px]
                    bg-[#FFF4F6]
                    px-4
                  "
                >
                  {[
                    ["Package", selectedPackage.name],
                    [
                      "Amount",
                      `${selectedPackage.amount} Sahal Currency`,
                    ],
                    [
                      "Recipient",
                      recipient === "me"
                        ? "My Account"
                        : username,
                    ],
                    [
                      "Payment",
                      paymentMethods.find(
                        (item) =>
                          item.key === paymentMethod
                      )?.label,
                    ],
                    ["Total", selectedPackage.price],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="
                        flex
                        justify-between
                        gap-3
                        border-b
                        border-[#EDEDF1]
                        py-[11px]
                        text-[13px]
                        font-semibold
                        last:border-0
                      "
                    >
                      <span className="text-[#6B6B76]">
                        {label}
                      </span>

                      <span className="text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={confirmPayment}
                  className="
                    flex
                    w-full
                    justify-center
                    rounded-[14px]
                    bg-[#FF3B5C]
                    px-6
                    py-[14px]
                    text-[14px]
                    font-bold
                    text-white
                  "
                >
                  Confirm & Pay {selectedPackage.price}
                </button>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="
                    mx-auto
                    mt-3
                    block
                    text-[13px]
                    font-bold
                    text-[#6B6B76]
                  "
                >
                  ← Back
                </button>
              </>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="py-[10px] text-center">
                <div
                  className="
                    mx-auto
                    mb-4
                    mt-[30px]
                    h-[46px]
                    w-[46px]
                    animate-spin
                    rounded-full
                    border-[5px]
                    border-[#EDEDF1]
                    border-t-[#FF3B5C]
                  "
                />

                <h3 className="text-[21px] font-extrabold">
                  Processing payment…
                </h3>

                <p className="mt-[6px] text-[13px] text-[#6B6B76]">
                  Please wait a moment.
                </p>
              </div>
            )}

            {/* Step 5 */}
            {step === 5 && (
              <div className="py-[10px] text-center">
                <div
                  className="
                    mx-auto
                    mb-4
                    grid
                    h-[78px]
                    w-[78px]
                    place-items-center
                    rounded-full
                    bg-[#1FA85A]
                    text-[40px]
                    text-white
                  "
                >
                  ✓
                </div>

                <h3 className="text-[21px] font-extrabold">
                  Top-up successful!
                </h3>

                <p
                  className="
                    mx-auto
                    mt-[6px]
                    max-w-[320px]
                    text-[13px]
                    leading-[1.6]
                    text-[#6B6B76]
                  "
                >
                  {selectedPackage.amount} Sahal Currency{" "}
                  {recipient === "me"
                    ? "was added to your wallet."
                    : `was sent to ${username}.`}
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    mt-4
                    flex
                    w-full
                    justify-center
                    rounded-[14px]
                    bg-[#FF3B5C]
                    px-6
                    py-[14px]
                    text-[14px]
                    font-bold
                    text-white
                  "
                >
                  Done
                </button>
              </div>
            )}

            {/* Toast / validation */}
            {message && (
              <div
                className="
                  fixed
                  bottom-6
                  left-1/2
                  z-[120]
                  -translate-x-1/2
                  rounded-[14px]
                  bg-[#111]
                  px-[22px]
                  py-[13px]
                  text-[13px]
                  font-semibold
                  text-white
                  shadow-lg
                "
              >
                {message}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SahalCurrency;
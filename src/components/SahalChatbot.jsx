import { useEffect, useRef, useState } from "react";

const quickQuestions = [
  { key: "how", label: "How does Sahal work?" },
  { key: "deals", label: "Deals & Under SAR" },
  { key: "currency", label: "Sahal Currency" },
  { key: "vendors", label: "Sell on Sahal" },
  { key: "delivery", label: "Delivery & returns" },
  { key: "help", label: "I need help" },
];

const answers = {
  how: "Sahal is a shopping app where you can browse Beauty, Fashion, Mens, Womens and Gifts, grab the Deal of the Day, save favourites to your Wishlist, send gifts and pay with Sahal Currency. This page is a preview of the app 🛍️",

  deals:
    "Deal of the Day refreshes every day with a live countdown. Scroll to Product Showcase and use the Under SAR price tabs to find lower-priced items 🔥",

  currency:
    "Sahal Currency is our own in-app currency. Top up with a bundle such as Starter, Plus, Pro Pack or Elite Vault to pay for products, send gifts and unlock VIP perks ⚡",

  vendors:
    "Vendors can register a store, list products with photos, variations and prices, join Deal of the Day and Under SAR sections, then sell and get paid. See the For Vendors section to get started 🏪",

  delivery:
    "Sahal supports Standard and Express delivery. Product pages can also show return information and delivery choices 🚚",

  gifts:
    "Use Send as Gift on products and manage sent or received gifts from the app's gift area 🎁",

  download:
    "Use the App Store or Google Play buttons in the Get Sahal on your phone section to download the app 📱",

  contact:
    "You can contact AVH Group through the Contact us section at the bottom of the page ✉️",

  help:
    "I'm here for quick questions. For anything detailed, use the Contact us section to send AVH Group a message directly.",
};

const keywordRules = [
  {
    pattern: /download|install|app store|google play/i,
    key: "download",
  },
  {
    pattern: /deal|offer|discount|under|cheap|price|sar|sale/i,
    key: "deals",
  },
  {
    pattern: /currency|coin|wallet|top ?up|bundle|recharge/i,
    key: "currency",
  },
  {
    pattern: /vendor|seller|sell|merchant/i,
    key: "vendors",
  },
  {
    pattern: /deliver|ship|express|return|refund/i,
    key: "delivery",
  },
  {
    pattern: /gift/i,
    key: "gifts",
  },
  {
    pattern: /contact|email|mail|avh|reach|support/i,
    key: "contact",
  },
  {
    pattern: /how|what|work|about|app|sahal/i,
    key: "how",
  },
];

const BoltIcon = ({ small = false }) => {
  return (
    <svg
      viewBox="0 0 40 70"
      className={small ? "h-[28px] w-[16px]" : "h-[34px] w-[20px]"}
      aria-hidden="true"
    >
      <polygon
        points="22,0 4,34 17,32 8,70 36,26 21,29 30,6"
        fill="#55E5E8"
      />
    </svg>
  );
};

const SahalChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      who: "bot",
      text: "Hey! 👋 I'm the Sahal Assistant. How can I help you?",
    },
  ]);

  const messagesRef = useRef(null);

  useEffect(() => {
    const container = messagesRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        who: "user",
        text,
      },
    ]);
  };

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        who: "bot",
        text,
      },
    ]);
  };

  const askQuickQuestion = (key, label) => {
    addUserMessage(label);

    setTimeout(() => {
      addBotMessage(
        answers[key] || "Let me find that out for you!"
      );
    }, 500);
  };

  const sendMessage = () => {
    const text = input.trim();

    if (!text) return;

    addUserMessage(text);
    setInput("");

    const rule = keywordRules.find((item) =>
      item.pattern.test(text)
    );

    setTimeout(() => {
      if (rule) {
        addBotMessage(answers[rule.key]);
      } else {
        addBotMessage(
          "Thanks for reaching out! I can answer quick questions about deals, Sahal Currency, vendors and delivery. For anything else, use the Contact us section to connect with AVH Group 🙂"
        );
      }
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        aria-label="Open Sahal chat assistant"
        onClick={() => setOpen((prev) => !prev)}
        className="
          fixed
          bottom-6
          right-6
          z-[80]

          grid
          h-[64px]
          w-[64px]
          place-items-center

          rounded-full
          border-0
          bg-white

          shadow-[0_14px_28px_-8px_rgba(255,59,92,0.45)]

          transition-transform
          duration-200

          hover:scale-[1.07]

          max-[480px]:bottom-[14px]
          max-[480px]:right-[14px]
          max-[480px]:h-[58px]
          max-[480px]:w-[58px]
        "
      >
        <span
          className="
            grid
            h-[50px]
            w-[50px]
            place-items-center
            rounded-full
            bg-[linear-gradient(135deg,#E6FDFE,#ffffff)]
          "
        >
          <BoltIcon />
        </span>

        <span
          className="
            absolute
            bottom-[2px]
            right-[2px]

            h-[14px]
            w-[14px]

            rounded-full
            border-[2.5px]
            border-white
            bg-[#3FAE5C]
          "
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          role="dialog"
          aria-label="Sahal Assistant chat"
          className="
            fixed
            bottom-[98px]
            right-6
            z-[80]

            flex
            w-[360px]
            max-w-[calc(100vw-32px)]

            max-h-[min(520px,calc(100dvh-190px))]

            flex-col
            overflow-hidden

            rounded-[26px]
            border
            border-[#EDEDF1]

            bg-[#FFF4F6]

            shadow-[0_26px_60px_-14px_rgba(0,0,0,0.4)]

            max-[480px]:left-[10px]
            max-[480px]:right-[10px]
            max-[480px]:bottom-[82px]
            max-[480px]:w-auto
            max-[480px]:max-h-[calc(100dvh-110px)]
          "
        >
          {/* Header */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-3
              bg-[linear-gradient(120deg,#FF3B5C,#FF7A59)]
              p-4
            "
          >
            <span
              className="
                grid
                h-[42px]
                w-[42px]
                shrink-0
                place-items-center
                rounded-full
                border-2
                border-white/60
                bg-white
              "
            >
              <BoltIcon small />
            </span>

            <div className="min-w-0 flex-1">
              <strong
                className="
                  block
                  text-[14.5px]
                  font-extrabold
                  text-white
                "
              >
                Sahal Assistant
              </strong>

              <span
                className="
                  flex
                  items-center
                  gap-[5px]
                  text-[11px]
                  font-bold
                  text-white/90
                "
              >
                <i
                  className="
                    h-[7px]
                    w-[7px]
                    rounded-full
                    bg-[#B9FFCB]
                  "
                />
                Online
              </span>
            </div>

            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="
                h-[32px]
                w-[32px]
                shrink-0
                rounded-full
                border-0
                bg-white/25
                text-[13px]
                text-white
              "
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="
              flex
              min-h-[120px]
              flex-1
              flex-col
              gap-[10px]
              overflow-y-auto
              p-4
            "
          >
            {messages.map((message, index) => (
              <div
                key={`${message.who}-${index}`}
                className={`
                  max-w-[84%]
                  break-words
                  px-[14px]
                  py-[11px]
                  text-[13.5px]
                  font-semibold
                  leading-[1.5]

                  ${
                    message.who === "bot"
                      ? `
                        self-start
                        rounded-[16px]
                        rounded-bl-[4px]
                        bg-white
                        text-[#1F1F24]
                        shadow-[0_4px_14px_-8px_rgba(0,0,0,0.25)]
                      `
                      : `
                        self-end
                        rounded-[16px]
                        rounded-br-[4px]
                        bg-[linear-gradient(120deg,#FF3B5C,#FF7A59)]
                        text-white
                      `
                  }
                `}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div
            className="
              flex
              shrink-0
              flex-wrap
              gap-2
              px-4
              pb-3
            "
          >
            {quickQuestions.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() =>
                  askQuickQuestion(item.key, item.label)
                }
                className="
                  rounded-full
                  border-2
                  border-[#EDEDF1]
                  bg-white

                  px-[13px]
                  py-2

                  text-[12px]
                  font-bold
                  text-[#1F1F24]

                  transition-colors
                  duration-200

                  hover:border-[#FF3B5C]
                  hover:text-[#FF3B5C]
                "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-2

              border-t
              border-[#EDEDF1]

              bg-white

              px-4
              py-3
            "
          >
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
              className="
                min-w-0
                flex-1

                rounded-full
                border-2
                border-[#EDEDF1]

                bg-white

                px-4
                py-[10px]

                text-[13px]
                font-medium
                text-[#1F1F24]

                outline-none

                placeholder:text-[#8C8C96]

                focus:border-[#55E5E8]

                max-[600px]:text-[16px]
              "
            />

            <button
              type="button"
              aria-label="Send message"
              onClick={sendMessage}
              className="
                h-[38px]
                w-[38px]
                shrink-0
                rounded-full
                border-0
                bg-[linear-gradient(120deg,#FF3B5C,#FF7A59)]
                text-[14px]
                text-white
              "
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SahalChatbot;
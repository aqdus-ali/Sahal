import { useEffect, useMemo, useRef, useState } from "react";

import "../styles/ProductShowcase.css";

import matte12 from "../assets/product-img/12-Matte-lipsticks.png";
import arganBiotin from "../assets/product-img/Argan-&-Biotin.png";
import blackHoodie from "../assets/product-img/Black-Graphic-Hoodie.png";
import blackHandbag from "../assets/product-img/Black-Quilted-Handbag.png";
import bridalJewellery from "../assets/product-img/Gold-Bridal-Jewellery-Set.png";
import flowerSoaps from "../assets/product-img/Handmade-Flower-Soaps.png";
import chocolateGift from "../assets/product-img/Hot-Chocolate-Gift-Pack.png";
import hrithikRoshan from "../assets/product-img/Hrithik-Roshan.png";
import matteLipsticks from "../assets/product-img/Matte-Lipsticks.png";
import bomberJacket from "../assets/product-img/Men's-Black-Bomber-Jacket.png";
import hijabAbaya from "../assets/product-img/Modest-Hijab-&-Abaya-Set.png";
import herbalSoap from "../assets/product-img/Organic-Herbal-Soap.png";
import philipsBHH from "../assets/product-img/Philips-BHH88010.png";
import philipsStraightening from "../assets/product-img/Philips-Hair-Straightening.png";
import magneticWatch from "../assets/product-img/Starry-Dial-Magnetic-Watch.png";
import terracottaDress from "../assets/product-img/Tiered-Terracotta-Maxi-Dress.png";
import whiteSneakers from "../assets/product-img/White-Platform-Sneakers.png";
import womenKurta from "../assets/product-img/Women-Printed-Wrap-Kurta.png";

const categories = [
  "All",
  "Beauty",
  "Fashion",
  "Mens",
  "Womens",
  "Gifts",
  "Under SAR 20",
  "Under SAR 30",
  "Under SAR 100",
];

const priceFilters = {
  "Under SAR 20": 20,
  "Under SAR 30": 30,
  "Under SAR 100": 100,
};

const products = [
  {
    title: "Pack of 12 Matte Lipsticks",
    category: "Beauty",
    image: matte12,
    price: 80,
    oldPrice: 135,
    rating: 4.5,
    reviews: "56,890",
  },
  {
    title: "Glossy Lip Tint & Gloss",
    category: "Beauty",
    image: matteLipsticks,
    price: 45,
    oldPrice: 75,
    rating: 4.5,
    reviews: "12,044",
  },
  {
    title: "Rosemary Sulfate-Free Shampoo",
    category: "Beauty",
    image: philipsBHH,
    price: 60,
    oldPrice: 100,
    rating: 4,
    reviews: "8,310",
  },
  {
    title: "Rosemary Mint Shampoo & Conditioner",
    category: "Beauty",
    image: hrithikRoshan,
    price: 75,
    oldPrice: 120,
    rating: 4.5,
    reviews: "6,776",
  },
  {
    title: "Argan & Biotin Hair Care Set",
    category: "Beauty",
    image: arganBiotin,
    price: 140,
    oldPrice: 230,
    rating: 4.5,
    reviews: "21,430",
  },
  {
    title: "Organic Herbal Soap Bar",
    category: "Beauty",
    image: herbalSoap,
    price: 18,
    oldPrice: 30,
    rating: 4,
    reviews: "15,200",
  },
  {
    title: "Handmade Flower Soaps",
    category: "Gifts",
    image: flowerSoaps,
    price: 35,
    oldPrice: 58,
    rating: 4.5,
    reviews: "3,905",
  },
  {
    title: "Philips Hair Straightening Brush",
    category: "Beauty",
    image: philipsStraightening,
    price: 80,
    oldPrice: 135,
    rating: 4,
    reviews: "56,890",
  },
  {
    title: "White Platform Sneakers",
    category: "Fashion",
    image: whiteSneakers,
    price: 95,
    oldPrice: 160,
    rating: 4.5,
    reviews: "21,430",
  },
  {
    title: "Black Quilted Handbag",
    category: "Fashion",
    image: blackHandbag,
    price: 120,
    oldPrice: 200,
    rating: 4.5,
    reviews: "9,872",
  },
  {
    title: "Starry Dial Magnetic Watch",
    category: "Fashion",
    image: magneticWatch,
    price: 85,
    oldPrice: 140,
    rating: 4.5,
    reviews: "344,567",
  },
  {
    title: "Black Graphic Hoodie",
    category: "Mens",
    image: blackHoodie,
    price: 110,
    oldPrice: 180,
    rating: 4.5,
    reviews: "9,872",
  },
  {
    title: "Men's Black Bomber Jacket",
    category: "Mens",
    image: bomberJacket,
    price: 150,
    oldPrice: 250,
    rating: 4.5,
    reviews: "4,120",
  },
  {
    title: "Women Printed Wrap Kurta",
    category: "Womens",
    image: womenKurta,
    price: 80,
    oldPrice: 160,
    rating: 4.5,
    reviews: "56,890",
  },
  {
    title: "Tiered Terracotta Maxi Dress",
    category: "Womens",
    image: terracottaDress,
    price: 120,
    oldPrice: 200,
    rating: 4,
    reviews: "8,310",
  },
  {
    title: "Modest Hijab & Abaya Set",
    category: "Womens",
    image: hijabAbaya,
    price: 130,
    oldPrice: 210,
    rating: 4.5,
    reviews: "6,120",
  },
  {
    title: "Gold Bridal Jewellery Set",
    category: "Gifts",
    image: bridalJewellery,
    price: 320,
    oldPrice: 480,
    rating: 5,
    reviews: "2,310",
  },
  {
    title: "Hot Chocolate Gift Pack",
    category: "Gifts",
    image: chocolateGift,
    price: 18,
    oldPrice: 25,
    rating: 4,
    reviews: "15,200",
  },
];

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(
    22 * 3600 + 55 * 60 + 20
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 86399));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".product-rv");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("product-in");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    const priceLimit = priceFilters[activeCategory];

    if (priceLimit) {
      return products.filter(
        (product) => product.price <= priceLimit
      );
    }

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  const toggleWishlist = (title) => {
    setWishlist((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const formatCountdown = () => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    const pad = (value) => String(value).padStart(2, "0");

    return `${hours}h ${pad(minutes)}m ${pad(seconds)}s`;
  };

  const getRating = (rating) => {
    const fullStars = Math.floor(rating);

    return (
      "★".repeat(fullStars) +
      (rating % 1 ? "☆" : "")
    );
  };

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="
        bg-[#FFF4F6]
        py-[84px]
        font-[Montserrat]
        max-[860px]:py-[60px]
      "
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">

        {/* Heading */}
        <div className="product-rv mb-[44px]">
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
            Product showcase
          </span>

          <h2
            className="
              text-[clamp(28px,4vw,42px)]
              font-extrabold
              leading-[1.15]
              text-[#1F1F24]
            "
          >
            A look inside the marketplace
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
            Sample products from the Sahal marketplace. Tap a category,
            then tap the heart to wishlist.
          </p>
        </div>

        {/* Deal Bar */}
        <div
          className="
            product-rv
            mb-[22px]
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            rounded-[16px]
            bg-[#F9CF2B]
            px-[22px]
            py-4
            font-extrabold
            text-[#241C00]
          "
        >
          <span>⏰ Deal of the Day</span>

          <span>
            Ends in {formatCountdown()}
          </span>
        </div>

        {/* Categories */}
        <div
          className="
            product-rv
            mb-[26px]
            flex
            flex-wrap
            gap-[10px]
          "
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  cursor-pointer
                  rounded-full
                  border-2
                  px-[18px]
                  py-[9px]
                  text-[13px]
                  font-bold
                  transition-colors
                  duration-200

                  ${
                    active
                      ? "border-[#FF3B5C] bg-[#FF3B5C] text-white"
                      : "border-[#EDEDF1] bg-white text-[#1F1F24] hover:border-[#FF3B5C]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products */}
        <div
          className="
            grid
            grid-cols-[repeat(auto-fill,minmax(210px,1fr))]
            gap-[18px]
          "
        >
          {filteredProducts.map((product) => {
            const discount = Math.round(
              (1 - product.price / product.oldPrice) * 100
            );

            return (
              <article
                key={product.title}
                className="
                  group
                  product-rv
                  rounded-[20px]
                  border
                  border-[#EDEDF1]
                  bg-white
                  p-3
                  transition-shadow
                  duration-[250ms]
                  ease-[ease]
                  hover:shadow-[0_14px_40px_-16px_rgba(40,20,40,0.22)]
                "
              >
                {/* Product Image */}
                <div
                  className="
                    relative
                    h-[150px]
                    overflow-hidden
                    rounded-[14px]
                    bg-[#F5F5F7]
                  "
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    draggable="false"
                    className="
                      h-full
                      w-full
                      select-none
                      object-cover
                      transition-transform
                      duration-[400ms]
                      ease-[ease]
                      group-hover:scale-[1.12]
                    "
                  />

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={`Toggle wishlist for ${product.title}`}
                    onClick={() => toggleWishlist(product.title)}
                    className="
                      absolute
                      right-[10px]
                      top-[10px]
                      z-10
                      grid
                      h-[30px]
                      w-[30px]
                      place-items-center
                      rounded-full
                      bg-white
                      text-[15px]
                      shadow-sm
                    "
                  >
                    {wishlist[product.title] ? "❤️" : "♡"}
                  </button>
                </div>

                {/* Product title */}
                <h3
                  className="
                    mx-1
                    mb-[2px]
                    mt-3
                    text-[14px]
                    font-bold
                    leading-[1.4]
                    text-[#1F1F24]
                  "
                >
                  {product.title}
                </h3>

                {/* Price */}
                <div
                  className="
                    m-1
                    flex
                    flex-wrap
                    items-baseline
                    gap-x-[6px]
                    font-extrabold
                    text-[#1F1F24]
                  "
                >
                  <span className="text-[14px]">
                    SAR {product.price}
                  </span>

                  <s
                    className="
                      text-[12px]
                      font-medium
                      text-[#6B6B76]
                    "
                  >
                    SAR {product.oldPrice}
                  </s>

                  <em
                    className="
                      text-[12px]
                      font-normal
                      not-italic
                      text-[#FF3B5C]
                    "
                  >
                    {discount}% Off
                  </em>
                </div>

                {/* Rating */}
                <div className="m-1 text-[12px] text-[#F5B100]">
                  {getRating(product.rating)}{" "}

                  <small className="text-[#6B6B76]">
                    {product.reviews}
                  </small>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
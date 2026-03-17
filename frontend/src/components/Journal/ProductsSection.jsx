import React from "react";

/* ------------------ DATA ------------------ */
const products = [
  {
    id: 1,
    title: "JAMS, SPREADS & HONEY",
    img: "/images/jam.png",
  },
  {
    id: 2,
    title: "SYRUPS, SQUASHES & CRUSHES",
    img: "/images/syrup.png",
  },
  {
    id: 3,
    title: "PACKAGED DRINKING WATER",
    img: "/images/water.png",
  },
  {
    id: 4,
    title: "CANNED FOOD PRODUCTS",
    img: "/images/canned.png",
  },
  {
    id: 5,
    title: "BEVERAGE SOLUTIONS",
    img: "/images/beverage.png",
  },
  {
    id: 6,
    title: "SAUCES & DRESSINGS",
    img: "/images/sauce.png",
  },
];

/* ------------------ CARD ------------------ */
const ProductCard = ({ item }) => {
  return (
    <div className="group bg-[#EDEDED] p-4 sm:p-6 rounded-xl transition duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">

      {/* IMAGE BOX */}
      <div className="w-full aspect-[4/3] bg-[#D9D9D9] flex items-center justify-center overflow-hidden rounded-md">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* TITLE */}
      <h3 className="mt-4 text-sm sm:text-base md:text-lg font-medium text-black">
        {item.title}
      </h3>

      {/* CTA */}
      <div className="mt-3 flex items-center gap-2 text-sm text-black cursor-pointer group-hover:gap-3 transition-all">
        <span className="text-lg">*</span>
        <span className="group-hover:underline">Know More</span>
      </div>
    </div>
  );
};

/* ------------------ MAIN SECTION ------------------ */
const ProductsSection = () => {
  return (
    <section className="w-full bg-[#A8845D] px-6 sm:px-10 md:px-20 py-16 md:py-24">

      {/* HEADING */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-[#5A3E27] mb-12 md:mb-20 tracking-[-1px] md:tracking-[-2px]">
        Products
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

    </section>
  );
};

export default ProductsSection;
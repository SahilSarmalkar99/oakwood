import React from "react";

const products = [
  {
    title: "Canned Products",
    img: "https://picsum.photos/500/400?1",
  },
  {
    title: "Fruit Juices",
    img: "https://picsum.photos/500/400?2",
  },
  {
    title: "Sauces & Spreads",
    img: "https://picsum.photos/500/400?3",
  },
];

const ProductSection = () => {
  return (
    <section className="w-full bg-[#3E3228] text-white py-20 px-6 md:px-16">
      
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-3xl md:text-6xl font-bold text-[#D2B48C] leading-tight">
          Product Categories We Offer
        </h1>

        <p className="mt-6 text-sm md:text-lg text-[#CBB59B]">
          With a variety of canned products, fruit juices, mayonnaise,
          jams, spreads and various other products.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((item, i) => (
          <div
            key={i}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:scale-[1.03] transition-all duration-300"
          >
            
            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt=""
                className="w-full h-[220px] md:h-[260px] object-cover rounded-xl group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-[#E5D3B3]">
                {item.title}
              </h3>

              <button className="text-sm text-[#D2B48C] hover:underline">
                Know More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-16">
        <button className="bg-[#D2B48C] text-[#3E3228] px-8 py-3 rounded-full font-medium hover:scale-105 transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
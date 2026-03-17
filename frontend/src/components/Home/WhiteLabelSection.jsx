import React from "react";

const WhiteLabelSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] px-6 md:px-16 py-20">

      {/* HEADING */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-7xl font-bold text-[#8B6B4E] leading-tight">
          We also do white labelling
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#8B6B4E] max-w-2xl">
          we provide Custom Branding, Multi Package options, High quality
          standards, scalable solutions and market ready packaging.
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE 1 */}
        <div>
          <img
            src="https://picsum.photos/800/600?blue"
            alt=""
            className="w-full h-[250px] md:h-[380px] object-cover rounded-xl"
          />
        </div>

        {/* IMAGE 2 */}
        <div>
          <img
            src="https://picsum.photos/600/600?bottle"
            alt=""
            className="w-full h-[250px] md:h-[380px] object-cover rounded-xl"
          />
        </div>

        {/* TEXT 1 */}
        <div className="space-y-4">
          <p className="text-md md:text-lg text-gray-700">
            Bottled and packaged with your unique label & design
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[#8B6B4E] text-xl">✦</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#8B6B4E]">
              Packaging Options
            </h3>
          </div>

          <div className="text-[#8B6B4E] text-lg leading-relaxed">
            <p>PET Bottles: 200ml | 500ml | 1L | 2L | 5L</p>
            <p>Bulk Options: 20L Jars</p>
          </div>
        </div>

        {/* TEXT 2 */}
        <div className="space-y-4">
          <p className="text-md md:text-lg text-gray-700">
            High-quality white label bottled water solutions designed for your brand.
          </p>

          <div className="text-[#8B6B4E] text-lg leading-relaxed">
            <p>Premium Packaging</p>
            <p>Custom Label Design</p>
            <p>Scalable Production</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default WhiteLabelSection;
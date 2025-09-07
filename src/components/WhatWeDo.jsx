export default function WhatWeDo() {
  return (
    <div className="pt-24 px-6 pb-16 min-h-screen bg-gradient-to-b from-lime-50 via-white to-stone-100 text-gray-800">
      <h1
        className="text-4xl font-extrabold text-center text-leaf mb-10"
        data-aos="fade-up"
      >
        🌾 What We Do at <span className="text-sprout">SowSure</span>
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Intro Narrative */}
        <div
          className="bg-white rounded-xl p-6 shadow-md border-l-4 border-lime-500"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-lime-700 mb-3">
            🌱 Agriculture’s Backbone & Challenges
          </h2>
          <p className="text-gray-700 text-md leading-relaxed">
            Agriculture is the backbone of India’s rural economy, but smallholder farmers still struggle
            with uncertainty in crop choices, input use, and resource planning. With changing climate
            patterns and limited access to reliable data, many rely on traditional methods that no longer
            meet today’s challenges.
          </p>
        </div>

        {/* Climate-Smart Farming */}
        <div
          className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            🌍 The Need for Climate-Smart Farming
          </h2>
          <p className="text-gray-700 text-md leading-relaxed">
            To move towards climate-smart farming, India needs robust{" "}
            <span className="font-semibold">Monitoring, Reporting, and Verification (MRV)</span> systems
            that can track impact, build transparency, and open doors to climate-linked finance. Yet most
            existing MRV solutions are too costly, too complex, or not designed for smallholder realities.
          </p>
        </div>

        {/* MRV Solution */}
        <div
          className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🚀 Our Approach
          </h2>
          <p className="text-gray-700 text-md leading-relaxed">
            What is needed is a <span className="font-semibold">simple, affordable, and scalable MRV platform</span>{" "}
            that combines satellite imagery, sensor data, and farmer inputs into clear, actionable insights. 
            Such a solution can guide everyday farm decisions while also providing verifiable climate benefits, 
            helping farmers reduce risk and aligning with NABARD’s mission of{" "}
            <span className="font-semibold">inclusive, tech-enabled rural growth</span>.
          </p>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-gray-500 italic">
        We believe in building technology that grows <strong>with farmers</strong>, not just for them.
      </p>
    </div>
  );
}

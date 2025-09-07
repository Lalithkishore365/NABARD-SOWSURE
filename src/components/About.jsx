import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const team = [
    {
      name: "Gautham R",
      email: "gr0gautham@gmail.com",
      linkedin: "https://www.linkedin.com/in/gautham-r2005",
      github: "https://github.com/gautham-here",
    },
    {
      name: "LalithKishore M",
      email: "lalithkishore2109@gmail.com",
      linkedin: "https://www.linkedin.com/in/lalithkishore37",
      github: "https://github.com/Lalithkishore365",
    },
    {
      name: "P A Athithiya",
      email: "athithiya.pa@gmail.com",
      linkedin: "https://www.linkedin.com/in/athisivesh",
      github: "https://github.com/athisivesh",
    },
    {
      name: "Sriram S V",
      email: "siddharthsriram2005@gmail.com",
      linkedin: "https://www.linkedin.com/in/sriram-s-v-7ba98328a/",
      github: "https://github.com/IamRasengan",
    },
    {
      name: "Lokesh R",
      email: "nrlokesh2005@gmail.com",
      linkedin: "https://www.linkedin.com/in/lokesh-r-4a2b9728a/",
      github: "https://github.com/LokeshR-25",
    },
  ];

  return (
    <div className="pt-24 px-6 pb-24 min-h-screen bg-gradient-to-b from-stone-50 via-white to-lime-100 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-lime-700 mb-4" data-aos="fade-in">
        🌿 About SowSure
      </h1>
      <p className="text-center text-md text-gray-600 mb-10 italic">
        A sustainable farming planner built by Team Gentlemen
      </p>

      {/* Problem Statement and Solution */}
      <div className="max-w-5xl mx-auto space-y-6 text-justify text-md text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-leaf mb-4">🚨 The Problem</h2>
          <div className="space-y-6">
            {/* Lack of Unified Platforms */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-red-500" data-aos="fade-up">
              <h3 className="text-lg font-bold text-red-600 mb-2">❌ Lack of Unified Platforms</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Smallholder farmers lack a single, reliable platform that integrates soil, climate, water, labor, 
                and market factors to guide data-driven crop planning and resource management.
              </p>
            </div>

            {/* Limited Scope of Existing Tools */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-orange-400" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-bold text-orange-600 mb-2">⚠️ Limited Scope of Existing Tools</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Current solutions rarely support multi-cropping, organic practices, or dynamic resource use — all 
                of which are critical for sustainable and climate-resilient agriculture.
              </p>
            </div>

            {/* Fragmented and Inaccessible Data */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-yellow-400" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-bold text-yellow-600 mb-2">📉 Fragmented and Inaccessible Data</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Agricultural data from satellites, IoT devices, and local records is often scattered, difficult to 
                access, and not tailored to smallholder contexts — leading to missed opportunities for improving 
                yield and profitability.
              </p>
            </div>

            {/* Gap in MRV for Smallholders */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-green-500" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg font-bold text-green-600 mb-2">🌍 Gap in MRV for Smallholders</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Most Monitoring, Reporting, and Verification (MRV) systems are either too complex or too costly, 
                leaving smallholders without tools to prove climate benefits, access carbon finance, or align with 
                sustainability frameworks.
              </p>
            </div>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-semibold text-leaf mb-4">🌱 Our Solution: SowSure</h2>
          <div className="space-y-6">
            
            {/* Data-Driven Crop Recommendations */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-green-500" data-aos="fade-up">
              <h3 className="text-lg font-bold text-green-600 mb-2">📊 Data-Driven Crop Advice</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                AI-powered crop recommendations using soil, climate, water, and labor data for smarter planting decisions.
              </p>
            </div>

            {/* Sustainable Farming Support */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-emerald-500" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-bold text-emerald-600 mb-2">🌾 Sustainable Practices</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Support crop rotation, intercropping, and organic manure to boost soil health and reduce chemical use.
              </p>
            </div>

            {/* Accessible Farm Planning */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-blue-500" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">📱 Easy Farm Planning</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Simple platform with localized advice, crop calendars, regional languages, and offline access.
              </p>
            </div>

            {/* Integrated MRV */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-purple-500" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg font-bold text-purple-600 mb-2">🌍 Climate MRV</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Track resources and yields with satellite & sensor data to prove climate benefits and enable carbon finance.
              </p>
            </div>

            {/* SDG Contribution */}
            <div className="bg-white rounded-lg p-5 shadow border-l-4 border-yellow-500" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-lg font-bold text-yellow-600 mb-2">🎯 Aligned with SDGs</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Boost farmer income while contributing to SDG 2 (Zero Hunger), SDG 12 (Responsible Consumption), and SDG 13 (Climate Action).
              </p>
            </div>

          </div>
        </section>

      </div>


      <p className="mt-8 text-center text-sm text-gray-500 italic">
        Built for farmers who feed the world — with tech that empowers them.
      </p>
    </div>
  );
}

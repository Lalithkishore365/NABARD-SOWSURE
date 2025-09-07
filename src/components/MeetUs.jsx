import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MeetUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contributors = [
    {
      name: "Gautham R",
      github: "https://github.com/gautham-here",
      linkedin: "https://linkedin.com/in/gautham-r2005",
      email: "gr0gautham@gmail.com",
    },
    {
      name: "LalithKishore M",
      github: "https://github.com/Lalithkishore365",
      linkedin: "https://linkedin.com/in/lalithkishore37",
      email: "lalithkishore2109@gmail.com",
    },
    {
      name: "P A Athithiya",
      github: "https://github.com/athisivesh",
      linkedin: "https://linkedin.com/in/athisivesh",
      email: "athithiya.pa@gmail.com",
    },
    {
      name: "Sriram S V",
      github: "https://github.com/IamRasengan",
      linkedin: "https://www.linkedin.com/in/sriram-s-v-7ba98328a/",
      email: "siddharthsriram2005@gmail.com",
    },
    {
      name: "Lokesh R",
      github: "https://github.com/LokeshR-25",
      linkedin: "https://www.linkedin.com/in/lokesh-r-4a2b9728a/",
      email: "nrlokesh2005@gmail.com",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-24 px-6 pb-16 min-h-screen bg-gradient-to-b from-green-50 via-white to-stone-100 text-gray-800">
      {/* Team Section */}
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-12">
        👥 Meet the <span className="text-lime-600">Team Gentlemen</span> 
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {contributors.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-2">{c.name}</h2>
              <p className="text-sm text-gray-600 italic">{c.email}</p>
            </div>
            <div className="flex gap-5 mt-4 text-2xl text-green-700">
              <a href={c.github} target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href={c.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${c.email}`} title="Email">
                <MdEmail />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <h2 className="text-3xl font-bold text-green-700 mt-16 mb-6 text-center">
        📝 Share Your Feedback
      </h2>
      <div className="max-w-xl mx-auto">
        {submitted ? (
          <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg shadow text-center">
            ✅ Thanks for your feedback! We’ll use it to improve SowSure.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 shadow-md rounded-lg border"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

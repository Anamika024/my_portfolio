import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <div className="bg-[#0f172a] rounded-3xl p-8 text-white">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <div className="w-10 h-1 bg-yellow-400 mb-6 rounded"></div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden mb-8">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Delhi%20India&z=13&output=embed"
          className="w-full h-[250px] border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* Form */}
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name + Email */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            className="bg-[#020617] border border-blue-900 text-white rounded-xl p-3 focus:outline-none focus:border-yellow-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-[#020617] border border-blue-900 text-white rounded-xl p-3 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full bg-[#020617] border border-blue-900 text-white rounded-xl p-3 focus:outline-none focus:border-yellow-400"
          required
        ></textarea>

        <div className="flex justify-end">
        <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
            Send Message
        </button>
        </div>

      </form>
    </div>
  );
}
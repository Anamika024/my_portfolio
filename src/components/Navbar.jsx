export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = ["about", "resume", "projects", "contact"];

  return (
    <div className="flex justify-end mb-8">
      <div className="bg-[#0f172a] border border-blue-900/40 px-6 py-3 rounded-2xl flex gap-6 shadow-md">
        
        {navItems.map((item) => (
          <span
            key={item}
            onClick={() => setActiveSection(item)}
            className={`cursor-pointer capitalize transition ${
              activeSection === item
                ? "text-yellow-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item}
          </span>
        ))}

      </div>
    </div>
  );
}
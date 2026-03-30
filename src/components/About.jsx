export default function About() {
  return (
        <div>
      <h1 className="text-3xl font-bold mb-2">About Me</h1>
      <div className="w-12 h-1 bg-yellow-400 mb-6 rounded"></div>

      <div className="bg-[#0f172a] border border-blue-900/40 p-6 rounded-2xl shadow-md max-w-xl">
        <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
        <p className="text-gray-400">
          Hi, I'm Anamika, a developer passionate about building scalable backend systems
          using Java and Spring Boot. I love solving DSA problems and building impactful projects.
        </p>
      </div>
      

      {/* Highlights */}
      <h2 className="text-2xl font-bold mt-10 mb-6">Impact Highlights</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#0f172a] border border-blue-900/40 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="font-semibold">Scalable Systems</h3>
          <p className="text-gray-400 mt-2">
            Built backend systems handling transactions efficiently.
          </p>
        </div>

        <div className="bg-[#0f172a] border border-blue-900/40 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="font-semibold">DSA Excellence</h3>
          <p className="text-gray-400 mt-2">
            Solved 700+ problems across platforms.
          </p>
        </div>
      </div>
      </div>
  );
}
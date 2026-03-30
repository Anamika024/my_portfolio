export default function Projects() {
  return (
            <div>
            <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
            <div className="w-12 h-1 bg-yellow-400 mb-6 rounded"></div>

            <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-[#0f172a] border border-blue-900/40 p-5 rounded-xl hover:scale-105 transition">
                <h3 className="text-white font-semibold">PayPal Clone</h3>
                <p className="text-gray-400 mt-2">
                Backend system built using Spring Boot for handling transactions.
                </p>
            </div>

            <div className="bg-[#0f172a] border border-blue-900/40 p-5 rounded-xl hover:scale-105 transition">
                <h3 className="text-white font-semibold">DSA Tracker</h3>
                <p className="text-gray-400 mt-2">
                Tracks daily coding progress and problem-solving stats.
                </p>
            </div>

            <div className="bg-[#0f172a] border border-blue-900/40 p-5 rounded-xl hover:scale-105 transition">
                <h3 className="text-white font-semibold">Portfolio Website</h3>
                <p className="text-gray-400 mt-2">
                Personal portfolio built using React and Tailwind CSS.
                </p>
            </div>

            </div>
        </div>
  );
}
export default function Resume() {
  return (
    <div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Resume</h1>
      <div className="w-12 h-1 bg-yellow-400 mb-6 rounded"></div>
      {/* Education */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Education</h2>

        <div className="bg-[#0f172a] border border-blue-900/40 rounded-2xl p-6">

          <h3 className="font-semibold text-lg">
            B.Tech – Information Technology
          </h3>

          <p className="text-yellow-400 text-sm">
            Bundelkhand Institute of Engineering & Technology, Jhansi
          </p>

          <p className="text-gray-400 text-sm mt-1">
            2020 – 2024
          </p>

          <p className="text-gray-400 mt-3">
            Focused on Data Structures, Algorithms, and Backend Development using Java & Spring Boot.
          </p>

        </div>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>

        <div className="bg-[#0f172a] border border-blue-900/40 rounded-2xl p-6">
          <h3 className="font-semibold text-lg">Aspiring Software Engineer</h3>
          <p className="text-yellow-400 text-sm">Self Learning • 2024 - Present</p>

          <ul className="text-gray-400 mt-4 space-y-2 list-disc ml-5">
            <li>Solved 700+ DSA problems across platforms</li>
            <li>Built backend projects using Java & Spring Boot</li>
            <li>Learning system design (HLD & LLD)</li>
            <li>Focused on clean code and problem solving</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-4">My Skills</h2>

        <div className="bg-[#0f172a] border border-blue-900/40 rounded-2xl p-6 space-y-6">

          {[
            { name: "Problem Solving & DSA", level: 90 },
            { name: "Java & Spring Boot", level: 85 },
            { name: "System Design", level: 75 },
            { name: "MySQL & Databases", level: 80 },
            { name: "React Basics", level: 70 },
          ].map((skill, i) => (
            <div key={i}>
              
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-[#020617] rounded-full">
                <div
                  className="h-2 bg-yellow-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
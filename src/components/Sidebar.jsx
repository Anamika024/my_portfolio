import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import my_avatar from "../assets/my_avatar.png";

export default function Sidebar() {
  return (
    <div className="w-[280px] bg-slate-900 p-6 flex flex-col items-center rounded-r-3xl shadow-lg">

      {/* Avatar */}
      <img
        src={my_avatar}
        alt="Anamika Patel"
        className="w-28 h-28 rounded-2xl mb-4 object-cover"
        />

      {/* Name */}
      <h2 className="text-xl font-bold">Anamika Patel</h2>
      <p className="text-gray-400 text-sm mt-1">Software Developer</p>

      <div className="w-full border-t border-gray-700 my-6"></div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Info Section */}
      <div className="space-y-4 text-sm">

        <div className="flex items-center gap-4">
          <div className="bg-[#2a2a2a] p-3 rounded-xl">
            <FaEnvelope className="text-yellow-400" />
          </div>
          <div>
            <p className="text-gray-400 text-xs">EMAIL</p>
            <p>anamikapatel624@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#2a2a2a] p-3 rounded-xl">
            <FaPhone className="text-yellow-400" />
          </div>
          <div>
            <p className="text-gray-400 text-xs">PHONE</p>
            <p>+91 9305393158</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#2a2a2a] p-3 rounded-xl">
            <FaBirthdayCake className="text-yellow-400" />
          </div>
          <div>
            <p className="text-gray-400 text-xs">BIRTHDAY</p>
            <p>Jan 12, 2002</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#2a2a2a] p-3 rounded-xl">
            <FaMapMarkerAlt className="text-yellow-400" />
          </div>
          <div>
            <p className="text-gray-400 text-xs">LOCATION</p>
            <p>India</p>
          </div>
        </div>

      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-6 text-gray-400">

        <a href="https://www.linkedin.com/in/anamika701/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
        ><FaLinkedin size={18} />
        </a>

        <a href="https://github.com/Anamika024"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
        ><FaGithub size={18} />
        </a>

        <a href="https://leetcode.com/u/anamika624/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
        ><FaCode size={18} />
        </a>

        </div>

    </div>
  );
}



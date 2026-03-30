import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  const [activeSection, setActiveSection] = useState("about");
  return (
    <div className="flex min-h-screen bg-black text-white items-center justify-center p-6">
      {/* Main Container */}
      <div className="w-full max-w-6xl flex gap-6 bg-[#020617] p-6 rounded-3xl shadow-2xl">
        
        <Sidebar />
        <MainContent 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />

      </div>
    </div>
   
  );
}

export default App

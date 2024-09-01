"use client";

import React from "react";

export default function Skills() {
  return (
    <section className="w-full min-h-screen bg-[#081b29] flex justify-center items-center p-10">
      <div className="skills-container text-center">
        <h1 className="text-[48px] text-[#00EEFF] font-extrabold mb-8 animate-fadeIn">My Skills</h1>
        <div className="skills-grid grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">

          {/* Skill 1 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#8A74FE] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">Web Developer</h3>
            <p className="text-base">Building responsive and dynamic websites with the latest web technologies.</p>
          </div>

          {/* Skill 2 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#FF0000] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">MERN Stack Developer</h3>
            <p className="text-base">Developing full-stack applications using MongoDB, Express.js, React, and Node.js.</p>
          </div>

          {/* Skill 3 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#00EEFF] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">WordPress Developer</h3>
            <p className="text-base">Expertise in creating custom WordPress themes and plugins.</p>
          </div>

          {/* Skill 4 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#8A74FE] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">Python AI Programmer</h3>
            <p className="text-base">Developing AI solutions using Python and various machine learning frameworks.</p>
          </div>

          {/* Skill 5 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#FF0000] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">Backend Developer</h3>
            <p className="text-base">Building robust and scalable server-side applications.</p>
          </div>

          {/* Skill 6 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#00EEFF] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">Express API Developer</h3>
            <p className="text-base">Creating efficient and secure RESTful APIs using Express.js.</p>
          </div>

          {/* Additional Skill 1 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#8A74FE] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">JavaScript</h3>
            <p className="text-base">Proficient in writing modern, clean, and maintainable JavaScript code.</p>
          </div>

          {/* Additional Skill 2 */}
          <div className="skill-card p-6 bg-[#1a293a] text-[#FF0000] rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-neon animate-slideIn">
            <h3 className="text-2xl font-bold mb-4">Database Management</h3>
            <p className="text-base">Experience with SQL and NoSQL databases like MongoDB, MySQL, and PostgreSQL.</p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
        .animate-slideIn {
          animation: slideIn 1.5s ease-in-out;
        }
        .shadow-neon {
          box-shadow: 0 0 20px #00EEFF, 0 0 50px #8A74FE;
        }
      `}</style>
    </section>
  );
}

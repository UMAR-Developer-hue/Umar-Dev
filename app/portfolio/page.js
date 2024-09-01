"use client";

import React from "react";

export default function Portfolio() {
  return (
    <section className="w-full min-h-screen bg-[#081b29] text-[#ffffff] p-8">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-[#00EEFF]">My Portfolio</h1>
        <p className="text-xl">
          Welcome to my portfolio page! Here you'll find a showcase of my recent projects and achievements.
        </p>
      </header>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project 1 */}
        <div className="bg-[#1f2a34] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img src="/images/project1.jpg" alt="Project 1" className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-[#00EEFF]">Project Title 1</h2>
          <p className="text-[#8A74FE] mb-4">
            Brief description of the project goes here. This could include technologies used, goals, and outcomes.
          </p>
          <a href="#" className="text-[#FF0000] font-bold underline">View Details</a>
        </div>
        {/* Example Project 2 */}
        <div className="bg-[#1f2a34] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img src="/images/project2.jpg" alt="Project 2" className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-[#00EEFF]">Project Title 2</h2>
          <p className="text-[#8A74FE] mb-4">
            Brief description of the project goes here. This could include technologies used, goals, and outcomes.
          </p>
          <a href="#" className="text-[#FF0000] font-bold underline">View Details</a>
        </div>
        {/* Example Project 3 */}
        <div className="bg-[#1f2a34] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img src="/images/project3.jpg" alt="Project 3" className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-[#00EEFF]">Project Title 3</h2>
          <p className="text-[#8A74FE] mb-4">
            Brief description of the project goes here. This could include technologies used, goals, and outcomes.
          </p>
          <a href="#" className="text-[#FF0000] font-bold underline">View Details</a>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#00EEFF]">About Me</h2>
        <p className="text-xl max-w-2xl mx-auto text-[#8A74FE]">
          I am a passionate and dedicated developer with experience in various technologies. I strive to create impactful and efficient solutions for complex problems.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#00EEFF]">Contact Me</h2>
        <p className="text-xl text-[#8A74FE] mb-4">
          Feel free to reach out to me through the contact form or connect with me on social media.
        </p>
        <a href="/contact" className="bg-[#FF0000] text-[#081b29] py-2 px-6 rounded-full font-bold transition-transform transform hover:scale-105">Contact Me</a>
      </div>
    </section>
  );
}

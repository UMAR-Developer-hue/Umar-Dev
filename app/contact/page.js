"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-[#081b29]">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#FF0000] to-[#00EEFF] opacity-50 animate-background"></div>
      </div>

      {/* Contact Form Card */}
      <div className="relative z-10 w-full max-w-lg bg-transparent p-8 rounded-2xl border-2 border-[#00EEFF] shadow-lg">
        <h1 className="text-[36px] text-[#00EEFF] font-bold mb-6 text-center">
          Contact Me
        </h1>
        <p className="text-[#8A74FE] text-center mb-8">
          We'd love to hear from you. Please fill out the form below to get in touch.
        </p>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-[#1f2a34] text-[#00EEFF] border border-[#00EEFF] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00EEFF] transition-all"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-[#1f2a34] text-[#00EEFF] border border-[#00EEFF] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00EEFF] transition-all"
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-[#1f2a34] text-[#00EEFF] border border-[#00EEFF] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00EEFF] transition-all"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-[#FF0000] text-[#081b29] rounded-full font-bold transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes background {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-background {
          animation: background 20s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}

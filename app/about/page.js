"use client";
import Image from "next/image";

export default function page() {
  return (
    <section className="w-full h-[450px] mt-32 flex">
      {/* Left Side - Image */}
      <div className="left h-full w-1/2 flex justify-center items-center">
        <Image
          src="/images/download copy.jpeg"
          alt="About Image"
          width={500}
          height={500}
          className="rounded-full border-4 border-[#0ef] shadow-custom"
        />
      </div>

      {/* Right Side - Text */}
      <div className="right h-full w-1/2 flex flex-col justify-center items-start px-10">
        <h3 className="text-[32px] font-bold">About Me</h3>
        <h1 className="text-[56px] font-extrabold text-[#0ef]">MUHAMMAD UMAR</h1>
        <p className="text-[16px] mt-4">
          I am a passionate MERN Stack developer with a deep interest in creating dynamic and responsive web applications.
          With a solid background in WordPress development and expertise in AI and Python, I am always eager to learn new 
          technologies and apply them to solve real-world problems.
        </p>
        <p className="text-[16px] mt-4">
          I enjoy working on challenging projects that push the boundaries of what's possible in web development. My journey 
          in tech has been filled with constant learning, and I am committed to continuing this path to stay at the forefront 
          of innovation.
        </p>
        <a
          href="/contact"
          className="btn-box mt-10 py-[12px] px-[28px] bg-[#00EEFF] rounded-full text-[16px] text-[#081b29] font-bold hover:text-[#081b29] hover:shadow-custom-hover hover:bg-[#0ef]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

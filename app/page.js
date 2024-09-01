"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    var typed = new Typed("#element", {
      strings: [
        "Web Developer",
        "MERN Stack Developer",
        "WordPress Developer",
        "Python AI programmer",
        "Backend Developer",
        "Express API Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <section className="w-full h-[450px] mt-32 flex">
      <div className="left h-full w-1/2 pb-11">
        <div className="home-content">
          <h3 className="text-[32px] font-bold" id="headingone">Hello! Its Me</h3>
          <h1 className="hh text-[56px] font-extrabold" id="headingmain">MUHAMMAD UMAR</h1>
          <h3 className="text-[32px]" id="headingtyped">
            And I'm a: <span id="element" className="text-[#FF0000] font-bold"></span>
          </h3>
          <p className="text-[16px]" id="headingpara">
            Passionate MERN Stack developer with hands-on experience in
            creating dynamic and responsive web applications. With a solid
            background in WordPress development and a keen interest in AI and
            Python, I'm constantly exploring new technologies to enhance my
            skill set. Currently, I am working and occasionally on web
            development.
          </p>
          <div className="home-sci mb-10" id="home-sci">
            <a
              href="#"
              className="text-[#0ef] bg-transparent text-2xl w-7 h-7 justify-center align-middle items-center rounded-full p-5 inline-flex border-2 border-[#0ef] mt-5 hover:text-[#081b29] hover:shadow-custom-hover hover:bg-[#0ef]"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="text-[#0ef] bg-transparent text-2xl w-7 h-7 justify-center align-middle items-center rounded-full p-5 inline-flex border-2 border-[#0ef] ml-5 mt-5 hover:text-[#081b29] hover:shadow-custom-hover hover:bg-[#0ef]"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="#"
              className="text-[#0ef] bg-transparent text-2xl w-7 h-7 justify-center align-middle items-center rounded-full p-5 inline-flex border-2 border-[#0ef] ml-5 mt-5 hover:text-[#081b29] hover:shadow-custom-hover hover:bg-[#0ef]"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="#"
              className="text-[#0ef] bg-transparent text-2xl w-7 h-7 justify-center align-middle items-center rounded-full p-5 inline-flex border-2 border-[#0ef] ml-5 mt-5 hover:text-[#081b29] hover:shadow-custom-hover hover:bg-[#0ef]"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-umar-5908052b3/"
              className="text-[#0ef] bg-transparent text-2xl w-7 h-7 justify-center align-middle items-center rounded-full p-5 inline-flex border-2 border-[#0ef] ml-5 mt-5 hover:text-[#081b29] hover:shadow-custom-hover hover:bg-[#0ef]"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <a
            href="/about" id="btn-box"
            className="btn-box py-[12px] px-[28px] bg-[#00EEFF] rounded-full text-[16px] text-[#081b29] space-x-1 font-bold hover:text-[#081b29] hover:shadow-custom-hover hover:bg-[#0ef]"
          >
            More about me
          </a>
        </div>
      </div>
      <div className="right h-full w-1/2 bg-red-900">
      <img src="./images/HeadPhones.jpeg"></img>
      </div>
      <style jsx>{`
         @keyframes slideRight {
            0% {
                transform: translateX(-100px);
                opacity: 0;
            }

            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }

        @keyframes slideLeft {
            0% {
                transform: translateX(100px);
                opacity: 0;
            }

            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }

        @keyframes slideTop {
            0% {
                transform: translateY(100px);
                opacity: 0;
            }

            100% {
                transform: translateY(0px);
                opacity: 1;
            }
        }

        @keyframes slideBottom {
            0% {
                transform: translateY(-100px);
                opacity: 0;
            }

            100% {
                transform: translateY(0px);
                opacity: 1;
            }
        }
      `}</style>
    </section>
  );
}

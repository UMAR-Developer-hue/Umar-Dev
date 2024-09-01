"use client";
import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="first">
          <h1
            id="title"
            className=" font-serif text-[#FF0000] font-extrabold text-3xl"
          >
            <Link href="/">UMAR-DEV</Link>
          </h1>
        </div>
        <div className="second flex justify-between">
          <ul className="flex gap-5">
            <li className="nav-li  text-lg">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-li  text-lg">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="nav-li  text-lg">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-li  text-lg">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
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
    </>
  );
}

export default Navbar;

"use client";
import icons from "@/public/assets/icons";
import Image from "next/image";

const skills = [
  {
    name: "UI/UX Design",
  },
  {
    name: "Branding",
  },
  {
    name: "Web Development",
  },
  {
    name: "Product Design",
  },
  {
    name: "Design Graphic",
  },
  {
    name: "Strategy",
  },
];

export default function Home() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row px-[16px] py-[40px] lg:px-[60px] lg:py-[80px] bg-[url('/assets/images/home-bg.png')] bg-cover bg-center gap-10">
        <div className="flex flex-col gap-2 w-full md:w-3/2 order-2 md:order-1">
          <h1 className="text-title">
            👋 Hey there, <br />
            It’s Harun Bahrudin.
          </h1>
          <p className="text-subtitle">
            I design user-first experiences that solve real problems.
          </p>
          <div className="flex flex-row gap-2 mt-4">
            <button className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-md text-button">
              Download CV
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-500/80 text-black px-4 py-2 rounded-md text-button">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end order-1 md:order-2">
          <Image src="/assets/images/hero.svg" alt="Hero Image" width={500} height={500} />
        </div>
      </div>
      <div className="relative overflow-x-hidden bg-black py-[18px] px-4 md:px-[60px]">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <div key={skill.name + idx} className="flex flex-row gap-2 items-center mx-6 md:mx-[60px]">
              <icons.Star />
              <p className="text-white font-semibold text-sm md:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @media (min-width: 768px) {
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
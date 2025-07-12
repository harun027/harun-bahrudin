"use client";
import Icons from "@/public/assets/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { title } from "process";
import Footer from "./Footer";

interface DataProps {
  id: number;
  image: string;
  title: string;
  desc: string;
  name: string;
  role: string;
  date: string;
  link: string;
  page: string;
  source: string;
}

const data = [
  {
    id: 1,
    image: "",
    title: `Case Studies`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
  {
    id: 2,
    image: "",
    title: `A collection of my <br /> favorite works.`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
  {
    id: 3,
    image: "",
    title: `A collection of my <br /> favorite works.`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
  {
    id: 4,
    image: "",
    title: `A collection of my <br /> favorite works.`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
  {
    id: 5,
    image: "",
    title: `A collection of my <br /> favorite works.`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
  {
    id: 6,
    image: "",
    title: `A collection of my <br /> favorite works.`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
  {
    id: 7,
    image: "",
    title: `A collection of my <br /> favorite works.`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
  {
    id: 8,
    image: "",
    title: `A collection of my <br /> favorite works.`,
    desc: "Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit justo elit. Mauris bibendum mattis et diam tellus. Auctor mauris felis lobortis tempus.",
    name: "Harun Bahrudin",
    role: "Branding, Web design",
    date: "1 September 2019",
    link: "Uhyu.com",
    page: "1 page",
    source: "View Figma",
  },
];

export default function Portfolio() {
  const [itemActive, setItemActive] = useState<DataProps | null>(null);

  return (
    <div className="px-10 lg:px-[60px] py-10 lg:pt-20 lg:pb-16">
      {/* Heading */}
      <div className="mb-5 lg:mb-10 lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          A collection of my <br /> favorite works.
        </h1>
        <p className="text-gray-500 max-w-xl mt-2">
          A curated selection of my favorite UI/UX projects crafted with
          purpose, precision, and passion for user-centered design.
        </p>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setItemActive(item)}
          >
            <div className="bg-gray-100 h-[370px] w-full rounded-lg" />

            {/* Content */}
            <div className="text-sm mt-4">
              {/* Row 1: Link */}
              <div className="flex justify-between items-center border-b border-gray-300 p-4">
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <Icons.Chain className="w-[25px] h-[25px]" />
                  <h2 className="font-bold">Uhyu.com</h2>
                </a>
                <span className="text-xl">↗</span>
              </div>

              {/* Row 2: Pages */}
              <div className="flex items-center gap-2 border-b border-gray-300 p-4">
                <Icons.Page className="w-[25px] h-[25px]" />{" "}
                <h2 className="font-bold">1 Page</h2>
              </div>

              {/* Row 3: View Figma */}
              <div className="flex items-center gap-2 border-b border-gray-300 p-4">
                <Icons.Figma className="w-[25px] h-[25px]" />
                <h2 className="font-bold">View Figma</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {itemActive !== null && (
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white overflow-y-scroll"
          >
            <div className="px-10 lg:px-[60px] pt-5 pb-10 lg:py-10">
              <button
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => setItemActive(null)}
              >
                <Icons.Back />
                <h2 className="text-base text-[#FDA712] font-semibold">Back</h2>
              </button>
              <div className="flex flex-col lg:flex-row lg:justify-between mb-5 lg:mb-10 mt-3 lg:mt-5 gap-4">
                <div className="lg:w-1/2">
                  <h1
                    className="text-5xl font-bold mb-4"
                    dangerouslySetInnerHTML={{ __html: itemActive.title }}
                  ></h1>
                  <p className="text-gray-500 max-w-xl mt-2">
                    {itemActive.desc}
                  </p>
                </div>
                <div className="lg:w-1/4 flex flex-col">
                  <div className="flex justify-between items-center border-b border-gray-300 py-2">
                    <p className="text-[#5F6980] text-base">Name:</p>
                    <h2 className="text-base font-semibold">
                      {itemActive.name}
                    </h2>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 py-2">
                    <p className="text-[#5F6980] text-base">Role:</p>
                    <h2 className="text-base font-semibold">
                      {itemActive.role}
                    </h2>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 py-2">
                    <p className="text-[#5F6980] text-base">Date:</p>
                    <h2 className="text-base font-semibold">
                      {itemActive.date}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setItemActive(item)}
                  >
                    <div
                      className={`${
                        item.id === itemActive.id
                          ? "bg-[#FDA712]"
                          : "bg-gray-100 "
                      } h-[370px] w-full rounded-lg`}
                    />

                    {/* Content */}
                    <div className="text-sm mt-4">
                      {/* Row 1: Link */}
                      <div className="flex justify-between items-center border-b border-gray-300 p-4">
                        <a
                          href="#"
                          className="flex items-center gap-2 hover:underline"
                        >
                          <Icons.Chain className="w-[25px] h-[25px]" />
                          <h2 className="font-bold">Uhyu.com</h2>
                        </a>
                        <span className="text-xl">↗</span>
                      </div>

                      {/* Row 2: Pages */}
                      <div className="flex items-center gap-2 border-b border-gray-300 p-4">
                        <Icons.Page className="w-[25px] h-[25px]" />{" "}
                        <h2 className="font-bold">1 Page</h2>
                      </div>

                      {/* Row 3: View Figma */}
                      <div className="flex items-center gap-2 border-b border-gray-300 p-4">
                        <Icons.Figma className="w-[25px] h-[25px]" />
                        <h2 className="font-bold">View Figma</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

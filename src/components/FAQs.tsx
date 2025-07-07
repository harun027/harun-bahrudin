"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FQAS = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects take 1–2 weeks, depending on the scope. Simple landing pages can be ready in a few days.",
  },
  {
    question: "Can I update the site myself after it’s done?",
    answer:
      "Yes. I build everything in Framer, which makes it easy for your team to edit text, images, and sections without coding.",
  },
  {
    question: "Do you offer just design, or full development too?",
    answer:
      "Both. I can design and develop your site in Framer from scratch, or help improve what you already have.",
  },
  {
    question: "Do you offer just design, or full development too?",
    answer:
      "Just a quick call and a bit of info about your product. I’ll handle the rest — structure, design, and messaging.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-[16px] py-[40px] lg:px-[60px] lg:py-[40px] bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-36">
        <div className="flex flex-col gap-5 lg:gap-10 lg:w-[40%]">
          <div className="flex items-center gap-2 py-2 px-4 rounded-lg border border-[#12121226] self-start">
            <span className="rounded-full w-5 h-5 bg-green-500"></span>
            <p className="text-base text-[#5F6980]">
              Available for new projects
            </p>
          </div>
          <div className="flex flex-col gap-2.5 max-w-[450px]">
            <h1 className="text-4xl font-semibold lg:leading-[1.5]">
              Ready for a website that actually works?
            </h1>
            <p className="text-base text-[#5F6980]">
              If your site isn’t helping you grow, I’ll help you build one that
              looks sharp, builds trust, and converts better.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-[60%]">
          {FQAS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-[#12121226] rounded-lg w-full"
              >
                <div className="flex gap-5 items-center justify-between w-full text-left py-3.5 px-5">
                  <h2 className="text-base font-medium">{item.question}</h2>
                  <button
                    onClick={() => toggle(index)}
                    className="transition-transform duration-300 transform rounded-full border border-[#12121226] p-1.5 cursor-pointer"
                  >
                    <Image
                      src={"/icons/Add.svg"}
                      width={15}
                      height={15}
                      alt={"add"}
                      className={`transition-transform duration-300 transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5"
                    >
                      <div className="pb-4 pt-3.5 text-base text-gray-500 leading-relaxed border-t border-[#12121226]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

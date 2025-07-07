import Link from "next/link";
import icons from "@/public/assets/icons";

export default function Footer() {
  return (
    <footer className="bg-[#111111] min-h-[200px] px-[15px] py-[20px] lg:px-[60px] lg:py-[30px]">
      <div className="flex flex-col gap-5 lg:gap-2">
        <div className="flex gap-2 items-center">
          <icons.HarunIcon width={50} height={50} color="white" />
          <h1 className="text-3xl font-bold text-white">Harun</h1>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between pb-4 border-b border-[#696581]">
          <Link
            href={"mailto:harunbahrudin59@gmail.com"}
            className="text-base text-white"
          >
            Harunbahrudin59@gmail.com
          </Link>
          <div className="flex gap-4">
            <Link href={"#Home"} className="text-base text-white">
              Home
            </Link>
            <Link href={"#About"} className="text-base text-white">
              About
            </Link>
            <Link href={"#Work"} className="text-base text-white">
              Work
            </Link>
            <Link href={"#Contact"} className="text-base text-white">
              Contact
            </Link>
          </div>
        </div>
        <h2 className="text-[#B2B8C7]">All rights reserved © 2025</h2>
      </div>
    </footer>
  );
}

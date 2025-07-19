
import icons from "@/public/assets/icons";

export default function Skills() {
  return (
    <section className="w-full flex flex-col">
      <icons.Frame className="w-full h-full" />
      <div className="flex md:flex-row flex-col justify-center mx-0 md:mx-[60px]">
        <div className="flex flex-col border border-r-0 border-b-0 md:border-b border-gray-300 p-[24px] gap-4">
          <icons.UiKit />
          <div className="flex flex-col gap-2">
            <h4 className="text-[24px] font-semibold">UI Kit Templates</h4>
            <p className="text-[16px]">We sell modern, flexible UI Kit templates that save you time and help you create stunning designs quickly.</p>
          </div>
        </div>
        <div className="flex flex-col border border-r-0 border-b-0 md:border-b border-gray-300 p-[24px] gap-4">
          <icons.Sale />
          <div className="flex flex-col gap-2">
            <h4 className="text-[24px] font-semibold">Website Design & Development</h4>
            <p className="text-[16px]">We create attractive, responsive, and functional websites tailored to your needs, whether it's for a personal project or business.</p>
          </div>
        </div>
        <div className="flex flex-col border border-gray-300 p-[24px] gap-4">
          <icons.Platform />
          <div className="flex flex-col gap-2">
            <h4 className="text-[24px] font-semibold">Custom Solutions for MSMEs</h4>
            <p className="text-[16px]">We help small and medium-sized businesses build an effective online presence with affordable, high-quality websites designed to grow your business.</p>
          </div>
        </div>
      </div>
      <icons.Frame className="w-full h-full" />
    </section>
  );
}
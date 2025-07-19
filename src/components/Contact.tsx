import Icons from "@/public/assets/icons";

export default function Contact() {
  return (
    <section className="px-[16px] py-[40px] lg:px-[60px] lg:py-[80px] bg-[#F0F0F0]">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Kolom Kiri */}
        <div className="space-y-6">
          {/* Header: Let's Connect */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex flex-col gap-2.5">
              <Icons.HarunIcon width={50} height={50} color="black" />
              <h2 className="text-2xl font-semibold">📬 Let’s Connect!</h2>
            </div>
            <p className="mt-[10px] text-base text-gray-600">
              We create bold brand identities and seamless experiences that
              connect with people. Our work is focused on clear, impactful
              design that drives engagement and growth.
            </p>
          </div>

          {/* Email / Illustration Section */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow flex items-center justify-center">
              {/* Ilustrasi */}
              <Icons.MailUs />
            </div>

            <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
              <h3 className="font-medium text-2xl mb-1">📧 Prefer Email?</h3>
              <p className="text-base lg:text-sm text-gray-600 mb-3 mt-2 lg:mt-0">
                Got questions, ideas, or opportunities to share? Send me an
                email, and I’ll get back to you as soon as possible.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md w-full cursor-pointer">
                Email me
              </button>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6">
          {/* Get in Touch Form */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-2xl mb-[14px]">
              🤝 Get in Touch
            </h3>
            <p className="text-base lg:text-sm text-gray-600 mb-4">
              Have a project, idea, or just want to say hello? Let’s connect and
              create something incredible together.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
              <textarea
                placeholder="Leave me a message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                rows={4}
              />
              <label className="flex items-center text-sm gap-2 text-[#5F6980]">
                <input type="checkbox" className="border border-gray-300 " />
                Subscribe to Newsletter
              </label>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Stay Connected Section */}
      <div className="my-6 flex flex-col lg:flex-row justify-between p-6 rounded-lg bg-white">
        <div className="flex flex-col lg:max-w-[400px]">
          <h3 className="font-semibold text-2xl mb-1">
            🌟 Let’s Stay Connected!
          </h3>
          <p className="text-base text-gray-600">
            Follow me on social media for design inspiration, behind-the-scenes
            updates, and the latest projects. Let’s create and grow together!
          </p>
        </div>
        <div className="rounded-lg grid grid-cols-2 gap-3 lg:w-[38%] mt-5 lg:mt-0">
          {["Instagram", "Linkedin", "Behance", "Dribbble"].map((item) => {
            let Icon;
            switch (item) {
              case "Instagram":
                Icon = Icons.Instagram;
                break;
              case "Linkedin":
                Icon = Icons.Linkedin;
                break;
              case "Behance":
                Icon = Icons.Behance;
                break;
              case "Dribbble":
                Icon = Icons.Dribble;
                break;
              default:
                Icon = Icons.Dribble;
            }

            return (
              <a
                key={item}
                href="#"
                className="flex flex-col gap-2 rounded-md text-sm border border-gray-300 p-4"
              >
                <Icon />
                <div className="flex items-center justify-between">
                  <h2 className="text-base text-[#5F6980]">{item}</h2>
                  <Icons.Arrow />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Contact from "@/components/Contact";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <Portfolio />
      <Contact />
      <FAQs />
      <Footer />
    </div>
  );
}

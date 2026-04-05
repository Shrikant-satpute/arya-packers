import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Areas from "@/components/Areas";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImageSlider />
        <Services />
        <WhyUs />
        <Areas />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import WhyChooseUs from "../components/WhyChooseUs";
import PricingCards from "../components/PricingCards";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-white via-[#fffbe7] to-blue-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <WhyChooseUs />
        <PricingCards />
        <About />
        <Services />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
export default Index;

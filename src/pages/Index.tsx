
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-white via-[#fffbe7] to-blue-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ContactForm />
      </main>
      <footer className="bg-[color:#0056b3] text-white text-center py-5 text-sm mt-10">
        &copy; {new Date().getFullYear()} Nakola Expert Systems · Nairobi, Kenya
      </footer>
    </div>
  );
};

export default Index;

import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CompanyShowcase from "../components/CompanyShowcase";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CompanyShowcase />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

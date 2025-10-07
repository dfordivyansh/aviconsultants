import { ArrowRight, Award, Building, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "../assets/hero-skyline.jpg";
import aviLogo from "../assets/avi-logo.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="City skyline with architectural blueprints" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-dark/90 via-corporate-blue/70 to-corporate-blue-light/50"></div>
      </div>

      {/* Animated Blueprint Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-white rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo & Brand */}
          <div className="animate-scale-in mb-8">
            <img src={aviLogo} alt="Avi Consultants" className="h-24 md:h-32 w-auto mx-auto mb-6 drop-shadow-2xl brightness-0 invert" />
          </div>

          {/* Main Headline */}
          <div className="animate-slide-up">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Premium <span className="text-accent-red drop-shadow-lg">Engineering</span>, Valuation &<br />
              <span className="text-white drop-shadow-lg">Business Intelligence</span> Solutions
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-slide-up delay-200">
            <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Delivering precision, credibility, and excellence for over <span className="text-accent-red font-bold bg-white/20 px-3 py-1 rounded-lg">20 years</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-red" />
                <span>Govt. Approved Valuer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-red" />
                <span>Chartered Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-red" />
                <span>50+ Bank Approvals</span>
              </div>
            </div>
          </div>


          {/* CTA Buttons */}
          <div className="animate-slide-up delay-300">
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <button 
                onClick={() => scrollToSection("services")}
                className="btn-accent group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="btn-outline bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                Get Consultation
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="animate-fade-in delay-500">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 text-center border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <Award className="w-10 h-10 text-accent-red" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-white font-medium">Years Experience</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 text-center border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <Building className="w-10 h-10 text-accent-red" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-white font-medium">Projects Completed</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 text-center border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-10 h-10 text-accent-red" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white font-medium">Banks Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;

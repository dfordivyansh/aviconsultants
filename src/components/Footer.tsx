import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import aviLogo from "../assets/avi-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const offices = [
    "Lucknow",
    "Gorakhpur",
    "Gurugram",
    "Hyderabad",
    "Ghaziabad",
    "Siwan",
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={aviLogo} alt="Avi Consultants" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/80 text-sm mb-4">
              Delivering precision, credibility, and excellence in engineering, valuation & business intelligence for over 20 years.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Engineering & Design</li>
              <li>Govt. Approved Valuation</li>
              <li>TEV Reports</li>
              <li>Business Intelligence</li>
              <li>Asset Valuation</li>
              <li>Corporate Advisory</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a href="mailto:aviconsult1@gmail.com" className="hover:text-accent transition-colors">
                    aviconsult1@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a href="tel:+919935515501" className="hover:text-accent transition-colors">
                    +91 99355 15501
                  </a>
                  <br />
                  <a href="tel:+918004745922" className="hover:text-accent transition-colors">
                    +91 80047 45922
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  {offices.join(", ")}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Avi Consultants. All rights reserved.</p>
          <p className="mt-2">
            Er. Ashutosh Chandra • B.E. Civil (Hons.), F.I.V., M.I.E. (India) • Govt. Approved Valuer & Chartered Engineer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

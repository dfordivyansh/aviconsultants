import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Companies', href: '#companies' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-charcoal text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91 9935515501 | +91 8004745922</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>aviconsult1@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block text-xs">
              Trusted Engineering & Valuation Services Since 2003
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-corporate">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-corporate p-2 rounded-lg">
                <div className="text-white font-bold text-xl">AC</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-lg text-corporate-blue">
                  Er. Ashutosh Chandra
                </div>
                <div className="text-xs text-muted-foreground">
                  Engineering • Valuation • Consulting
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-corporate-blue font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-accent">
                Get Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-corporate-blue"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-corporate-blue font-medium transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="btn-accent mt-4">
                  Get Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-corporate p-2 rounded-lg">
                  <div className="text-white font-bold text-xl">AC</div>
                </div>
                <div>
                  <div className="font-poppins font-bold text-lg">
                    Er. Ashutosh Chandra
                  </div>
                  <div className="text-sm text-gray-400">
                    B.E. Civil (Hons.), F.I.V., M.I.E. (India)
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Delivering precision, credibility, and excellence in valuation & 
                structural design for over 20 years. Govt. Approved Valuer & Chartered Engineer.
              </p>
              <div className="text-sm text-gray-400">
                <p>Govt. Approved Valuer & Chartered Engineer</p>
                <p>Approved by SBI, PNB, BOI, CBI, UCO, SIDBI, LIC HFL & more</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Our Companies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Avi Consultants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tevquest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VAO Associates</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91 9935515501</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91 8004745922</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>aviconsult1@gmail.com</span>
                </p>
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-white mb-2">Office Locations</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Lucknow • Gorakhpur • Gurugram</p>
                  <p>Hyderabad • Ghaziabad • Siwan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Er. Ashutosh Chandra - All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
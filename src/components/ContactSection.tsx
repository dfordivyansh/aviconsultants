import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      city: "Lucknow (Head Office)",
      address: "Corporate Office, Engineering Plaza",
      phone: "+91 9935515501",
      email: "aviconsult1@gmail.com"
    },
    {
      city: "Gorakhpur",
      address: "Regional Office, Business District",
      phone: "+91 8004745922", 
      email: "tevquest@gmail.com"
    },
    {
      city: "Gurugram",
      address: "Corporate Hub, Cyber City",
      phone: "+91 9935515501",
      email: "vaoassociates@gmail.com"
    },
    {
      city: "Hyderabad",
      address: "Tech City Office, HITEC City",
      phone: "+91 8004745922",
      email: "aviconsult1@gmail.com"
    },
    {
      city: "Ghaziabad",
      address: "Industrial Area Office",
      phone: "+91 9935515501",
      email: "tevquest@gmail.com"
    },
    {
      city: "Siwan",
      address: "Regional Office, Commercial Zone",
      phone: "+91 8004745922",
      email: "vaoassociates@gmail.com"
    }
  ];

  const serviceOptions = [
    "Engineering & Structural Design",
    "Bank-Approved Valuations", 
    "Property & Land Valuation",
    "TEV Reports & Feasibility Studies",
    "Business Intelligence Consulting",
    "Plant & Machinery Valuations",
    "Corporate Advisory Services",
    "Other Services"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-corporate">
              <CheckCircle className="w-16 h-16 text-accent-red mx-auto mb-6" />
              <h3 className="font-poppins font-bold text-2xl text-corporate-blue mb-4">
                Thank You for Your Interest!
              </h3>
              <p className="text-muted-foreground mb-6">
                We have received your inquiry and will get back to you within 24 hours. 
                Our team is excited to discuss how we can help with your project.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-corporate"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-corporate-blue mb-6">
            Let's Build Trust Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Contact us today for expert engineering, 
            valuation, and consulting services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-corporate">
            <h3 className="font-poppins font-semibold text-2xl text-corporate-blue mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your project requirements, timeline, and any specific details..."
                ></textarea>
              </div>

              <button type="submit" className="btn-accent w-full group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="card-corporate">
              <h3 className="font-poppins font-semibold text-xl text-corporate-blue mb-6">
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-accent-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Primary Contact</p>
                    <p className="text-muted-foreground">+91 9935515501</p>
                    <p className="text-muted-foreground">+91 8004745922</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-accent-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email Addresses</p>
                    <p className="text-muted-foreground">aviconsult1@gmail.com</p>
                    <p className="text-muted-foreground">tevquest@gmail.com</p>
                    <p className="text-muted-foreground">vaoassociates@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-accent-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Emergency consultations only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="card-corporate">
              <h3 className="font-poppins font-semibold text-xl text-corporate-blue mb-6">
                Our Office Locations
              </h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 bg-soft-grey rounded-lg hover:shadow-corporate transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-corporate-blue">{office.city}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2 text-xs text-muted-foreground">
                          <span>{office.phone}</span>
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="card-corporate bg-gradient-corporate text-white">
              <h4 className="font-poppins font-semibold text-lg mb-3">
                Need Immediate Assistance?
              </h4>
              <p className="text-sm mb-4 opacity-90">
                For urgent project requirements or emergency consultations, 
                call us directly or schedule a meeting.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+919935515501" className="bg-white text-corporate-blue px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors">
                  Call Now
                </a>
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
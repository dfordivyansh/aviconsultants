import { useState } from "react";
import { Building2, TrendingUp, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import engineeringImage from "../assets/engineering-blueprint.jpg";
import valuationImage from "../assets/valuation-finance.jpg";
import businessImage from "../assets/business-intelligence.jpg";

const CompanyShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const companies = [
    {
      id: "avi",
      name: "Avi Consultants",
      tagline: "Engineer, Architect & Govt. Approved Valuer",
      description: "Leading engineering and valuation firm providing comprehensive structural design, chartered engineering, and bank-approved valuations across multiple states.",
      icon: Building2,
      image: engineeringImage,
      services: [
        "Structural Design & Engineering",
        "Chartered Engineering Services", 
        "Bank-Approved Valuations",
        "Property Assessment & Certification",
        "Technical Consultancy"
      ],
      approvals: [
        "State Bank of India (SBI)",
        "Punjab National Bank (PNB)", 
        "Bank of India (BOI)",
        "Central Bank of India (CBI)",
        "UCO Bank",
        "SIDBI",
        "LIC Housing Finance Ltd."
      ],
      email: "aviconsult1@gmail.com",
      color: "corporate-blue"
    },
    {
      id: "tevquest", 
      name: "Tevquest",
      tagline: "Empowering Businesses with TEV Intelligence",
      description: "Specialized in Techno-Economic Viability (TEV) reports, feasibility studies, and strategic business intelligence for corporates, startups, and investors.",
      icon: TrendingUp,
      image: businessImage,
      services: [
        "TEV Reports & Analysis",
        "Business Feasibility Studies",
        "Project Risk Assessment", 
        "Market Research & Analysis",
        "Investment Advisory"
      ],
      clients: [
        "Corporate Enterprises",
        "Startup Companies",
        "Investment Firms",
        "Government Bodies",
        "Financial Institutions"
      ],
      email: "tevquest@gmail.com",
      color: "accent-red"
    },
    {
      id: "vao",
      name: "VAO Associates", 
      tagline: "Excellence in Valuation",
      description: "Premier valuation firm specializing in comprehensive asset appraisal, industrial valuations, and bank-compliant valuation reports with highest accuracy standards.",
      icon: FileCheck,
      image: valuationImage,
      services: [
        "Land & Building Valuation",
        "Plant & Machinery Valuation",
        "Industrial Asset Appraisal",
        "Insurance Valuations",
        "Merger & Acquisition Support"
      ],
      expertise: [
        "Industrial Valuations",
        "Real Estate Assessment",
        "Equipment Appraisal", 
        "Bank Compliance Reports",
        "Legal Documentation"
      ],
      email: "vaoassociates@gmail.com",
      color: "charcoal"
    }
  ];

  const currentCompany = companies[activeTab];

  return (
    <section id="companies" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-corporate-blue mb-6">
            Our Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three specialized firms delivering comprehensive engineering, valuation, 
            and business intelligence services with unwavering commitment to excellence.
          </p>
        </div>

        {/* Company Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {companies.map((company, index) => (
                <button
                  key={company.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                    activeTab === index
                      ? `border-${company.color} bg-${company.color}/5 shadow-hover`
                      : 'border-border hover:border-corporate-blue/50 hover:shadow-corporate'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeTab === index 
                        ? `bg-${company.color} text-white`
                        : 'bg-soft-grey text-corporate-blue'
                    }`}>
                      <company.icon size={24} />
                    </div>
                    <div>
                      <h3 className={`font-poppins font-semibold text-lg mb-1 ${
                        activeTab === index ? `text-${company.color}` : 'text-corporate-blue'
                      }`}>
                        {company.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {company.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <div className="card-corporate h-full">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/2">
                  <img
                    src={currentCompany.image}
                    alt={`${currentCompany.name} services`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-${currentCompany.color} text-white`}>
                      <currentCompany.icon size={28} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-poppins font-bold text-${currentCompany.color}`}>
                        {currentCompany.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {currentCompany.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {currentCompany.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">Email:</span>
                    <a 
                      href={`mailto:${currentCompany.email}`}
                      className={`ml-2 text-${currentCompany.color} hover:underline`}
                    >
                      {currentCompany.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Services */}
                <div>
                  <h4 className="font-poppins font-semibold text-lg mb-4 text-corporate-blue">
                    Key Services
                  </h4>
                  <ul className="space-y-2">
                    {currentCompany.services.map((service, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className={`w-4 h-4 text-${currentCompany.color} flex-shrink-0`} />
                        <span className="text-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Approvals/Clients/Expertise */}
                <div>
                  <h4 className="font-poppins font-semibold text-lg mb-4 text-corporate-blue">
                    {currentCompany.approvals ? 'Bank Approvals' : 
                     currentCompany.clients ? 'Client Base' : 'Core Expertise'}
                  </h4>
                  <ul className="space-y-2">
                    {(currentCompany.approvals || currentCompany.clients || currentCompany.expertise)?.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className={`w-4 h-4 text-${currentCompany.color} flex-shrink-0`} />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <button className={`bg-${currentCompany.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-hover transition-all duration-300 group`}>
                  Learn More About {currentCompany.name}
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;
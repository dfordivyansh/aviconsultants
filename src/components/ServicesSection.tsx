import { 
  Building2, 
  Calculator, 
  FileText, 
  TrendingUp, 
  Users, 
  Settings,
  BarChart3,
  Shield
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Engineering Planning & Structural Design",
      description: "Comprehensive structural engineering solutions for residential, commercial, and industrial projects with precision and safety compliance.",
      features: ["Building Design", "Structural Analysis", "Safety Compliance", "Project Planning"],
      color: "corporate-blue"
    },
    {
      icon: Calculator,
      title: "Chartered Valuation for Banks & Financial Institutions", 
      description: "Bank-approved valuations for loans, mortgages, and financial assessments with government certification and regulatory compliance.",
      features: ["Bank Approvals", "Loan Valuations", "Mortgage Assessment", "Compliance Reports"],
      color: "accent-red"
    },
    {
      icon: FileText,
      title: "Property, Land & Asset Valuation",
      description: "Accurate property and land valuations for legal, financial, and investment purposes with detailed documentation and analysis.",
      features: ["Property Assessment", "Land Valuation", "Legal Documentation", "Market Analysis"],
      color: "corporate-blue"
    },
    {
      icon: TrendingUp,
      title: "TEV Reports & Feasibility Studies",
      description: "Techno-Economic Viability analysis for business projects, startups, and investment decisions with comprehensive market research.",
      features: ["Market Research", "Financial Modeling", "Risk Analysis", "Investment Advisory"],
      color: "accent-red"
    },
    {
      icon: Users,
      title: "Business Intelligence Consulting",
      description: "Strategic business consulting with data-driven insights, performance optimization, and growth strategy development.",
      features: ["Strategy Development", "Performance Analysis", "Growth Planning", "Market Intelligence"],
      color: "corporate-blue"
    },
    {
      icon: Settings,
      title: "Plant & Machinery Valuations",
      description: "Industrial equipment and machinery valuations for insurance, sales, mergers, and financial reporting with technical expertise.",
      features: ["Equipment Assessment", "Technical Analysis", "Insurance Valuations", "M&A Support"],
      color: "accent-red"
    },
    {
      icon: BarChart3,
      title: "Corporate Advisory & Project Risk Analysis",
      description: "Strategic corporate guidance with comprehensive risk assessment, project evaluation, and business development support.",
      features: ["Risk Management", "Project Evaluation", "Strategic Planning", "Corporate Guidance"],
      color: "corporate-blue"
    },
    {
      icon: Shield,
      title: "Asset Appraisal & Insurance Valuations",
      description: "Professional asset appraisal services for insurance, legal proceedings, and financial reporting with certified accuracy.",
      features: ["Insurance Claims", "Legal Support", "Asset Documentation", "Financial Reporting"],
      color: "accent-red"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-corporate-blue mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering, valuation, and consulting services designed to meet 
            the diverse needs of businesses, financial institutions, and government agencies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-corporate group cursor-pointer"
            >
              {/* Service Icon */}
              <div className={`w-14 h-14 bg-${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="font-poppins font-semibold text-lg text-corporate-blue mb-3 group-hover:text-accent-red transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full flex-shrink-0`}></div>
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 to-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-corporate-blue mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We provide tailored consulting services to meet your specific requirements. 
              Contact us for a detailed consultation and personalized service proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-corporate">
                Schedule Consultation
              </button>
              <button className="btn-outline">
                Download Service Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
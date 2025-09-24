import { Award, MapPin, Users, Calendar, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const credentials = [
    "B.E. Civil (Hons.)",
    "F.I.V. (Fellow of Institute of Valuers)",
    "M.I.E. (India) - Member of Institution of Engineers",
    "Govt. Approved Valuer",
    "Chartered Engineer"
  ];

  const milestones = [
    { year: "2003", event: "Established Avi Consultants", description: "Started engineering consultancy practice" },
    { year: "2008", event: "Bank Approvals", description: "Received approvals from major nationalized banks" },
    { year: "2015", event: "Launched Tevquest", description: "Expanded into TEV reports and business intelligence" },
    { year: "2018", event: "VAO Associates", description: "Specialized valuation practice established" },
    { year: "2020", event: "Multi-State Presence", description: "Operations across 6 major cities" },
    { year: "2024", event: "20+ Years Legacy", description: "Continuing excellence in consulting services" }
  ];

  const locations = [
    "Lucknow", "Gorakhpur", "Gurugram", "Hyderabad", "Ghaziabad", "Siwan"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-corporate-blue mb-6">
            About Er. Ashutosh Chandra
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visionary leader with over 20 years of expertise in engineering, 
            valuation, and business consulting, committed to delivering excellence and building trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Professional Profile */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="card-corporate">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-corporate rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">AC</span>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-corporate-blue mb-2">
                    Er. Ashutosh Chandra
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Founder & Managing Director
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-accent-red" />
                      <span>20+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-accent-red" />
                      <span>6 Cities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Credentials */}
            <div className="card-corporate">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-corporate-blue" />
                <h4 className="font-poppins font-semibold text-xl text-corporate-blue">
                  Professional Credentials
                </h4>
              </div>
              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-red flex-shrink-0" />
                    <span className="text-foreground">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-corporate bg-corporate-blue text-white">
                <h4 className="font-poppins font-semibold text-lg mb-3">Our Mission</h4>
                <p className="text-sm leading-relaxed">
                  Delivering credibility, precision, and trust in every project while 
                  maintaining the highest standards of professional excellence.
                </p>
              </div>
              <div className="card-corporate bg-accent-red text-white">
                <h4 className="font-poppins font-semibold text-lg mb-3">Our Vision</h4>
                <p className="text-sm leading-relaxed">
                  To be India's most trusted consulting & valuation firm, 
                  setting benchmarks in engineering and business intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Company Journey */}
          <div className="space-y-8">
            {/* Journey Timeline */}
            <div className="card-corporate">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-corporate-blue" />
                <h4 className="font-poppins font-semibold text-xl text-corporate-blue">
                  Company Journey
                </h4>
              </div>
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {milestone.year}
                      </div>
                      {index !== milestones.length - 1 && (
                        <div className="w-0.5 h-8 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <h5 className="font-poppins font-semibold text-corporate-blue mb-1">
                        {milestone.event}
                      </h5>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="card-corporate">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-corporate-blue" />
                <h4 className="font-poppins font-semibold text-xl text-corporate-blue">
                  Office Locations
                </h4>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="bg-soft-grey rounded-lg p-3 text-center">
                    <span className="font-medium text-corporate-blue">{location}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-corporate-blue/5 rounded-lg">
                <p className="text-sm text-corporate-blue text-center">
                  <strong>Expanding Presence:</strong> Serving clients across North India and beyond 
                  with comprehensive engineering and valuation services.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="card-corporate text-center">
                <div className="text-2xl font-bold text-corporate-blue mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="card-corporate text-center">
                <div className="text-2xl font-bold text-corporate-blue mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="card-corporate text-center">
                <div className="text-2xl font-bold text-corporate-blue mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Bank Approvals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Approvals Section */}
        <div className="mt-16">
          <div className="card-corporate bg-gradient-subtle">
            <h4 className="font-poppins font-semibold text-2xl text-corporate-blue text-center mb-8">
              Approved by Leading Financial Institutions
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
              {["SBI", "PNB", "BOI", "CBI", "UCO", "SIDBI", "LIC HFL"].map((bank, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-corporate hover:shadow-hover transition-all duration-300">
                  <div className="font-bold text-corporate-blue">{bank}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Trusted by major nationalized banks and financial institutions across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
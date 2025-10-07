import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechVentures India",
      company: "Mumbai",
      text: "Avi Consultants provided exceptional TEV reports that helped us secure funding from multiple investors. Their professionalism and attention to detail is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      position: "Finance Director",
      company: "State Bank of India",
      text: "As a banking professional, I've worked with many valuers. Avi Consultants stands out for their accuracy, compliance, and timely delivery. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Verma",
      position: "Project Manager",
      company: "Infrastructure Solutions Ltd.",
      text: "The structural design and engineering services exceeded our expectations. The team's expertise in complex projects is truly impressive.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      position: "Real Estate Developer",
      company: "Gurugram Properties",
      text: "Professional, reliable, and thorough. Their property valuation reports are accepted by all major banks without any queries. Excellent service!",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
            <Quote className="w-16 h-16 text-primary/20 mb-6" />
            
            <div className="min-h-[200px] animate-fade-in" key={currentIndex}>
              <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

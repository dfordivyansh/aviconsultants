import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi! I'm AviBot, your virtual assistant from Avi Consultants. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const faqs = [
    {
      question: "What services does Avi Consultants offer?",
      answer:
        "Avi Consultants specializes in Engineering & Structural Design, Government Approved Valuations, Property & Asset Valuation, TEV Reports, Business Intelligence, and Corporate Advisory services.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us at:\n📧 aviconsult1@gmail.com\n📞 +91 99355 15501 / +91 80047 45922\nOr click the button below to chat on WhatsApp!",
    },
    {
      question: "Do you provide business consulting?",
      answer:
        "Yes! We provide comprehensive business consulting including TEV Reports, Feasibility Studies, Business Intelligence, and Corporate Advisory through our specialized divisions.",
    },
    {
      question: "Which banks approve your valuations?",
      answer:
        "We are approved valuers for major banks including SBI, PNB, BOB, CBI, UCO, SIDBI, LIC HFL, and many more financial institutions.",
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Check if question matches any FAQ
    const matchedFaq = faqs.find((faq) =>
      input.toLowerCase().includes(faq.question.toLowerCase().split(" ").slice(0, 3).join(" "))
    );

    setTimeout(() => {
      if (matchedFaq) {
        setMessages((prev) => [...prev, { type: "bot", text: matchedFaq.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "I'm still learning! For detailed assistance, please contact us on WhatsApp. Would you like me to redirect you?",
          },
        ]);
      }
    }, 500);

    setInput("");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Avi Consultants, I'd like to know more about your services."
    );
    window.open(`https://wa.me/919935515501?text=${message}`, "_blank");
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full p-4 shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl shadow-elegant animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-corporate text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold text-lg">AviBot Assistant</h3>
            <p className="text-sm text-white/90">Online • Typically replies instantly</p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  } whitespace-pre-line`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <p className="text-sm text-muted-foreground font-medium">Quick questions:</p>
                {faqs.map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(faq.question)}
                    className="block w-full text-left p-2 text-sm bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
              <Button onClick={handleSend} size="icon" className="rounded-lg">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="w-full text-sm"
            >
              💬 Chat on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

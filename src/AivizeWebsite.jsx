import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const AivizeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "home",
        "about",
        "solutions",
        "impact",
        "traction",
        "opportunity",
        "team",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "solutions", label: "Solutions" },
    { id: "impact", label: "Impact" },
    { id: "traction", label: "Traction" },
    { id: "opportunity", label: "Opportunity" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aivize Labs
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-blue-900/20 to-slate-900"></div>

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"> */}
        <div className="relative w-full px-6 text-center py-12">
          <div className="mb-6 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
            AI That Understands Africa
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Intelligent Automation
            <br />
            Built for Africa
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We build intelligent automation and engagement systems designed for
            African enterprises — fast, affordable, and human-centered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2 group"
            >
              Book Consultation
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button
              onClick={() => scrollToSection("opportunity")}
              className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
            >
              Investment Opportunities
            </button>
          </div>

          <div className="mt-20 p-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl max-w-3xl mx-auto">
            <p className="text-lg italic text-gray-300">
              "Africa doesn't need more software — it needs intelligent systems
              that understand how we work. Aivize Labs builds those systems."
            </p>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Building Africa's Intelligent Enterprise
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Aivize Labs is an applied AI company founded to help African
              organizations automate intelligently. We design solutions that
              combine data, automation, and human insight — improving
              performance, scalability, and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Human-Centered AI</h3>
              <p className="text-gray-400">
                AI should be human-centered, not machine-driven.
              </p>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Context</h3>
              <p className="text-gray-400">
                Solutions must reflect local workflows, languages, and contexts.
              </p>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessible Innovation</h3>
              <p className="text-gray-400">
                Innovation should be accessible at scale — not a luxury for a
                few.
              </p>
            </div>
          </div>

          <div className="text-center p-8 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Impact Vision</h3>
            <p className="text-xl text-gray-300">
              To make Africa's digital transformation intelligent, inclusive,
              and sustainable.
            </p>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Applied Intelligence for Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help organizations bridge the gap between digitization and true
              intelligence through three key solutions
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Smart Workflow Automation
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Cut operational time by up to 40% through intelligent
                    automation that integrates seamlessly with existing systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
                      Cloud-light architecture
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
                      Low data cost
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Users className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    AI Customer Engagement
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Boost responsiveness and retention by 25–35% through
                    multilingual AI assistants and communication tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400">
                      Multi-language support
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400">
                      24/7 availability
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="text-purple-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Data Intelligence Engine
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Turn fragmented business data into actionable insights —
                    helping teams make faster, smarter decisions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400">
                      Real-time analytics
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400">
                      African infrastructure ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              Request Demo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section id="impact" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Closing Africa's Intelligence Gap
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Across Africa, over 90% of enterprises still rely on manual or
              semi-digital systems, losing billions to inefficiency. Aivize Labs
              exists to change that — making AI accessible, practical, and
              affordable for every business, big or small.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <div className="text-5xl font-bold text-cyan-400 mb-3">40%</div>
              <div className="text-lg font-semibold mb-2">Efficiency Boost</div>
              <p className="text-gray-400">
                Workflow reduction through intelligent automation
              </p>
            </div>

            <div className="text-center p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <div className="text-5xl font-bold text-blue-400 mb-3">$49</div>
              <div className="text-lg font-semibold mb-2">Starting Price</div>
              <p className="text-gray-400">
                Subscription-based SaaS model per month
              </p>
            </div>

            <div className="text-center p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <div className="text-5xl font-bold text-purple-400 mb-3">∞</div>
              <div className="text-lg font-semibold mb-2">Scalability</div>
              <p className="text-gray-400">
                Custom integrations for enterprise-grade automation
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">
                  The Transformation Journey
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-400">Manual → Digital</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="text-cyan-400 font-semibold">
                      Digital → Intelligent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Traction Section */}
      <section id="traction" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Early Success, Real Momentum
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
              <p className="text-gray-300">Pilot Projects</p>
              <p className="text-sm text-gray-500 mt-1">
                Telecom, Fintech, Enterprise
              </p>
            </div>

            <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$20K+</div>
              <p className="text-gray-300">Deal Pipeline</p>
              <p className="text-sm text-gray-500 mt-1">Active discussions</p>
            </div>

            <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">✓</div>
              <p className="text-gray-300">MVP Complete</p>
              <p className="text-sm text-gray-500 mt-1">
                Live automation modules
              </p>
            </div>

            <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <p className="text-gray-300">Partnerships</p>
              <p className="text-sm text-gray-500 mt-1">
                Regional innovation networks
              </p>
            </div>
          </div>

          <div className="text-center p-8 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">12-Month Goal</h3>
            <p className="text-xl text-gray-300 mb-6">
              Reach 10 enterprise clients and $60K ARR
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
      {/* Opportunity Section */}
      <section id="opportunity" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Africa's $20 Billion AI Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Africa's enterprise AI and automation market is projected to
              surpass $20B by 2030, driven by digitization, fintech adoption,
              and mobile-first business growth. Aivize Labs is positioned at the
              heart of this shift, combining SaaS scalability with localized
              execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <Rocket className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Strong Margins</h3>
              <p className="text-gray-300 mb-2">
                65–70% gross margin potential
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <Zap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Fast Payback</h3>
              <p className="text-gray-300">
                Customer Acquisition Cost recovered in less than 6 months
              </p>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <TrendingUp className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Growing Market</h3>
              <p className="text-gray-300">
                $2.5B early adopter segment across Rwanda, Kenya, and Nigeria
              </p>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <Target className="text-green-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Lean Model</h3>
              <p className="text-gray-300">
                SaaS + Custom Projects + Advisory revenue streams
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg inline-flex items-center gap-2"
            >
              Explore Investment Opportunities
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              A Team of Builders, Thinkers, and Innovators
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Aivize Labs is led by a cross-functional team of AI engineers,
              strategists, and automation experts with backgrounds in Middle
              Eastern research initiatives and African market innovation.
              Together, we merge global expertise with regional insight to
              deliver practical intelligence for real business needs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-4xl font-bold">
                  YC
                </div>
                <h3 className="text-2xl font-bold mb-2">Yasipi Casimir</h3>
                <p className="text-cyan-400 mb-4">Founder & CEO</p>
                <p className="text-gray-300">
                  A visionary technologist driving the future of applied AI in
                  Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Africa's Intelligent Future — Together
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're an organization ready to automate or an investor
              shaping Africa's digital transformation, we'd love to collaborate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-cyan-400" size={24} />
                  <span className="text-gray-300">+250789914381</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-cyan-400" size={24} />
                  <span className="text-gray-300">contact@aivizelabs.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <p className="text-gray-300">Kigali, Rwanda</p>
                    <p className="text-gray-300">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2">
                  Book a Consultation
                  <ArrowRight size={20} />
                </button>
                <button className="w-full px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                  Explore Investment Opportunities
                </button>
                <button className="w-full px-6 py-3 border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-700 transition-all">
                  Request Media Kit
                </button>
              </div>
            </div>
          </div>

          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <p className="text-gray-400">
              🌐{" "}
              <a
                href="https://www.aivizelabs.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                www.aivizelabs.com
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Aivize Labs
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              © 2025 Aivize Labs. All rights reserved.
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              AI That Understands Africa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AivizeWebsite;

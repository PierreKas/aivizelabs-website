// import React, { useState, useEffect } from "react";
// import heroVideo from "./assets/video3.mp4";
// import {
//   Menu,
//   X,
//   ArrowRight,
//   Zap,
//   Users,
//   TrendingUp,
//   Target,
//   Rocket,
//   Mail,
//   Phone,
//   MapPin,
//   Search,
//   Cog,
//   RefreshCw,
//   Globe,
//   Lightbulb,
//   Code,
// } from "lucide-react";

// const AivizeWebsite = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);

//       const sections = [
//         "home",
//         "about",
//         "solutions",
//         "impact",
//         "traction",
//         "opportunity",
//         "team",
//         "contact",
//       ];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (current) setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "solutions", label: "What We Deliver" },
//     { id: "impact", label: "Impact" },
//     { id: "traction", label: "Traction" },
//     { id: "opportunity", label: "Opportunity" },
//     { id: "team", label: "Team" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <div className="bg-slate-900 text-white min-h-screen">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrollY > 50
//             ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Aivize Labs
//               </div>
//             </div>

//             <div className="hidden md:flex space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`text-sm font-medium transition-colors ${
//                     activeSection === item.id
//                       ? "text-cyan-400"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden text-white"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-slate-800 border-t border-slate-700">
//             <div className="px-4 py-3 space-y-3">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-blue-900/20 to-slate-900"></div>

//         {/* Animated Background */}

//         <div className="absolute inset-0 w-full h-full">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <source src={heroVideo} type="video/mp4" />
//             Your browser doesn't support the video tag
//           </video>
//           <div className="absolute inset-0 bg-black/45 dark:bg-black/60"></div>
//         </div>
//         {/*  */}
//         {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"> */}
//         <div className="relative w-full px-6 text-center py-12">
//           <div className="mb-6 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
//             AI That Understands Africa
//           </div>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
//             Intelligent Automation
//             <br />
//             Built for Africa
//           </h1>

//           <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
//             We build intelligent automation and engagement systems designed for
//             African enterprises — fast, affordable, and human-centered.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2 group"
//             >
//               Book Consultation
//               <ArrowRight
//                 className="group-hover:translate-x-1 transition-transform"
//                 size={20}
//               />
//             </button>
//             <button
//               onClick={() => scrollToSection("opportunity")}
//               className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
//             >
//               Investment Opportunities
//             </button>
//           </div>

//           <div className="mt-20 p-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl max-w-3xl mx-auto">
//             <p className="text-lg italic text-gray-300">
//               "Africa doesn't need more software — it needs intelligent systems
//               that understand how we work. Aivize Labs builds those systems."
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* About Section */}
//       <section id="about" className="py-20 bg-slate-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Building Africa's Intelligent Enterprise
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto">
//               Aivize Labs is a hybrid AI consulting and engineering company
//               helping African organizations transition from digitization to
//               intelligence
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
//               <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
//                 <Users className="text-cyan-400" size={24} />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Human-Centered AI</h3>
//               <p className="text-gray-400">
//                 AI should be human-centered, not machine-driven.
//               </p>
//             </div>

//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
//               <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
//                 <Target className="text-cyan-400" size={24} />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Local Context</h3>
//               <p className="text-gray-400">
//                 Solutions must reflect local workflows, languages, and contexts.
//               </p>
//             </div>

//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
//               <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
//                 <TrendingUp className="text-cyan-400" size={24} />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Accessible Innovation</h3>
//               <p className="text-gray-400">
//                 Innovation should be accessible at scale — not a luxury for a
//                 few.
//               </p>
//             </div>
//           </div>

//           <div className="text-center p-8 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
//             <h3 className="text-2xl font-bold mb-4">Impact Vision</h3>
//             <p className="text-xl text-gray-300">
//               To make Africa's digital transformation intelligent, inclusive,
//               and sustainable.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* Solutions Section */}

//       <section id="solutions" className="py-20 bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-4">
//               SOLUTIONS — What We Deliver
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               From Diagnosis to Delivery
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               We help organizations bridge the gap between potential and
//               performance through an integrated value chain:
//             </p>
//           </div>

//           {/* Three-Stage Process */}
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <div className="p-8 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
//               <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
//                 <Search className="text-cyan-400" size={32} />
//               </div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="text-3xl font-bold text-cyan-400">01</span>
//                 <h3 className="text-2xl font-bold">Intelligence Diagnostics</h3>
//               </div>
//               <p className="text-gray-300 mb-4">
//                 Identify hidden inefficiencies, data gaps, and automation
//                 opportunities.
//               </p>
//               <div className="pt-4 border-t border-slate-700">
//                 <p className="text-sm text-gray-400 mb-2 font-semibold">
//                   Deliverable:
//                 </p>
//                 <p className="text-cyan-400">
//                   AI Readiness & Process Intelligence Report
//                 </p>
//               </div>
//             </div>

//             <div className="p-8 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all">
//               <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
//                 <Cog className="text-blue-400" size={32} />
//               </div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="text-3xl font-bold text-blue-400">02</span>
//                 <h3 className="text-2xl font-bold">Design & Deployment</h3>
//               </div>
//               <p className="text-gray-300 mb-4">
//                 Build and implement intelligent systems aligned with real
//                 operational needs.
//               </p>
//               <div className="pt-4 border-t border-slate-700">
//                 <p className="text-sm text-gray-400 mb-2 font-semibold">
//                   Deliverable:
//                 </p>
//                 <p className="text-blue-400">
//                   Tailored automation and engagement solutions
//                 </p>
//               </div>
//             </div>

//             <div className="p-8 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all">
//               <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
//                 <RefreshCw className="text-purple-400" size={32} />
//               </div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="text-3xl font-bold text-purple-400">03</span>
//                 <h3 className="text-2xl font-bold">
//                   Optimization-as-a-Service
//                 </h3>
//               </div>
//               <p className="text-gray-300 mb-4">
//                 Monitor, maintain, and continuously improve deployed systems for
//                 evolving business contexts.
//               </p>
//               <div className="pt-4 border-t border-slate-700">
//                 <p className="text-sm text-gray-400 mb-2 font-semibold">
//                   Deliverable:
//                 </p>
//                 <p className="text-purple-400">
//                   Performance dashboards and iterative improvement cycles
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Sample Use Cases */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-bold mb-8 text-center">
//               Sample Use Cases
//             </h3>
//             <div className="space-y-6">
//               <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
//                 <div className="flex items-start gap-6">
//                   <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
//                     <Zap className="text-cyan-400" size={24} />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-xl font-bold mb-2">
//                       Smart Workflow Automation
//                     </h4>
//                     <p className="text-gray-300">
//                       Reduce process time by up to 40%.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all">
//                 <div className="flex items-start gap-6">
//                   <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
//                     <Users className="text-blue-400" size={24} />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-xl font-bold mb-2">
//                       AI Customer Engagement
//                     </h4>
//                     <p className="text-gray-300">
//                       Improve client responsiveness and retention by 25–35%.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all">
//                 <div className="flex items-start gap-6">
//                   <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
//                     <TrendingUp className="text-purple-400" size={24} />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-xl font-bold mb-2">
//                       Data Intelligence Engine
//                     </h4>
//                     <p className="text-gray-300">
//                       Transform data silos into predictive insights.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Built For Section */}
//           <div className="bg-linear-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 mb-12">
//             <h3 className="text-xl font-bold mb-6 text-center">Built For</h3>
//             <div className="flex flex-wrap justify-center gap-3">
//               <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-full text-cyan-400">
//                 Low-data environments
//               </span>
//               <span className="px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-full text-blue-400">
//                 Multi-language interfaces
//               </span>
//               <span className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-full text-purple-400">
//                 African infrastructure realities
//               </span>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="text-center">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-2 text-white"
//             >
//               Request a Diagnostic or Demo
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section id="impact" className="py-20 bg-slate-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Closing Africa's Intelligence Gap
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto">
//               Across Africa, over 90% of enterprises still rely on manual or
//               semi-digital systems, losing billions to inefficiency. Aivize Labs
//               exists to change that — making AI accessible, practical, and
//               affordable for every business, big or small.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <div className="text-5xl font-bold text-cyan-400 mb-3">40%</div>
//               <div className="text-lg font-semibold mb-2">Efficiency Boost</div>
//               <p className="text-gray-400">
//                 Workflow reduction through intelligent automation
//               </p>
//             </div>

//             <div className="text-center p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <div className="text-5xl font-bold text-blue-400 mb-3">$49</div>
//               <div className="text-lg font-semibold mb-2">Starting Price</div>
//               <p className="text-gray-400">
//                 Subscription-based SaaS model per month
//               </p>
//             </div>

//             <div className="text-center p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <div className="text-5xl font-bold text-purple-400 mb-3">∞</div>
//               <div className="text-lg font-semibold mb-2">Scalability</div>
//               <p className="text-gray-400">
//                 Custom integrations for enterprise-grade automation
//               </p>
//             </div>
//           </div>

//           <div className="mt-16 p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="flex-1">
//                 <h3 className="text-3xl font-bold mb-4">
//                   The Transformation Journey
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
//                     <span className="text-gray-400">Manual → Digital</span>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
//                     <span className="text-cyan-400 font-semibold">
//                       Digital → Intelligent
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Traction Section */}
//       <section id="traction" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Early Success, Real Momentum
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
//               <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
//               <p className="text-gray-300">Pilot Projects</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 Telecom, Fintech, Enterprise
//               </p>
//             </div>

//             <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
//               <div className="text-4xl font-bold text-blue-400 mb-2">$20K+</div>
//               <p className="text-gray-300">Deal Pipeline</p>
//               <p className="text-sm text-gray-500 mt-1">Active discussions</p>
//             </div>

//             <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
//               <div className="text-4xl font-bold text-purple-400 mb-2">✓</div>
//               <p className="text-gray-300">MVP Complete</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 Live automation modules
//               </p>
//             </div>

//             <div className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
//               <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
//               <p className="text-gray-300">Partnerships</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 Regional innovation networks
//               </p>
//             </div>
//           </div>

//           <div className="text-center p-8 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
//             <h3 className="text-2xl font-bold mb-4">12-Month Goal</h3>
//             <p className="text-xl text-gray-300 mb-6">
//               Reach 10 enterprise clients and $60K ARR
//             </p>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
//             >
//               Partner With Us
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Opportunity Section */}
//       <section id="opportunity" className="py-20 bg-slate-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Africa's $20 Billion AI Opportunity
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto">
//               Africa's enterprise AI and automation market is projected to
//               surpass $20B by 2030, driven by digitization, fintech adoption,
//               and mobile-first business growth. Aivize Labs is positioned at the
//               heart of this shift, combining SaaS scalability with localized
//               execution.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <Rocket className="text-cyan-400 mb-4" size={32} />
//               <h3 className="text-2xl font-bold mb-4">Strong Margins</h3>
//               <p className="text-gray-300 mb-2">
//                 65–70% gross margin potential
//               </p>
//               <div className="w-full bg-slate-700 rounded-full h-2">
//                 <div
//                   className="bg-linear-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
//                   style={{ width: "70%" }}
//                 ></div>
//               </div>
//             </div>

//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <Zap className="text-blue-400 mb-4" size={32} />
//               <h3 className="text-2xl font-bold mb-4">Fast Payback</h3>
//               <p className="text-gray-300">
//                 Customer Acquisition Cost recovered in less than 6 months
//               </p>
//             </div>

//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <TrendingUp className="text-purple-400 mb-4" size={32} />
//               <h3 className="text-2xl font-bold mb-4">Growing Market</h3>
//               <p className="text-gray-300">
//                 $2.5B early adopter segment across Rwanda, Kenya, and Nigeria
//               </p>
//             </div>

//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <Target className="text-green-400 mb-4" size={32} />
//               <h3 className="text-2xl font-bold mb-4">Lean Model</h3>
//               <p className="text-gray-300">
//                 SaaS + Custom Projects + Advisory revenue streams
//               </p>
//             </div>
//           </div>

//           <div className="text-center">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg inline-flex items-center gap-2"
//             >
//               Explore Investment Opportunities
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Team Section */}

//       <section id="team" className="py-20 bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-4">
//               THE BUILDERS
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               A Team of Engineers, Strategists, and Builders
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//               Aivize Labs is a young but capable startup built by a team of
//               engineers, data scientists, and strategists who know how to turn
//               research into real-world systems. We don't just talk about AI—we
//               build it.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="p-8 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
//               <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
//                 <Code className="text-cyan-400" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">
//                 Research to Production
//               </h3>
//               <p className="text-gray-300">
//                 Our background spans research-based projects and live
//                 deployments already running in different sectors. This mix of
//                 exploration and execution gives us a clear edge.
//               </p>
//             </div>

//             <div className="p-8 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all">
//               <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
//                 <Lightbulb className="text-blue-400" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Concept to Impact</h3>
//               <p className="text-gray-300">
//                 We understand how to move ideas from concept to production, and
//                 how to make technology deliver measurable impact in real
//                 business environments.
//               </p>
//             </div>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="p-8 bg-linear-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/30">
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 <div className="w-20 h-20 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shrink-0">
//                   <Globe className="text-white" size={36} />
//                 </div>
//                 <div className="text-center md:text-left">
//                   <h3 className="text-2xl font-bold mb-3">
//                     Global Insight, Local Understanding
//                   </h3>
//                   <p className="text-gray-300">
//                     With roots in both Middle Eastern research circles and
//                     African innovation ecosystems, our team blends global
//                     insight with local understanding—building intelligent
//                     solutions that truly fit the environments they serve.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-slate-800/50">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Let's Build Africa's Intelligent Future — Together
//             </h2>
//             <p className="text-xl text-gray-300">
//               Whether you're an organization ready to automate or an investor
//               shaping Africa's digital transformation, we'd love to collaborate.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
//               <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <Phone className="text-cyan-400" size={24} />
//                   <span className="text-gray-300">+250789914381</span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <Mail className="text-cyan-400" size={24} />
//                   <span className="text-gray-300">contact@aivizelabs.com</span>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <MapPin className="text-cyan-400 mt-1" size={24} />
//                   <div>
//                     <p className="text-gray-300">Kigali, Rwanda</p>
//                     <p className="text-gray-300">Dubai, UAE</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-8 bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
//               <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
//               <div className="space-y-4">
//                 <button className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2">
//                   Book a Consultation
//                   <ArrowRight size={20} />
//                 </button>
//                 <button className="w-full px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
//                   Explore Investment Opportunities
//                 </button>
//                 <button className="w-full px-6 py-3 border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-700 transition-all">
//                   Request Media Kit
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
//             <p className="text-gray-400">
//               🌐{" "}
//               <a
//                 href="https://www.aivizelabs.com"
//                 className="text-cyan-400 hover:text-cyan-300 transition-colors"
//               >
//                 www.aivizelabs.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="py-12 bg-slate-900 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Aivize Labs
//             </div>

//             <div className="flex flex-wrap justify-center gap-6 text-gray-400">
//               {navItems.slice(0, -1).map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="hover:text-cyan-400 transition-colors"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>

//             <div className="text-gray-400 text-sm">
//               © 2025 Aivize Labs. All rights reserved.
//             </div>
//           </div>

//           <div className="mt-8 text-center">
//             <p className="text-sm text-gray-500 italic">
//               AI That Understands Africa
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AivizeWebsite;
import React, { useState, useEffect } from "react";
import heroVideo from "./assets/hero-video.mp4";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
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
  Search,
  Cog,
  RefreshCw,
  Globe,
  Lightbulb,
  Code,
  Send,
  CheckCircle,
} from "lucide-react";

const AivizeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    inquiryType: "consultation",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const fullText = "Intelligent Automation Built for Africa";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsAnimationComplete(true);
    }
  }, [currentIndex, fullText]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const renderAnimatedText = () => {
    const parts = displayedText.split("Intelligent");
    // const beforeElipt = parts[0] || "";
    // const hasElipt = parts.length > 1;
    const beforeIntelligent = parts[1];
    const hasIntelligent = parts.length > 1;
    const intelligent = hasIntelligent ? "Intelligent" : "";

    return (
      <>
        {hasIntelligent && (
          <span className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-1000">
            {intelligent}
          </span>
        )}
        {beforeIntelligent}
        {/* {displayedText} */}
        {currentIndex < fullText.length && (
          <span
            className={`${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100 text-blue-400 dark:text-blue-400`}
          >
            |
          </span>
        )}
      </>
    );
  };
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setFormStatus("");

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setFormStatus("success");
  //     setIsSubmitting(false);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       company: "",
  //       phone: "",
  //       message: "",
  //       inquiryType: "consultation",
  //     });
  //     setTimeout(() => setFormStatus(""), 5000);
  //   }, 1500);
  // };
  const tools = [
    {
      name: "Slack",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Google",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  // Duplicate tools array for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools, ...tools];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        phone: formData.phone || "Not provided",
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_name: "Aivize Labs Team", // You can customize this
      };

      // // Send email using EmailJS
      // // await emailjs.send(
      // //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
      // //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      // //   templateParams,
      // //   process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      // // );
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      // await emailjs.send(
      //   "service_eect9bk", // Your service ID
      //   "template_egg8kx6", // Your template ID
      //   templateParams,
      //   "Pnk3bwCNIIJ7TkX2L" // Your public key
      // );

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        inquiryType: "consultation",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "solutions", label: "What We Deliver" },
    { id: "impact", label: "Impact" },
    { id: "traction", label: "Traction" },
    { id: "opportunity", label: "Opportunity" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen font-['Orbitron',sans-serif]">
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
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider">
                Aivize Labs
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-cyan-400 scale-110"
                      : "text-gray-300 hover:text-white hover:scale-105"
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

        {/* Mobile Menu*/}
        {/*   {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )} */}
        {/* Mobile Menu */}
        {isMenuOpen &&
          createPortal(
            <AnimatePresence>
              <div className="md:hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[50]"
                  onClick={() => setIsMenuOpen(false)}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    type: "tween",
                  }}
                  className="fixed right-0 top-0 h-full w-80 bg-slate-800 shadow-2xl z-[60]"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-2xl font-bold text-cyan-400">
                        Menu
                      </span>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-lg text-gray-300 hover:bg-slate-700 transition-colors duration-200"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <ul className="space-y-1">
                      {navItems.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => {
                              scrollToSection(item.id);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors duration-200 font-medium"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>,
            document.body
          )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900"></div>

        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser doesn't support the video tag
          </video>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/80"></div>
        </div>

        <div className="relative w-full px-6 text-center py-12">
          <div className="mb-6 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold animate-pulse">
            AI That Understands Africa
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-1000">
            {renderAnimatedText()}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            We build intelligent automation and engagement systems designed for
            African enterprises — fast, affordable, and human-centered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group hover:scale-105"
            >
              Book Consultation
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>
            <button
              onClick={() => scrollToSection("opportunity")}
              className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              Investment Opportunities
            </button>
          </div>

          <div className="mt-20 p-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-500 hover:border-cyan-500/30 transition-all duration-300 animate-bounce">
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Building Africa's Intelligent Enterprise
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Aivize Labs is a hybrid AI consulting and engineering company
              helping African organizations transition from digitization to
              intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Human-centered teamwork"
                className="w-full h-40 object-cover rounded-lg mb-6 opacity-75"
              />
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                <Users className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Human-Centered AI</h3>
              <p className="text-gray-400">
                AI should be human-centered, not machine-driven.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 delay-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="African business context"
                className="w-full h-40 object-cover rounded-lg mb-6 opacity-75"
              />
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center animate-spin justify-center mb-4 delay-100">
                <Target className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Context</h3>
              <p className="text-gray-400">
                Solutions must reflect local workflows, languages, and contexts.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 delay-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Accessible innovation and technology"
                className="w-full h-40 object-cover rounded-lg mb-6 opacity-75"
              />
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 animate-pulse delay-200">
                <TrendingUp className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessible Innovation</h3>
              <p className="text-gray-400">
                Innovation should be accessible at scale — not a luxury for a
                few.
              </p>
            </div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Impact Vision</h3>
            <p className="text-xl text-gray-300">
              To make Africa's digital transformation intelligent, inclusive,
              and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Building Africa's Intelligent Enterprise
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Aivize Labs is a hybrid AI consulting and engineering company
              helping African organizations transition from digitization to
              intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                <Users className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Human-Centered AI</h3>
              <p className="text-gray-400">
                AI should be human-centered, not machine-driven.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 delay-100">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center animate-spin justify-center mb-4 delay-100">
                <Target className="text-cyan-400 " size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Context</h3>
              <p className="text-gray-400">
                Solutions must reflect local workflows, languages, and contexts.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 delay-200">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 animate-pulse delay-200">
                <TrendingUp className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessible Innovation</h3>
              <p className="text-gray-400">
                Innovation should be accessible at scale — not a luxury for a
                few.
              </p>
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Impact Vision</h3>
            <p className="text-xl text-gray-300">
              To make Africa's digital transformation intelligent, inclusive,
              and sustainable.
            </p>
          </div>
        </div>
      </section> */}

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-4">
              SOLUTIONS — What We Deliver
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              From Diagnosis to Delivery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help organizations bridge the gap between potential and
              performance through an integrated value chain:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data analytics and diagnostics"
                className="w-full h-40 object-cover rounded-lg mb-6 opacity-75"
              />
              <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="text-cyan-400" size={32} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-cyan-400">01</span>
                <h3 className="text-2xl font-bold">Intelligence Diagnostics</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Identify hidden inefficiencies, data gaps, and automation
                opportunities.
              </p>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2 font-semibold animate-pulse">
                  Deliverable:
                </p>
                <p className="text-cyan-400">
                  AI Readiness & Process Intelligence Report
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 delay-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="Technology deployment and development"
                className="w-full h-40 object-cover rounded-lg mb-6 opacity-75"
              />
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Cog className="text-blue-400 animate-spin" size={32} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-blue-400">02</span>
                <h3 className="text-2xl font-bold">Design & Deployment</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Build and implement intelligent systems aligned with real
                operational needs.
              </p>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2 font-semibold animate-pulse">
                  Deliverable:
                </p>
                <p className="text-blue-400">
                  Tailored automation and engagement solutions
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 delay-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Performance optimization dashboard"
                className="w-full h-40 object-cover rounded-lg mb-6 opacity-75"
              />
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="text-purple-400" size={32} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-purple-400">03</span>
                <h3 className="text-2xl font-bold">
                  Optimization-as-a-Service
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Monitor, maintain, and continuously improve deployed systems for
                evolving business contexts.
              </p>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2 font-semibold animate-pulse">
                  Deliverable:
                </p>
                <p className="text-purple-400">
                  Performance dashboards and iterative improvement cycles
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Sample Use Cases
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">
                      Smart Workflow Automation
                    </h4>
                    <p className="text-gray-300">
                      Reduce process time by up to 40%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 delay-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">
                      AI Customer Engagement
                    </h4>
                    <p className="text-gray-300">
                      Improve client responsiveness and retention by 25–35%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-200">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="text-purple-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">
                      Data Intelligence Engine
                    </h4>
                    <p className="text-gray-300">
                      Transform data silos into predictive insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 mb-12 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-center">Built For</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                Low-data environments
              </span>
              <span className="px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-500/10 transition-all duration-300 delay-100">
                Multi-language interfaces
              </span>
              <span className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-full text-purple-400 hover:bg-purple-500/10 transition-all duration-300 delay-200">
                African infrastructure realities
              </span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="animate-bounce px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2 text-white hover:scale-105"
            >
              Request a Diagnostic or Demo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      {/* <section id="solutions" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-4">
              SOLUTIONS — What We Deliver
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              From Diagnosis to Delivery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help organizations bridge the gap between potential and
              performance through an integrated value chain:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="text-cyan-400" size={32} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-cyan-400">01</span>
                <h3 className="text-2xl font-bold">Intelligence Diagnostics</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Identify hidden inefficiencies, data gaps, and automation
                opportunities.
              </p>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2 font-semibold animate-pulse">
                  Deliverable:
                </p>
                <p className="text-cyan-400">
                  AI Readiness & Process Intelligence Report
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 delay-100">
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Cog className="text-blue-400 animate-spin" size={32} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-blue-400">02</span>
                <h3 className="text-2xl font-bold">Design & Deployment</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Build and implement intelligent systems aligned with real
                operational needs.
              </p>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2 font-semibold animate-pulse">
                  Deliverable:
                </p>
                <p className="text-blue-400">
                  Tailored automation and engagement solutions
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 delay-200">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="text-purple-400" size={32} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-purple-400">03</span>
                <h3 className="text-2xl font-bold">
                  Optimization-as-a-Service
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Monitor, maintain, and continuously improve deployed systems for
                evolving business contexts.
              </p>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2 font-semibold animate-pulse">
                  Deliverable:
                </p>
                <p className="text-purple-400">
                  Performance dashboards and iterative improvement cycles
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Sample Use Cases
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">
                      Smart Workflow Automation
                    </h4>
                    <p className="text-gray-300">
                      Reduce process time by up to 40%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 delay-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">
                      AI Customer Engagement
                    </h4>
                    <p className="text-gray-300">
                      Improve client responsiveness and retention by 25–35%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-200">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="text-purple-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">
                      Data Intelligence Engine
                    </h4>
                    <p className="text-gray-300">
                      Transform data silos into predictive insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 mb-12 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-center">Built For</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                Low-data environments
              </span>
              <span className="px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-500/10 transition-all duration-300 delay-100">
                Multi-language interfaces
              </span>
              <span className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-full text-purple-400 hover:bg-purple-500/10 transition-all duration-300 delay-200">
                African infrastructure realities
              </span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="animate-bounce px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2 text-white hover:scale-105"
            >
              Request a Diagnostic or Demo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section> */}

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
            <div className="text-center p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-cyan-400 mb-3">40%</div>
              <div className="text-lg font-semibold mb-2">Efficiency Boost</div>
              <p className="text-gray-400">
                Workflow reduction through intelligent automation
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 delay-100">
              <div className="text-5xl font-bold text-blue-400 mb-3">$49</div>
              <div className="text-lg font-semibold mb-2">Starting Price</div>
              <p className="text-gray-400">
                Subscription-based SaaS model per month
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-200">
              <div className="text-5xl font-bold text-purple-400 mb-3">∞</div>
              <div className="text-lg font-semibold mb-2">Scalability</div>
              <p className="text-gray-400">
                Custom integrations for enterprise-grade automation
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Early Success, Real Momentum
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
              <p className="text-gray-300">Pilot Projects</p>
              <p className="text-sm text-gray-500 mt-1">
                Telecom, Fintech, Enterprise
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105 delay-100">
              <div className="text-4xl font-bold text-blue-400 mb-2">$20K+</div>
              <p className="text-gray-300">Deal Pipeline</p>
              <p className="text-sm text-gray-500 mt-1">Active discussions</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-200">
              <div className="text-4xl font-bold text-purple-400 mb-2">✓</div>
              <p className="text-gray-300">MVP Complete</p>
              <p className="text-sm text-gray-500 mt-1">
                Live automation modules
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center hover:border-green-500/50 transition-all duration-300 hover:scale-105 delay-300">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <p className="text-gray-300">Partnerships</p>
              <p className="text-sm text-gray-500 mt-1">
                Regional innovation networks
              </p>
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">12-Month Goal</h3>
            <p className="text-xl text-gray-300 mb-6">
              Reach 10 enterprise clients and $60K ARR
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Business growth charts"
                className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
              />
              <Rocket className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Strong Margins</h3>
              <p className="text-gray-300 mb-2">
                65–70% gross margin potential
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 delay-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Fast growth metrics"
                className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
              />
              <Zap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Fast Payback</h3>
              <p className="text-gray-300">
                Customer Acquisition Cost recovered in less than 6 months
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80"
                alt="African cityscape and technology"
                className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
              />
              <TrendingUp className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Growing Market</h3>
              <p className="text-gray-300">
                $2.5B early adopter segment across Rwanda, Kenya, and Nigeria
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 delay-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80"
                alt="Business model strategy"
                className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
              />
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
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg inline-flex items-center gap-2 hover:scale-105"
            >
              Explore Investment Opportunities
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      {/* <section id="opportunity" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Rocket className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Strong Margins</h3>
              <p className="text-gray-300 mb-2">
                65–70% gross margin potential
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 delay-100">
              <Zap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Fast Payback</h3>
              <p className="text-gray-300">
                Customer Acquisition Cost recovered in less than 6 months
              </p>
            </div>

            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-200">
              <TrendingUp className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Growing Market</h3>
              <p className="text-gray-300">
                $2.5B early adopter segment across Rwanda, Kenya, and Nigeria
              </p>
            </div>

            <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 delay-300">
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
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg inline-flex items-center gap-2 hover:scale-105"
            >
              Explore Investment Opportunities
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="text-xl text-center text-gray-300 max-w-4xl mx-auto">
            Aivize Labs seamlessly integrates with a wide range of popular
            industry tools, allowing you to work effortlessly within your
            existing workflow and enhance productivity without disruption.
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900/50 to-transparent z-10"></div>

          {/* Scrolling Animation */}
          <div className="flex animate-scroll">
            {duplicatedTools.map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 sm:h-24 sm:w-24 sm:mx-8 w-12 h-12 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
              >
                <img
                  src={tool.logo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 8s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-4">
              THE BUILDERS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              A Team of Engineers, Strategists, and Builders
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Aivize Labs is a young but capable startup built by a team of
              engineers, data scientists, and strategists who know how to turn
              research into real-world systems. We don't just talk about AI—we
              build it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="animate-bounce w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Code className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Research to Production
              </h3>
              <p className="text-gray-300">
                Our background spans research-based projects and live
                deployments already running in different sectors. This mix of
                exploration and execution gives us a clear edge.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 delay-100">
              <div className="animate-bounce w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Concept to Impact</h3>
              <p className="text-gray-300">
                We understand how to move ideas from concept to production, and
                how to make technology deliver measurable impact in real
                business environments.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="text-white animate-spin" size={36} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">
                    Global Insight, Local Understanding
                  </h3>
                  <p className="text-gray-300">
                    With roots in both Middle Eastern research circles and
                    African innovation ecosystems, our team blends global
                    insight with local understanding—building intelligent
                    solutions that truly fit the environments they serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Africa's Intelligent Future — Together
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're an organization ready to automate or an investor
              shaping Africa's digital transformation, we'd love to collaborate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {/* {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top duration-500">
                  <CheckCircle className="text-green-400" size={24} />
                  <p className="text-green-400">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )} */}
              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top duration-500">
                  <CheckCircle className="text-green-400" size={24} />
                  <p className="text-green-400">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}
              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top duration-500">
                  <X className="text-red-400" size={24} />
                  <p className="text-red-400">
                    Failed to send message. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                    placeholder="+250 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                  >
                    <option value="consultation">Book a Consultation</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        className="group-hover:translate-x-1 transition-transform duration-300"
                        size={20}
                      />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Phone className="text-cyan-400" size={24} />
                    </div>
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      +250789914381
                    </span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Mail className="text-cyan-400" size={24} />
                    </div>
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      contact@aivizelabs.com
                    </span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                      <MapPin className="text-cyan-400 mt-1" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                        Kigali, Rwanda
                      </p>
                      <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        inquiryType: "consultation",
                      }));
                      document.getElementById("inquiryType").focus();
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  >
                    Book a Consultation
                    <ArrowRight size={20} />
                  </button>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        inquiryType: "investment",
                      }));
                      document.getElementById("inquiryType").focus();
                    }}
                    className="w-full px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
                  >
                    Explore Investment Opportunities
                  </button>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, inquiryType: "demo" }));
                      document.getElementById("inquiryType").focus();
                    }}
                    className="w-full px-6 py-3 border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                  >
                    Request Media Kit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
            <p className="text-gray-400">
              🌐{" "}
              <a
                href="https://www.aivizelabs.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
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
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider">
              Aivize Labs
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              © 2025 Aivize Labs. All rights reserved.
            </div>
          </div>

          <div className="mt-8 text-center animate-pulse ">
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

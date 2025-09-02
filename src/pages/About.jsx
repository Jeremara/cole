import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coleLogo from "../assets/logo.png";
import dimiImg from "../assets/Dimi.jpg";
import winnerImg from "../assets/Winner.jpeg";
import jeremiahImg from "../assets/Jeremiah.jpeg";

function About() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Theme toggle effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={coleLogo} alt="logo" className="h-10 w-20" />
            <span className="text-2xl font-bold text-primary">CoLE</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Command Line Experience
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/about" className="text-primary">About</Link>
            <Link to="/documentation" className="hover:text-primary">Documentation</Link>
          </div>
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300"
          >
            ☰
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-md px-4 py-3 space-y-2">
            <Link to="/" className="block">Home</Link>
            <Link to="/about" className="block text-primary">About</Link>
            <Link to="/documentation" className="hover:text-primary">Documentation</Link>
          </div>
        )}
      </nav>

      {/* About Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
               <span className="block text-primary"> About JWD</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The team behind CoLE - Command Line Experience
            </p>
          </div>

          <div className="prose prose-lg prose-indigo mx-auto">
            <section className="mb-12 bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
              <h2 className="text-3xl font-semibold mb-6">Every Developer Has Been There</h2>
              <p className="text-lg text-white-700 mb-4">
                You're in the flow, building something amazing, when suddenly you need that one terminal command. 
                The one with the specific flags and syntax that you used three weeks ago but can't quite remember. So you stop. 
                You search. You context-switch. Your momentum breaks.
              </p>
              <p className="text-lg text-white-700">
                I've been there too. We all have. And that's exactly why we built CoLE.
              </p>
            </section>

            <section className="mb-12 bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
              <h2 className="text-3xl font-bold text-white-900 mb-6">Why We Created CoLE</h2>
              <p className="text-lg text-white-700 mb-4">
                As developers ourselves, we were tired of the cognitive overload. 
                The constant mental tax of remembering complex command structures across different environments. 
                The productivity drain of switching between terminals and browsers just to look up syntax we'd already used before.
              </p>
              <p className="text-lg text-white-700 mb-4">
                We wanted to build something that would let us stay in the zone a tool that would learn from us and with us, becoming more helpful the more we used it. 
                Something lightweight that wouldn't slow down our machines or require constant internet connectivity.
              </p>
              <p className="text-lg text-white-700">
                So our small team at JWD set out to create exactly that: a terminal assistant that thinks the way developers do.
              </p>
            </section>

            <section className="mb-12 bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
              <h2 className="text-3xl font-bold text-white-900 mb-6">The Solution: Intelligent Terminal Assistance</h2>
              <p className="text-lg text-white-700 mb-4">
                CoLE is more than just another developer tool. It's a revolution in terminal workflow an AI-powered assistant that understands context, learns from your habits, and suggests commands in real-time with minimal resource usage.
              </p>
              <p className="text-lg text-white-700 mb-4">
                Using advanced semantic retrieval, CoLE understands what you're trying to accomplish, not just what you've typed. It works offline, runs cross-platform, and becomes more personalized to your workflow patterns over time.
              </p>
              <p className="text-lg text-white-700">
                No more searching Stack Overflow for that Git command. No more digging through your bash history. Just fluid, uninterrupted development.
              </p>
            </section>

            <section className="mb-12 bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
              <h2 className="text-3xl font-bold text-white-900 mb-6">The Impact: Reclaiming Developer Time</h2>
              <p className="text-lg text-white-700 mb-4">
                The average developer spends 30% of their time looking up commands and syntax they've used before. That's not just inefficient – it's a creativity killer. Every context switch takes you out of the flow state where the best code happens.
              </p>
              <p className="text-lg text-white-700">
                With CoLE, we're giving that time back. We're eliminating the small frictions that add up to major productivity drains. We're letting developers be developers again – focused on building, not remembering.
              </p>
            </section>

            <section className="mb-12 bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
              <h2 className="text-3xl font-bold text-white-900 mb-6">Our Vision: The Future of Developer Productivity</h2>
              <p className="text-lg text-white-700 mb-4">
                At JWD, we believe the best developer tools get out of your way. They don't demand attention – they amplify intention. They don't just save time – they create space for creativity and innovation.
              </p>
              <p className="text-lg text-white-700 mb-4">
                CoLE is just the beginning of our mission to build the next generation of developer productivity tools. Tools that understand how developers actually work, not how we think they should work.
              </p>
              <p className="text-lg text-white-700">
                We're building for a future where technology adapts to humans, not the other way around.
              </p>
            </section>

            <section className="mb-12 bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
              <h2 className="text-3xl font-bold text-white-900 mb-6">Join Our Terminal Workflow Revolution</h2>
              <p className="text-lg text-white-700 mb-4">
                CoLE isn't just a product – it's a movement toward a better way of working. A community of developers who believe our tools should empower us, not slow us down.
              </p>
              <p className="text-lg text-white-700 mb-4">
                We're building this for you, with you. Every feature, every improvement is driven by real developer needs and feedback.
              </p>
              <p className="text-lg text-white-700">
                Join us. Let's build without limits.
              </p>
            </section>
          </div>

          {/* Download Button */}
          <div className="mt-12 text-center">
            <a href="#download" className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300">
              Download CoLE Now
            </a>
          </div>
          {/* Developer Section */}
          <section className="py-16 px-4 bg-gradient-subtle">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Meet Our <span className="bg-gradient-primary bg-clip-text block">Developers</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Talented engineers who bring ideas to life with cutting-edge technology and creative solutions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0"
                  style={{ animationDelay: "0ms" }}>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 transition-all duration-500 ease-bounce group-hover:border-primary/60 group-hover:shadow-glow">
                      <img src={dimiImg} alt="Dimitri - Senior Full-Stack Developer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500"></div>
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      DIMITRI OURO-DJOW
                    </h3>
                    <p className="text-sm font-medium text-primary/80 bg-primary/10 rounded-full px-3 py-1 inline-block">
                      Senior Full-Stack Developer
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Passionate about creating seamless user experiences with 8+ years in React and Node.js
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 pt-3">
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105" style={{transitionDelay: "0ms"}}>
                        React
                      </span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105" style={{transitionDelay: "100ms"}}>
                        TypeScript
                      </span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105" style={{transitionDelay: "200ms"}}>
                        Node.js
                      </span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105" style={{transitionDelay: "300ms"}}>
                        GraphQL
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10 blur-xl"></div>
                  </div>

                </div>
                                {/* Developer 2 - Winner */}
                <div className="group relative bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0"
                  style={{ animationDelay: "200ms" }}>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>

                  {/* Avatar Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 transition-all duration-500 ease-bounce group-hover:border-primary/60 group-hover:shadow-glow">
                      <img src={winnerImg}
                        alt="tetewinnerbenissan-adodjiss - Lead Backend Engineer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      {/* Glow effect behind avatar */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      TETE WINNER BENISSAN-ADODJISS
                    </h3>

                    <p className="text-sm font-medium text-primary/80 bg-primary/10 rounded-full px-3 py-1 inline-block">
                      Lead Backend Engineer
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Expert in scalable architectures and cloud systems, loves solving complex technical challenges
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2 pt-3">
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{ transitionDelay: "0ms" }}>Python</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{ transitionDelay: "100ms" }}>AWS</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{ transitionDelay: "200ms" }}>Microservices</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{ transitionDelay: "300ms" }}>Docker</span>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10 blur-xl"></div>
                  </div>
                </div>
                {/* Developer 3 - Jeremiah */}
                <div className="group relative bg-card rounded-2xl p-6 border border-border transition-all duration-500 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0"
                  style={{ animationDelay: "400ms" }}>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>

                  {/* Avatar Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 transition-all duration-500 ease-bounce group-hover:border-primary/60 group-hover:shadow-glow">
                      <img src={jeremiahImg}
                        alt="Jeremiah Kamara - Frontend Architect"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      {/* Glow effect behind avatar */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      JEREMIAH KAMARA
                    </h3>

                    <p className="text-sm font-medium text-primary/80 bg-primary/10 rounded-full px-3 py-1 inline-block">
                      Frontend Architect
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Design-focused developer who bridges the gap between beautiful UX and robust engineering
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2 pt-3">
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{transitionDelay: "0ms"}}>React.js</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{transitionDelay: "100ms"}}>CSS</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{transitionDelay: "200ms"}}>Animation</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full transition-all duration-300 ease-smooth group-hover:bg-accent/30 group-hover:scale-105"
                        style={{transitionDelay: "300ms"}}>Design Systems</span>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10 blur-xl"></div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>

        
      </main>

      
      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">CoLE</h3>
              <p className="text-gray-300">
                Command Line Experience - Supercharging your terminal productivity.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#download" className="text-gray-300 hover:text-white transition-colors duration-200">Download</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/documentation" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Command Library</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Developer Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-center">
              &copy; 2025 JWD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import videoDemo from "./assets/video.mp4";
import coleLogo from "./assets/logo.png";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [os, setOS] = useState("Unknown OS");

  // Theme toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // OS detection
  useEffect(() => {
    const ua = window.navigator.userAgent;
    if (ua.includes("Windows")) setOS("Windows");
    else if (ua.includes("Mac")) setOS("macOS");
    else if (ua.includes("Linux")) setOS("Linux");
    else if (ua.includes("Android")) setOS("Android");
    else if (ua.includes("iPhone") || ua.includes("iPad")) setOS("iOS");
  }, []);

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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="hover:text-primary">Features</a>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/documentation" className="hover:text-primary">Documentation</Link>
            <a href="#download" className="bg-primary text-white px-4 py-2 rounded-md">
              Download Now
            </a>
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

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-md px-4 py-3 space-y-2">
            <a href="#features" className="block">Features</a>
            <a href="#download" className="block">Download</a>
            <Link to="/about" className="block">About</Link>
          </div>
        )}
      </nav>

        {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[url('assets/grid-pattern.svg')] bg-center opacity-50 dark:opacity-20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                          <span className="block">Supercharge Your</span>
                          <span className="block text-primary">Terminal Experience</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                          CoLE is a smart terminal assistant that uses Large Language Models to generate efficient commands, making your terminal workflow faster and less mentally taxing.
                      </p>
                      <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                          <a href="#download" className="scroll-btn inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 transition-colors duration-200">
                              Download Now
                              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                              </svg>
                          </a>
                      </div>
                  </div>
                  <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                      <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                          <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                              <video className="w-full" src={videoDemo} autoPlay muted playsInline loop></video>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    {/*Features Section*/}
      <section id="features" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                      Powerful Features for Terminal Productivity
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                      Discover how CoLE transforms your command line workflow and boosts productivity.
                  </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-2 bg-primary bg-opacity-10 rounded-md">
                          <i className="fas fa-terminal text-2xl text-primary"></i>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Intelligent Command Generation</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          Describe what you want to do in plain language, and CoLE will generate the exact command you need for your terminal.
                      </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-2 bg-secondary bg-opacity-10 rounded-md">
                          <i className="fas fa-history text-2xl text-secondary"></i>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Command Learning & History</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          CoLE learns from your command history to provide better suggestions and adapts to your specific workflow patterns.
                      </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-2 bg-tertiary bg-opacity-10 rounded-md">
                          <i className="fas fa-laptop-code text-2xl text-tertiary"></i>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Cross-Platform Terminal Support</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          Works seamlessly across Windows, macOS, and Linux terminals, providing consistent assistance regardless of your environment.
                      </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-2 bg-purple-400 bg-opacity-10 rounded-md">
                          <i className="fas fa-lock text-2xl text-purple-500"></i>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">Secure Environment</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          Learn with peace of mind in our secure, encrypted platform that protects your data and privacy.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 bg-gradient-to-br from-indigo-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                      Boost Your Terminal Productivity Today
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Get started with CoLE on your preferred platform. We've detected you're using{" "}
                    <span className="font-semibold text-primary">{os}</span>.
                  </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {/* Windows Download */}
                  <div id="windows-download" className="bg-white bg-card rounded-2xl p-6 border border-border transition-all duration-300 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 mx-auto">
                          <i className="fab fa-windows text-2xl text-blue-600"></i>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Windows</h3>
                      <p className="mt-2 text-sm text-gray-500 text-center">
                          Works with PowerShell and Windows Terminal
                      </p>
                      <div className="mt-6 text-center">
                          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                              Download .exe
                              <i className="fas fa-download ml-2"></i>
                          </a>
                      </div>
                  </div>

                  {/* macOS Download */}
                  <div id="macos-download" className="bg-white bg-card rounded-2xl p-6 border border-border transition-all duration-300 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 mx-auto">
                          <i className="fab fa-apple text-2xl text-gray-800"></i>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">macOS</h3>
                      <p className="mt-2 text-sm text-gray-500 text-center">
                          Integrates with Terminal and iTerm2
                      </p>
                      <div className="mt-6 text-center">
                          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-200">
                              Download .dmg
                              <i className="fas fa-download ml-2"></i>
                          </a>
                      </div>
                  </div>

                  {/* Linux Download */} 
                  <div id="linux-download" className="bg-white bg-card rounded-2xl p-6 border border-border transition-all duration-300 ease-smooth hover:border-primary/30 hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 animate-scale-in z-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 mx-auto">
                          <i className="fab fa-linux text-2xl text-orange-600"></i>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Linux</h3>
                      <p className="mt-2 text-sm text-gray-500 text-center">
                          Compatible with Bash, Zsh, and other shells
                      </p>
                      <div className="mt-6 text-center">
                          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200">
                              Download .AppImage
                              <i className="fas fa-download ml-2"></i>
                          </a>
                          <a href="#" className="mt-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition-colors duration-200">
                              Download .deb
                              <i className="fas fa-download ml-2"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

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
                        <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</Link></li>
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

      {/* Download Suggestion */}  
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-6 max-w-sm transform transition-transform duration-300 opacity-100 z-50 border border-primary">
          <div className="flex items-start">
            <div
              id="popup-os-icon"
              className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10"
            >
              {os === "Windows" && <i className="fab fa-windows text-xl text-blue-600"></i>}
              {os === "macOS" && <i className="fab fa-apple text-xl text-gray-800"></i>}
              {os === "Linux" && <i className="fab fa-linux text-xl text-orange-600"></i>}
              {(os === "Android" || os === "iOS") && (
                <i className="fas fa-mobile-alt text-xl text-green-600"></i>
              )}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Download for {os}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Supercharge your terminal productivity with our native app.
              </p>
              <div className="mt-4 flex space-x-2">
                <a
                  id="popup-download-btn"
                  href={
                    os === "Windows"
                      ? "/downloads/cole-installer.exe"
                      : os === "macOS"
                      ? "/downloads/cole-macos.dmg"
                      : os === "Linux"
                      ? "/downloads/cole-linux.AppImage"
                      : "#download"
                  }
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700"
                >
                  Download Now
                </a>
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Dismiss
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-auto flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coleLogo from "../assets/logo.png";

export default function Documentation() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
    const [active, setActive] = useState("Overview");
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

    // Documentation sections
    const sections = {
        Overview: (
        <>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="mb-4">
            CoLE (Command Line Assistant) is a cross-platform Smart Terminal Assistant
            that suggests commands in real-time using Large Language Models (LLMs) and
            Retrieval-Augmented Generation (RAG).
            </p>
            <ul className="list-disc list-inside space-y-1">
            <li>Suggests commands in real-time</li>
            <li>Works offline after setup</li>
            <li>History-aware semantic retrieval</li>
            <li>Lightweight and cross-platform (Tauri + React)</li>
            </ul>
        </>
        ),
        Installation: (
        <>
            <h2 className="text-xl font-semibold mb-2">Installation</h2>
            <h3 className="font-medium">Requirements</h3>
            <ul className="list-disc list-inside mb-4">
            <li>Linux / macOS / Windows (PowerShell)</li>
            <li>2-core CPU</li>
            <li>4 GB RAM</li>
            <li>Terminal access</li>
            </ul>
            <h3 className="font-medium">Steps</h3>
            <pre className="bg-gray-900 text-green-400 p-3 rounded-md overflow-x-auto mb-2">
            <code>sudo apt install libwebkit2gtk-4.0-dev build-essential</code>
            </pre>
            <pre className="bg-gray-900 text-green-400 p-3 rounded-md overflow-x-auto">
            <code>cole</code>
            </pre>
        </>
        ),
        "Quick Start": (
        <>
            <h2 className="text-xl font-semibold mb-2">Quick Start</h2>
            <ol className="list-decimal list-inside space-y-2">
            <li>Open your terminal.</li>
            <li>Start COLE with <code className="bg-gray-100 px-1">cole</code>.</li>
            <li>Press <code className="bg-gray-100 px-1">Ctrl + Tab</code> to trigger overlay.</li>
            <li>Type a partial command → view suggestions.</li>
            <li>Select and press <code className="bg-gray-100 px-1">Enter</code> to run.</li>
            </ol>
        </>
        ),
        Features: (
        <>
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-1">
            <li>🔍 Context-aware command suggestions</li>
            <li>⚡ Offline mode after embedding</li>
            <li>🧠 Learns from your history</li>
            <li>📋 Clipboard injection</li>
            <li>⌨️ Auto-completion</li>
            <li>🖥️ Lightweight UI overlay</li>
            </ul>
        </>
        ),
        "Tech Stack": (
        <>
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside space-y-1">
            <li>Frontend: React</li>
            <li>Desktop Shell: Tauri</li>
            <li>Embeddings: Azure OpenAI / Sentence Transformers</li>
            <li>Vector DB: FAISS / ChromaDB</li>
            <li>Backend: Python + Rust</li>
            </ul>
        </>
        ),
        FAQ: (
        <>
            <h2 className="text-xl font-semibold mb-2">FAQ</h2>
            <p className="mb-2">
            <strong>Q:</strong> Does CoLE need internet?<br />
            <strong>A:</strong> Only for initial embedding if using Azure OpenAI. After
            that, it works offline.
            </p>
            <p className="mb-2">
            <strong>Q:</strong> Is CoLE a terminal replacement?<br />
            <strong>A:</strong> No, it works as an assistant overlay.
            </p>
            <p>
            <strong>Q:</strong> Can I use my own embeddings model?<br />
            <strong>A:</strong> Yes, CoLE supports both Azure OpenAI and sentence
            transformers.
            </p>
        </>
        ),
    };

    return (
        <div className={`flex flex-col min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
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

            {/* Body */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 shadow-md hidden md:block">
                <nav className="p-4 space-y-2">
                    {Object.keys(sections).map((key) => (
                    <button
                        key={key}
                        onClick={() => setActive(key)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition ${
                        active === key
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                    >
                        {key}
                    </button>
                    ))}
                </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                <div className="prose max-w-3xl dark:prose-invert">
                    {sections[active]}
                </div>
                </main>
            </div>
        </div>
    );
}

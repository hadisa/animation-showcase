import React from 'react';
import { Sparkles, Code2, Heart, Github, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative  py-12 sm:py-16 bg-gradient-to-t from-[#265276]/50 to-teal-900 overflow-hidden">
      {/* Background elements matching the hero */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleTwinkle ${3 + Math.random() * 2}s ease-in-out infinite alternate ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Brand section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">TailwindAnimate</h3>
              <p className="text-sm text-gray-200 mt-1">Professional Animation Library</p>
            </div>
          </div>

          {/* Links section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-200">
            <a href="/docs" className="hover:text-cyan-400 transition-colors duration-300">
              Documentation
            </a>
            <a href="/showcase" className="hover:text-cyan-400 transition-colors duration-300">
              Showcase
            </a>
            <a href="/dashboard" className="hover:text-cyan-400 transition-colors duration-300">
              Dashboard
            </a>
            <a href="/pricing" className="hover:text-cyan-400 transition-colors duration-300">
              Pricing
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-500/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-200 group-hover:text-cyan-400" />
            </a>
            <a 
              href="https://twitter.com" 
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-500/10 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-200 group-hover:text-cyan-400" />
            </a>
            <a 
              href="mailto:contact@tailwindanimate.com" 
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-500/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-200 group-hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Copyright and bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-gray-200 flex items-center justify-center gap-1">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
            <span>for the developer community</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-200">
            <span>© 2024 TailwindAnimate. All rights reserved.</span>
            <div className="hidden sm:block h-3 w-px bg-gray-700"></div>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy
              </a>
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms
              </a>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-200 hover:text-cyan-400 transition-colors duration-300"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes particleTwinkle {
          0% { 
            opacity: 0.1; 
            transform: scale(0.8);
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.2);
          }
          100% { 
            opacity: 0.1; 
            transform: scale(0.8);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Code2, Eye, Zap, Layers, Palette, Shield, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Copy-Paste Ready",
      description: "Clean, optimized code that you can copy and paste directly into your projects with zero configuration",
      color: "text-cyan-400",
      delay: 0
    },
    {
      icon: Eye,
      title: "Live Previews",
      description: "Interactive demos for every animation so you can see exactly how they work before implementation",
      color: "text-teal-400",
      delay: 100
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Lightweight animations that don't compromise your site's performance or loading speed",
      color: "text-amber-400",
      delay: 200
    },
    {
      icon: Layers,
      title: "Organized Library",
      description: "Categorized collections with advanced search and filtering to find the perfect animation",
      color: "text-purple-400",
      delay: 300
    },
    {
      icon: Palette,
      title: "Customizable",
      description: "Easy-to-modify CSS variables and Tailwind classes for perfect brand integration",
      color: "text-pink-400",
      delay: 400
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Battle-tested animations used by thousands of developers in production applications",
      color: "text-indigo-400",
      delay: 500
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#265277] to-[#105956] overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-96 bg-gray-50  dark:from-gray-100/5 dark:to-cyan-600/5 transform -skew-y-3 -translate-y-24"></div>
      {/* Background elements matching the hero */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-[#105956]/30 px-4 py-2 text-sm font-medium text-[#105956] ring-1 ring-inset ring-cyan-500/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-700  max-w-3xl mx-auto">
            Professional tools and resources designed to elevate your web animations to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 ease-in-out hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-teal-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Animated border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-shine"></div>
              
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-900/20 mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shine {
          background-size: 200% 100%;
          animation: shine 1.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
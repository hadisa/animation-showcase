import { ArrowRight, Code2, Play } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="relative  flex items-center justify-center overflow-hidden py-6 sm:py-3 lg:py-4 xl:py-10 2xl:py-12">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0C504C] via-[#155B5E] to-[#1C2636] opacity-95"></div>

            {/* Animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating circles */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0C504C] rounded-full animate-float-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1D2637]/10 rounded-full animate-float-medium"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-200/10 rounded-full animate-float-fast"></div>

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                {/* Animated gradient blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-in">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium text-white">Get Started</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white animate-fade-in-up">
                    <span className="block text-gray-100">Ready to Get Started?</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up delay-100">
                    Join thousands of developers who are already using TailwindAnimate to create stunning, professional web experiences that captivate users
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up delay-200">
                    <button className="group bg-gradient-to-r from-teal-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                        <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                        Explore Animations
                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group bg-white/5 backdrop-blur-md border border-white/10 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto flex items-center justify-center transition-all duration-300 hover:bg-white/10">
                        <Code2 className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
                        View Documentation
                    </button>
                </div>


            </div>

            <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 9s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
        </section>
    );
};

export default CTASection;
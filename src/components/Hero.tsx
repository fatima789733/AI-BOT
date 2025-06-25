import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mix-blend-screen overflow-hidden -mt-10 sm:-mt-16 lg:-mt-24">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center ">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[61px] font-bold leading-tight">
            <span className="animate-fade-in-up bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Trade Smarter.
            </span>
            <span className="animate-fade-in-up animation-delay-200 text-white">
              Every Move,
            </span>
            <span className="block animate-fade-in-up animation-delay-400 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Backed By AI.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-up animation-delay-600">
          <p className="text-md sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet <span className="text-white font-semibold">Chatbot</span>. Your
            Intelligent Trading Assistant — Real-Time Insights,
            <br className="hidden sm:block" />
            Smarter Signals, Zero Guesswork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

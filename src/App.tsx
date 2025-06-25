import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Spline from "@splinetool/react-spline";

import myBackground from "./images/bg.png"; // Adjust path as needed

function App() {
  return (
    <div className="h-screen relative overflow-hidden mix-blend-screen">
      {/* Background Image Container - Replace the src with your image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen"
        style={{
          backgroundImage: `url(${myBackground})`,
        }}
      ></div>
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 mt-[400px] mix-blend-screen border-l border-red-600">
        <Spline
          scene="https://prod.spline.design/sfZGQEXVpnnCQMdh/scene.splinecode"
          className="w-full h-full object-cover "
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;

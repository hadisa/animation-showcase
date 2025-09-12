"use client";
import React from 'react';
import FuturisticAnimatedHeroBackground from './heroPart4';

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <FuturisticAnimatedHeroBackground />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
};

export default AnimatedLayout;
"use client";

import React from 'react';

interface WireframeOverlayProps {
  className?: string;
  showOverlay: boolean;
}

export const WireframeOverlay: React.FC<WireframeOverlayProps> = ({
  className = '',
  showOverlay
}) => {
  if (!showOverlay) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      <div className="max-w-7xl mx-auto h-full opacity-30">
        {/* Importamos el SVG como componente */}
        <svg className="w-full h-full" viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
          {/* Aquí va el contenido del camera-store-wireframe.svg */}
        </svg>
      </div>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  velocity: { x: number; y: number };
  image: string;
}

interface CookieConfettiProps {
  isActive: boolean;
  duration?: number;
  onComplete?: () => void;
}

export function CookieConfetti({ isActive, duration = 3000, onComplete }: CookieConfettiProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!isActive) {
      setConfetti([]);
      return;
    }

    const pieces: ConfettiPiece[] = [];
    const numPieces = 50;

    // Generate confetti pieces
    for (let i = 0; i < numPieces; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -50,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
        velocity: {
          x: (Math.random() - 0.5) * 4,
          y: 2 + Math.random() * 3
        },
        image: `/confetti/cookie-${Math.floor(Math.random() * 23) + 1}.svg`
      });
    }

    setConfetti(pieces);

    // Animation loop
    const animationFrame = () => {
      setConfetti(prev => 
        prev.map(piece => ({
          ...piece,
          x: piece.x + piece.velocity.x,
          y: piece.y + piece.velocity.y,
          rotation: piece.rotation + 2
        })).filter(piece => piece.y < window.innerHeight + 100)
      );
    };

    const interval = setInterval(animationFrame, 16);

    // Clean up after duration
    const timeout = setTimeout(() => {
      setConfetti([]);
      onComplete?.();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isActive, duration, onComplete]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map(piece => (
        <Image
          key={piece.id}
          src={piece.image}
          alt="cookie confetti"
          width={24}
          height={24}
          className="absolute transition-all duration-75"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            transform: `rotate(${piece.rotation}deg) scale(${piece.scale})`
          }}
        />
      ))}
    </div>
  );
}
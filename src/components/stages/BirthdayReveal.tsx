import { useState, useEffect } from "react";
import { Heart, Gift, Cake, Crown, Sparkles, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BirthdayRevealProps {
  onNext: () => void;
  isLastStage: boolean;
}

export const BirthdayReveal = ({ isLastStage }: BirthdayRevealProps) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFireworks(true), 500);
    const timer2 = setTimeout(() => setShowMessage(true), 2000);
    const timer3 = setTimeout(() => setShowButton(true), 4000);
    const timer4 = setTimeout(() => setConfettiActive(true), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleKissButton = () => {
    const kissEffect = document.createElement("div");
    kissEffect.innerHTML = "❤️❤️❤️";
    kissEffect.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      pointer-events: none;
      z-index: 1000;
      animation: pulse 1s ease-in-out;
    `;
    document.body.appendChild(kissEffect);
    setTimeout(() => document.body.removeChild(kissEffect), 1000);
  };

  return (
    <div className="stage-container bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Confetti Animation */}
      {confettiActive && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="confetti animate-confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="w-full px-4 sm:px-6 text-center max-w-3xl mx-auto relative z-10 py-12">
        {/* Fireworks Effect */}
        {showFireworks && (
          <div className="mb-6 sm:mb-10 animate-scale-in">
            <div className="flex justify-center items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
              <PartyPopper size={36} className="text-yellow-300 animate-bounce" />
              <Sparkles size={44} className="text-yellow-300 animate-sparkle" />
              <PartyPopper size={36} className="text-yellow-300 animate-bounce" />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-5 animate-pulse-heart">
              🎉 Happy Birthday 🎉
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold crown-text mb-6 sm:mb-8">
              Oluwatomilayo, My Duchess 👑
            </h2>
          </div>
        )}

        {showMessage && (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl animate-fade-in">
            <div className="flex justify-center gap-3 sm:gap-4 mb-6">
              <Heart size={28} className="text-pink-300 animate-pulse-heart" />
              <Crown size={28} className="text-yellow-300 animate-pulse-heart" />
              <Heart size={28} className="text-pink-300 animate-pulse-heart" />
            </div>

            <div className="space-y-5 text-base sm:text-lg md:text-xl leading-relaxed">
              <p className="font-bold text-xl sm:text-2xl md:text-3xl text-pink-100">
                To my dearest Duchess 💕
              </p>

              <p>
                You are the brightest part of my world, the reason my heart feels
                so full, and the love I never want to lose.
              </p>

              <p>
                Thank you for being my joy, my laughter, my peace, and my
                forever. You’re my Queen, my favorite nurse, my 6'0
                stallion with the most beautiful glasses, and the love of
                my life.
              </p>

              <p className="font-bold text-lg sm:text-xl md:text-2xl text-yellow-200">
                From your your babe who adores you endlessly
                Happy Birthday, my Duchess 🎂✨
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Cake size={28} className="text-pink-300 animate-bounce" />
              <Gift size={28} className="text-yellow-300 animate-bounce" />
              <Cake size={28} className="text-pink-300 animate-bounce" />
            </div>
          </div>
        )}

        {showButton && (
          <div className="mt-10 animate-scale-in">
            <Button
              onClick={handleKissButton}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse-heart"
            >
              Tap to Claim Your Birthday Kiss 💋
            </Button>

            <p className="mt-5 sm:mt-6 text-yellow-200 font-medium text-sm sm:text-base">
              Counting down to celebrating you in person 🥳💕
            </p>
          </div>
        )}

        {/* Floating Birthday Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[Cake, Gift, Heart, Crown, Sparkles].map((Icon, i) => (
            <Icon
              key={i}
              className="absolute text-pink-200 animate-float-up opacity-50"
              size={22}
              style={{
                left: `${10 + i * 18}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: "6s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
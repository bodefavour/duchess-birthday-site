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
    // Create kiss effect
    const kissEffect = document.createElement('div');
    kissEffect.innerHTML = '💋💕✨';
    kissEffect.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4rem;
      pointer-events: none;
      z-index: 1000;
      animation: pulse 1s ease-in-out;
    `;
    document.body.appendChild(kissEffect);
    setTimeout(() => document.body.removeChild(kissEffect), 1000);
  };

  return (
    <div className="stage-container bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 text-white relative overflow-hidden">
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
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Fireworks Effect */}
        {showFireworks && (
          <div className="mb-8 animate-scale-in">
            <div className="flex justify-center items-center gap-4 mb-6">
              <PartyPopper size={48} className="text-yellow-300 animate-bounce" />
              <Sparkles size={56} className="text-yellow-300 animate-sparkle" />
              <PartyPopper size={48} className="text-yellow-300 animate-bounce" />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-4 animate-pulse-heart">
              🎉 Happy Birthday! 🎉
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold crown-text mb-8">
              Oluwatomilayo, My Duchess! 👑
            </h2>
          </div>
        )}

        {showMessage && (
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in">
            <div className="flex justify-center gap-4 mb-6">
              <Heart size={32} className="text-pink-300 animate-pulse-heart" />
              <Crown size={32} className="text-yellow-300 animate-pulse-heart" />
              <Heart size={32} className="text-pink-300 animate-pulse-heart" />
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="font-bold text-2xl md:text-3xl">
                I love you deeply, my beautiful Duchess. 💕
              </p>
              
              <p>
                Thank you for being mine, for making me smile every single day, 
                for filling my life with endless joy and laughter.
              </p>
              
              <p>
                You're my Queen 👑, my partner in everything, my favorite nurse 🩺, 
                my 6'0 stallion with the most beautiful glasses, 
                and my forever love.
              </p>
              
              <p className="font-bold text-xl md:text-2xl text-yellow-200">
                From your 6'3 Tech Nurse who adores you completely. 
                Happy Birthday, Duchess! 🎂✨
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Cake size={32} className="text-pink-300 animate-bounce" />
              <Gift size={32} className="text-yellow-300 animate-bounce" />
              <Cake size={32} className="text-pink-300 animate-bounce" />
            </div>
          </div>
        )}

        {showButton && (
          <div className="mt-12 animate-scale-in">
            <Button 
              onClick={handleKissButton}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse-heart"
            >
              Tap to Claim Your Birthday Kiss 💋
            </Button>
            
            <p className="mt-6 text-yellow-200 font-medium">
              I can't wait to celebrate with you in person! 🥳💕
            </p>
          </div>
        )}

        {/* Floating Birthday Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[Cake, Gift, Heart, Crown, Sparkles].map((Icon, i) => (
            <Icon 
              key={i}
              className="absolute text-pink-200 animate-float-up opacity-50" 
              size={28}
              style={{
                left: `${10 + i * 20}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: '6s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
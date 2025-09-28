import { useState, useEffect } from "react";
import { Crown, Stethoscope, Heart, Glasses, Ruler } from "lucide-react";

interface DuchessStageProps {
  onNext: () => void;
  isLastStage: boolean;
}

export const DuchessStage = ({ onNext }: DuchessStageProps) => {
  const [showCrown, setShowCrown] = useState(false);
  const [showAttributes, setShowAttributes] = useState(false);
  const [showStethoscope, setShowStethoscope] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowCrown(true), 1000);
    const timer2 = setTimeout(() => setShowAttributes(true), 2500);
    const timer3 = setTimeout(() => setShowStethoscope(true), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="stage-container bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          {showCrown && (
            <Crown size={80} className="crown-text mx-auto mb-4 animate-pulse-heart" />
          )}
          <h1 className="text-4xl md:text-6xl font-bold crown-text mb-6">
            The Duchess & Her Tech Nurse 👑🩺
          </h1>
        </div>

        {showAttributes && (
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Duchess Description */}
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl p-8 shadow-xl animate-scale-in">
              <Crown size={48} className="crown-text mx-auto mb-4" />
              <h2 className="text-2xl font-bold crown-text mb-4">My Duchess 👑</h2>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <Ruler size={20} className="text-pink-600" />
                  <span className="font-semibold">6'0 Stallion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Crown size={20} className="text-yellow-600" />
                  <span className="font-semibold">Duchess of Nursing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Glasses size={20} className="text-purple-600" />
                  <span className="font-semibold">Beautiful with glasses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart size={20} className="text-pink-600 animate-pulse-heart" />
                  <span className="font-semibold">Makes me smile endlessly</span>
                </div>
              </div>
            </div>

            {/* Tech Nurse Description */}
            {showStethoscope && (
              <div className="bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl p-8 shadow-xl animate-scale-in">
                <Stethoscope size={48} className="text-teal-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-teal-700 mb-4">Your Tech Nurse 🩺</h2>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Ruler size={20} className="text-teal-600" />
                    <span className="font-semibold">6'3 Tech Guy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Stethoscope size={20} className="text-blue-600" />
                    <span className="font-semibold">Always by your side</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart size={20} className="text-pink-600 animate-pulse-heart" />
                    <span className="font-semibold">Always yours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart size={20} className="text-red-600 animate-pulse-heart" />
                    <span className="font-semibold">Deeply in love</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {showStethoscope && (
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Crown size={32} className="crown-text animate-pulse-heart" />
              <Heart size={40} className="text-pink-500 animate-pulse-heart" />
              <Stethoscope size={32} className="text-teal-600 animate-pulse-heart" />
            </div>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
              "My beautiful Duchess with her crown of grace, 
              and me, your devoted Tech Nurse with a heart full of love. 
              Together, we're an unstoppable team of healers and dreamers. 💕"
            </p>
            
            {/* Floating medical and crown icons */}
            <div className="relative mt-8 h-16">
              {[Crown, Stethoscope, Heart, Glasses].map((Icon, i) => (
                <Icon 
                  key={i}
                  className="absolute text-pink-400 animate-float-up opacity-60" 
                  size={24}
                  style={{
                    left: `${20 + i * 20}%`,
                    animationDelay: `${i * 0.7}s`
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
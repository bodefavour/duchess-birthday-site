import { useState, useEffect } from "react";
import { Heart, Users, Sparkles } from "lucide-react";

interface BecomingUsStageProps {
  onNext: () => void;
  isLastStage: boolean;
}

export const BecomingUsStage = ({ onNext }: BecomingUsStageProps) => {
  const [showHearts, setShowHearts] = useState(false);
  const [showMerge, setShowMerge] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowHearts(true), 1000);
    const timer2 = setTimeout(() => setShowMerge(true), 3000);
    const timer3 = setTimeout(() => setShowMessage(true), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="stage-container bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <Users size={64} className="text-purple-600 mx-auto mb-4 animate-pulse-heart" />
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-romantic mb-6">
            Becoming Us 💫
          </h1>
        </div>

        {/* Two Hearts Animation */}
        <div className="relative mb-12 h-32">
          {showHearts && (
            <>
              <Heart 
                size={64} 
                className={`absolute text-pink-500 transition-all duration-2000 ease-in-out ${
                  showMerge ? 'left-1/2 transform -translate-x-8' : 'left-1/4'
                }`}
                style={{ top: '20px' }}
              />
              <Heart 
                size={64} 
                className={`absolute text-purple-500 transition-all duration-2000 ease-in-out ${
                  showMerge ? 'left-1/2 transform translate-x-8' : 'right-1/4'
                }`}
                style={{ top: '20px' }}
              />
              
              {showMerge && (
                <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
                  <div className="relative">
                    <Heart size={80} className="text-pink-600 animate-pulse-heart" />
                    <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-sparkle" size={24} />
                    <Sparkles className="absolute -bottom-2 -left-2 text-yellow-400 animate-sparkle" size={20} />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {showMessage && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                That day wasn't just our first date…
              </p>
              <p className="text-2xl md:text-3xl font-bold text-gradient-romantic mb-6">
                it was the beginning of us. ✨
              </p>
              <p className="text-lg text-gray-700">
                From strangers on Twitter to lovers in real life, 
                from that moment on, we've been unstoppable.
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
              <div className="bg-blue-100 rounded-xl p-4 w-48">
                <span className="text-2xl">📱</span>
                <p className="font-semibold mt-2">Twitter Strangers</p>
              </div>
              <div className="text-pink-500">
                <Heart size={32} className="animate-pulse-heart" />
              </div>
              <div className="bg-purple-100 rounded-xl p-4 w-48">
                <span className="text-2xl">💬</span>
                <p className="font-semibold mt-2">DM Conversations</p>
              </div>
              <div className="text-pink-500">
                <Heart size={32} className="animate-pulse-heart" />
              </div>
              <div className="bg-pink-100 rounded-xl p-4 w-48">
                <span className="text-2xl">💕</span>
                <p className="font-semibold mt-2">Real Life Lovers</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
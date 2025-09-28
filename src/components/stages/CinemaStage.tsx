import { useState, useEffect } from "react";
import { Film, Popcorn, Heart, Ticket } from "lucide-react";

interface CinemaStageProps {
  onNext: () => void;
  isLastStage: boolean;
}

export const CinemaStage = ({ onNext }: CinemaStageProps) => {
  const [showTickets, setShowTickets] = useState(false);
  const [showPopcorn, setShowPopcorn] = useState(false);
  const [showKiss, setShowKiss] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTickets(true), 1000);
    const timer2 = setTimeout(() => setShowPopcorn(true), 2500);
    const timer3 = setTimeout(() => setShowKiss(true), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="stage-container bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <Film size={64} className="text-yellow-400 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-golden mb-6">
            The First Meeting 🎬❤️
          </h1>
        </div>

        <p className="text-xl md:text-2xl leading-relaxed mb-8">
          Then came the day we finally met at the cinema.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Movie Tickets */}
          {showTickets && (
            <div className="animate-scale-in">
              <Ticket size={48} className="text-yellow-400 mx-auto mb-4" />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">The Plan</h3>
                <p className="text-sm opacity-90">
                  Two tickets, one perfect date 🎫
                </p>
              </div>
            </div>
          )}

          {/* Popcorn */}
          {showPopcorn && (
            <div className="animate-scale-in">
              <Popcorn size={48} className="text-yellow-400 mx-auto mb-4" />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">The Snacks</h3>
                <p className="text-sm opacity-90">
                  Popcorn we barely touched 🍿
                </p>
              </div>
            </div>
          )}

          {/* Hearts */}
          {showKiss && (
            <div className="animate-scale-in">
              <Heart size={48} className="text-pink-400 mx-auto mb-4 animate-pulse-heart" />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">The Magic</h3>
                <p className="text-sm opacity-90">
                  90% kissing, 10% movie 😘
                </p>
              </div>
            </div>
          )}
        </div>

        {showKiss && (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              Did we watch the movie? 🤔
            </p>
            <p className="text-xl mb-4">
              Well... maybe just 10% 🤭
            </p>
            <p className="text-lg italic">
              because the other 90% was spent kissing, holding you close, 
              and making memories I'll never forget. 💕
            </p>
            
            {/* Floating Hearts */}
            <div className="relative mt-6">
              {[...Array(6)].map((_, i) => (
                <Heart 
                  key={i}
                  className="absolute text-pink-400 animate-float-up opacity-70" 
                  size={20}
                  style={{
                    left: `${15 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`
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
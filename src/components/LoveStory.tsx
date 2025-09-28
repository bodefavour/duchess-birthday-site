import { useState, useEffect } from "react";
import { Heart, MessageCircle, Crown, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TwitterStage } from "./stages/TwitterStage";
import { DMsStage } from "./stages/DMsStage";
import { CinemaStage } from "./stages/CinemaStage";
import { BecomingUsStage } from "./stages/BecomingUsStage";
import { DuchessStage } from "./stages/DuchessStage";
import { BirthdayReveal } from "./stages/BirthdayReveal";

const LoveStory = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [showFloatingHearts, setShowFloatingHearts] = useState(true);

  const stages = [
    { component: TwitterStage, title: "The Beginning" },
    { component: DMsStage, title: "First Spark" },
    { component: CinemaStage, title: "First Meeting" },
    { component: BecomingUsStage, title: "Becoming Us" },
    { component: DuchessStage, title: "The Duchess" },
    { component: BirthdayReveal, title: "Birthday Celebration" }
  ];

  const nextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const CurrentStageComponent = stages[currentStage].component;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Floating Hearts Background */}
      {showFloatingHearts && (
        <div className="floating-hearts">
          <Heart className="heart animate-float-up" size={24} style={{ left: '10%' }} />
          <Heart className="heart animate-float-up" size={18} style={{ left: '30%' }} />
          <Heart className="heart animate-float-up" size={20} style={{ left: '70%' }} />
          <Heart className="heart animate-float-up" size={16} style={{ left: '90%' }} />
        </div>
      )}

      {/* Progress Indicator */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="progress-pill flex gap-3 px-6 py-3 rounded-full shadow-2xl">
          {stages.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index <= currentStage 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg transform scale-110' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Stage */}
      <CurrentStageComponent onNext={nextStage} isLastStage={currentStage === stages.length - 1} />

      {/* Navigation */}
      {currentStage < stages.length - 1 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            onClick={nextStage}
            className="love-button text-lg px-8 py-4 animate-pulse-heart"
          >
            Continue Our Story 💕
          </Button>
        </div>
      )}
    </div>
  );
};

export default LoveStory;
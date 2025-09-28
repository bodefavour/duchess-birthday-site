import { useState, useEffect } from "react";
import { Twitter, Heart, MessageSquare } from "lucide-react";

interface TwitterStageProps {
  onNext: () => void;
  isLastStage: boolean;
}

export const TwitterStage = ({ onNext }: TwitterStageProps) => {
  const [showTweet, setShowTweet] = useState(false);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTweet(true), 1000);
    const timer2 = setTimeout(() => setShowReply(true), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="stage-container">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-bounce">
          <Twitter size={64} className="text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-romantic mb-6">
            The Beginning 🌸
          </h1>
        </div>

        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            It all began on Twitter… I was just shitposting as usual 😂 
            <br />and then you replied.
          </p>

          {/* Mock Tweet */}
          {showTweet && (
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-md mx-auto animate-bubble-in">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-gray-900">Favour</span>
                    <span className="text-gray-500 text-sm">@favour_tech</span>
                  </div>
                  <p className="text-gray-800">Just another day of tech chaos and random thoughts 🤷‍♂️</p>
                  <div className="flex items-center gap-4 mt-3 text-gray-500">
                    <MessageSquare size={16} />
                    <Heart size={16} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reply */}
          {showReply && (
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Heart className="text-pink-400 animate-pulse-heart" size={24} />
              </div>
              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6 shadow-xl max-w-md mx-auto animate-bubble-in">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900">Tomi</span>
                      <span className="text-gray-500 text-sm">@duchess_tomi</span>
                    </div>
                    <p className="text-gray-800">This is so relatable! Tech life is wild 😂</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-center mt-6 text-pink-600 font-medium">
                That one simple reply pulled me into your DMs… 💕
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
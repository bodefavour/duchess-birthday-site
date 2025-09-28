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
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            It all began with this tweet… 💫
          </p>

          {/* Original Tweet */}
          {showTweet && (
            <div className="bg-card rounded-2xl p-6 shadow-2xl max-w-lg mx-auto animate-fade-in border border-border/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-foreground text-lg">Tech_nurse</span>
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground text-sm">@favour_bode · 11 Aug</span>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed mb-4">
                    one girl just sent me 500k for being so tall<br />
                    i don die 😂😂
                  </p>
                  <div className="flex items-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer">
                      <MessageSquare size={18} />
                      <span className="text-sm">2</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
                      <Heart size={18} />
                      <span className="text-sm">9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* First Reply */}
          {showReply && (
            <div className="relative space-y-6">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Heart className="text-pink-500 animate-pulse-heart" size={32} />
              </div>
              
              {/* Duchess Reply */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200/60 rounded-2xl p-6 shadow-2xl max-w-lg mx-auto animate-scale-in backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-foreground text-lg">theduchessofnursing</span>
                      <span className="text-muted-foreground text-sm">@duchesso... · 11 Aug</span>
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed mb-2">
                      Replying to <span className="text-blue-500">@favour_bode</span>
                    </p>
                    <p className="text-foreground text-lg leading-relaxed">
                      nursing students and fooling💔
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Reply */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200/60 rounded-2xl p-6 shadow-2xl max-w-lg mx-auto animate-scale-in backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-foreground text-lg">Tech nurse</span>
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground text-sm">@favour_bode</span>
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed mb-2">
                      Replying to <span className="text-pink-500">@duchessofnsg</span>
                    </p>
                    <p className="text-foreground text-xl font-bold leading-relaxed">
                      FOOLING IS A CALLING 🔥🙏
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-relaxed">
                  And that's how our story began... 💕✨
                </p>
                <p className="text-lg text-muted-foreground mt-2 font-medium">
                  One tweet, one reply, infinite love
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
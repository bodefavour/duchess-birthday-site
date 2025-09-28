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
      <div className="text-center max-w-5xl mx-auto">
        <div className="mb-12 animate-bounce">
          <div className="relative inline-block">
            <Twitter
              size={80}
              className="text-blue-500 mx-auto mb-6 drop-shadow-lg"
              strokeWidth={1.5}
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">✨</span>
            </div>
          </div>
          <h1 className="hero-title text-gradient-romantic mb-8">
            The Beginning 🌸
          </h1>
        </div>

        <div className="space-y-12">
          <p className="section-subtitle text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
            It all began with this tweet that changed everything... 💫
          </p>

          {/* Original Tweet */}
          {showTweet && (
            <div className="tweet-card p-6 max-w-2xl mx-auto animate-fade-in bg-white rounded-2xl border border-gray-200 shadow-md">
              <div className="flex items-start gap-5">
                <div className="avatar-tech w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0 bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xl">
                  T
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-bold text-foreground text-xl">
                      Tech_nurse
                    </span>
                    <div className="verified-badge w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-blue-500 text-white font-bold text-sm">
                      ✓
                    </div>
                    <span className="text-muted-foreground text-lg">
                      @favour_bode
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground text-lg">11 Aug</span>
                  </div>
                  <p className="text-foreground text-xl leading-relaxed mb-6 font-medium max-w-md break-words">
                    one girl just sent me 500k for being so tall <br />
                    i don die 😂😂
                  </p>
                  <div className="flex items-center gap-8 text-muted-foreground">
                    <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-pointer group">
                      <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                        <MessageSquare size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-lg font-medium">2</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer group">
                      <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
                        <Heart size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-lg font-medium">9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reply Chain */}
          {showReply && (
            <div className="relative space-y-8">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full shadow-xl animate-pulse-heart">
                  <Heart className="text-white" size={28} strokeWidth={2} />
                </div>
              </div>

              {/* Duchess Reply */}
              <div className="tweet-card-reply p-6 max-w-2xl mx-auto animate-scale-in bg-white rounded-2xl border border-gray-200 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="avatar-duchess w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0 bg-gradient-to-br from-pink-500 to-red-500 text-white font-bold text-xl">
                    D
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-bold text-foreground text-xl">
                        theduchessofnursing
                      </span>
                      <span className="text-muted-foreground text-lg">
                        @duchesso...
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground text-lg">
                        11 Aug
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg mb-3 font-medium">
                      Replying to{" "}
                      <span className="text-blue-500 font-semibold">
                        @favour_bode
                      </span>
                    </p>
                    <p className="text-foreground text-xl leading-relaxed font-medium max-w-md break-words">
                      nursing students and fooling💔
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Epic Reply */}
              <div className="tweet-card-yours p-6 max-w-2xl mx-auto animate-scale-in bg-white rounded-2xl border border-gray-200 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="avatar-tech w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0 bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xl">
                    T
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-bold text-foreground text-xl">
                        Tech nurse
                      </span>
                      <div className="verified-badge w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-blue-500 text-white font-bold text-sm">
                        ✓
                      </div>
                      <span className="text-muted-foreground text-lg">
                        @favour_bode
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg mb-3 font-medium">
                      Replying to{" "}
                      <span className="text-pink-500 font-semibold">
                        @duchessofnsg
                      </span>
                    </p>
                    <p className="text-foreground text-2xl font-black leading-relaxed tracking-wide max-w-md break-words">
                      FOOLING IS A CALLING 🔥🙏
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <div className="inline-block p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl border-3 border-pink-200/60 shadow-xl backdrop-blur-sm">
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-relaxed mb-2">
                    And that's how our story began... 💕✨
                  </p>
                  <p className="section-subtitle text-muted-foreground font-semibold">
                    One tweet, one reply, infinite love
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
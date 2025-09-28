import { useState, useEffect } from "react";
import { Twitter, Heart, MessageSquare, Repeat2 } from "lucide-react";

interface TwitterStageProps {
  onNext: () => void;
  isLastStage: boolean;
}

export const TwitterStage = ({ onNext }: TwitterStageProps) => {
  const [showTweet, setShowTweet] = useState(false);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTweet(true), 1000);
    const timer2 = setTimeout(() => setShowReply(true), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Reusable Tweet Component
  const Tweet = ({
    name,
    handle,
    date,
    text,
    replies,
    likes,
    retweets,
    replyingTo,
    accent,
  }: {
    name: string;
    handle: string;
    date: string;
    text: string;
    replies?: number;
    likes?: number;
    retweets?: number;
    replyingTo?: string;
    accent?: string;
  }) => (
    <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-6">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-sm ${
            accent || "bg-gradient-to-tr from-blue-500 to-purple-500"
          }`}
        >
          {name[0]}
        </div>

        {/* Tweet content */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900">{name}</span>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          <p className="text-gray-600 text-sm">@{handle}</p>

          {replyingTo && (
            <p className="text-gray-500 text-sm mt-1">
              Replying to <span className="text-blue-500">@{replyingTo}</span>
            </p>
          )}

          <p className="mt-2 text-gray-900 text-[15px] leading-snug whitespace-pre-line">
            {text}
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-3 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <MessageSquare size={16} /> {replies || 0}
            </span>
            <span className="flex items-center gap-1">
              <Repeat2 size={16} /> {retweets || 0}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={16} /> {likes || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="stage-container">
      <div className="text-center max-w-5xl mx-auto">
        {/* Intro Header */}
        <div className="mb-12">
          <Twitter
            size={60}
            className="text-blue-500 mx-auto mb-4 drop-shadow-sm"
            strokeWidth={1.5}
          />
          <h1 className="hero-title text-3xl font-bold text-gray-900 mb-4">
            The Beginning 🌸
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            It all started with a tweet that felt ordinary… but turned into
            something extraordinary.
          </p>
        </div>

        {/* Tweets */}
        <div className="space-y-8">
          {showTweet && (
            <Tweet
              name="Tech_nurse"
              handle="favour_bode"
              date="11 Aug"
              text={`one girl just sent me 500k for being so tall\n i don die 😂😂`}
              replies={2}
              likes={9}
              retweets={0}
            />
          )}

          {showReply && (
            <>
              <Tweet
                name="theduchessofnursing"
                handle="duchessofnsg"
                date="11 Aug"
                text="nursing students and fooling💔"
                replyingTo="favour_bode"
                likes={3}
              />
              <Tweet
                name="Tech_nurse"
                handle="favour_bode"
                date="11 Aug"
                text="FOOLING IS A CALLING 🔥🙏"
                replyingTo="duchessofnsg"
                likes={12}
              />

              {/* Romantic Footer */}
              <div className="text-center pt-8">
                <div className="inline-block p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200/60 shadow-sm">
                  <p className="text-lg font-semibold text-pink-600 leading-relaxed">
                    And that’s how our story began 💕
                  </p>
                  <p className="text-sm text-gray-500">
                    One tweet, one reply, infinite love.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
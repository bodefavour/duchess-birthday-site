import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

interface DMsStageProps {
  onNext: () => void;
  isLastStage: boolean;
}

interface ChatMessage {
  sender: "favour" | "tomi";
  text: string;
  delay: number;
}

export const DMsStage = ({ onNext }: DMsStageProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState<null | "favour" | "tomi">(null);

  const chatMessages: ChatMessage[] = [
    { sender: "favour", text: "DUCHESS OF NURSINGGGG!! 🔥", delay: 1000 },
    { sender: "favour", text: "It’s an honor to get into your DM ma 🙏🏽", delay: 2500 },
    { sender: "tomi", text: "hello, cheat 💔", delay: 4000 },
    { sender: "favour", text: "honor ke 😭", delay: 5500 },
    { sender: "favour", text: "Me cheat ke 😌🙏🏽 You wey I love with all my heart 🙏🏽", delay: 9000 },
    { sender: "tomi", text: "you just met me today 😭", delay: 10500 },
    { sender: "favour", text: "I’ve been monitoring your page since a while ma 🙏🏽", delay: 12000 },
    { sender: "tomi", text: "fr? 😭😂 since when?", delay: 13500 },
    { sender: "favour", text: "I just met you today, but our souls have been intertwined since ages ❤️", delay: 15000 },
    { sender: "favour", text: "Been a very long time… even before you started your fooling era 🙏🏽", delay: 17000 },
    { sender: "tomi", text: "'my fooling era'😭😂,i need to do better mehn", delay: 9000 },
    { sender: "tomi", text: "is this how you text ladies?😂", delay: 10500 },
    { sender: "favour", text: "Never, I don’t do that at all,My DM’s are always dry", delay: 12000 },
    { sender: "favour", text: "Do better ke, if you stop fooling wetin wan Dey make me smile???", delay: 13500 },
    { sender: "tomi", text: "i should believe you?😂", delay: 15000 },
    { sender: "favour", text: "smile at my intellectual tweets😂", delay: 17000 },
    { sender: "favour", text: "How many of them exists??😔", delay: 10500 },
    { sender: "favour", text: "Yes baby, I really don’t have anyone seh😭, Should I screenshot my DM?😭😂", delay: 12000 },
    { sender: "favour", text: "Scrolled through your Media to get a glimpse of you, but I could not find😭", delay: 13500 },
    { sender: "tomi", text: "close to zero😭", delay: 15000 },
    { sender: "tomi", text: "dont baby me yet, na so nursing men dey do", delay: 17000 },
    { sender: "tomi", text: "as how😭,pictures are plenty there nau", delay: 12000 },
    { sender: "favour", text: "Heyyyy babyyy", delay: 13500 },
    { sender: "tomi", text: "you don’t listen, do you?😭😂", delay: 15000 }
  ];

  useEffect(() => {
    chatMessages.forEach((message) => {
      // show typing first
      setTimeout(() => {
        setTyping(message.sender);
      }, message.delay - 600);

      // then replace with actual message
      setTimeout(() => {
        setTyping(null);
        setMessages((prev) => [...prev, message]);
      }, message.delay);
    });
  }, []);

  return (
    <div className="stage-container">
      <div className="text-center max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <MessageCircle
            size={64}
            className="text-pink-500 mx-auto mb-4 animate-pulse-heart"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-romantic mb-6">
            The First Spark ✨
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
          It started with a DM that was supposed to be playful… 
          but little did I know, it would change everything.
        </p>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg mx-auto p-6 min-h-[420px]">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-t-xl -mx-6 -mt-6 p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-600 font-medium">Direct Messages</span>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "favour" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-xs text-left animate-bubble-in ${
                    message.sender === "favour"
                      ? "bg-pink-500 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-snug">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div
                className={`flex ${
                  typing === "favour" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-xs text-left ${
                    typing === "favour"
                      ? "bg-pink-400 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-700 rounded-bl-none"
                  }`}
                >
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-current rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer message */}
          {messages.length >= chatMessages.length && (
            <div className="mt-6 text-center animate-fade-in">
              <p className="text-pink-600 font-medium italic">
                …those little chats weren’t little at all—  
                they were the start of something unforgettable 💖
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
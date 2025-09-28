import { useState, useEffect } from "react";
import { MessageCircle, Heart } from "lucide-react";

interface DMsStageProps {
  onNext: () => void;
  isLastStage: boolean;
}

export const DMsStage = ({ onNext }: DMsStageProps) => {
  const [messages, setMessages] = useState<Array<{ sender: 'favour' | 'tomi'; text: string; delay: number }>>([]);
  
  const chatMessages = [
    { sender: 'favour' as const, text: "Baby girl 💕", delay: 1000 },
    { sender: 'tomi' as const, text: "Hey there! 😊", delay: 2500 },
    { sender: 'favour' as const, text: "Your reply made my day brighter", delay: 4000 },
    { sender: 'tomi' as const, text: "Aww, you're so sweet! Tell me more about your tech chaos 😂", delay: 6000 },
    { sender: 'favour' as const, text: "I could talk to you for hours...", delay: 8000 },
    { sender: 'tomi' as const, text: "Then let's do exactly that 💫", delay: 10000 },
  ];

  useEffect(() => {
    chatMessages.forEach((message, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, message]);
      }, message.delay);
    });
  }, []);

  return (
    <div className="stage-container">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <MessageCircle size={64} className="text-pink-500 mx-auto mb-4 animate-pulse-heart" />
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-romantic mb-6">
            The First Spark ✨
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
          From that moment, I couldn't stop talking to you. Every word, every laugh, 
          every silly conversation brought us closer…
        </p>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg mx-auto p-6 min-h-[400px]">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-t-xl -mx-6 -mt-6 p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-600 font-medium">Messages</span>
            </div>
          </div>

          <div className="space-y-4 max-h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'favour' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`chat-bubble ${message.sender === 'favour' ? 'user' : ''} animate-bubble-in`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {messages.length >= chatMessages.length && (
            <div className="mt-6 text-center animate-fade-in">
              <p className="text-pink-600 font-medium italic">
                …until I realized—this wasn't just a chat anymore, 
                <br />it was the start of something beautiful. 💖
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
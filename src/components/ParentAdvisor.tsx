
import React, { useState, useRef, useEffect } from 'react';
import { askParentAdvisor } from '../services/geminiService';

export const ParentAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Hello! I'm the E-Bike Advisor. Do you have any questions or concerns about safety, costs, or the transition to an e-bike? I'm here to help." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const response = await askParentAdvisor(userText);
      setMessages(prev => [...prev, { role: 'bot', text: response || "I'm having trouble connecting, but I'm sure your child is ready to discuss this responsibly!" }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "I couldn't get a response right now, but please consider looking at the 'Safety Plan' section above!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold">A</div>
        <div>
          <h3 className="font-bold text-lg">Parent FAQ Advisor</h3>
          <p className="text-xs text-slate-400">Powered by Gemini AI</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="h-64 overflow-y-auto space-y-4 mb-6 pr-2 scrollbar-thin scrollbar-thumb-slate-700"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              m.role === 'user' ? 'bg-emerald-600' : 'bg-slate-800'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 p-3 rounded-2xl animate-pulse text-xs">Thinking...</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about safety, batteries, etc..."
          className="flex-1 bg-slate-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <button 
          disabled={isLoading}
          className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

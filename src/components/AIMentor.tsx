import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageCircle, X, Send, Lightbulb, Search, BookOpen, Shield, AlertTriangle } from 'lucide-react';
import { ChatMessage } from '../types';

interface AIMentorProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const AIMentor: React.FC<AIMentorProps> = ({ isOpen, onToggle }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm ARIA, your AI cybersecurity mentor. I'm here to help you learn and stay safe online. Ask me anything about cybersecurity - from basic password tips to advanced threat analysis!",
      isBot: true,
      timestamp: new Date(),
      category: 'general'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const cybersecurityKnowledge = {
    passwords: {
      keywords: ['password', 'passphrase', 'authentication', 'login', 'credential'],
      responses: [
        "Strong passwords should be at least 12 characters long and include a mix of uppercase, lowercase, numbers, and symbols. Consider using a passphrase like 'Coffee!Sunrise#2024' instead of complex random characters.",
        "Use a unique password for every account. Password managers like Bitwarden, 1Password, or LastPass can generate and store strong passwords for you.",
        "Enable two-factor authentication (2FA) wherever possible. Even if your password is compromised, 2FA provides an additional security layer.",
        "Avoid common passwords like '123456', 'password', or personal information like birthdays. These are easily guessed by attackers."
      ]
    },
    phishing: {
      keywords: ['phishing', 'email', 'scam', 'suspicious', 'link', 'attachment'],
      responses: [
        "Always verify the sender's email address carefully. Phishers often use domains that look similar to legitimate ones (like 'arnazon.com' instead of 'amazon.com').",
        "Hover over links before clicking to see the actual destination URL. Legitimate companies rarely ask for sensitive information via email.",
        "Be suspicious of urgent language like 'Act now!' or 'Your account will be suspended.' Scammers use urgency to pressure you into making mistakes.",
        "When in doubt, contact the organization directly through their official website or phone number, not through the email you received."
      ]
    },
    malware: {
      keywords: ['malware', 'virus', 'ransomware', 'trojan', 'spyware', 'infected'],
      responses: [
        "Keep your operating system and software updated. Many malware attacks exploit known vulnerabilities that have already been patched.",
        "Use reputable antivirus software and keep it updated. Windows Defender is actually quite good for basic protection.",
        "Be cautious with downloads, especially from unknown websites. Stick to official app stores and verified sources.",
        "Ransomware often spreads through email attachments and infected websites. Regular backups are your best defense against ransomware attacks."
      ]
    },
    privacy: {
      keywords: ['privacy', 'data', 'tracking', 'personal information', 'social media'],
      responses: [
        "Review your social media privacy settings regularly. Limit who can see your posts and personal information.",
        "Be mindful of what you share online. Information from multiple sources can be combined to build a detailed profile about you.",
        "Use privacy-focused browsers like Firefox or Brave, and consider using a VPN for additional privacy protection.",
        "Read privacy policies, especially for apps that access sensitive data like your location, contacts, or camera."
      ]
    },
    'incident-response': {
      keywords: ['breach', 'hacked', 'compromised', 'incident', 'response', 'attack'],
      responses: [
        "If you suspect you've been hacked, immediately change passwords for all important accounts, starting with email and banking.",
        "Document everything - take screenshots, note suspicious activities, and keep records. This helps with investigation and recovery.",
        "Contact your bank and credit card companies if financial information might be compromised. Consider placing a fraud alert on your credit reports.",
        "Report cybercrime to appropriate authorities like the FBI's IC3 (Internet Crime Complaint Center) or your local law enforcement."
      ]
    },
    general: {
      keywords: ['cybersecurity', 'security', 'safe', 'protect', 'tips', 'help'],
      responses: [
        "Cybersecurity is about layers of protection. No single solution is perfect, but combining multiple security measures significantly reduces your risk.",
        "Stay informed about current threats. Follow reputable cybersecurity news sources and be aware of trending scams and attack methods.",
        "Trust your instincts. If something feels suspicious or too good to be true, it probably is. Take time to verify before acting.",
        "Regular security hygiene is key: update software, use strong passwords, backup data, and be cautious with what you click and download."
      ]
    }
  };

  const getAIResponse = (userMessage: string): ChatMessage => {
    const lowerMessage = userMessage.toLowerCase();
    let category: ChatMessage['category'] = 'general';
    let responses: string[] = [];
    
    // Determine category and get relevant responses
    for (const [cat, data] of Object.entries(cybersecurityKnowledge)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        category = cat as ChatMessage['category'];
        responses = data.responses;
        break;
      }
    }
    
    // If no specific category found, use general responses
    if (responses.length === 0) {
      responses = cybersecurityKnowledge.general.responses;
    }
    
    // Select a random response
    const response = responses[Math.floor(Math.random() * responses.length)];
    
    // Add contextual follow-up suggestions
    const followUps = {
      passwords: ["Would you like to know about password managers?", "Want to learn about two-factor authentication?"],
      phishing: ["Should I explain how to identify phishing emails?", "Want to practice with some phishing examples?"],
      malware: ["Interested in learning about different types of malware?", "Want tips on safe browsing habits?"],
      privacy: ["Would you like privacy tips for specific platforms?", "Want to know about privacy tools?"],
      'incident-response': ["Need help with a specific security incident?", "Want to create an incident response plan?"],
      general: ["What specific cybersecurity topic interests you?", "Would you like to take a security assessment?"]
    };
    
    const suggestions = followUps[category] || followUps.general;
    const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    return {
      id: Date.now().toString(),
      text: `${response}\n\n💡 ${suggestion}`,
      isBot: true,
      timestamp: new Date(),
      category,
      confidence: 0.85,
      relatedTopics: Object.keys(cybersecurityKnowledge).filter(k => k !== category).slice(0, 3)
    };
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(message);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const quickQuestions = [
    { text: "How to create strong passwords?", icon: "🔒" },
    { text: "How to spot phishing emails?", icon: "🎣" },
    { text: "What to do if I'm hacked?", icon: "🚨" },
    { text: "How to protect my privacy?", icon: "🛡️" },
    { text: "How to avoid malware?", icon: "🦠" },
    { text: "General security tips?", icon: "💡" }
  ];

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* AI Mentor Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 z-50"
      >
        <Bot className="w-6 h-6" />
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        )}
      </button>

      {/* AI Mentor Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden max-h-[80vh] flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-white" />
              <div>
                <h3 className="font-bold text-white">ARIA</h3>
                <p className="text-xs text-purple-100">AI Cybersecurity Mentor</p>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.isBot
                      ? 'bg-gray-700 text-white'
                      : 'bg-cyan-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                  {msg.category && msg.isBot && (
                    <div className="mt-2 flex items-center space-x-1">
                      <span className="text-xs bg-purple-600 px-2 py-1 rounded">
                        {msg.category}
                      </span>
                      {msg.confidence && (
                        <span className="text-xs text-gray-300">
                          {Math.round(msg.confidence * 100)}% confident
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <p className="text-xs text-gray-400">Quick Questions:</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {quickQuestions.slice(0, 4).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question.text)}
                  className="bg-gray-700 p-2 rounded text-xs text-gray-300 hover:bg-gray-600 cursor-pointer transition-colors text-left"
                >
                  <span className="mr-1">{question.icon}</span>
                  {question.text}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about cybersecurity..."
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !message.trim()}
                className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
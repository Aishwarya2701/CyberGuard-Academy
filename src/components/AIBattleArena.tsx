import React, { useState, useEffect } from 'react';
import { Bot, Zap, Brain, Target, Shield, Sword, Timer, Trophy } from 'lucide-react';

interface AIBattleArenaProps {
  onClose: () => void;
  onBattleComplete: (result: 'victory' | 'defeat', xpEarned: number) => void;
}

export const AIBattleArena: React.FC<AIBattleArenaProps> = ({ onClose, onBattleComplete }) => {
  const [selectedOpponent, setSelectedOpponent] = useState<any>(null);
  const [battlePhase, setBattlePhase] = useState<'selection' | 'battle' | 'result'>('selection');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [aiHealth, setAiHealth] = useState(100);
  const [currentChallenge, setCurrentChallenge] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [battleLog, setBattleLog] = useState<string[]>([]);

  const aiOpponents = [
    {
      id: 'aria-shadow',
      name: 'ARIA Shadow',
      personality: 'Calculating and precise, learns from every mistake',
      difficulty: 3,
      specialization: 'Pattern Recognition',
      avatar: '🤖',
      taunts: [
        'Your patterns are predictable, human.',
        'I have analyzed 10,000 similar scenarios.',
        'Resistance is futile. I adapt faster than you learn.'
      ],
      battleType: 'pattern-recognition'
    },
    {
      id: 'quantum-mind',
      name: 'Quantum Mind',
      personality: 'Exists in multiple states simultaneously, unpredictable',
      difficulty: 7,
      specialization: 'Quantum Logic',
      avatar: '🌌',
      taunts: [
        'I exist in all possible attack vectors simultaneously.',
        'Your linear thinking cannot comprehend my strategies.',
        'In another dimension, I have already won.'
      ],
      battleType: 'quantum-crypto'
    },
    {
      id: 'neural-nexus',
      name: 'Neural Nexus',
      personality: 'Emotionally intelligent AI that manipulates through psychology',
      difficulty: 5,
      specialization: 'Social Engineering',
      avatar: '🧠',
      taunts: [
        'I know what you will do before you do.',
        'Your emotional responses are so... human.',
        'Trust is just another vulnerability to exploit.'
      ],
      battleType: 'social-engineering'
    }
  ];

  const challenges = {
    'pattern-recognition': [
      {
        question: 'Identify the malicious pattern in this network traffic sequence',
        pattern: ['GET /login', 'POST /login', 'GET /admin', 'GET /admin', 'GET /admin', 'POST /admin'],
        options: ['Normal user behavior', 'Brute force attack', 'SQL injection', 'DDoS attack'],
        correct: 1,
        explanation: 'Multiple failed admin access attempts indicate brute force'
      }
    ],
    'quantum-crypto': [
      {
        question: 'In quantum key distribution, what happens when an eavesdropper intercepts a photon?',
        options: [
          'Nothing, the communication continues normally',
          'The quantum state collapses and is detected',
          'The photon is duplicated',
          'The encryption becomes stronger'
        ],
        correct: 1,
        explanation: 'Quantum mechanics ensures that observation changes the state, revealing eavesdropping'
      }
    ],
    'social-engineering': [
      {
        question: 'An attacker calls claiming to be IT support and asks for your password. Best response?',
        options: [
          'Give them the password to be helpful',
          'Ask for their employee ID and verify through official channels',
          'Hang up immediately',
          'Give them a fake password'
        ],
        correct: 1,
        explanation: 'Always verify identity through independent channels before sharing sensitive information'
      }
    ]
  };

  useEffect(() => {
    if (battlePhase === 'battle' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && battlePhase === 'battle') {
      handleTimeUp();
    }
  }, [timeLeft, battlePhase]);

  const startBattle = (opponent: any) => {
    setSelectedOpponent(opponent);
    setBattlePhase('battle');
    setPlayerHealth(100);
    setAiHealth(100);
    setTimeLeft(30);
    setBattleLog([`Battle begins against ${opponent.name}!`]);
    generateChallenge(opponent.battleType);
  };

  const generateChallenge = (battleType: string) => {
    const challengePool = challenges[battleType as keyof typeof challenges];
    const challenge = challengePool[Math.floor(Math.random() * challengePool.length)];
    setCurrentChallenge(challenge);
  };

  const handleAnswer = (answerIndex: number) => {
    const isCorrect = answerIndex === currentChallenge.correct;
    const damage = isCorrect ? 25 : 0;
    const aiDamage = isCorrect ? 0 : 20;

    if (isCorrect) {
      setAiHealth(prev => Math.max(0, prev - damage));
      setBattleLog(prev => [...prev, '✅ Correct! You deal 25 damage to the AI.']);
    } else {
      setPlayerHealth(prev => Math.max(0, prev - aiDamage));
      setBattleLog(prev => [...prev, '❌ Incorrect! AI exploits your mistake for 20 damage.']);
    }

    // AI's turn
    setTimeout(() => {
      const aiSuccess = Math.random() > 0.3; // AI has 70% success rate
      if (aiSuccess) {
        setPlayerHealth(prev => Math.max(0, prev - 15));
        setBattleLog(prev => [...prev, `🤖 ${selectedOpponent.name}: "${selectedOpponent.taunts[Math.floor(Math.random() * selectedOpponent.taunts.length)]}" - 15 damage!`]);
      } else {
        setBattleLog(prev => [...prev, '🛡️ AI attack failed! Your defenses hold.']);
      }

      // Check for battle end
      if (aiHealth <= 25 || playerHealth <= 15) {
        setTimeout(() => {
          setBattlePhase('result');
          const victory = aiHealth <= 25;
          onBattleComplete(victory ? 'victory' : 'defeat', victory ? 500 : 100);
        }, 1000);
      } else {
        generateChallenge(selectedOpponent.battleType);
        setTimeLeft(30);
      }
    }, 2000);
  };

  const handleTimeUp = () => {
    setPlayerHealth(prev => Math.max(0, prev - 30));
    setBattleLog(prev => [...prev, '⏰ Time up! AI exploits your hesitation for 30 damage.']);
  };

  if (battlePhase === 'result') {
    const victory = aiHealth <= playerHealth;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-2xl w-full p-8 text-center">
          <div className={`text-6xl mb-4 ${victory ? 'text-green-400' : 'text-red-400'}`}>
            {victory ? '🏆' : '💀'}
          </div>
          <h2 className={`text-3xl font-bold mb-4 ${victory ? 'text-green-400' : 'text-red-400'}`}>
            {victory ? 'VICTORY!' : 'DEFEAT!'}
          </h2>
          <p className="text-gray-300 mb-6">
            {victory 
              ? `You have defeated ${selectedOpponent.name}! Your cybersecurity skills prove superior to artificial intelligence.`
              : `${selectedOpponent.name} has bested you this time. Study their tactics and return stronger.`
            }
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setBattlePhase('selection')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Battle Again
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Return to Academy
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (battlePhase === 'battle') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-hidden">
          {/* Battle Header */}
          <div className="bg-gradient-to-r from-red-900 to-blue-900 p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl">👤</div>
                  <div className="text-sm text-white">YOU</div>
                  <div className="w-32 bg-gray-700 rounded-full h-3 mt-1">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${playerHealth}%` }}
                    />
                  </div>
                  <div className="text-xs text-green-400">{playerHealth}/100</div>
                </div>
                
                <div className="text-4xl text-yellow-400 animate-pulse">⚔️</div>
                
                <div className="text-center">
                  <div className="text-2xl">{selectedOpponent.avatar}</div>
                  <div className="text-sm text-white">{selectedOpponent.name}</div>
                  <div className="w-32 bg-gray-700 rounded-full h-3 mt-1">
                    <div 
                      className="bg-red-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${aiHealth}%` }}
                    />
                  </div>
                  <div className="text-xs text-red-400">{aiHealth}/100</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Timer className="w-5 h-5" />
                  <span className="text-2xl font-bold">{timeLeft}</span>
                </div>
                <div className="text-sm text-gray-400">seconds</div>
              </div>
            </div>
          </div>

          {/* Battle Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Challenge */}
              <div className="lg:col-span-2">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{currentChallenge?.question}</h3>
                  
                  {currentChallenge?.pattern && (
                    <div className="mb-4 p-4 bg-black rounded font-mono text-green-400">
                      {currentChallenge.pattern.map((item: string, index: number) => (
                        <div key={index}>{item}</div>
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    {currentChallenge?.options.map((option: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full text-left p-4 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors"
                      >
                        <span className="font-bold text-cyan-400">{String.fromCharCode(65 + index)}.</span> {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Battle Log */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Battle Log
                </h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {battleLog.map((log, index) => (
                    <div key={index} className="text-sm text-gray-300 p-2 bg-gray-800 rounded">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <Bot className="w-8 h-8 mr-3 text-red-400" />
              AI Battle Arena
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-400 mt-2">Test your cybersecurity skills against advanced AI opponents</p>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiOpponents.map((opponent) => (
              <div
                key={opponent.id}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-gray-600 p-6 hover:border-red-500 transition-all cursor-pointer transform hover:scale-105"
                onClick={() => startBattle(opponent)}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{opponent.avatar}</div>
                  <h3 className="text-xl font-bold text-white">{opponent.name}</h3>
                  <p className="text-sm text-gray-400">{opponent.specialization}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Difficulty:</span>
                    <div className="flex space-x-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < opponent.difficulty ? 'bg-red-500' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded p-3">
                    <p className="text-xs text-gray-300 italic">"{opponent.personality}"</p>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center space-x-2">
                    <Sword className="w-5 h-5" />
                    <span>CHALLENGE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-900/50 to-blue-900/50 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
              Battle Rules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Combat System:</h4>
                <ul className="space-y-1">
                  <li>• Answer cybersecurity challenges correctly to deal damage</li>
                  <li>• Wrong answers leave you vulnerable to AI counterattacks</li>
                  <li>• Time limits add pressure - hesitation is weakness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Victory Conditions:</h4>
                <ul className="space-y-1">
                  <li>• Reduce AI health to 0 through superior knowledge</li>
                  <li>• Each AI has unique attack patterns and specializations</li>
                  <li>• Learn from defeats to improve your strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Timer, Target, Zap, Trophy } from 'lucide-react';
import { MiniGame } from '../types';

interface GamePlayerProps {
  game: MiniGame;
  onComplete: (score: number, xpEarned: number) => void;
  onExit: () => void;
}

export const GamePlayer: React.FC<GamePlayerProps> = ({ game, onComplete, onExit }) => {
  const [gameState, setGameState] = useState<any>({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameData, setGameData] = useState<any>(null);

  useEffect(() => {
    initializeGame();
  }, [game.type]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      endGame();
    }
    return () => clearTimeout(timer);
  }, [isGameActive, timeLeft]);

  const initializeGame = () => {
    switch (game.type) {
      case 'spot-the-phish':
        setGameData({
          emails: generatePhishingEmails(),
          currentEmailIndex: 0,
          correctAnswers: 0,
          totalEmails: 10
        });
        break;
      case 'secure-password':
        setGameData({
          requirements: ['8+ characters', 'uppercase', 'lowercase', 'numbers', 'symbols'],
          currentPassword: '',
          score: 0
        });
        break;
      case 'decode-breach':
        setGameData({
          logs: generateSecurityLogs(),
          currentLogIndex: 0,
          threatsFound: 0,
          totalLogs: 8
        });
        break;
      case 'network-defense':
        setGameData({
          attacks: generateNetworkAttacks(),
          currentAttackIndex: 0,
          blocked: 0,
          totalAttacks: 12
        });
        break;
      default:
        setGameData({});
    }
  };

  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setTimeLeft(game.difficulty === 'easy' ? 90 : game.difficulty === 'medium' ? 60 : 45);
  };

  const endGame = () => {
    setIsGameActive(false);
    const finalScore = calculateFinalScore();
    const xpEarned = Math.floor(finalScore * (game.xpReward / 1000));
    onComplete(finalScore, xpEarned);
  };

  const calculateFinalScore = () => {
    const baseScore = score;
    const timeBonus = timeLeft * 10;
    const difficultyMultiplier = game.difficulty === 'easy' ? 1 : game.difficulty === 'medium' ? 1.5 : 2;
    return Math.floor((baseScore + timeBonus) * difficultyMultiplier);
  };

  const generatePhishingEmails = () => [
    {
      id: 1,
      sender: 'security@bank-update.com',
      subject: 'URGENT: Verify your account immediately',
      content: 'Your account will be suspended unless you verify your information within 24 hours.',
      isPhishing: true,
      indicators: ['Urgent language', 'Suspicious domain', 'Threats of suspension']
    },
    {
      id: 2,
      sender: 'hr@yourcompany.com',
      subject: 'Team Meeting Tomorrow',
      content: 'Hi team, we have a meeting scheduled for tomorrow at 2 PM in conference room A.',
      isPhishing: false,
      indicators: ['Legitimate sender', 'Normal business content', 'No suspicious links']
    },
    {
      id: 3,
      sender: 'noreply@paypal-security.net',
      subject: 'Suspicious activity detected',
      content: 'We detected unusual activity. Click here to secure your account: http://paypal-verify.tk',
      isPhishing: true,
      indicators: ['Fake domain', 'Suspicious URL', 'Impersonation']
    }
  ];

  const generateSecurityLogs = () => [
    {
      id: 1,
      timestamp: '2024-01-15 14:23:45',
      source: '192.168.1.100',
      event: 'Multiple failed login attempts from unknown IP',
      severity: 'high',
      isThreat: true
    },
    {
      id: 2,
      timestamp: '2024-01-15 14:25:12',
      source: '192.168.1.50',
      event: 'User logged in successfully',
      severity: 'low',
      isThreat: false
    }
  ];

  const generateNetworkAttacks = () => [
    {
      id: 1,
      type: 'DDoS',
      source: '203.0.113.1',
      target: 'web-server-01',
      description: 'High volume of requests detected',
      shouldBlock: true
    },
    {
      id: 2,
      type: 'Normal Traffic',
      source: '192.168.1.100',
      target: 'file-server-01',
      description: 'Regular file access request',
      shouldBlock: false
    }
  ];

  const renderGame = () => {
    if (!isGameActive && !gameData) {
      return (
        <div className="text-center py-12">
          <div className="mb-6">
            <div className="text-6xl mb-4">{getGameIcon()}</div>
            <h2 className="text-2xl font-bold text-white mb-2">{game.name}</h2>
            <p className="text-gray-400 mb-6">{game.description}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-cyan-400 font-bold text-lg">+{game.xpReward}</div>
              <div className="text-sm text-gray-400">Max XP</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-yellow-400 font-bold text-lg">{game.difficulty}</div>
              <div className="text-sm text-gray-400">Difficulty</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-green-400 font-bold text-lg">{game.bestScore}</div>
              <div className="text-sm text-gray-400">Best Score</div>
            </div>
          </div>
          
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            Start Game
          </button>
        </div>
      );
    }

    switch (game.type) {
      case 'spot-the-phish':
        return renderPhishingGame();
      case 'secure-password':
        return renderPasswordGame();
      case 'decode-breach':
        return renderBreachGame();
      case 'network-defense':
        return renderNetworkGame();
      default:
        return <div className="text-center text-gray-400">Game not implemented yet</div>;
    }
  };

  const renderPhishingGame = () => {
    const currentEmail = gameData.emails[gameData.currentEmailIndex];
    if (!currentEmail) return <div>Loading...</div>;

    const handleAnswer = (isPhishing: boolean) => {
      const correct = isPhishing === currentEmail.isPhishing;
      if (correct) {
        setScore(prev => prev + 100);
        setGameData(prev => ({ ...prev, correctAnswers: prev.correctAnswers + 1 }));
      }
      
      setTimeout(() => {
        if (gameData.currentEmailIndex < gameData.emails.length - 1) {
          setGameData(prev => ({ ...prev, currentEmailIndex: prev.currentEmailIndex + 1 }));
        } else {
          endGame();
        }
      }, 1500);
    };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400">Email {gameData.currentEmailIndex + 1} of {gameData.emails.length}</span>
            <span className="text-sm text-cyan-400">Score: {score}</span>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <div className="border-b border-gray-600 pb-2 mb-4">
              <div className="text-sm text-gray-400">From: {currentEmail.sender}</div>
              <div className="text-sm text-gray-400">Subject: {currentEmail.subject}</div>
            </div>
            <div className="text-white">{currentEmail.content}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAnswer(false)}
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              ✓ Legitimate
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              ⚠ Phishing
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPasswordGame = () => {
    const [password, setPassword] = useState('');
    
    const checkRequirement = (req: string) => {
      switch (req) {
        case '8+ characters': return password.length >= 8;
        case 'uppercase': return /[A-Z]/.test(password);
        case 'lowercase': return /[a-z]/.test(password);
        case 'numbers': return /\d/.test(password);
        case 'symbols': return /[!@#$%^&*(),.?":{}|<>]/.test(password);
        default: return false;
      }
    };

    const calculatePasswordScore = () => {
      const metRequirements = gameData.requirements.filter(req => checkRequirement(req)).length;
      return (metRequirements / gameData.requirements.length) * 100;
    };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Create a Secure Password</h3>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password..."
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 mb-6"
          />
          
          <div className="space-y-3 mb-6">
            {gameData.requirements.map((req: string, index: number) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full ${checkRequirement(req) ? 'bg-green-500' : 'bg-gray-600'}`}>
                  {checkRequirement(req) && <span className="text-white text-xs">✓</span>}
                </div>
                <span className={checkRequirement(req) ? 'text-green-400' : 'text-gray-400'}>{req}</span>
              </div>
            ))}
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Password Strength</span>
              <span className="text-sm text-cyan-400">{Math.round(calculatePasswordScore())}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all ${
                  calculatePasswordScore() >= 80 ? 'bg-green-500' :
                  calculatePasswordScore() >= 60 ? 'bg-yellow-500' :
                  calculatePasswordScore() >= 40 ? 'bg-orange-500' : 'bg-red-500'
                }`}
                style={{ width: `${calculatePasswordScore()}%` }}
              />
            </div>
          </div>
          
          <button
            onClick={() => {
              const finalScore = calculatePasswordScore() * 10;
              setScore(finalScore);
              endGame();
            }}
            disabled={calculatePasswordScore() < 100}
            className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors"
          >
            Submit Password
          </button>
        </div>
      </div>
    );
  };

  const renderBreachGame = () => {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Analyze Security Logs</h3>
          <p className="text-gray-400 mb-6">Review each log entry and identify potential security threats</p>
          
          <div className="space-y-4">
            {gameData.logs.map((log: any, index: number) => (
              <div key={log.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{log.timestamp}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    log.severity === 'high' ? 'bg-red-600' :
                    log.severity === 'medium' ? 'bg-yellow-600' : 'bg-green-600'
                  }`}>
                    {log.severity}
                  </span>
                </div>
                <div className="text-white mb-2">Source: {log.source}</div>
                <div className="text-gray-300 mb-4">{log.event}</div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      if (log.isThreat) setScore(prev => prev + 150);
                      // Move to next log logic here
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 rounded transition-colors"
                  >
                    🚨 Threat
                  </button>
                  <button
                    onClick={() => {
                      if (!log.isThreat) setScore(prev => prev + 100);
                      // Move to next log logic here
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors"
                  >
                    ✅ Normal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderNetworkGame = () => {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Network Defense</h3>
          <p className="text-gray-400 mb-6">Monitor network traffic and block malicious activities</p>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <p className="text-gray-400">Network Defense game coming soon!</p>
          </div>
        </div>
      </div>
    );
  };

  const getGameIcon = () => {
    switch (game.type) {
      case 'spot-the-phish': return '🎣';
      case 'secure-password': return '🔒';
      case 'decode-breach': return '🔍';
      case 'network-defense': return '🛡️';
      default: return '🎮';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onExit}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Exit Game</span>
          </button>
          
          {isGameActive && (
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Timer className="w-5 h-5" />
                <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-cyan-400">
                <Target className="w-5 h-5" />
                <span>{score} points</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Game Content */}
      <div className="p-6">
        {renderGame()}
      </div>
    </div>
  );
};
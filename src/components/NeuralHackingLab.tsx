import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, AlertTriangle, Eye, Cpu, Activity } from 'lucide-react';

interface NeuralHackingLabProps {
  onClose: () => void;
  userLevel: number;
}

export const NeuralHackingLab: React.FC<NeuralHackingLabProps> = ({ onClose, userLevel }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  const [neuralActivity, setNeuralActivity] = useState(75);
  const [brainwavePattern, setBrainwavePattern] = useState<'alpha' | 'beta' | 'gamma' | 'theta' | 'quantum'>('beta');
  const [cognitiveLoad, setCognitiveLoad] = useState(45);

  const neuralChallenges = [
    {
      id: 'memory-extraction',
      name: 'Memory Extraction Protocol',
      description: 'Learn to safely extract and analyze digital memories from compromised neural interfaces',
      targetSystem: 'Human Neural Interface',
      difficulty: 'advanced',
      ethicalRating: 'questionable',
      realWorldRisk: 'high',
      unlocked: userLevel >= 30,
      techniques: ['Neural Pattern Analysis', 'Memory Decryption', 'Synaptic Mapping'],
      defenses: ['Memory Encryption', 'Neural Firewall', 'Consciousness Backup'],
      icon: '🧠'
    },
    {
      id: 'thought-interception',
      name: 'Thought Interception Defense',
      description: 'Protect against unauthorized access to thought patterns and mental processes',
      targetSystem: 'Thought Stream',
      difficulty: 'expert',
      ethicalRating: 'critical',
      realWorldRisk: 'extreme',
      unlocked: userLevel >= 40,
      techniques: ['Thought Pattern Recognition', 'Mental Firewall', 'Cognitive Encryption'],
      defenses: ['Thought Scrambling', 'Mental Noise Generation', 'Consciousness Shielding'],
      icon: '💭'
    },
    {
      id: 'neural-implant-security',
      name: 'Neural Implant Security',
      description: 'Secure neural implants against hacking attempts and unauthorized modifications',
      targetSystem: 'Neural Implant Network',
      difficulty: 'nightmare',
      ethicalRating: 'essential',
      realWorldRisk: 'life-threatening',
      unlocked: userLevel >= 50,
      techniques: ['Implant Authentication', 'Neural Cryptography', 'Biometric Verification'],
      defenses: ['Hardware Security Module', 'Neural Intrusion Detection', 'Emergency Shutdown'],
      icon: '🔌'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(prev => Math.max(20, Math.min(100, prev + (Math.random() - 0.5) * 15)));
      setCognitiveLoad(prev => Math.max(10, Math.min(90, prev + (Math.random() - 0.5) * 10)));
      
      const patterns: Array<'alpha' | 'beta' | 'gamma' | 'theta' | 'quantum'> = ['alpha', 'beta', 'gamma', 'theta', 'quantum'];
      setBrainwavePattern(patterns[Math.floor(Math.random() * patterns.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getBrainwaveColor = () => {
    switch (brainwavePattern) {
      case 'alpha': return 'text-green-400';
      case 'beta': return 'text-blue-400';
      case 'gamma': return 'text-purple-400';
      case 'theta': return 'text-yellow-400';
      case 'quantum': return 'text-pink-400';
    }
  };

  const getEthicalColor = (rating: string) => {
    switch (rating) {
      case 'essential': return 'text-green-400';
      case 'acceptable': return 'text-yellow-400';
      case 'questionable': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-lg border border-purple-500 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-purple-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
              <div>
                <h2 className="text-3xl font-bold text-white">Neural Hacking Laboratory</h2>
                <p className="text-purple-200">Advanced neural interface security training</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-4">
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-purple-400">{neuralActivity.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Neural Activity</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className={`text-lg font-bold ${getBrainwaveColor()}`}>
                {brainwavePattern.toUpperCase()}
              </div>
              <div className="text-sm text-gray-400">Brainwave Pattern</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-cyan-400">{cognitiveLoad.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Cognitive Load</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-400">SECURE</div>
              <div className="text-sm text-gray-400">Neural Firewall</div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neuralChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`relative bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-lg border border-purple-500/30 p-6 transition-all duration-300 cursor-pointer ${
                  challenge.unlocked ? 'hover:border-purple-400 hover:scale-105' : 'opacity-50'
                }`}
                onClick={() => challenge.unlocked && setSelectedChallenge(challenge)}
              >
                <div className="text-4xl mb-4 text-center">{challenge.icon}</div>
                
                <h3 className="text-xl font-bold text-white mb-2">{challenge.name}</h3>
                <p className="text-purple-200 text-sm mb-4">{challenge.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Target System:</span>
                    <span className="text-xs text-purple-300">{challenge.targetSystem}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Difficulty:</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      challenge.difficulty === 'advanced' ? 'bg-orange-600/20 text-orange-400' :
                      challenge.difficulty === 'expert' ? 'bg-red-600/20 text-red-400' :
                      'bg-purple-600/20 text-purple-400'
                    }`}>
                      {challenge.difficulty.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Ethical Rating:</span>
                    <span className={`text-xs ${getEthicalColor(challenge.ethicalRating)}`}>
                      {challenge.ethicalRating.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="border-t border-purple-500/30 pt-4">
                  <div className="text-xs text-gray-400 mb-2">Techniques:</div>
                  <div className="flex flex-wrap gap-1">
                    {challenge.techniques.slice(0, 2).map((technique, index) => (
                      <span key={index} className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">
                        {technique}
                      </span>
                    ))}
                    {challenge.techniques.length > 2 && (
                      <span className="text-xs text-gray-400">+{challenge.techniques.length - 2}</span>
                    )}
                  </div>
                </div>

                {!challenge.unlocked && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Level {challenge.difficulty === 'advanced' ? 30 : challenge.difficulty === 'expert' ? 40 : 50} Required</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-lg p-6 border border-red-500/30">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold text-lg">⚠️ ETHICAL WARNING ⚠️</span>
            </div>
            <p className="text-red-200 text-sm mb-3">
              Neural hacking techniques are extremely powerful and potentially dangerous. These skills should only be used for:
            </p>
            <ul className="text-orange-200 text-sm space-y-1">
              <li>• Authorized security testing and research</li>
              <li>• Protecting neural interfaces from malicious attacks</li>
              <li>• Digital forensics and incident response</li>
              <li>• Educational and defensive purposes only</li>
            </ul>
            <p className="text-red-300 text-xs mt-3">
              Unauthorized neural hacking is illegal and can cause permanent psychological damage.
            </p>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Cpu className="w-6 h-6 mr-2 text-purple-400" />
              Neural Security Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Memory Encryption</h4>
                <p className="text-sm text-gray-300">Protect stored memories and experiences from unauthorized access</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Thought Pattern Obfuscation</h4>
                <p className="text-sm text-gray-300">Mask cognitive patterns to prevent thought interception</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Neural Firewall</h4>
                <p className="text-sm text-gray-300">Real-time protection against neural intrusion attempts</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Consciousness Backup</h4>
                <p className="text-sm text-gray-300">Regular backups of consciousness state for recovery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
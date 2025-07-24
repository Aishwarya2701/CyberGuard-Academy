import React, { useState, useEffect } from 'react';
import { Atom, Zap, Brain, Infinity, Star, Lock, Play } from 'lucide-react';

interface QuantumChallengesProps {
  onClose: () => void;
  userLevel: number;
}

export const QuantumChallenges: React.FC<QuantumChallengesProps> = ({ onClose, userLevel }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  const [quantumState, setQuantumState] = useState<'superposition' | 'entangled' | 'collapsed'>('superposition');
  const [realityStability, setRealityStability] = useState(100);

  const quantumChallenges = [
    {
      id: 'quantum-crypto-1',
      name: 'Quantum Key Distribution',
      description: 'Master the art of unbreakable quantum cryptography using entangled photons',
      quantumConcept: 'Quantum Entanglement',
      difficulty: 'quantum-novice',
      realWorldApplication: 'Secure government communications, banking quantum networks',
      futureImplications: ['Post-quantum cryptography', 'Quantum internet', 'Unhackable communications'],
      unlocked: userLevel >= 15,
      rewards: { quantumXP: 1000, realityPoints: 50, dimensionalBadge: '🌌' }
    },
    {
      id: 'quantum-ai-defense',
      name: 'Quantum AI Threat Detection',
      description: 'Use quantum computing to detect AI-powered cyber attacks before they happen',
      quantumConcept: 'Quantum Superposition',
      difficulty: 'quantum-adept',
      realWorldApplication: 'Predictive cybersecurity, quantum machine learning',
      futureImplications: ['Quantum AI supremacy', 'Temporal threat detection', 'Reality-based security'],
      unlocked: userLevel >= 25,
      rewards: { quantumXP: 2500, realityPoints: 100, dimensionalBadge: '🔮' }
    },
    {
      id: 'multiverse-incident',
      name: 'Multiverse Security Incident',
      description: 'Respond to a security breach that spans multiple parallel universes',
      quantumConcept: 'Many-Worlds Interpretation',
      difficulty: 'quantum-master',
      realWorldApplication: 'Theoretical physics research, consciousness studies',
      futureImplications: ['Interdimensional security', 'Multiverse governance', 'Reality firewall'],
      unlocked: userLevel >= 50,
      rewards: { quantumXP: 10000, realityPoints: 500, dimensionalBadge: '🌀' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => {
        const states: Array<'superposition' | 'entangled' | 'collapsed'> = ['superposition', 'entangled', 'collapsed'];
        return states[Math.floor(Math.random() * states.length)];
      });
      setRealityStability(prev => Math.max(50, prev + (Math.random() - 0.5) * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getQuantumStateColor = () => {
    switch (quantumState) {
      case 'superposition': return 'text-blue-400';
      case 'entangled': return 'text-purple-400';
      case 'collapsed': return 'text-green-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-lg border border-purple-500 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-purple-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Atom className="w-8 h-8 text-purple-400 animate-spin" />
              <div>
                <h2 className="text-3xl font-bold text-white">Quantum Cybersecurity Challenges</h2>
                <p className="text-purple-200">Where reality meets cybersecurity</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className={`text-lg font-bold ${getQuantumStateColor()}`}>
                {quantumState.toUpperCase()}
              </div>
              <div className="text-sm text-gray-400">Quantum State</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-cyan-400">{realityStability.toFixed(1)}%</div>
              <div className="text-sm text-gray-400">Reality Stability</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-yellow-400">∞</div>
              <div className="text-sm text-gray-400">Possibilities</div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quantumChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-lg border border-purple-500/30 p-6 transition-all duration-300 cursor-pointer ${
                  challenge.unlocked ? 'hover:border-purple-400 hover:scale-105' : 'opacity-50'
                }`}
                onClick={() => challenge.unlocked && setSelectedChallenge(challenge)}
              >
                <div className="absolute top-2 right-2">
                  {challenge.unlocked ? (
                    <Play className="w-6 h-6 text-purple-400" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-500" />
                  )}
                </div>

                <div className="text-4xl mb-4">{challenge.rewards.dimensionalBadge}</div>
                
                <h3 className="text-xl font-bold text-white mb-2">{challenge.name}</h3>
                <p className="text-purple-200 text-sm mb-4">{challenge.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Quantum Concept:</span>
                    <span className="text-xs text-purple-300">{challenge.quantumConcept}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Difficulty:</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      challenge.difficulty === 'quantum-novice' ? 'bg-green-600/20 text-green-400' :
                      challenge.difficulty === 'quantum-adept' ? 'bg-yellow-600/20 text-yellow-400' :
                      challenge.difficulty === 'quantum-master' ? 'bg-red-600/20 text-red-400' :
                      'bg-purple-600/20 text-purple-400'
                    }`}>
                      {challenge.difficulty.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="border-t border-purple-500/30 pt-4">
                  <div className="text-xs text-gray-400 mb-2">Rewards:</div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-400">+{challenge.rewards.quantumXP} QXP</span>
                    <span className="text-cyan-400">+{challenge.rewards.realityPoints} RP</span>
                  </div>
                </div>

                {!challenge.unlocked && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Level {challenge.difficulty === 'quantum-novice' ? 15 : challenge.difficulty === 'quantum-adept' ? 25 : 50} Required</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-400" />
              Quantum Cybersecurity Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Quantum Entanglement Security</h4>
                <p className="text-sm text-gray-300">Information shared between entangled particles cannot be intercepted without detection</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Superposition Defense</h4>
                <p className="text-sm text-gray-300">Security states exist in multiple configurations simultaneously until observed</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Quantum Tunneling</h4>
                <p className="text-sm text-gray-300">Bypass traditional security barriers through quantum mechanical effects</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Observer Effect</h4>
                <p className="text-sm text-gray-300">The act of monitoring changes the security landscape itself</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-black/30 rounded-lg p-4 border border-yellow-500/30">
            <div className="flex items-center space-x-2 mb-2">
              <Infinity className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Reality Warning</span>
            </div>
            <p className="text-yellow-200 text-sm">
              Quantum challenges may cause temporary reality distortions. Side effects include: enhanced pattern recognition, 
              ability to see through social engineering attacks, spontaneous understanding of cryptographic principles, 
              and occasional glimpses into parallel cybersecurity timelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
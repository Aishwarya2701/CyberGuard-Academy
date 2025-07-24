import React, { useState, useEffect } from 'react';
import { Brain, Shield, Zap, Eye, Infinity, AlertTriangle, Activity } from 'lucide-react';

interface ConsciousnessSecurityCenterProps {
  onClose: () => void;
  userLevel: number;
}

export const ConsciousnessSecurityCenter: React.FC<ConsciousnessSecurityCenterProps> = ({ onClose, userLevel }) => {
  const [selectedProtocol, setSelectedProtocol] = useState<any>(null);
  const [consciousnessLevel, setConsciousnessLevel] = useState(75);
  const [mentalFirewall, setMentalFirewall] = useState(88);
  const [thoughtEncryption, setThoughtEncryption] = useState(92);
  const [psychicShielding, setPsychicShielding] = useState(67);

  const securityProtocols = [
    {
      id: 'thought-encryption',
      name: 'Thought Encryption Protocol',
      description: 'Encrypt mental processes and thoughts to prevent unauthorized access and mind reading',
      consciousnessLevel: 50,
      difficulty: 'advanced',
      protectionType: 'Mental Privacy',
      unlocked: userLevel >= 35,
      features: ['AES-256 Thought Encryption', 'Mental Key Exchange', 'Cognitive Steganography'],
      vulnerabilities: ['Brute Force Attacks', 'Social Engineering', 'Neural Backdoors'],
      icon: '🔐'
    },
    {
      id: 'memory-vault',
      name: 'Memory Vault Security',
      description: 'Secure sensitive memories in encrypted vaults with multi-factor authentication',
      consciousnessLevel: 60,
      difficulty: 'expert',
      protectionType: 'Memory Protection',
      unlocked: userLevel >= 40,
      features: ['Memory Encryption', 'Access Control Lists', 'Temporal Locks', 'Corruption Detection'],
      vulnerabilities: ['Memory Extraction', 'Temporal Attacks', 'Consciousness Fragmentation'],
      icon: '🗄️'
    },
    {
      id: 'mental-firewall',
      name: 'Mental Firewall System',
      description: 'Real-time protection against psychic intrusions and mental attacks',
      consciousnessLevel: 70,
      difficulty: 'nightmare',
      protectionType: 'Intrusion Prevention',
      unlocked: userLevel >= 45,
      features: ['Real-time Monitoring', 'Intrusion Detection', 'Automatic Response', 'Threat Intelligence'],
      vulnerabilities: ['Zero-day Psychic Attacks', 'Social Engineering', 'Insider Threats'],
      icon: '🛡️'
    },
    {
      id: 'consciousness-backup',
      name: 'Consciousness Backup Protocol',
      description: 'Create secure backups of consciousness state for recovery from mental attacks',
      consciousnessLevel: 80,
      difficulty: 'reality-bending',
      protectionType: 'Disaster Recovery',
      unlocked: userLevel >= 50,
      features: ['Full Consciousness Backup', 'Incremental Updates', 'Integrity Verification', 'Rapid Restore'],
      vulnerabilities: ['Backup Corruption', 'Identity Confusion', 'Temporal Paradoxes'],
      icon: '💾'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setConsciousnessLevel(prev => Math.max(40, Math.min(100, prev + (Math.random() - 0.5) * 10)));
      setMentalFirewall(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 8)));
      setThoughtEncryption(prev => Math.max(70, Math.min(100, prev + (Math.random() - 0.5) * 6)));
      setPsychicShielding(prev => Math.max(50, Math.min(100, prev + (Math.random() - 0.5) * 12)));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'advanced': return 'bg-orange-600/20 text-orange-400';
      case 'expert': return 'bg-red-600/20 text-red-400';
      case 'nightmare': return 'bg-purple-600/20 text-purple-400';
      case 'reality-bending': return 'bg-pink-600/20 text-pink-400';
      default: return 'bg-gray-600/20 text-gray-400';
    }
  };

  const getProtectionColor = (type: string) => {
    switch (type) {
      case 'Mental Privacy': return 'text-blue-400';
      case 'Memory Protection': return 'text-green-400';
      case 'Intrusion Prevention': return 'text-red-400';
      case 'Disaster Recovery': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-lg border border-indigo-500 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-indigo-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-indigo-400 animate-pulse" />
              <div>
                <h2 className="text-3xl font-bold text-white">Consciousness Security Center</h2>
                <p className="text-indigo-200">Advanced mental and consciousness protection protocols</p>
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
              <div className="text-lg font-bold text-indigo-400">{consciousnessLevel.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Consciousness Level</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-red-400">{mentalFirewall.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Mental Firewall</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-400">{thoughtEncryption.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Thought Encryption</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-purple-400">{psychicShielding.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Psychic Shielding</div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityProtocols.map((protocol) => (
              <div
                key={protocol.id}
                className={`relative bg-gradient-to-br from-indigo-800/30 to-purple-800/30 rounded-lg border border-indigo-500/30 p-6 transition-all duration-300 cursor-pointer ${
                  protocol.unlocked ? 'hover:border-indigo-400 hover:scale-105' : 'opacity-50'
                }`}
                onClick={() => protocol.unlocked && setSelectedProtocol(protocol)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{protocol.icon}</div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(protocol.difficulty)}`}>
                      {protocol.difficulty.replace('-', ' ').toUpperCase()}
                    </div>
                    <div className={`text-xs mt-1 ${getProtectionColor(protocol.protectionType)}`}>
                      {protocol.protectionType}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{protocol.name}</h3>
                <p className="text-indigo-200 text-sm mb-4">{protocol.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Consciousness Required:</span>
                    <span className="text-xs text-indigo-300">{protocol.consciousnessLevel}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(protocol.consciousnessLevel / 100) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="border-t border-indigo-500/30 pt-4">
                  <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                  <div className="space-y-1">
                    {protocol.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="text-xs text-indigo-300 flex items-center">
                        <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {!protocol.unlocked && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Level {protocol.difficulty === 'advanced' ? 35 : protocol.difficulty === 'expert' ? 40 : protocol.difficulty === 'nightmare' ? 45 : 50} Required</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-lg p-6 border border-red-500/30">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold text-lg">⚠️ CONSCIOUSNESS SAFETY WARNING ⚠️</span>
            </div>
            <p className="text-red-200 text-sm mb-3">
              Consciousness security protocols involve direct manipulation of mental processes. Potential risks include:
            </p>
            <ul className="text-orange-200 text-sm space-y-1">
              <li>• Memory fragmentation or loss</li>
              <li>• Personality dissociation</li>
              <li>• Temporal consciousness displacement</li>
              <li>• Reality perception distortion</li>
              <li>• Permanent psychological changes</li>
            </ul>
            <p className="text-red-300 text-xs mt-3">
              Always maintain consciousness backup before implementing security protocols.
            </p>
          </div>

          <div className="mt-6 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6 border border-indigo-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Infinity className="w-6 h-6 mr-2 text-indigo-400" />
              Consciousness Security Layers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-300">Surface Consciousness</h4>
                <p className="text-sm text-gray-300">Active thoughts and immediate awareness protection</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-300">Subconscious Layer</h4>
                <p className="text-sm text-gray-300">Hidden memories and suppressed information security</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-300">Deep Memory Core</h4>
                <p className="text-sm text-gray-300">Fundamental memories and personality structure</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-indigo-300">Quantum Consciousness</h4>
                <p className="text-sm text-gray-300">Quantum-level awareness and reality perception</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-purple-400" />
              Mental Threat Landscape
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/20 rounded p-4 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-sm font-bold text-white">Mind Reading</div>
                <div className="text-xs text-purple-300">Unauthorized thought access</div>
              </div>
              <div className="bg-black/20 rounded p-4 text-center">
                <div className="text-2xl mb-2">💭</div>
                <div className="text-sm font-bold text-white">Memory Theft</div>
                <div className="text-xs text-purple-300">Extraction of sensitive memories</div>
              </div>
              <div className="bg-black/20 rounded p-4 text-center">
                <div className="text-2xl mb-2">🎭</div>
                <div className="text-sm font-bold text-white">Identity Hijacking</div>
                <div className="text-xs text-purple-300">Consciousness impersonation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
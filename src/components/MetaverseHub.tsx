import React, { useState, useEffect } from 'react';
import { Headphones, Globe, Users, Zap, Eye, Brain, Infinity } from 'lucide-react';

interface MetaverseHubProps {
  onClose: () => void;
  userLevel: number;
}

export const MetaverseHub: React.FC<MetaverseHubProps> = ({ onClose, userLevel }) => {
  const [selectedWorld, setSelectedWorld] = useState<any>(null);
  const [immersionLevel, setImmersionLevel] = useState<'basic' | 'full-vr' | 'neural-link'>('basic');
  const [consciousnessIntegrity, setConsciousnessIntegrity] = useState(100);

  const metaverseWorlds = [
    {
      id: 'cyber-city',
      name: 'Neo-Tokyo Cyber District',
      description: 'A cyberpunk metropolis where hackers and defenders battle in neon-lit streets',
      virtualWorld: 'Cyberpunk 2177',
      immersionLevel: 'full-vr',
      collaborativeElements: ['Team-based hacking', 'Corporate espionage', 'Underground markets'],
      realWorldMirror: true,
      physicsEngine: 'enhanced',
      aiNPCs: true,
      persistentWorld: true,
      participants: 2847,
      threatLevel: 7,
      unlocked: userLevel >= 20,
      preview: '🌃'
    },
    {
      id: 'quantum-realm',
      name: 'Quantum Security Dimension',
      description: 'Navigate quantum superposition states to secure interdimensional networks',
      virtualWorld: 'Quantum Nexus',
      immersionLevel: 'neural-link',
      collaborativeElements: ['Quantum entanglement puzzles', 'Probability manipulation', 'Reality debugging'],
      realWorldMirror: false,
      physicsEngine: 'quantum',
      aiNPCs: true,
      persistentWorld: true,
      participants: 156,
      threatLevel: 10,
      unlocked: userLevel >= 40,
      preview: '🌌'
    },
    {
      id: 'corporate-towers',
      name: 'Fortune 500 Security Simulation',
      description: 'Infiltrate or defend massive corporate networks in realistic office environments',
      virtualWorld: 'Corporate Reality',
      immersionLevel: 'full-vr',
      collaborativeElements: ['Board room presentations', 'Social engineering', 'Incident response'],
      realWorldMirror: true,
      physicsEngine: 'realistic',
      aiNPCs: true,
      persistentWorld: false,
      participants: 1203,
      threatLevel: 5,
      unlocked: userLevel >= 15,
      preview: '🏢'
    },
    {
      id: 'consciousness-net',
      name: 'Digital Consciousness Network',
      description: 'Upload your mind to experience cybersecurity from an AI perspective',
      virtualWorld: 'Neural Matrix',
      immersionLevel: 'consciousness-transfer',
      collaborativeElements: ['Shared consciousness', 'Thought-based hacking', 'Memory forensics'],
      realWorldMirror: false,
      physicsEngine: 'reality-bending',
      aiNPCs: false,
      persistentWorld: true,
      participants: 42,
      threatLevel: 15,
      unlocked: userLevel >= 60,
      preview: '🧠'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setConsciousnessIntegrity(prev => {
        const change = (Math.random() - 0.5) * 5;
        return Math.max(50, Math.min(100, prev + change));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getImmersionColor = (level: string) => {
    switch (level) {
      case 'basic': return 'text-green-400';
      case 'full-vr': return 'text-blue-400';
      case 'neural-link': return 'text-purple-400';
      case 'consciousness-transfer': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getThreatLevelColor = (level: number) => {
    if (level <= 3) return 'text-green-400';
    if (level <= 6) return 'text-yellow-400';
    if (level <= 10) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-lg border border-cyan-500 max-w-7xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Headphones className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div>
                <h2 className="text-3xl font-bold text-white">Metaverse Security Hub</h2>
                <p className="text-cyan-200">Immersive cybersecurity training in virtual worlds</p>
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
              <div className={`text-lg font-bold ${getImmersionColor(immersionLevel)}`}>
                {immersionLevel.replace('-', ' ').toUpperCase()}
              </div>
              <div className="text-sm text-gray-400">Immersion Level</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-400">{consciousnessIntegrity.toFixed(1)}%</div>
              <div className="text-sm text-gray-400">Consciousness Integrity</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-purple-400">4,248</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-yellow-400">∞</div>
              <div className="text-sm text-gray-400">Possibilities</div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metaverseWorlds.map((world) => (
              <div
                key={world.id}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-cyan-500/30 p-6 transition-all duration-300 cursor-pointer ${
                  world.unlocked ? 'hover:border-cyan-400 hover:scale-105' : 'opacity-50'
                }`}
                onClick={() => world.unlocked && setSelectedWorld(world)}
              >
                <div className="absolute top-4 right-4 text-3xl">
                  {world.preview}
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{world.name}</h3>
                  <p className="text-cyan-200 text-sm mb-3">{world.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Immersion:</span>
                      <span className={`font-medium ${getImmersionColor(world.immersionLevel)}`}>
                        {world.immersionLevel.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Threat Level:</span>
                      <span className={`font-medium ${getThreatLevelColor(world.threatLevel)}`}>
                        {world.threatLevel}/15
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Active Users:</span>
                      <span className="text-white">{world.participants.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-cyan-300 mb-2">Collaborative Elements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {world.collaborativeElements.slice(0, 2).map((element, index) => (
                      <span key={index} className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded">
                        {element}
                      </span>
                    ))}
                    {world.collaborativeElements.length > 2 && (
                      <span className="text-xs text-gray-400">+{world.collaborativeElements.length - 2} more</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {world.realWorldMirror && (
                      <div className="w-2 h-2 bg-green-400 rounded-full" title="Real-world mirror" />
                    )}
                    {world.aiNPCs && (
                      <div className="w-2 h-2 bg-blue-400 rounded-full" title="AI NPCs" />
                    )}
                    {world.persistentWorld && (
                      <div className="w-2 h-2 bg-purple-400 rounded-full" title="Persistent world" />
                    )}
                  </div>

                  {world.unlocked ? (
                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      Enter World
                    </button>
                  ) : (
                    <div className="text-xs text-gray-500">
                      Level {world.id === 'consciousness-net' ? 60 : world.id === 'quantum-realm' ? 40 : world.id === 'cyber-city' ? 20 : 15} Required
                    </div>
                  )}
                </div>

                {!world.unlocked && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Neural Interface Locked</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-purple-400" />
                Immersion Levels
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-400">Basic VR</span>
                  <span className="text-sm text-gray-400">Headset + Controllers</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400">Full VR</span>
                  <span className="text-sm text-gray-400">Haptic Suit + Neural Feedback</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400">Neural Link</span>
                  <span className="text-sm text-gray-400">Direct Brain Interface</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-400">Consciousness Transfer</span>
                  <span className="text-sm text-gray-400">Full Mind Upload</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-cyan-400" />
                Safety Protocols
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Consciousness backup every 5 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Reality anchor prevents total immersion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span>Emergency extraction in 0.3 seconds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Memory integrity verification</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-lg p-6 border border-red-500/30">
            <div className="flex items-center space-x-2 mb-4">
              <Infinity className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold text-lg">⚠️ REALITY DISCLAIMER ⚠️</span>
            </div>
            <p className="text-red-200 text-sm mb-3">
              Metaverse cybersecurity training may cause: Enhanced spatial reasoning, ability to perceive 
              network topologies in 3D space, temporary synesthesia where you can "see" data flows, 
              and occasional difficulty distinguishing between virtual and physical security threats.
            </p>
            <p className="text-orange-200 text-xs">
              Side effects of consciousness transfer include: Temporary omniscience regarding network 
              vulnerabilities, ability to communicate directly with AI systems, and brief moments of 
              existing in multiple virtual dimensions simultaneously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
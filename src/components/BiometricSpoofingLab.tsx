import React, { useState, useEffect } from 'react';
import { Fingerprint, Eye, Mic, Heart, User, Shield, AlertTriangle, Camera } from 'lucide-react';

interface BiometricSpoofingLabProps {
  onClose: () => void;
  userLevel: number;
}

export const BiometricSpoofingLab: React.FC<BiometricSpoofingLabProps> = ({ onClose, userLevel }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  const [biometricSecurity, setBiometricSecurity] = useState(85);
  const [spoofingAttempts, setSpoofingAttempts] = useState(0);
  const [detectionRate, setDetectionRate] = useState(92);

  const biometricChallenges = [
    {
      id: 'fingerprint-spoofing',
      name: 'Fingerprint Spoofing Defense',
      description: 'Learn to detect and prevent fingerprint spoofing attacks using advanced materials and techniques',
      biometricType: 'Fingerprint',
      difficulty: 'intermediate',
      realWorldVulnerability: 'High - silicone molds, lifted prints',
      unlocked: userLevel >= 20,
      spoofingMethods: ['Silicone Molds', 'Lifted Prints', '3D Printing', 'Gelatin Replicas'],
      detectionMethods: ['Liveness Detection', 'Temperature Sensing', 'Blood Flow Analysis', 'Capacitive Sensing'],
      icon: '👆'
    },
    {
      id: 'facial-recognition-bypass',
      name: 'Facial Recognition Security',
      description: 'Understand and defend against facial recognition bypass techniques including deepfakes',
      biometricType: 'Facial Recognition',
      difficulty: 'advanced',
      realWorldVulnerability: 'Critical - photos, videos, deepfakes',
      unlocked: userLevel >= 25,
      spoofingMethods: ['Photo Attacks', 'Video Replay', 'Deepfake Generation', '3D Face Models'],
      detectionMethods: ['3D Depth Analysis', 'Micro-expression Detection', 'Infrared Imaging', 'Challenge-Response'],
      icon: '👤'
    },
    {
      id: 'voice-authentication-security',
      name: 'Voice Authentication Defense',
      description: 'Protect voice authentication systems against AI-generated voice cloning and replay attacks',
      biometricType: 'Voice Recognition',
      difficulty: 'expert',
      realWorldVulnerability: 'Extreme - AI voice cloning, recordings',
      unlocked: userLevel >= 35,
      spoofingMethods: ['Voice Cloning AI', 'Audio Replay', 'Voice Conversion', 'Synthetic Speech'],
      detectionMethods: ['Vocal Tract Analysis', 'Breathing Pattern Detection', 'Background Noise Analysis', 'Real-time Challenge'],
      icon: '🎤'
    },
    {
      id: 'iris-scanning-security',
      name: 'Iris Scanning Protection',
      description: 'Secure iris scanning systems against high-resolution photo attacks and contact lens spoofing',
      biometricType: 'Iris Recognition',
      difficulty: 'expert',
      realWorldVulnerability: 'Medium - high-res photos, contact lenses',
      unlocked: userLevel >= 40,
      spoofingMethods: ['High-Resolution Photos', 'Printed Iris Patterns', 'Contact Lens Overlays', 'Glass Eye Replicas'],
      detectionMethods: ['Pupil Response Testing', 'Infrared Reflection Analysis', 'Eye Movement Tracking', 'Corneal Reflection'],
      icon: '👁️'
    },
    {
      id: 'dna-authentication',
      name: 'DNA Authentication Security',
      description: 'Explore the future of DNA-based authentication and its potential vulnerabilities',
      biometricType: 'DNA Sequence',
      difficulty: 'nightmare',
      realWorldVulnerability: 'Low - but growing with genetic engineering',
      unlocked: userLevel >= 50,
      spoofingMethods: ['Synthetic DNA', 'Genetic Engineering', 'DNA Contamination', 'Sample Substitution'],
      detectionMethods: ['Multi-locus Testing', 'Contamination Detection', 'Chain of Custody', 'Real-time Sequencing'],
      icon: '🧬'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBiometricSecurity(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 8)));
      setDetectionRate(prev => Math.max(75, Math.min(99, prev + (Math.random() - 0.5) * 5)));
      setSpoofingAttempts(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVulnerabilityColor = (vulnerability: string) => {
    if (vulnerability.includes('High') || vulnerability.includes('Critical') || vulnerability.includes('Extreme')) {
      return 'text-red-400';
    } else if (vulnerability.includes('Medium')) {
      return 'text-yellow-400';
    } else {
      return 'text-green-400';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'intermediate': return 'bg-yellow-600/20 text-yellow-400';
      case 'advanced': return 'bg-orange-600/20 text-orange-400';
      case 'expert': return 'bg-red-600/20 text-red-400';
      case 'nightmare': return 'bg-purple-600/20 text-purple-400';
      default: return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-lg border border-cyan-500 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Fingerprint className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div>
                <h2 className="text-3xl font-bold text-white">Biometric Spoofing Laboratory</h2>
                <p className="text-cyan-200">Advanced biometric security and anti-spoofing training</p>
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
              <div className="text-lg font-bold text-cyan-400">{biometricSecurity.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Security Level</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-400">{detectionRate.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Detection Rate</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-red-400">{spoofingAttempts}</div>
              <div className="text-sm text-gray-400">Spoof Attempts</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-purple-400">5</div>
              <div className="text-sm text-gray-400">Biometric Types</div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biometricChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`relative bg-gradient-to-br from-cyan-800/30 to-blue-800/30 rounded-lg border border-cyan-500/30 p-6 transition-all duration-300 cursor-pointer ${
                  challenge.unlocked ? 'hover:border-cyan-400 hover:scale-105' : 'opacity-50'
                }`}
                onClick={() => challenge.unlocked && setSelectedChallenge(challenge)}
              >
                <div className="text-4xl mb-4 text-center">{challenge.icon}</div>
                
                <h3 className="text-xl font-bold text-white mb-2">{challenge.name}</h3>
                <p className="text-cyan-200 text-sm mb-4">{challenge.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Biometric Type:</span>
                    <span className="text-xs text-cyan-300">{challenge.biometricType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Difficulty:</span>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Vulnerability:</span>
                    <span className={`text-xs ${getVulnerabilityColor(challenge.realWorldVulnerability)}`}>
                      {challenge.realWorldVulnerability.split(' - ')[0]}
                    </span>
                  </div>
                </div>

                <div className="border-t border-cyan-500/30 pt-4">
                  <div className="text-xs text-gray-400 mb-2">Spoofing Methods:</div>
                  <div className="flex flex-wrap gap-1">
                    {challenge.spoofingMethods.slice(0, 2).map((method, index) => (
                      <span key={index} className="text-xs bg-red-600/20 text-red-300 px-2 py-1 rounded">
                        {method}
                      </span>
                    ))}
                    {challenge.spoofingMethods.length > 2 && (
                      <span className="text-xs text-gray-400">+{challenge.spoofingMethods.length - 2}</span>
                    )}
                  </div>
                </div>

                {!challenge.unlocked && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Level {challenge.difficulty === 'intermediate' ? 20 : challenge.difficulty === 'advanced' ? 25 : challenge.difficulty === 'expert' ? 35 : 50} Required</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-lg p-6 border border-yellow-500/30">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-lg">⚠️ ETHICAL GUIDELINES ⚠️</span>
            </div>
            <p className="text-yellow-200 text-sm mb-3">
              Biometric spoofing knowledge should only be used for legitimate security purposes:
            </p>
            <ul className="text-orange-200 text-sm space-y-1">
              <li>• Security testing and vulnerability assessment</li>
              <li>• Developing anti-spoofing countermeasures</li>
              <li>• Educational and research purposes</li>
              <li>• Authorized penetration testing</li>
            </ul>
            <p className="text-red-300 text-xs mt-3">
              Unauthorized biometric spoofing is illegal and violates privacy rights.
            </p>
          </div>

          <div className="mt-6 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-lg p-6 border border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-cyan-400" />
              Anti-Spoofing Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-cyan-300">Liveness Detection</h4>
                <p className="text-sm text-gray-300">Verify that biometric samples come from living subjects</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-cyan-300">Multi-Modal Authentication</h4>
                <p className="text-sm text-gray-300">Combine multiple biometric factors for enhanced security</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-cyan-300">Challenge-Response Systems</h4>
                <p className="text-sm text-gray-300">Dynamic challenges that are difficult to spoof</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-cyan-300">Behavioral Biometrics</h4>
                <p className="text-sm text-gray-300">Analyze unique behavioral patterns and habits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
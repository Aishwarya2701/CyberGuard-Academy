import React, { useState, useEffect } from 'react';
import { Clock, Shield, Zap, AlertTriangle, Infinity, Activity, Eye } from 'lucide-react';

interface TimelineSecurityHubProps {
  onClose: () => void;
  userLevel: number;
}

export const TimelineSecurityHub: React.FC<TimelineSecurityHubProps> = ({ onClose, userLevel }) => {
  const [selectedIncident, setSelectedIncident] = useState<any>(null);
  const [timelineStability, setTimelineStability] = useState(87);
  const [paradoxRisk, setParadoxRisk] = useState(23);
  const [temporalAnomalies, setTemporalAnomalies] = useState(5);
  const [realityAnchor, setRealityAnchor] = useState(94);

  const timelineIncidents = [
    {
      id: 'paradox-prevention',
      name: 'Paradox Prevention Protocol',
      description: 'Prevent temporal paradoxes that could destabilize the entire timeline',
      affectedTimelines: ['Prime Timeline', 'Alpha-7', 'Beta-3'],
      severity: 'critical',
      paradoxRisk: 85,
      unlocked: userLevel >= 40,
      resolutionMethods: ['Temporal Isolation', 'Causal Loop Repair', 'Timeline Merge'],
      preventionStrategies: ['Paradox Detection', 'Temporal Firewall', 'Causal Monitoring'],
      icon: '⚠️'
    },
    {
      id: 'timeline-breach',
      name: 'Timeline Breach Response',
      description: 'Respond to unauthorized access and manipulation of alternate timelines',
      affectedTimelines: ['Gamma-12', 'Delta-9', 'Epsilon-1'],
      severity: 'high',
      paradoxRisk: 67,
      unlocked: userLevel >= 35,
      resolutionMethods: ['Timeline Quarantine', 'Temporal Patch', 'Reality Restoration'],
      preventionStrategies: ['Access Control', 'Timeline Monitoring', 'Intrusion Detection'],
      icon: '🚪'
    },
    {
      id: 'temporal-virus',
      name: 'Temporal Virus Containment',
      description: 'Contain and eliminate viruses that spread across multiple timelines',
      affectedTimelines: ['All Known Timelines'],
      severity: 'apocalyptic',
      paradoxRisk: 95,
      unlocked: userLevel >= 50,
      resolutionMethods: ['Temporal Antivirus', 'Timeline Isolation', 'Reality Reboot'],
      preventionStrategies: ['Temporal Scanning', 'Cross-Timeline Firewall', 'Quantum Encryption'],
      icon: '🦠'
    },
    {
      id: 'causal-loop-attack',
      name: 'Causal Loop Attack Defense',
      description: 'Defend against attacks that create infinite causal loops to crash reality',
      affectedTimelines: ['Prime Timeline'],
      severity: 'reality-ending',
      paradoxRisk: 99,
      unlocked: userLevel >= 60,
      resolutionMethods: ['Loop Breaking', 'Causal Restructure', 'Timeline Reset'],
      preventionStrategies: ['Loop Detection', 'Causal Analysis', 'Temporal Hardening'],
      icon: '🔄'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimelineStability(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 8)));
      setParadoxRisk(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 15)));
      setTemporalAnomalies(prev => Math.max(0, prev + Math.floor((Math.random() - 0.7) * 3)));
      setRealityAnchor(prev => Math.max(70, Math.min(100, prev + (Math.random() - 0.5) * 6)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      case 'apocalyptic': return 'text-purple-400';
      case 'reality-ending': return 'text-pink-400';
      default: return 'text-yellow-400';
    }
  };

  const getParadoxRiskColor = (risk: number) => {
    if (risk >= 90) return 'text-pink-400';
    if (risk >= 70) return 'text-red-400';
    if (risk >= 50) return 'text-orange-400';
    return 'text-yellow-400';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-lg border border-purple-500 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-purple-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-purple-400 animate-spin" />
              <div>
                <h2 className="text-3xl font-bold text-white">Timeline Security Hub</h2>
                <p className="text-purple-200">Temporal security and paradox prevention center</p>
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
              <div className="text-lg font-bold text-green-400">{timelineStability.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Timeline Stability</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className={`text-lg font-bold ${getParadoxRiskColor(paradoxRisk)}`}>{paradoxRisk.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Paradox Risk</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-yellow-400">{temporalAnomalies}</div>
              <div className="text-sm text-gray-400">Temporal Anomalies</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-cyan-400">{realityAnchor.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Reality Anchor</div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timelineIncidents.map((incident) => (
              <div
                key={incident.id}
                className={`relative bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-lg border border-purple-500/30 p-6 transition-all duration-300 cursor-pointer ${
                  incident.unlocked ? 'hover:border-purple-400 hover:scale-105' : 'opacity-50'
                }`}
                onClick={() => incident.unlocked && setSelectedIncident(incident)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{incident.icon}</div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(incident.severity)} bg-black/20`}>
                      {incident.severity.replace('-', ' ').toUpperCase()}
                    </div>
                    <div className={`text-xs mt-1 ${getParadoxRiskColor(incident.paradoxRisk)}`}>
                      {incident.paradoxRisk}% Paradox Risk
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{incident.name}</h3>
                <p className="text-purple-200 text-sm mb-4">{incident.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-400">Affected Timelines:</div>
                  <div className="flex flex-wrap gap-1">
                    {incident.affectedTimelines.slice(0, 2).map((timeline, index) => (
                      <span key={index} className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">
                        {timeline}
                      </span>
                    ))}
                    {incident.affectedTimelines.length > 2 && (
                      <span className="text-xs text-gray-400">+{incident.affectedTimelines.length - 2} more</span>
                    )}
                  </div>
                </div>

                <div className="border-t border-purple-500/30 pt-4">
                  <div className="text-xs text-gray-400 mb-2">Resolution Methods:</div>
                  <div className="space-y-1">
                    {incident.resolutionMethods.slice(0, 2).map((method, index) => (
                      <div key={index} className="text-xs text-purple-300 flex items-center">
                        <span className="w-1 h-1 bg-purple-400 rounded-full mr-2" />
                        {method}
                      </div>
                    ))}
                  </div>
                </div>

                {!incident.unlocked && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Level {incident.severity === 'high' ? 35 : incident.severity === 'critical' ? 40 : incident.severity === 'apocalyptic' ? 50 : 60} Required</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-900/50 to-pink-900/50 rounded-lg p-6 border border-red-500/30">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold text-lg">⚠️ TEMPORAL HAZARD WARNING ⚠️</span>
            </div>
            <p className="text-red-200 text-sm mb-3">
              Timeline manipulation carries extreme risks to reality itself. Potential consequences include:
            </p>
            <ul className="text-orange-200 text-sm space-y-1">
              <li>• Complete timeline collapse and erasure</li>
              <li>• Paradox-induced reality fragmentation</li>
              <li>• Causal loop entrapment</li>
              <li>• Temporal consciousness displacement</li>
              <li>• Universal causality breakdown</li>
            </ul>
            <p className="text-red-300 text-xs mt-3">
              Always maintain reality anchor at 90%+ before timeline operations.
            </p>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-lg p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Infinity className="w-6 h-6 mr-2 text-purple-400" />
              Timeline Security Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Causal Integrity</h4>
                <p className="text-sm text-gray-300">Maintain cause-and-effect relationships across timelines</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Paradox Prevention</h4>
                <p className="text-sm text-gray-300">Detect and prevent timeline-threatening paradoxes</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Temporal Isolation</h4>
                <p className="text-sm text-gray-300">Quarantine compromised timelines to prevent spread</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300">Reality Anchoring</h4>
                <p className="text-sm text-gray-300">Maintain stable reference points across all timelines</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 rounded-lg p-6 border border-indigo-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-indigo-400" />
              Active Timeline Monitoring
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-black/20 rounded p-4 text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-sm font-bold text-white">Prime Timeline</div>
                <div className="text-xs text-green-400">Stable</div>
              </div>
              <div className="bg-black/20 rounded p-4 text-center">
                <div className="text-2xl mb-2">🌎</div>
                <div className="text-sm font-bold text-white">Alpha-7</div>
                <div className="text-xs text-yellow-400">Fluctuating</div>
              </div>
              <div className="bg-black/20 rounded p-4 text-center">
                <div className="text-2xl mb-2">🌏</div>
                <div className="text-sm font-bold text-white">Beta-3</div>
                <div className="text-xs text-orange-400">Unstable</div>
              </div>
              <div className="bg-black/20 rounded p-4 text-center">
                <div className="text-2xl mb-2">🌌</div>
                <div className="text-sm font-bold text-white">Gamma-12</div>
                <div className="text-xs text-red-400">Critical</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
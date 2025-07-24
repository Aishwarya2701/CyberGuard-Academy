import React, { useState } from 'react';
import { Server, Users, Clock, Target, Play, Lock, Zap } from 'lucide-react';
import { CyberRange } from '../types';

interface CyberRangeHubProps {
  ranges: CyberRange[];
  onClose: () => void;
  userLevel: number;
}

export const CyberRangeHub: React.FC<CyberRangeHubProps> = ({ ranges, onClose, userLevel }) => {
  const [selectedRange, setSelectedRange] = useState<CyberRange | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-400/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'advanced': return 'text-orange-400 bg-orange-400/20';
      case 'expert': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'network': return '🌐';
      case 'web-app': return '🕸️';
      case 'forensics': return '🔍';
      case 'malware': return '🦠';
      case 'social-eng': return '🎭';
      default: return '💻';
    }
  };

  const isRangeAccessible = (range: CyberRange) => {
    const levelRequirement = {
      'beginner': 1,
      'intermediate': 3,
      'advanced': 6,
      'expert': 10
    };
    return userLevel >= levelRequirement[range.difficulty];
  };

  if (selectedRange) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{selectedRange.name}</h2>
              <button
                onClick={() => setSelectedRange(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Environment Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400">Operating System:</span>
                      <span className="text-white ml-2">{selectedRange.environment.os}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Network:</span>
                      <span className="text-white ml-2">{selectedRange.environment.network}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Applications:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedRange.environment.applications.map((app, index) => (
                          <span key={index} className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Available Tools</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedRange.tools.map((tool, index) => (
                      <div key={index} className="bg-gray-600 rounded p-3 text-center">
                        <span className="text-cyan-400 font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Mission Objectives</h3>
                  <ul className="space-y-2">
                    {selectedRange.objectives.map((objective, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Target className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Session Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Participants:</span>
                      <span className="text-white">{selectedRange.currentParticipants}/{selectedRange.maxParticipants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={selectedRange.isActive ? 'text-green-400' : 'text-red-400'}>
                        {selectedRange.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Estimated Time:</span>
                      <span className="text-white">{selectedRange.estimatedTime}</span>
                    </div>
                  </div>
                </div>

                <button
                  disabled={!selectedRange.isActive || !isRangeAccessible(selectedRange)}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:transform-none"
                >
                  {!isRangeAccessible(selectedRange) ? 'Level Required' :
                   !selectedRange.isActive ? 'Currently Inactive' :
                   selectedRange.currentParticipants >= selectedRange.maxParticipants ? 'Session Full' :
                   'Join Cyber Range'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Server className="w-6 h-6 mr-2 text-cyan-400" />
              Cyber Range Hub
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-400 mt-2">Practice in realistic, isolated environments with real tools and scenarios</p>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ranges.map((range) => {
              const isAccessible = isRangeAccessible(range);
              
              return (
                <div
                  key={range.id}
                  className={`bg-gray-700 rounded-lg border border-gray-600 p-6 transition-all duration-200 cursor-pointer ${
                    isAccessible ? 'hover:border-cyan-500' : 'opacity-75'
                  }`}
                  onClick={() => isAccessible && setSelectedRange(range)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{getTypeIcon(range.type)}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{range.name}</h3>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(range.difficulty)} inline-block`}>
                          {range.difficulty}
                        </div>
                      </div>
                    </div>
                    
                    {!isAccessible ? (
                      <Lock className="w-6 h-6 text-gray-500" />
                    ) : range.isActive ? (
                      <div className="flex items-center space-x-1 text-green-400">
                        <Zap className="w-5 h-5" />
                        <span className="text-sm">Live</span>
                      </div>
                    ) : (
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{range.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{range.estimatedTime}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{range.currentParticipants}/{range.maxParticipants}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {range.objectives.length} objectives
                      </span>
                      
                      {isAccessible ? (
                        <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                          <Play className="w-4 h-4" />
                          <span className="text-sm">Enter Range</span>
                        </button>
                      ) : (
                        <span className="text-sm text-gray-500">
                          Level {Math.ceil(userLevel / 3)} required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
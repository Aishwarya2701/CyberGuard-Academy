import React, { useState } from 'react';
import { Clock, Star, Users, ChevronRight, Lock, Play, CheckCircle } from 'lucide-react';
import { Mission } from '../types';
import { MissionPlayer } from './MissionPlayer';
import { mockMissions } from '../utils/mockData';

interface StoryMissionsProps {
  missions: Mission[];
  onMissionSelect: (mission: Mission) => void;
  onMissionComplete: (missionId: string, xpEarned: number) => void;
  userLevel: number;
  completedMissions: string[];
}

export const StoryMissions: React.FC<StoryMissionsProps> = ({ 
  missions, 
  onMissionSelect, 
  onMissionComplete, 
  userLevel, 
  completedMissions 
}) => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'completed' | 'locked'>('all');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-400/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'advanced': return 'text-orange-400 bg-orange-400/20';
      case 'expert': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'phishing': return '🎣';
      case 'malware': return '🦠';
      case 'social-engineering': return '🎭';
      case 'password-security': return '🔒';
      case 'data-protection': return '🛡️';
      case 'incident-response': return '🚨';
      default: return '🔍';
    }
  };

  const isMissionUnlocked = (mission: Mission) => {
    return userLevel >= mission.unlockLevel && 
           mission.prerequisites.every(prereq => completedMissions.includes(prereq));
  };

  const isMissionCompleted = (mission: Mission) => {
    return completedMissions.includes(mission.id);
  };

  const getFilteredMissions = () => {
    switch (filter) {
      case 'available':
        return missions.filter(m => isMissionUnlocked(m) && !isMissionCompleted(m));
      case 'completed':
        return missions.filter(m => isMissionCompleted(m));
      case 'locked':
        return missions.filter(m => !isMissionUnlocked(m));
      default:
        return missions;
    }
  };

  const filteredMissions = getFilteredMissions();

  if (selectedMission) {
    return (
      <MissionPlayer
        mission={selectedMission}
        onComplete={(xpEarned) => {
          onMissionComplete(selectedMission.id, xpEarned);
          setSelectedMission(null);
        }}
        onExit={() => setSelectedMission(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Story Missions</h2>
        <p className="text-gray-400">Immersive scenarios based on real-world cyber incidents</p>
      </div>

      {/* Mission Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-cyan-400">{completedMissions.length}</div>
          <div className="text-sm text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-green-400">
            {missions.filter(m => isMissionUnlocked(m) && !isMissionCompleted(m)).length}
          </div>
          <div className="text-sm text-gray-400">Available</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-yellow-400">
            {missions.filter(m => !isMissionUnlocked(m)).length}
          </div>
          <div className="text-sm text-gray-400">Locked</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-purple-400">{missions.length}</div>
          <div className="text-sm text-gray-400">Total</div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'All Missions', count: missions.length },
          { key: 'available', label: 'Available', count: missions.filter(m => isMissionUnlocked(m) && !isMissionCompleted(m)).length },
          { key: 'completed', label: 'Completed', count: completedMissions.length },
          { key: 'locked', label: 'Locked', count: missions.filter(m => !isMissionUnlocked(m)).length }
        ].map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => setFilter(filterOption.key as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterOption.key
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {filterOption.label} ({filterOption.count})
          </button>
        ))}
      </div>

      {/* Learning Path */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Recommended Learning Path</h3>
        <div className="flex items-center space-x-4 overflow-x-auto pb-2">
          {missions.slice(0, 4).map((mission, index) => {
            const isUnlocked = isMissionUnlocked(mission);
            const isCompleted = isMissionCompleted(mission);
            
            return (
              <div key={mission.id} className="flex items-center space-x-4 flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  isCompleted ? 'bg-green-600 border-green-500' :
                  isUnlocked ? 'bg-cyan-600 border-cyan-500' :
                  'bg-gray-600 border-gray-500'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : isUnlocked ? (
                    <Play className="w-6 h-6 text-white" />
                  ) : (
                    <Lock className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-white">{mission.title}</div>
                  <div className="text-xs text-gray-400">{mission.difficulty}</div>
                </div>
                {index < 3 && (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMissions.map((mission) => {
          const isUnlocked = isMissionUnlocked(mission);
          const isCompleted = isMissionCompleted(mission);
          
          return (
            <div
              key={mission.id}
              className={`bg-gray-800 rounded-lg border border-gray-700 overflow-hidden transition-all duration-200 cursor-pointer group ${
                isUnlocked ? 'hover:border-cyan-500' : 'opacity-75'
              }`}
              onClick={() => {
                if (isUnlocked) {
                  setSelectedMission(mission);
                  onMissionSelect(mission);
                }
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{getCategoryIcon(mission.category)}</span>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(mission.difficulty)}`}>
                      {mission.difficulty}
                    </div>
                    {!isUnlocked ? (
                      <Lock className="w-5 h-5 text-gray-500" />
                    ) : isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Play className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {mission.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {mission.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{mission.estimatedTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>+{mission.xpReward} XP</span>
                    </div>
                  </div>
                </div>
                
                {isCompleted ? (
                  <div className="flex items-center justify-center bg-green-600 text-white py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                ) : isUnlocked ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-cyan-400">{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${mission.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-gray-500">
                        {mission.scenarios.length} scenarios
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-700 text-gray-400 py-2 px-4 rounded-lg text-center">
                    <div className="text-sm">
                      Requires Level {mission.unlockLevel}
                      {mission.prerequisites.length > 0 && (
                        <div className="text-xs mt-1">
                          Complete: {mission.prerequisites.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredMissions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-white mb-2">No missions found</h3>
          <p className="text-gray-400">Try adjusting your filter or complete more missions to unlock new ones.</p>
        </div>
      )}
    </div>
  );
};
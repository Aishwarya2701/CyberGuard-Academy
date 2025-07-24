import React, { useState } from 'react';
import { ArrowLeft, Shield, Eye, Brain, UserX, Play, Lock } from 'lucide-react';
import { Role, Mission } from '../types';
import { MissionPlayer } from './MissionPlayer';

interface RolePlayerProps {
  role: Role;
  onExit: () => void;
  onMissionComplete: (missionId: string, xpEarned: number) => void;
  userLevel: number;
  completedMissions: string[];
}

export const RolePlayer: React.FC<RolePlayerProps> = ({ 
  role, 
  onExit, 
  onMissionComplete, 
  userLevel, 
  completedMissions 
}) => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-8 h-8 text-white" />;
      case 'Eye': return <Eye className="w-8 h-8 text-white" />;
      case 'Brain': return <Brain className="w-8 h-8 text-white" />;
      case 'UserX': return <UserX className="w-8 h-8 text-white" />;
      default: return <Shield className="w-8 h-8 text-white" />;
    }
  };

  const isMissionUnlocked = (mission: Mission) => {
    return userLevel >= mission.unlockLevel && 
           mission.prerequisites.every(prereq => completedMissions.includes(prereq));
  };

  const getMissionProgress = (mission: Mission) => {
    if (completedMissions.includes(mission.id)) return 100;
    return mission.progress || 0;
  };

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onExit}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Roles</span>
          </button>
        </div>
        
        <div className="mt-6">
          <div className={`bg-gradient-to-r ${role.color} rounded-lg p-6 mb-6`}>
            <div className="flex items-center space-x-4">
              {getIcon(role.icon)}
              <div>
                <h1 className="text-3xl font-bold text-white">{role.name}</h1>
                <p className="text-white/80 mt-2">{role.description}</p>
              </div>
            </div>
          </div>
          
          {/* Special Abilities */}
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-bold text-white mb-3">Special Abilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {role.specialAbilities.map((ability, index) => (
                <div key={index} className="bg-gray-600 rounded-lg p-3 text-center">
                  <span className="text-cyan-400 font-medium">{ability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Missions */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Role Missions</h2>
          <p className="text-gray-400">Complete missions to master the {role.name} role</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {role.missions.map((mission) => {
            const isUnlocked = isMissionUnlocked(mission);
            const progress = getMissionProgress(mission);
            const isCompleted = completedMissions.includes(mission.id);

            return (
              <div
                key={mission.id}
                className={`bg-gray-800 rounded-lg border border-gray-700 p-6 transition-all duration-200 ${
                  isUnlocked ? 'hover:border-cyan-500 cursor-pointer' : 'opacity-50'
                }`}
                onClick={() => isUnlocked && setSelectedMission(mission)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    mission.difficulty === 'beginner' ? 'bg-green-600/20 text-green-400' :
                    mission.difficulty === 'intermediate' ? 'bg-yellow-600/20 text-yellow-400' :
                    mission.difficulty === 'advanced' ? 'bg-orange-600/20 text-orange-400' :
                    'bg-red-600/20 text-red-400'
                  }`}>
                    {mission.difficulty}
                  </div>
                  
                  {!isUnlocked ? (
                    <Lock className="w-5 h-5 text-gray-500" />
                  ) : isCompleted ? (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  ) : (
                    <Play className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{mission.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{mission.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-cyan-400">{progress}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isCompleted ? 'bg-green-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{mission.estimatedTime}</span>
                    <span className="text-yellow-400">+{mission.xpReward} XP</span>
                  </div>
                  
                  {!isUnlocked && (
                    <div className="text-xs text-red-400">
                      Requires Level {mission.unlockLevel}
                      {mission.prerequisites.length > 0 && (
                        <span> & {mission.prerequisites.length} prerequisite(s)</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
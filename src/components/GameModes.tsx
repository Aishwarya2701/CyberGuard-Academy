import React, { useState } from 'react';
import { Shield, Eye, Brain, UserX, Lock, ArrowLeft } from 'lucide-react';
import { Role } from '../types';
import { RolePlayer } from './RolePlayer';
import { mockRoles } from '../utils/mockData';

interface GameModesProps {
  onRoleSelect: (role: Role) => void;
  onExit: () => void;
  userLevel: number;
  completedMissions: string[];
  onMissionComplete: (missionId: string, xpEarned: number) => void;
}

export const GameModes: React.FC<GameModesProps> = ({ 
  onRoleSelect, 
  onExit, 
  userLevel, 
  completedMissions, 
  onMissionComplete 
}) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-12 h-12 text-white" />;
      case 'Eye': return <Eye className="w-12 h-12 text-white" />;
      case 'Brain': return <Brain className="w-12 h-12 text-white" />;
      case 'UserX': return <UserX className="w-12 h-12 text-white" />;
      default: return <Shield className="w-12 h-12 text-white" />;
    }
  };

  const isRoleUnlocked = (role: Role) => {
    return userLevel >= role.unlockLevel;
  };

  const getRoleProgress = (role: Role) => {
    const completedRoleMissions = role.missions.filter(m => completedMissions.includes(m.id)).length;
    return role.missions.length > 0 ? (completedRoleMissions / role.missions.length) * 100 : 0;
  };

  if (selectedRole) {
    return (
      <RolePlayer
        role={selectedRole}
        onExit={() => setSelectedRole(null)}
        onMissionComplete={onMissionComplete}
        userLevel={userLevel}
        completedMissions={completedMissions}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-center flex-1">
          <h2 className="text-3xl font-bold text-white mb-2">Choose Your Role</h2>
          <p className="text-gray-400">Experience cybersecurity from different perspectives</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockRoles.map((role) => {
          const isUnlocked = isRoleUnlocked(role);
          const progress = getRoleProgress(role);
          
          return (
            <div
              key={role.id}
              className={`relative bg-gray-800 rounded-lg p-6 border border-gray-700 cursor-pointer transition-all duration-200 hover:scale-105 ${
                isUnlocked ? 'hover:border-cyan-500' : 'opacity-50'
              }`}
              onClick={() => {
                if (isUnlocked) {
                  setSelectedRole(role);
                  onRoleSelect(role);
                }
              }}
            >
              {!isUnlocked && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-6 h-6 text-gray-500" />
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${role.color} rounded-lg p-4 mb-4 flex items-center justify-center`}>
                {getIcon(role.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{role.name}</h3>
              <p className="text-gray-400 mb-4">{role.description}</p>
              
              {/* Special Abilities */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Special Abilities:</h4>
                <div className="flex flex-wrap gap-1">
                  {role.specialAbilities.slice(0, 2).map((ability, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {ability}
                    </span>
                  ))}
                  {role.specialAbilities.length > 2 && (
                    <span className="text-xs text-gray-500">+{role.specialAbilities.length - 2} more</span>
                  )}
                </div>
              </div>
              
              {/* Progress */}
              {isUnlocked && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm text-cyan-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Missions:</span>
                  <span className="text-sm font-medium text-cyan-400">
                    {isUnlocked ? `${role.missions.length} Available` : `Unlock at Level ${role.unlockLevel}`}
                  </span>
                </div>
                
                {isUnlocked && (
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Enter
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Role Comparison */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Role Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-gray-300">Role</th>
                <th className="text-left py-2 text-gray-300">Focus Area</th>
                <th className="text-left py-2 text-gray-300">Difficulty</th>
                <th className="text-left py-2 text-gray-300">Unlock Level</th>
              </tr>
            </thead>
            <tbody>
              {mockRoles.map((role) => (
                <tr key={role.id} className="border-b border-gray-700/50">
                  <td className="py-3 text-white font-medium">{role.name}</td>
                  <td className="py-3 text-gray-400">
                    {role.id === 'defender' ? 'Protection & Monitoring' :
                     role.id === 'analyst' ? 'Investigation & Analysis' :
                     role.id === 'hacker' ? 'Offensive Security' :
                     'Risk Management'}
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      role.unlockLevel <= 2 ? 'bg-green-600/20 text-green-400' :
                      role.unlockLevel <= 5 ? 'bg-yellow-600/20 text-yellow-400' :
                      'bg-red-600/20 text-red-400'
                    }`}>
                      {role.unlockLevel <= 2 ? 'Beginner' :
                       role.unlockLevel <= 5 ? 'Intermediate' : 'Advanced'}
                    </span>
                  </td>
                  <td className="py-3 text-cyan-400">Level {role.unlockLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
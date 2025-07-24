import React from 'react';
import { User, Award, Calendar, TrendingUp, Target, Shield } from 'lucide-react';
import { User as UserType, WellnessPlan } from '../types';

interface UserProfileProps {
  user: UserType;
  wellnessPlan: WellnessPlan;
  onClose: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, wellnessPlan, onClose }) => {
  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getBadgeRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-600';
      case 'rare': return 'bg-blue-600';
      case 'epic': return 'bg-purple-600';
      case 'legendary': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">User Profile</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Info */}
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{user.name}</h3>
                    <p className="text-gray-400">{user.email}</p>
                    <p className="text-sm text-gray-500">
                      Member since {user.joinDate.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-400">Level {user.level}</p>
                    <p className="text-sm text-gray-400">Current Level</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-400">{user.totalXp.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">Total XP</p>
                  </div>
                </div>
              </div>

              {/* Cyber Wellness Plan */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                  Cyber Wellness Plan
                </h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Risk Score</span>
                    <span className={`font-bold ${getRiskScoreColor(wellnessPlan.riskScore)}`}>
                      {wellnessPlan.riskScore}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        wellnessPlan.riskScore >= 80 ? 'bg-green-500' :
                        wellnessPlan.riskScore >= 60 ? 'bg-yellow-500' :
                        wellnessPlan.riskScore >= 40 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${wellnessPlan.riskScore}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-300">Top Recommendations:</h4>
                  {wellnessPlan.recommendations.slice(0, 3).map((rec) => (
                    <div key={rec.id} className="flex items-center justify-between bg-gray-800 p-3 rounded">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          rec.priority === 'high' ? 'bg-red-400' :
                          rec.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                        }`} />
                        <span className="text-sm text-white">{rec.title}</span>
                      </div>
                      <span className={`w-4 h-4 rounded-full ${rec.isCompleted ? 'bg-green-500' : 'bg-gray-600'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badges and Achievements */}
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-400" />
                  Badges & Achievements
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {user.badges.map((badge) => (
                    <div key={badge.id} className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{badge.icon}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getBadgeRarityColor(badge.rarity)}`}>
                          {badge.rarity}
                        </span>
                      </div>
                      <h4 className="font-medium text-white text-sm">{badge.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">{badge.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Earned {badge.unlockedAt.toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Statistics
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-cyan-400">{user.currentStreak}</p>
                    <p className="text-sm text-gray-400">Day Streak</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-400">{user.completedMissions.length}</p>
                    <p className="text-sm text-gray-400">Missions Completed</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-400">{user.badges.length}</p>
                    <p className="text-sm text-gray-400">Badges Earned</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-yellow-400">89%</p>
                    <p className="text-sm text-gray-400">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
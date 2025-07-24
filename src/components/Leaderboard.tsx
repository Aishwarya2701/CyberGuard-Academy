import React from 'react';
import { Trophy, TrendingUp, TrendingDown, Medal, Crown } from 'lucide-react';
import { LeaderboardEntry } from '../types';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  onClose: () => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ entries, onClose }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-orange-400" />;
      default: return <span className="text-lg font-bold text-gray-400">#{rank}</span>;
    }
  };

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <span className="w-4 h-4 text-gray-400">-</span>;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
              Global Leaderboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>

          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.user.id}
                className={`flex items-center justify-between bg-gray-700 p-4 rounded-lg border ${
                  entry.rank <= 3 ? 'border-yellow-500/30' : 'border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12">
                    {getRankIcon(entry.rank)}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {entry.user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-white">{entry.user.name}</p>
                      <p className="text-sm text-gray-400">Level {entry.user.level}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-bold text-cyan-400">{entry.score.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">XP</p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(entry.change)}
                    <span className={`text-sm ${
                      entry.change > 0 ? 'text-green-400' : 
                      entry.change < 0 ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {entry.change !== 0 ? Math.abs(entry.change) : '-'}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {entry.user.badges.slice(0, 3).map((badge) => (
                      <span key={badge.id} className="text-xs">
                        {badge.icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-2">Season Information</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-400">Season Ends</p>
                <p className="font-medium text-white">12 days</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Your Rank</p>
                <p className="font-medium text-cyan-400">#47</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Players</p>
                <p className="font-medium text-white">2,847</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
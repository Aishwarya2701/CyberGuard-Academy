import React, { useState } from 'react';
import { Trophy, Star, Lock, Crown, Zap, Target, Users, Search } from 'lucide-react';
import { Achievement, User } from '../types';

interface AchievementCenterProps {
  achievements: Achievement[];
  user: User;
  onClose: () => void;
}

export const AchievementCenter: React.FC<AchievementCenterProps> = ({ achievements, user, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked' | 'secret'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'streak' | 'completion' | 'mastery' | 'discovery' | 'social' | 'speed'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      case 'rare': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'epic': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'legendary': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'mythic': return 'text-pink-400 bg-pink-400/20 border-pink-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'streak': return <Zap className="w-5 h-5" />;
      case 'completion': return <Target className="w-5 h-5" />;
      case 'mastery': return <Crown className="w-5 h-5" />;
      case 'discovery': return <Search className="w-5 h-5" />;
      case 'social': return <Users className="w-5 h-5" />;
      case 'speed': return <Zap className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const isAchievementUnlocked = (achievement: Achievement) => {
    return user.badges.some(badge => badge.id === achievement.id);
  };

  const getProgress = (achievement: Achievement) => {
    // This would be calculated based on user's actual progress
    // For now, returning mock progress
    if (isAchievementUnlocked(achievement)) return 100;
    
    // Mock progress calculation
    const mockProgress = Math.floor(Math.random() * 80);
    return mockProgress;
  };

  const filteredAchievements = achievements.filter(achievement => {
    const isUnlocked = isAchievementUnlocked(achievement);
    const matchesFilter = 
      filter === 'all' ||
      (filter === 'unlocked' && isUnlocked) ||
      (filter === 'locked' && !isUnlocked) ||
      (filter === 'secret' && achievement.isSecret);
    
    const matchesCategory = categoryFilter === 'all' || achievement.category === categoryFilter;
    const matchesSearch = searchTerm === '' || 
      achievement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesCategory && matchesSearch;
  });

  const unlockedCount = achievements.filter(a => isAchievementUnlocked(a)).length;
  const totalXPFromAchievements = achievements
    .filter(a => isAchievementUnlocked(a))
    .reduce((sum, a) => sum + a.rewards.xp, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
              Achievement Center
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{unlockedCount}</div>
              <div className="text-sm text-gray-400">Unlocked</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400">{totalXPFromAchievements.toLocaleString()}</div>
              <div className="text-sm text-gray-400">XP Earned</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{Math.round((unlockedCount / achievements.length) * 100)}%</div>
              <div className="text-sm text-gray-400">Completion</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Achievements</option>
              <option value="unlocked">Unlocked</option>
              <option value="locked">Locked</option>
              <option value="secret">Secret</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as any)}
              className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Categories</option>
              <option value="completion">Completion</option>
              <option value="mastery">Mastery</option>
              <option value="streak">Streak</option>
              <option value="speed">Speed</option>
              <option value="discovery">Discovery</option>
              <option value="social">Social</option>
            </select>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAchievements.map((achievement) => {
              const isUnlocked = isAchievementUnlocked(achievement);
              const progress = getProgress(achievement);
              
              return (
                <div
                  key={achievement.id}
                  className={`border rounded-lg p-6 transition-all ${
                    isUnlocked 
                      ? `${getRarityColor(achievement.rarity)} shadow-lg` 
                      : 'border-gray-600 bg-gray-700/50'
                  } ${achievement.isSecret && !isUnlocked ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div className="text-cyan-400">
                        {getCategoryIcon(achievement.category)}
                      </div>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(achievement.rarity)}`}>
                      {achievement.rarity}
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-bold mb-2 ${isUnlocked ? 'text-white' : 'text-gray-400'}`}>
                    {achievement.isSecret && !isUnlocked ? '???' : achievement.name}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${isUnlocked ? 'text-gray-300' : 'text-gray-500'}`}>
                    {achievement.isSecret && !isUnlocked ? 'Secret achievement - complete specific actions to unlock' : achievement.description}
                  </p>
                  
                  {!achievement.isSecret && (
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-medium text-gray-300">Requirements:</h4>
                      {achievement.requirements.map((req, index) => (
                        <div key={index} className="text-xs text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 flex-shrink-0" />
                          {req.description}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {!isUnlocked && !achievement.isSecret && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-400">Progress</span>
                        <span className="text-xs text-cyan-400">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-yellow-400 font-medium">+{achievement.rewards.xp} XP</span>
                      {achievement.rewards.title && (
                        <div className="text-xs text-purple-400">Title: {achievement.rewards.title}</div>
                      )}
                    </div>
                    
                    {isUnlocked ? (
                      <div className="flex items-center space-x-1 text-green-400">
                        <Trophy className="w-4 h-4" />
                        <span className="text-xs">Unlocked</span>
                      </div>
                    ) : (
                      <Lock className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">No achievements found</h3>
              <p className="text-gray-400">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
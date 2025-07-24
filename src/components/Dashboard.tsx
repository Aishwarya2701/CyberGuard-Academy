import React from 'react';
import { TrendingUp, Shield, Target, Trophy, Calendar, AlertTriangle, Newspaper, Server, Award, Atom, Bot, Globe, Headphones, Zap, Brain, Fingerprint, Clock, Eye } from 'lucide-react';
import { User, ThreatAlert, DailyChallenge } from '../types';

interface DashboardProps {
  user: User;
  threats: ThreatAlert[];
  dailyChallenges: DailyChallenge[];
  onStartMission: () => void;
  onViewLeaderboard: () => void;
  onViewNews: () => void;
  onViewCyberRange: () => void;
  onViewAchievements: () => void;
  onViewQuantumChallenges?: () => void;
  onViewAIBattle?: () => void;
  onViewRealWorld?: () => void;
  onViewMetaverse?: () => void;
  onViewNeuralHacking?: () => void;
  onViewBiometricLab?: () => void;
  onViewConsciousnessSecurity?: () => void;
  onViewTimelineSecurity?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  user, 
  threats, 
  dailyChallenges, 
  onStartMission, 
  onViewLeaderboard,
  onViewNews,
  onViewCyberRange,
  onViewAchievements,
  onViewQuantumChallenges,
  onViewAIBattle,
  onViewRealWorld,
  onViewMetaverse,
  onViewNeuralHacking,
  onViewBiometricLab,
  onViewConsciousnessSecurity,
  onViewTimelineSecurity
}) => {
  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getRiskScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Improvement';
  };

  const activeThreat = threats.find(t => t.isActive);

  return (
    <div className="space-y-6">
      {/* Live Threat Alert */}
      {activeThreat && (
        <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/30 rounded-lg p-4 animate-pulse cursor-pointer hover:from-red-800/60 hover:to-red-700/60 transition-all" onClick={onViewNews}>
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <div>
              <h3 className="font-semibold text-red-200">🚨 Live Threat Alert</h3>
              <p className="text-sm text-red-300">{activeThreat.title}</p>
              <p className="text-xs text-red-400 mt-1">{activeThreat.description}</p>
              <p className="text-xs text-red-300 mt-2">Click to view threat intelligence center →</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Risk Score</p>
              <p className={`text-2xl font-bold ${getRiskScoreColor(user.riskScore)}`}>
                {user.riskScore}%
              </p>
              <p className="text-xs text-gray-500">{getRiskScoreLabel(user.riskScore)}</p>
            </div>
            <Shield className={`w-8 h-8 ${getRiskScoreColor(user.riskScore)}`} />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Current Streak</p>
              <p className="text-2xl font-bold text-cyan-400">{user.currentStreak}</p>
              <p className="text-xs text-gray-500">days</p>
            </div>
            <TrendingUp className="w-8 h-8 text-cyan-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Missions Completed</p>
              <p className="text-2xl font-bold text-green-400">{user.completedMissions.length}</p>
              <p className="text-xs text-gray-500">out of 24</p>
            </div>
            <Target className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Badges Earned</p>
              <p className="text-2xl font-bold text-purple-400">{user.badges.length}</p>
              <p className="text-xs text-gray-500">achievements</p>
            </div>
            <Trophy className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
            Daily Challenges
          </h2>
          <span className="text-sm text-gray-400">
            {dailyChallenges.filter(c => c.isCompleted).length} of {dailyChallenges.length} completed
          </span>
        </div>
        
        <div className="space-y-3">
          {dailyChallenges.map((challenge) => (
            <div key={challenge.id} className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${challenge.isCompleted ? 'bg-green-400' : 'bg-gray-500'}`} />
                <div>
                  <p className="font-medium text-white">{challenge.title}</p>
                  <p className="text-sm text-gray-400">{challenge.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-cyan-400">+{challenge.xpReward} XP</p>
                {!challenge.isCompleted && (
                  <p className="text-xs text-gray-500">
                    {Math.ceil((challenge.deadline.getTime() - Date.now()) / (1000 * 60 * 60))}h left
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={onStartMission}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Target className="w-5 h-5" />
          <span>Start New Mission</span>
        </button>
        
        <button
          onClick={onViewCyberRange}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Server className="w-5 h-5" />
          <span>Enter Cyber Range</span>
        </button>
        
        <button
          onClick={onViewNews}
          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Newspaper className="w-5 h-5" />
          <span>Threat Intelligence</span>
        </button>
        
        <button
          onClick={onViewLeaderboard}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Trophy className="w-5 h-5" />
          <span>Global Leaderboard</span>
        </button>
        
        <button
          onClick={onViewAchievements}
          className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Award className="w-5 h-5" />
          <span>Achievements</span>
        </button>
        
        <button
          onClick={onViewQuantumChallenges}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Atom className="w-5 h-5" />
          <span>Quantum Challenges</span>
        </button>
        
        <button
          onClick={onViewAIBattle}
          className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Bot className="w-5 h-5" />
          <span>AI Battle Arena</span>
        </button>
        
        <button
          onClick={onViewRealWorld}
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Globe className="w-5 h-5" />
          <span>Real-World Jobs</span>
        </button>
        
        <button
          onClick={onViewMetaverse}
          className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Headphones className="w-5 h-5" />
          <span>Metaverse Hub</span>
        </button>
      </div>

      {/* Revolutionary New Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={onViewNeuralHacking}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Brain className="w-5 h-5" />
          <span>Neural Hacking Lab</span>
        </button>
        
        <button
          onClick={onViewBiometricLab}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Fingerprint className="w-5 h-5" />
          <span>Biometric Spoofing</span>
        </button>
        
        <button
          onClick={onViewConsciousnessSecurity}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Eye className="w-5 h-5" />
          <span>Consciousness Security</span>
        </button>
        
        <button
          onClick={onViewTimelineSecurity}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Clock className="w-5 h-5" />
          <span>Timeline Security</span>
        </button>
      </div>

      {/* Next-Generation Features Showcase */}
      <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-lg p-6 border border-pink-500/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-pink-400" />
          🚀 Next-Generation Features
        </h3>
        <p className="text-pink-200 mb-4">
          Experience the most advanced cybersecurity training ever created! These revolutionary features 
          push the boundaries of what's possible in security education.
        </p>
        <div className="text-sm text-pink-300">
          Neural hacking, biometric spoofing, consciousness security, and timeline protection - 
          skills that don't exist anywhere else in the world!
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Today's Progress</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">3</div>
            <div className="text-sm text-gray-400">Challenges Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">+450</div>
            <div className="text-sm text-gray-400">XP Gained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">2</div>
            <div className="text-sm text-gray-400">New Badges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">97%</div>
            <div className="text-sm text-gray-400">Accuracy Rate</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Completed "The Midnight Breach" mission', time: '2 hours ago', xp: '+300 XP', type: 'mission' },
            { action: 'Achieved "Phishing Master" badge', time: '4 hours ago', xp: '+500 XP', type: 'badge' },
            { action: 'Defeated AI in threat detection', time: '6 hours ago', xp: '+200 XP', type: 'ai' },
            { action: 'Joined cyber range exercise', time: '1 day ago', xp: '+150 XP', type: 'range' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'mission' ? 'bg-cyan-400' :
                  activity.type === 'badge' ? 'bg-purple-400' :
                  activity.type === 'ai' ? 'bg-green-400' : 'bg-orange-400'
                }`} />
                <div>
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">{activity.time}</p>
                </div>
              </div>
              <span className="text-yellow-400 text-sm font-medium">{activity.xp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Challenges */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">🔥 Trending This Week</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'AI vs Human: Threat Detection', participants: '2.3K', difficulty: 'Expert', trend: '+45%' },
            { title: 'Zero-Day Response Simulation', participants: '1.8K', difficulty: 'Advanced', trend: '+32%' },
            { title: 'Quantum Cryptography Challenge', participants: '1.2K', difficulty: 'Expert', trend: '+28%' }
          ].map((challenge, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
              <h4 className="font-medium text-white mb-2">{challenge.title}</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">{challenge.participants} playing</span>
                <span className="text-green-400">{challenge.trend}</span>
              </div>
              <div className={`mt-2 px-2 py-1 rounded text-xs font-medium inline-block ${
                challenge.difficulty === 'Expert' ? 'bg-red-600/20 text-red-400' :
                challenge.difficulty === 'Advanced' ? 'bg-orange-600/20 text-orange-400' :
                'bg-yellow-600/20 text-yellow-400'
              }`}>
                {challenge.difficulty}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Mentor Quick Tips */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
          <div>
            <h3 className="text-xl font-bold text-white">ARIA's Daily Insight</h3>
            <p className="text-purple-200 text-sm">Your AI cybersecurity mentor</p>
          </div>
        </div>
        <div className="bg-black/20 rounded-lg p-4">
          <p className="text-purple-100 mb-3">
            "I've detected quantum fluctuations in your learning pattern. Your neural pathways are 
            adapting to advanced threat recognition. Consider exploring the Quantum Challenges to 
            unlock your full cybersecurity potential. The future of security is quantum, and you're ready."
          </p>
          <div className="flex items-center justify-between">
            <span className="text-purple-300 text-sm">AI-powered personalized insights</span>
            <button 
              onClick={onViewQuantumChallenges}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2"
            >
              <Atom className="w-4 h-4" />
              <span>Explore Quantum</span>
            </button>
          </div>
        </div>
      </div>

      {/* Revolutionary Features Showcase */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-lg p-6 border border-cyan-500/30">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-cyan-400" />
          🚀 Revolutionary Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div 
            className="bg-black/20 rounded-lg p-4 text-center cursor-pointer hover:bg-black/30 transition-colors"
            onClick={onViewQuantumChallenges}
          >
            <Atom className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm">Quantum Security</h4>
            <p className="text-xs text-gray-300">Master quantum cryptography and interdimensional threats</p>
          </div>
          <div 
            className="bg-black/20 rounded-lg p-4 text-center cursor-pointer hover:bg-black/30 transition-colors"
            onClick={onViewAIBattle}
          >
            <Bot className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm">AI Combat</h4>
            <p className="text-xs text-gray-300">Battle advanced AI opponents in cybersecurity duels</p>
          </div>
          <div 
            className="bg-black/20 rounded-lg p-4 text-center cursor-pointer hover:bg-black/30 transition-colors"
            onClick={onViewRealWorld}
          >
            <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm">Real Careers</h4>
            <p className="text-xs text-gray-300">Get hired by Google, FBI, Tesla through our platform</p>
          </div>
          <div 
            className="bg-black/20 rounded-lg p-4 text-center cursor-pointer hover:bg-black/30 transition-colors"
            onClick={onViewMetaverse}
          >
            <Headphones className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm">Metaverse</h4>
            <p className="text-xs text-gray-300">Train in virtual worlds with neural interfaces</p>
          </div>
        </div>
      </div>

      {/* Legacy Action Buttons (keeping for compatibility) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <button
          onClick={onStartMission}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          Start New Mission
        </button>
        
        <button
          onClick={onViewLeaderboard}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
};
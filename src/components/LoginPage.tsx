import React, { useState } from 'react';
import { Shield, Eye, EyeOff, Mail, Lock, User, ArrowRight, Zap, Brain, Globe } from 'lucide-react';

interface LoginPageProps {
  onLogin: (userData: any) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would call an API
    const userData = {
      id: '1',
      name: formData.name || 'Cyber Guardian',
      email: formData.email,
      level: 1,
      xp: 0,
      totalXp: 0,
      riskScore: 45,
      badges: [],
      completedMissions: [],
      completedGames: [],
      currentStreak: 0,
      joinDate: new Date(),
      avatar: '👤',
      preferences: {
        difficulty: 'beginner' as const,
        notifications: true,
        soundEffects: true,
        theme: 'dark' as const,
        immersiveMode: false,
        realTimeThreats: true,
        aiPersonality: 'professional' as const
      },
      cyberPersonality: {
        type: 'Guardian' as const,
        traits: ['Analytical', 'Protective', 'Detail-oriented'],
        strengths: ['Pattern Recognition', 'Risk Assessment'],
        weaknesses: ['Overthinking', 'Perfectionism'],
        preferredAttackStyle: 'Defensive',
        mentalModel: 'Shield and Sword'
      },
      hackingSkills: {
        reconnaissance: 20,
        exploitation: 15,
        postExploitation: 10,
        socialEngineering: 25,
        cryptography: 30,
        forensics: 20,
        incidentResponse: 35,
        threatHunting: 15
      },
      realWorldImpact: {
        companiesProtected: 0,
        threatsNeutralized: 0,
        vulnerabilitiesFound: 0,
        peopleEducated: 0,
        dataBreachesPrevented: 0,
        malwareAnalyzed: 0
      },
      aiCompanion: {
        name: 'ARIA',
        personality: 'Professional and supportive',
        relationship: 50,
        specialization: 'General Cybersecurity',
        mood: 'curious' as const,
        memories: []
      }
    };
    
    onLogin(userData);
  };

  const handleDemoLogin = () => {
    const demoUser = {
      id: 'demo',
      name: 'Demo User',
      email: 'demo@cyberguard.com',
      level: 5,
      xp: 750,
      totalXp: 4750,
      riskScore: 78,
      badges: [
        { id: 'first-mission', name: 'First Steps', description: 'Completed first mission', icon: '🎯', rarity: 'common', unlockedAt: new Date(), category: 'Achievement' },
        { id: 'phishing-expert', name: 'Phishing Expert', description: 'Master of email security', icon: '🎣', rarity: 'rare', unlockedAt: new Date(), category: 'Mastery' }
      ],
      completedMissions: ['mission-1', 'mission-2'],
      completedGames: ['game-1'],
      currentStreak: 7,
      joinDate: new Date('2024-01-01'),
      avatar: '🛡️',
      preferences: {
        difficulty: 'intermediate' as const,
        notifications: true,
        soundEffects: true,
        theme: 'dark' as const,
        immersiveMode: true,
        realTimeThreats: true,
        aiPersonality: 'friendly' as const
      },
      cyberPersonality: {
        type: 'Hunter' as const,
        traits: ['Aggressive', 'Curious', 'Persistent'],
        strengths: ['Threat Hunting', 'Investigation'],
        weaknesses: ['Impatience', 'Risk-taking'],
        preferredAttackStyle: 'Offensive',
        mentalModel: 'Hunt and Eliminate'
      },
      hackingSkills: {
        reconnaissance: 70,
        exploitation: 65,
        postExploitation: 60,
        socialEngineering: 55,
        cryptography: 50,
        forensics: 75,
        incidentResponse: 80,
        threatHunting: 85
      },
      realWorldImpact: {
        companiesProtected: 12,
        threatsNeutralized: 45,
        vulnerabilitiesFound: 23,
        peopleEducated: 156,
        dataBreachesPrevented: 3,
        malwareAnalyzed: 67
      },
      aiCompanion: {
        name: 'ARIA',
        personality: 'Witty and encouraging',
        relationship: 85,
        specialization: 'Threat Hunting',
        mood: 'excited' as const,
        memories: [
          {
            id: '1',
            event: 'First successful threat hunt',
            emotion: 'pride',
            timestamp: new Date(),
            importance: 8
          }
        ]
      }
    };
    
    onLogin(demoUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Cyber Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"></div>
        <div className="absolute left-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
      </div>
      
      <div className="relative w-full max-w-md z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-full shadow-2xl shadow-emerald-500/25">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            CyberGuard Academy
          </h1>
          <p className="text-emerald-200/80 text-lg">Master cybersecurity through immersive learning</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Login/Register Form */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-emerald-500/20 p-8 shadow-2xl shadow-emerald-900/50">
          <div className="flex mb-6 bg-gray-800/50 rounded-xl p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                isLogin 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25' 
                  : 'text-emerald-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                !isLogin 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25' 
                  : 'text-emerald-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-teal-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-gray-800/60 border border-emerald-500/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-emerald-300/60 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:bg-gray-800/80 transition-all duration-300"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-teal-400 transition-colors" />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-gray-800/60 border border-emerald-500/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-emerald-300/60 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:bg-gray-800/80 transition-all duration-300"
                required
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-teal-400 transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full bg-gray-800/60 border border-emerald-500/30 rounded-xl pl-12 pr-14 py-4 text-white placeholder-emerald-300/60 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:bg-gray-800/80 transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-400 hover:text-teal-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {!isLogin && (
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-teal-400 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full bg-gray-800/60 border border-emerald-500/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-emerald-300/60 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:bg-gray-800/80 transition-all duration-300"
                  required={!isLogin}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-3 group"
            >
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-emerald-500/20">
            <button
              onClick={handleDemoLogin}
              className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 text-white font-medium py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>🚀 Try Demo Account</span>
            </button>
            <p className="text-xs text-emerald-300/60 text-center mt-3">
              Experience the full app with sample progress and achievements
            </p>
          </div>

          {isLogin && (
            <div className="mt-4 text-center">
              <a href="#" className="text-emerald-400 hover:text-teal-400 text-sm transition-colors">
                Forgot your password?
              </a>
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-5 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🎮</div>
            <div className="text-sm text-emerald-200 font-medium">Interactive Learning</div>
            <div className="text-xs text-emerald-300/60 mt-1">Gamified cybersecurity training</div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-5 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🏆</div>
            <div className="text-sm text-teal-200 font-medium">Achievements</div>
            <div className="text-xs text-teal-300/60 mt-1">Earn badges and rewards</div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-5 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🤖</div>
            <div className="text-sm text-cyan-200 font-medium">AI Mentor</div>
            <div className="text-xs text-cyan-300/60 mt-1">Personal cybersecurity guide</div>
          </div>
        </div>

        {/* Revolutionary Features Teaser */}
        <div className="mt-6 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Brain className="w-6 h-6 text-emerald-400" />
              <Globe className="w-6 h-6 text-teal-400" />
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Revolutionary Features Await
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-emerald-200/80">
              <div>🌌 Quantum Challenges</div>
              <div>🤖 AI Battle Arena</div>
              <div>🌍 Real-World Jobs</div>
              <div>🥽 Metaverse Training</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
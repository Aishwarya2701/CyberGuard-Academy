import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GameModes } from './components/GameModes';
import { StoryMissions } from './components/StoryMissions';
import { MiniGames } from './components/MiniGames';
import { AIMentor } from './components/AIMentor';
import { UserProfile } from './components/UserProfile';
import { Leaderboard } from './components/Leaderboard';
import { NewsCenter } from './components/NewsCenter';
import { CyberRangeHub } from './components/CyberRangeHub';
import { AchievementCenter } from './components/AchievementCenter';
import { NotificationCenter } from './components/NotificationCenter';
import { SettingsPage } from './components/SettingsPage';
import { QuantumChallenges } from './components/QuantumChallenges';
import { AIBattleArena } from './components/AIBattleArena';
import { RealWorldIntegration } from './components/RealWorldIntegration';
import { MetaverseHub } from './components/MetaverseHub';
import { NeuralHackingLab } from './components/NeuralHackingLab';
import { BiometricSpoofingLab } from './components/BiometricSpoofingLab';
import { ConsciousnessSecurityCenter } from './components/ConsciousnessSecurityCenter';
import { TimelineSecurityHub } from './components/TimelineSecurityHub';
import { useUser } from './hooks/useUser';
import { 
  mockMissions, 
  mockThreatAlerts, 
  mockDailyChallenges, 
  mockMiniGames, 
  mockLeaderboard,
  mockWellnessPlan,
  mockNewsEvents,
  mockCyberRanges,
  mockAchievements
} from './utils/mockData';
import { Mission, Role, MiniGame } from './types';

type ViewType = 'dashboard' | 'missions' | 'games' | 'mini-games' | 'leaderboard' | 'profile';

function App() {
  const { 
    user, 
    notifications,
    addXP, 
    addBadge, 
    completeMission, 
    completeGame, 
    updateRiskScore, 
    updateStreak,
    addNotification,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    resetProgress,
    setUser
  } = useUser();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [showCyberRange, setShowCyberRange] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showQuantumChallenges, setShowQuantumChallenges] = useState(false);
  const [showAIBattle, setShowAIBattle] = useState(false);
  const [showRealWorld, setShowRealWorld] = useState(false);
  const [showMetaverse, setShowMetaverse] = useState(false);
  const [showNeuralHacking, setShowNeuralHacking] = useState(false);
  const [showBiometricLab, setShowBiometricLab] = useState(false);
  const [showConsciousnessSecurity, setShowConsciousnessSecurity] = useState(false);
  const [showTimelineSecurity, setShowTimelineSecurity] = useState(false);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
    
    // Add welcome notification for new users
    if (userData.level === 1 && userData.totalXp === 0) {
      addNotification({
        title: 'Welcome to CyberGuard Academy!',
        message: 'Complete your first mission to start earning XP and badges.',
        type: 'info',
        priority: 'medium'
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('dashboard');
    setShowProfile(false);
    setShowSettings(false);
    setShowNotifications(false);
  };

  const handleMissionComplete = (missionId: string, xpEarned: number) => {
    completeMission(missionId);
    addXP(xpEarned);
    updateStreak();
    
    // Add completion notification
    addNotification({
      title: 'Mission Completed!',
      message: `You earned ${xpEarned} XP for completing a cybersecurity mission.`,
      type: 'success',
      priority: 'medium'
    });
    
    // Award badges based on achievements
    if (user.completedMissions.length + 1 === 1) {
      addBadge({
        id: 'first-mission',
        name: 'First Steps',
        description: 'Completed your first mission',
        icon: '🎯',
        rarity: 'common',
        unlockedAt: new Date(),
        category: 'Achievement'
      });
      
      addNotification({
        title: 'New Badge Earned!',
        message: 'You unlocked the "First Steps" badge for completing your first mission.',
        type: 'success',
        priority: 'high'
      });
    }
    
    if (user.completedMissions.length + 1 === 5) {
      addBadge({
        id: 'mission-veteran',
        name: 'Mission Veteran',
        description: 'Completed 5 missions',
        icon: '🏆',
        rarity: 'rare',
        unlockedAt: new Date(),
        category: 'Achievement'
      });
      
      addNotification({
        title: 'Rare Badge Unlocked!',
        message: 'You earned the "Mission Veteran" badge for completing 5 missions.',
        type: 'success',
        priority: 'high'
      });
    }
    
    // Improve risk score based on mission category
    const mission = mockMissions.find(m => m.id === missionId);
    if (mission) {
      const riskImprovement = mission.difficulty === 'beginner' ? 2 : 
                             mission.difficulty === 'intermediate' ? 3 :
                             mission.difficulty === 'advanced' ? 4 : 5;
      updateRiskScore(user.riskScore + riskImprovement);
    }
  };

  const handleGameComplete = (gameId: string, score: number, xpEarned: number) => {
    completeGame(gameId, {
      gameId,
      score,
      timeSpent: 0,
      completedAt: new Date(),
      accuracy: 0,
      mistakes: 0
    });
    addXP(xpEarned);
    updateStreak();
    
    // Add completion notification
    addNotification({
      title: 'Game Completed!',
      message: `You scored ${score} points and earned ${xpEarned} XP.`,
      type: 'success',
      priority: 'medium'
    });
    
    // Award badges for high scores
    if (score >= 1000) {
      addBadge({
        id: 'high-scorer',
        name: 'High Scorer',
        description: 'Achieved a score of 1000+ in a mini game',
        icon: '🎯',
        rarity: 'rare',
        unlockedAt: new Date(),
        category: 'Gaming'
      });
      
      addNotification({
        title: 'High Score Achievement!',
        message: 'You unlocked the "High Scorer" badge for scoring 1000+ points.',
        type: 'success',
        priority: 'high'
      });
    }
    
    // Improve risk score
    updateRiskScore(user.riskScore + 1);
  };

  const handleMissionSelect = (mission: Mission) => {
    console.log('Starting mission:', mission.title);
  };

  const handleRoleSelect = (role: Role) => {
    console.log('Selected role:', role.name);
  };

  const handleGameSelect = (game: MiniGame) => {
    console.log('Starting game:', game.name);
  };

  const handleResetProgress = () => {
    resetProgress();
    addNotification({
      title: 'Progress Reset',
      message: 'Your progress has been reset. Start your cybersecurity journey again!',
      type: 'info',
      priority: 'medium'
    });
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard
            user={user}
            threats={mockThreatAlerts}
            dailyChallenges={mockDailyChallenges}
            onStartMission={() => setCurrentView('missions')}
            onViewLeaderboard={() => setShowLeaderboard(true)}
            onViewNews={() => setShowNews(true)}
            onViewCyberRange={() => setShowCyberRange(true)}
            onViewAchievements={() => setShowAchievements(true)}
            onViewQuantumChallenges={() => setShowQuantumChallenges(true)}
            onViewAIBattle={() => setShowAIBattle(true)}
            onViewRealWorld={() => setShowRealWorld(true)}
            onViewMetaverse={() => setShowMetaverse(true)}
            onViewNeuralHacking={() => setShowNeuralHacking(true)}
            onViewBiometricLab={() => setShowBiometricLab(true)}
            onViewConsciousnessSecurity={() => setShowConsciousnessSecurity(true)}
            onViewTimelineSecurity={() => setShowTimelineSecurity(true)}
          />
        );
      case 'games':
        return (
          <GameModes 
            onRoleSelect={handleRoleSelect}
            onExit={() => setCurrentView('dashboard')}
            userLevel={user.level}
            completedMissions={user.completedMissions}
            onMissionComplete={handleMissionComplete}
          />
        );
      case 'missions':
        return (
          <StoryMissions 
            missions={mockMissions} 
            onMissionSelect={handleMissionSelect}
            onMissionComplete={handleMissionComplete}
            userLevel={user.level}
            completedMissions={user.completedMissions}
          />
        );
      case 'mini-games':
        return (
          <MiniGames 
            games={mockMiniGames} 
            onGameSelect={handleGameSelect}
            onGameComplete={handleGameComplete}
            userLevel={user.level}
            completedGames={user.completedGames}
          />
        );
      default:
        return (
          <Dashboard
            user={user}
            threats={mockThreatAlerts}
            dailyChallenges={mockDailyChallenges}
            onStartMission={() => setCurrentView('missions')}
            onViewLeaderboard={() => setShowLeaderboard(true)}
            onViewNews={() => setShowNews(true)}
            onViewCyberRange={() => setShowCyberRange(true)}
            onViewAchievements={() => setShowAchievements(true)}
          />
        );
    }
  };

  const unreadNotifications = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        user={user} 
        onProfileClick={() => setShowProfile(true)}
        onNotificationsClick={() => setShowNotifications(true)}
        onSettingsClick={() => setShowSettings(true)}
        unreadNotifications={unreadNotifications}
      />
      
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { key: 'dashboard', label: 'Dashboard', icon: '🏠' },
              { key: 'missions', label: 'Story Missions', icon: '🎮' },
              { key: 'games', label: 'Role Play', icon: '🎭' },
              { key: 'mini-games', label: 'Mini Games', icon: '🕹️' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentView(item.key as ViewType)}
                className={`flex items-center space-x-2 px-3 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  currentView === item.key
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      <AIMentor 
        isOpen={isMentorOpen} 
        onToggle={() => setIsMentorOpen(!isMentorOpen)} 
      />

      {showProfile && (
        <UserProfile 
          user={user} 
          wellnessPlan={mockWellnessPlan}
          onClose={() => setShowProfile(false)} 
        />
      )}

      {showLeaderboard && (
        <Leaderboard 
          entries={mockLeaderboard}
          onClose={() => setShowLeaderboard(false)} 
        />
      )}

      {showNews && (
        <NewsCenter 
          events={mockNewsEvents}
          onClose={() => setShowNews(false)} 
        />
      )}

      {showCyberRange && (
        <CyberRangeHub 
          ranges={mockCyberRanges}
          userLevel={user.level}
          onClose={() => setShowCyberRange(false)} 
        />
      )}

      {showAchievements && (
        <AchievementCenter 
          achievements={mockAchievements}
          user={user}
          onClose={() => setShowAchievements(false)} 
        />
      )}

      <NotificationCenter
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
        notifications={notifications}
        onMarkAsRead={markNotificationAsRead}
        onMarkAllAsRead={markAllNotificationsAsRead}
      />

      {showQuantumChallenges && (
        <QuantumChallenges 
          onClose={() => setShowQuantumChallenges(false)}
          userLevel={user.level}
        />
      )}

      {showAIBattle && (
        <AIBattleArena 
          onClose={() => setShowAIBattle(false)}
          onBattleComplete={(result, xpEarned) => {
            addXP(xpEarned);
            addNotification({
              title: result === 'victory' ? 'AI Battle Victory!' : 'AI Battle Complete',
              message: `You ${result === 'victory' ? 'defeated' : 'fought valiantly against'} an AI opponent and earned ${xpEarned} XP.`,
              type: result === 'victory' ? 'success' : 'info',
              priority: 'medium'
            });
          }}
        />
      )}

      {showRealWorld && (
        <RealWorldIntegration 
          onClose={() => setShowRealWorld(false)}
          userLevel={user.level}
        />
      )}

      {showMetaverse && (
        <MetaverseHub 
          onClose={() => setShowMetaverse(false)}
          userLevel={user.level}
        />
      )}

      {showNeuralHacking && (
        <NeuralHackingLab 
          onClose={() => setShowNeuralHacking(false)}
          userLevel={user.level}
        />
      )}

      {showBiometricLab && (
        <BiometricSpoofingLab 
          onClose={() => setShowBiometricLab(false)}
          userLevel={user.level}
        />
      )}

      {showConsciousnessSecurity && (
        <ConsciousnessSecurityCenter 
          onClose={() => setShowConsciousnessSecurity(false)}
          userLevel={user.level}
        />
      )}

      {showTimelineSecurity && (
        <TimelineSecurityHub 
          onClose={() => setShowTimelineSecurity(false)}
          userLevel={user.level}
        />
      )}

      <SettingsPage
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        user={user}
        onUpdateUser={(updates) => setUser(prev => ({ ...prev, ...updates }))}
        onLogout={handleLogout}
        onResetProgress={handleResetProgress}
      />
    </div>
  );
}

export default App;
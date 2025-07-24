import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Accessibility, Gamepad2, LogOut, RotateCcw, Save, X } from 'lucide-react';
import { User as UserType, UserSettings } from '../types';

interface SettingsPageProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserType;
  onUpdateUser: (updates: Partial<UserType>) => void;
  onLogout: () => void;
  onResetProgress: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  isOpen,
  onClose,
  user,
  onUpdateUser,
  onLogout,
  onResetProgress
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'privacy' | 'accessibility' | 'gameplay'>('profile');
  const [settings, setSettings] = useState<UserSettings>({
    notifications: {
      email: true,
      push: true,
      threatAlerts: true,
      dailyReminders: true,
      achievementUpdates: true,
      weeklyReports: false
    },
    privacy: {
      shareProgress: true,
      showOnLeaderboard: true,
      allowDataCollection: false
    },
    accessibility: {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false
    },
    gameplay: {
      difficulty: 'auto',
      hints: true,
      timeouts: true,
      autoSave: true
    }
  });

  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    avatar: user.avatar
  });

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSaveSettings = () => {
    onUpdateUser({
      name: profileData.name,
      email: profileData.email,
      avatar: profileData.avatar
    });
    // In a real app, you'd save settings to backend/localStorage
    onClose();
  };

  const handleResetProgress = () => {
    onResetProgress();
    setShowResetConfirm(false);
    onClose();
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
    { id: 'gameplay', label: 'Gameplay', icon: Gamepad2 }
  ];

  const avatarOptions = ['👤', '🛡️', '🕵️', '👩‍💻', '👨‍💻', '🦸‍♀️', '🦸‍♂️', '🥷', '👩‍🔬', '👨‍🔬'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Settings className="w-6 h-6 mr-2 text-cyan-400" />
              Settings
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="flex h-[70vh]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900 border-r border-gray-700 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-700 space-y-2">
              <button
                onClick={() => setShowResetConfirm(true)}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-yellow-400 hover:text-yellow-300 hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset Progress</span>
              </button>
              
              <button
                onClick={onLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-gray-700 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Profile Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Avatar</label>
                    <div className="flex flex-wrap gap-2">
                      {avatarOptions.map((avatar) => (
                        <button
                          key={avatar}
                          onClick={() => setProfileData(prev => ({ ...prev, avatar }))}
                          className={`w-12 h-12 text-2xl rounded-lg border-2 transition-colors ${
                            profileData.avatar === avatar
                              ? 'border-cyan-500 bg-cyan-600/20'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">Account Statistics</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Level:</span>
                        <span className="text-cyan-400 ml-2">{user.level}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Total XP:</span>
                        <span className="text-cyan-400 ml-2">{user.totalXp.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Missions:</span>
                        <span className="text-cyan-400 ml-2">{user.completedMissions.length}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Badges:</span>
                        <span className="text-cyan-400 ml-2">{user.badges.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Notification Settings</h3>
                
                <div className="space-y-4">
                  {Object.entries(settings.notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-white font-medium">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <p className="text-sm text-gray-400">
                          {key === 'email' && 'Receive notifications via email'}
                          {key === 'push' && 'Browser push notifications'}
                          {key === 'threatAlerts' && 'Critical security threat alerts'}
                          {key === 'dailyReminders' && 'Daily learning reminders'}
                          {key === 'achievementUpdates' && 'New badge and achievement notifications'}
                          {key === 'weeklyReports' && 'Weekly progress reports'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            notifications: { ...prev.notifications, [key]: e.target.checked }
                          }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Privacy Settings</h3>
                
                <div className="space-y-4">
                  {Object.entries(settings.privacy).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-white font-medium">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <p className="text-sm text-gray-400">
                          {key === 'shareProgress' && 'Allow others to see your learning progress'}
                          {key === 'showOnLeaderboard' && 'Display your name on global leaderboards'}
                          {key === 'allowDataCollection' && 'Help improve the app with anonymous usage data'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            privacy: { ...prev.privacy, [key]: e.target.checked }
                          }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'accessibility' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Accessibility Settings</h3>
                
                <div className="space-y-4">
                  {Object.entries(settings.accessibility).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-white font-medium">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <p className="text-sm text-gray-400">
                          {key === 'highContrast' && 'Increase color contrast for better visibility'}
                          {key === 'largeText' && 'Use larger text sizes throughout the app'}
                          {key === 'reducedMotion' && 'Reduce animations and motion effects'}
                          {key === 'screenReader' && 'Optimize for screen reader compatibility'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            accessibility: { ...prev.accessibility, [key]: e.target.checked }
                          }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gameplay' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Gameplay Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
                    <select
                      value={settings.gameplay.difficulty}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        gameplay: { ...prev.gameplay, difficulty: e.target.value as any }
                      }))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="auto">Auto (Adaptive)</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>

                  {['hints', 'timeouts', 'autoSave'].map((key) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-white font-medium">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <p className="text-sm text-gray-400">
                          {key === 'hints' && 'Show helpful hints during challenges'}
                          {key === 'timeouts' && 'Enable time limits for timed challenges'}
                          {key === 'autoSave' && 'Automatically save progress'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.gameplay[key as keyof typeof settings.gameplay] as boolean}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            gameplay: { ...prev.gameplay, [key]: e.target.checked }
                          }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-gray-700 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveSettings}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Reset Progress</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to reset all your progress? This will delete all your XP, badges, completed missions, and achievements. This action cannot be undone.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleResetProgress}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
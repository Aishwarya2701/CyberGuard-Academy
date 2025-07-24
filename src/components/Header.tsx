import React from 'react';
import { Shield, User, Bell, Settings, Menu } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  user: UserType;
  onProfileClick: () => void;
  onNotificationsClick: () => void;
  onSettingsClick: () => void;
  unreadNotifications?: number;
}

export const Header: React.FC<HeaderProps> = ({ 
  user, 
  onProfileClick, 
  onNotificationsClick, 
  onSettingsClick, 
  unreadNotifications = 0 
}) => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-lg sm:text-xl font-bold text-white hidden sm:block">CyberGuard Academy</h1>
            <h1 className="text-lg font-bold text-white sm:hidden">CyberGuard</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-gray-300">Level {user.level}</p>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(user.xp % 1000) / 10}%` }}
                  />
                </div>
                <span className="text-xs text-cyan-400">{user.xp} XP</span>
              </div>
            </div>
            
            {/* Mobile XP display */}
            <div className="sm:hidden">
              <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-300">L{user.level}</span>
                <div className="w-12 bg-gray-700 rounded-full h-1">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${(user.xp % 1000) / 10}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <button
                onClick={onNotificationsClick}
                className="relative p-1"
              >
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                {unreadNotifications > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">
                      {unreadNotifications > 9 ? '9+' : unreadNotifications}
                    </span>
                  </div>
                )}
              </button>
            </div>
            
            <button
              onClick={onSettingsClick}
              className="p-1"
            >
              <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </button>
            
            <button 
              onClick={onProfileClick}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-2 sm:px-3 py-2 rounded-lg transition-colors"
            >
              <span className="text-lg sm:hidden">{user.avatar}</span>
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hidden sm:block" />
              <span className="text-sm font-medium text-white hidden sm:block">{user.name}</span>
              <span className="text-sm font-medium text-white sm:hidden">{user.name.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
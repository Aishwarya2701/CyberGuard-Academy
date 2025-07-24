import { useState, useEffect } from 'react';
import { User, Badge, Mission, MiniGame, GameSession, Notification } from '../types';

const STORAGE_KEY = 'cybersecurity_app_user';
const NOTIFICATIONS_KEY = 'cybersecurity_app_notifications';

export const useUser = () => {
  const [user, setUser] = useState<User>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        joinDate: new Date(parsed.joinDate),
        badges: parsed.badges.map((badge: any) => ({
          ...badge,
          unlockedAt: new Date(badge.unlockedAt)
        }))
      };
    }
    
    return null;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const saved = localStorage.getItem(NOTIFICATIONS_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((notification: any) => ({
        ...notification,
        timestamp: new Date(notification.timestamp)
      }));
    }
    
    return [
      {
        id: '1',
        title: 'Welcome to CyberGuard Academy!',
        message: 'Start your cybersecurity journey with our beginner-friendly missions.',
        type: 'info' as const,
        timestamp: new Date(),
        isRead: false,
        priority: 'medium' as const
      },
      {
        id: '2',
        title: 'New Threat Alert',
        message: 'Critical vulnerability discovered in popular email clients. Update immediately.',
        type: 'threat' as const,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        isRead: false,
        priority: 'critical' as const
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  }, [notifications]);

  const addXP = (amount: number) => {
    setUser(prev => {
      const newTotalXp = prev.totalXp + amount;
      const newLevel = Math.floor(newTotalXp / 1000) + 1;
      const newXp = newTotalXp % 1000;
      
      return {
        ...prev,
        xp: newXp,
        totalXp: newTotalXp,
        level: newLevel
      };
    });
  };

  const addBadge = (badge: Badge) => {
    setUser(prev => {
      if (prev.badges.find(b => b.id === badge.id)) return prev;
      return {
        ...prev,
        badges: [...prev.badges, badge]
      };
    });
  };

  const completeMission = (missionId: string) => {
    setUser(prev => {
      if (prev.completedMissions.includes(missionId)) return prev;
      return {
        ...prev,
        completedMissions: [...prev.completedMissions, missionId]
      };
    });
  };

  const completeGame = (gameId: string, session: Omit<GameSession, 'id' | 'userId'>) => {
    setUser(prev => {
      const existingGame = prev.completedGames.find(g => g === gameId);
      if (!existingGame) {
        return {
          ...prev,
          completedGames: [...prev.completedGames, gameId]
        };
      }
      return prev;
    });
  };

  const updateRiskScore = (score: number) => {
    setUser(prev => ({
      ...prev,
      riskScore: Math.max(0, Math.min(100, score))
    }));
  };

  const updateStreak = () => {
    setUser(prev => ({
      ...prev,
      currentStreak: prev.currentStreak + 1
    }));
  };

  const updatePreferences = (preferences: Partial<User['preferences']>) => {
    setUser(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...preferences }
    }));
  };

  const resetProgress = () => {
    setUser(prev => ({
      ...prev,
      xp: 0,
      totalXp: 0,
      level: 1,
      completedMissions: [],
      completedGames: [],
      badges: [],
      currentStreak: 0,
      riskScore: 45
    }));
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'isRead'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      isRead: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, isRead: true })));
  };

  return {
    user,
    notifications,
    addXP,
    addBadge,
    completeMission,
    completeGame,
    updateRiskScore,
    updateStreak,
    updatePreferences,
    resetProgress,
    addNotification,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    setUser
  };
};
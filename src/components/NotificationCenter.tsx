import React, { useState } from 'react';
import { Bell, X, AlertTriangle, Info, CheckCircle, XCircle, Filter, BookMarked as MarkAsRead } from 'lucide-react';
import { Notification } from '../types';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead
}) => {
  const [filter, setFilter] = useState<'all' | 'unread' | 'threats' | 'achievements'>('all');

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'threat': return <AlertTriangle className="w-5 h-5 text-red-400" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'border-l-red-500 bg-red-900/20';
      case 'high': return 'border-l-orange-500 bg-orange-900/20';
      case 'medium': return 'border-l-yellow-500 bg-yellow-900/20';
      default: return 'border-l-blue-500 bg-blue-900/20';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    switch (filter) {
      case 'unread': return !notification.isRead;
      case 'threats': return notification.type === 'threat' || notification.type === 'warning';
      case 'achievements': return notification.type === 'success';
      default: return true;
    }
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Bell className="w-6 h-6 mr-2 text-cyan-400" />
              Notifications
              {unreadCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All', count: notifications.length },
                { key: 'unread', label: 'Unread', count: unreadCount },
                { key: 'threats', label: 'Threats', count: notifications.filter(n => n.type === 'threat' || n.type === 'warning').length },
                { key: 'achievements', label: 'Achievements', count: notifications.filter(n => n.type === 'success').length }
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key as any)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    filter === filterOption.key
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {filterOption.label} ({filterOption.count})
                </button>
              ))}
            </div>

            {unreadCount > 0 && (
              <button
                onClick={onMarkAllAsRead}
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <MarkAsRead className="w-4 h-4" />
                <span className="text-sm">Mark all read</span>
              </button>
            )}
          </div>
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-6">
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`border-l-4 rounded-lg p-4 transition-all cursor-pointer hover:bg-gray-700/50 ${
                  getPriorityColor(notification.priority)
                } ${!notification.isRead ? 'bg-gray-700/30' : 'bg-gray-700/10'}`}
                onClick={() => onMarkAsRead(notification.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <h3 className={`font-semibold ${!notification.isRead ? 'text-white' : 'text-gray-300'}`}>
                        {notification.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-gray-500">
                          {notification.timestamp.toLocaleString()}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          notification.priority === 'critical' ? 'bg-red-600 text-white' :
                          notification.priority === 'high' ? 'bg-orange-600 text-white' :
                          notification.priority === 'medium' ? 'bg-yellow-600 text-black' :
                          'bg-blue-600 text-white'
                        }`}>
                          {notification.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {!notification.isRead && (
                    <div className="w-3 h-3 bg-cyan-400 rounded-full flex-shrink-0" />
                  )}
                </div>

                {notification.actionUrl && (
                  <div className="mt-3">
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Take Action →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No notifications</h3>
              <p className="text-gray-400">You're all caught up!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
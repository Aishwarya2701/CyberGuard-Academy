import React, { useState } from 'react';
import { Clock, AlertTriangle, TrendingUp, ExternalLink, Filter, Search } from 'lucide-react';
import { NewsEvent } from '../types';

interface NewsCenterProps {
  events: NewsEvent[];
  onClose: () => void;
}

export const NewsCenter: React.FC<NewsCenterProps> = ({ events, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'critical' | 'high' | 'medium' | 'low'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'breach' | 'vulnerability' | 'attack' | 'regulation' | 'technology'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'high': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'low': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'breach': return '🔓';
      case 'vulnerability': return '🐛';
      case 'attack': return '⚔️';
      case 'regulation': return '📋';
      case 'technology': return '🔬';
      default: return '📰';
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSeverity = filter === 'all' || event.severity === filter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesSearch = searchTerm === '' || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSeverity && matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-cyan-400" />
              Cyber Threat Intelligence Center
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search threats..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Severities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as any)}
              className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Categories</option>
              <option value="breach">Data Breaches</option>
              <option value="vulnerability">Vulnerabilities</option>
              <option value="attack">Active Attacks</option>
              <option value="regulation">Regulations</option>
              <option value="technology">New Technology</option>
            </select>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-6">
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`border rounded-lg p-6 transition-all hover:border-cyan-500/50 ${getSeverityColor(event.severity)}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getCategoryIcon(event.category)}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.timestamp.toLocaleString()}</span>
                        </div>
                        <span className="capitalize">{event.category}</span>
                        <span className="text-gray-500">•</span>
                        <span>{event.source}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(event.severity)}`}>
                    {event.severity.toUpperCase()}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{event.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Impact Assessment:</h4>
                  <p className="text-sm text-gray-400">{event.impact}</p>
                </div>

                {event.actionItems.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Recommended Actions:</h4>
                    <ul className="space-y-1">
                      {event.actionItems.map((action, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.relatedMissions.length > 0 && (
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400">Related Training: </span>
                      <span className="text-sm text-cyan-400">{event.relatedMissions.length} missions available</span>
                    </div>
                    <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span className="text-sm">Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No threats found</h3>
              <p className="text-gray-400">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
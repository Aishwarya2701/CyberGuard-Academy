import React, { useState } from 'react';
import { Gamepad2, Trophy, Star, Play, Lock, Target, Zap } from 'lucide-react';
import { MiniGame } from '../types';
import { GamePlayer } from './GamePlayer';
import { mockMiniGames } from '../utils/mockData';

interface MiniGamesProps {
  games: MiniGame[];
  onGameSelect: (game: MiniGame) => void;
  onGameComplete: (gameId: string, score: number, xpEarned: number) => void;
  userLevel: number;
  completedGames: string[];
}

export const MiniGames: React.FC<MiniGamesProps> = ({ 
  games, 
  onGameSelect, 
  onGameComplete, 
  userLevel, 
  completedGames 
}) => {
  const [selectedGame, setSelectedGame] = useState<MiniGame | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'completed' | 'locked'>('all');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGameIcon = (type: string) => {
    switch (type) {
      case 'spot-the-phish': return '🎣';
      case 'decode-breach': return '🔓';
      case 'secure-password': return '🔒';
      case 'social-engineering-defense': return '🛡️';
      case 'network-defense': return '🌐';
      case 'crypto-puzzle': return '🧩';
      default: return '🎮';
    }
  };

  const isGameUnlocked = (game: MiniGame) => {
    return userLevel >= game.unlockLevel;
  };

  const isGameCompleted = (game: MiniGame) => {
    return completedGames.includes(game.id);
  };

  const getFilteredGames = () => {
    switch (filter) {
      case 'available':
        return games.filter(g => isGameUnlocked(g) && !isGameCompleted(g));
      case 'completed':
        return games.filter(g => isGameCompleted(g));
      case 'locked':
        return games.filter(g => !isGameUnlocked(g));
      default:
        return games;
    }
  };

  const filteredGames = getFilteredGames();

  if (selectedGame) {
    return (
      <GamePlayer
        game={selectedGame}
        onComplete={(score, xpEarned) => {
          onGameComplete(selectedGame.id, score, xpEarned);
          setSelectedGame(null);
        }}
        onExit={() => setSelectedGame(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Mini Games</h2>
        <p className="text-gray-400">Practice cybersecurity skills through interactive challenges</p>
      </div>

      {/* Game Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-cyan-400">{completedGames.length}</div>
          <div className="text-sm text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-green-400">
            {games.filter(g => isGameUnlocked(g) && !isGameCompleted(g)).length}
          </div>
          <div className="text-sm text-gray-400">Available</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-yellow-400">
            {games.reduce((sum, g) => sum + g.bestScore, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-400">Total Score</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-purple-400">{games.length}</div>
          <div className="text-sm text-gray-400">Total Games</div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'All Games', count: games.length },
          { key: 'available', label: 'Available', count: games.filter(g => isGameUnlocked(g) && !isGameCompleted(g)).length },
          { key: 'completed', label: 'Completed', count: completedGames.length },
          { key: 'locked', label: 'Locked', count: games.filter(g => !isGameUnlocked(g)).length }
        ].map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => setFilter(filterOption.key as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterOption.key
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {filterOption.label} ({filterOption.count})
          </button>
        ))}
      </div>

      {/* Featured Game */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">🎯 Featured Game</h3>
            <p className="text-purple-200">Master phishing detection with our most popular game</p>
          </div>
          <div className="text-4xl">🎣</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">850</div>
            <div className="text-sm text-gray-300">High Score</div>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">1,247</div>
            <div className="text-sm text-gray-300">Players</div>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">4.8★</div>
            <div className="text-sm text-gray-300">Rating</div>
          </div>
        </div>
        
        <button
          onClick={() => {
            const phishingGame = games.find(g => g.type === 'spot-the-phish');
            if (phishingGame && isGameUnlocked(phishingGame)) {
              setSelectedGame(phishingGame);
            }
          }}
          className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-105"
        >
          Play Now
        </button>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => {
          const isUnlocked = isGameUnlocked(game);
          const isCompleted = isGameCompleted(game);
          
          return (
            <div
              key={game.id}
              className={`bg-gray-800 rounded-lg border border-gray-700 p-6 transition-all duration-200 cursor-pointer group ${
                isUnlocked ? 'hover:border-cyan-500' : 'opacity-75'
              }`}
              onClick={() => {
                if (isUnlocked) {
                  setSelectedGame(game);
                  onGameSelect(game);
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{getGameIcon(game.type)}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {game.name}
                    </h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)} inline-block`}>
                      {game.difficulty}
                    </div>
                  </div>
                </div>
                
                {!isUnlocked ? (
                  <Lock className="w-6 h-6 text-gray-500" />
                ) : isCompleted ? (
                  <Trophy className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Play className="w-6 h-6 text-cyan-400" />
                )}
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                {game.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Star className="w-4 h-4" />
                      <span>+{game.xpReward} XP</span>
                    </div>
                    
                    {game.bestScore > 0 && (
                      <div className="flex items-center space-x-1 text-sm text-yellow-400">
                        <Trophy className="w-4 h-4" />
                        <span>Best: {game.bestScore}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {!isUnlocked ? (
                  <div className="bg-gray-700 text-gray-400 py-2 px-4 rounded-lg text-center">
                    <div className="text-sm">Unlock at Level {game.unlockLevel}</div>
                  </div>
                ) : (
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    {isCompleted ? 'Play Again' : 'Play Now'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Game Categories */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Game Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Detection Games', icon: '🔍', count: 2, description: 'Spot threats and anomalies' },
            { name: 'Defense Games', icon: '🛡️', count: 2, description: 'Protect systems and data' },
            { name: 'Puzzle Games', icon: '🧩', count: 2, description: 'Solve security challenges' }
          ].map((category, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h4 className="font-bold text-white mb-1">{category.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{category.description}</p>
              <div className="text-cyan-400 font-medium">{category.count} games</div>
            </div>
          ))}
        </div>
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
          <p className="text-gray-400">Try adjusting your filter or level up to unlock more games.</p>
        </div>
      )}
    </div>
  );
};
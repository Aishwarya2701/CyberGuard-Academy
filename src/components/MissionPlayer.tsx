import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Star, CheckCircle, XCircle, Lightbulb, Timer } from 'lucide-react';
import { Mission, Scenario } from '../types';

interface MissionPlayerProps {
  mission: Mission;
  onComplete: (xpEarned: number) => void;
  onExit: () => void;
}

export const MissionPlayer: React.FC<MissionPlayerProps> = ({ mission, onComplete, onExit }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  const currentScenario = mission.scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === mission.scenarios.length - 1;
  const totalScenarios = mission.scenarios.length;

  useEffect(() => {
    if (currentScenario?.timeLimit) {
      setTimeLeft(currentScenario.timeLimit);
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev && prev <= 1) {
            handleTimeUp();
            return null;
          }
          return prev ? prev - 1 : null;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentScenarioIndex]);

  const handleTimeUp = () => {
    setShowExplanation(true);
  };

  const handleAnswer = (answer: any) => {
    setAnswers(prev => ({ ...prev, [currentScenario.id]: answer }));
    
    const isCorrect = Array.isArray(currentScenario.correctAnswer) 
      ? JSON.stringify(answer.sort()) === JSON.stringify(currentScenario.correctAnswer.sort())
      : answer === currentScenario.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + currentScenario.points);
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (isLastScenario) {
      const xpEarned = Math.floor((score / mission.scenarios.reduce((sum, s) => sum + s.points, 0)) * mission.xpReward);
      onComplete(xpEarned);
    } else {
      setCurrentScenarioIndex(prev => prev + 1);
      setShowExplanation(false);
      setShowHint(false);
      setTimeLeft(null);
    }
  };

  const renderScenario = () => {
    switch (currentScenario.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">{currentScenario.question}</h3>
            <div className="space-y-3">
              {currentScenario.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    showExplanation
                      ? index === currentScenario.correctAnswer
                        ? 'bg-green-600/20 border-green-500 text-green-200'
                        : answers[currentScenario.id] === index
                        ? 'bg-red-600/20 border-red-500 text-red-200'
                        : 'bg-gray-700 border-gray-600 text-gray-300'
                      : 'bg-gray-700 border-gray-600 text-white hover:border-cyan-500 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'typing':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">{currentScenario.question}</h3>
            <textarea
              placeholder="Type your answer here..."
              onChange={(e) => setAnswers(prev => ({ ...prev, [currentScenario.id]: e.target.value }))}
              disabled={showExplanation}
              className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
            {!showExplanation && (
              <button
                onClick={() => handleAnswer(answers[currentScenario.id] || '')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Submit Answer
              </button>
            )}
          </div>
        );

      case 'drag-drop':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">{currentScenario.question}</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-gray-300">Options</h4>
                <div className="space-y-2">
                  {currentScenario.options?.map((option, index) => (
                    <div
                      key={index}
                      draggable
                      className="bg-gray-700 p-3 rounded-lg cursor-move hover:bg-gray-600 transition-colors"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-gray-300">Drop Zone</h4>
                <div className="min-h-32 bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-4">
                  <p className="text-gray-400 text-center">Drag items here</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-400">Scenario type not implemented yet</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onExit}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Exit Mission</span>
          </button>
          
          <div className="flex items-center space-x-6">
            {timeLeft && (
              <div className="flex items-center space-x-2 text-yellow-400">
                <Timer className="w-5 h-5" />
                <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            )}
            
            <div className="flex items-center space-x-2 text-cyan-400">
              <Star className="w-5 h-5" />
              <span>{score} points</span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Scenario {currentScenarioIndex + 1} of {totalScenarios}
            </span>
            <span className="text-sm text-gray-400">
              {Math.round(((currentScenarioIndex + 1) / totalScenarios) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentScenarioIndex + 1) / totalScenarios) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mission Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{mission.title}</h2>
            <h3 className="text-lg text-cyan-400 mb-4">{currentScenario.title}</h3>
            {currentScenario.description && (
              <p className="text-gray-300 mb-6">{currentScenario.description}</p>
            )}
          </div>

          {renderScenario()}

          {/* Hint Button */}
          {currentScenario.hints && !showExplanation && (
            <div className="mt-6">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Lightbulb className="w-5 h-5" />
                <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
              </button>
              {showHint && (
                <div className="mt-2 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-200">{currentScenario.hints[0]}</p>
                </div>
              )}
            </div>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-6 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                {answers[currentScenario.id] === currentScenario.correctAnswer ? (
                  <CheckCircle className="w-6 h-6 text-green-400" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400" />
                )}
                <h4 className="text-lg font-bold text-white">
                  {answers[currentScenario.id] === currentScenario.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h4>
              </div>
              <p className="text-gray-300 mb-4">{currentScenario.explanation}</p>
              
              <button
                onClick={handleNext}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {isLastScenario ? 'Complete Mission' : 'Next Scenario'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
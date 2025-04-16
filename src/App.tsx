import React, { useState } from 'react';
import { Trophy, RefreshCw, Brain, Timer, HelpCircle, Briefcase, Calendar, Code2, User, DollarSign, TrendingUp, Globe } from 'lucide-react';
import { frameworks } from './data/frameworks';

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [bestScore, setBestScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAnswer = (answer: string) => {
    const correct = answer === frameworks[currentLevel].name;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
    setShowResult(true);
    setShowDetails(true);

    if (currentLevel === frameworks.length - 1) {
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000;
      if (bestTime === null || timeTaken < bestTime) {
        setBestTime(timeTaken);
      }
      if (score + (correct ? 1 : 0) > bestScore) {
        setBestScore(score + (correct ? 1 : 0));
      }
    }
  };

  const nextLevel = () => {
    if (currentLevel < frameworks.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setShowResult(false);
      setShowHint(false);
      setShowDetails(false);
    }
  };

  const resetGame = () => {
    setCurrentLevel(0);
    setScore(0);
    setShowResult(false);
    setStartTime(Date.now());
    setShowHint(false);
    setShowDetails(false);
  };

  const isGameOver = currentLevel === frameworks.length - 1 && showResult;
  const progressPercentage = ((currentLevel + 1) / frameworks.length) * 100;
  const currentFramework = frameworks[currentLevel];

  const difficultyColor = {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500"
  }[currentFramework.difficulty];

  const demandColor = {
    High: "text-green-500",
    Medium: "text-yellow-500",
    Low: "text-red-500"
  }[currentFramework.details.marketInfo.marketDemand];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Вгадай технологію за емодзі</h1>
          <div className="text-gray-600 mb-2">
            Рівень {currentLevel + 1} з {frameworks.length} | Рахунок: {score}
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className={`${difficultyColor} font-medium`}>
              {currentFramework.difficulty}
            </span>
            <span className="text-blue-500 font-medium">
              {currentFramework.category}
            </span>
          </div>
          {bestScore > 0 && (
            <div className="flex items-center justify-center gap-2 text-sm text-purple-600 mt-2">
              <Trophy className="w-4 h-4" />
              <span>Рекорд: {bestScore} / {frameworks.length}</span>
            </div>
          )}
          {bestTime && (
            <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
              <Timer className="w-4 h-4" />
              <span>Найкращий час: {bestTime.toFixed(1)}с</span>
            </div>
          )}
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{currentFramework.emojis}</div>
          {!showResult && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-purple-500 hover:text-purple-700 transition-colors flex items-center gap-1 mx-auto"
            >
              <HelpCircle className="w-4 h-4" />
              {showHint ? 'Сховати підказку' : 'Показати підказку'}
            </button>
          )}
          {showHint && !showResult && (
            <div className="mt-2 text-sm text-gray-600 italic">
              💡 {currentFramework.hint}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {!showResult ? (
            currentFramework.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-white border-2 border-purple-500 text-purple-500 rounded-lg py-3 px-6 font-semibold hover:bg-purple-50 transition-colors"
              >
                {option}
              </button>
            ))
          ) : (
            <div className="col-span-2">
              <div className={`text-xl font-bold mb-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isCorrect ? 'Правильно! 🎉' : `Неправильно 😢 Це був ${currentFramework.name}`}
              </div>

              {showDetails && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
                  <h3 className="font-semibold text-gray-800 mb-3">Інформація:</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span>Створено: {currentFramework.details.yearCreated}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-600" />
                      <span>Розробник: {currentFramework.details.creator}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                      <span>Зарплатна вилка: {currentFramework.details.marketInfo.salaryRange}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-gray-600" />
                      <span>Попит на ринку: <span className={demandColor}>{currentFramework.details.marketInfo.marketDemand}</span></span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <div className="font-medium">Популярні регіони:</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {currentFramework.details.marketInfo.popularRegions.map((region, index) => (
                            <span 
                              key={index}
                              className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded"
                            >
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Code2 className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <div className="font-medium">Ключові особливості:</div>
                        <ul className="list-disc list-inside ml-2 text-sm">
                          {currentFramework.details.keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <div className="font-medium">Рівні досвіду:</div>
                        <div className="space-y-2 mt-1">
                          <div className="text-sm">
                            <span className="text-green-600 font-medium">Junior:</span> {currentFramework.details.marketInfo.experienceLevels.junior}
                          </div>
                          <div className="text-sm">
                            <span className="text-yellow-600 font-medium">Middle:</span> {currentFramework.details.marketInfo.experienceLevels.middle}
                          </div>
                          <div className="text-sm">
                            <span className="text-red-600 font-medium">Senior:</span> {currentFramework.details.marketInfo.experienceLevels.senior}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-gray-600 mt-1" />
                      <div>
                        <div className="font-medium">Популярні позиції:</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {currentFramework.details.jobTitles.map((title, index) => (
                            <span 
                              key={index}
                              className="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded"
                            >
                              {title}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!isGameOver ? (
                <button
                  onClick={nextLevel}
                  className="bg-purple-500 text-white rounded-lg py-3 px-6 font-semibold hover:bg-purple-600 transition-colors w-full"
                >
                  Наступний рівень
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-2xl">
                    <Brain className="text-purple-500" />
                    <span>Фінальний рахунок: {score} / {frameworks.length}</span>
                  </div>
                  <button
                    onClick={resetGame}
                    className="flex items-center justify-center gap-2 bg-purple-500 text-white rounded-lg py-3 px-6 font-semibold hover:bg-purple-600 transition-colors w-full"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Грати знову
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
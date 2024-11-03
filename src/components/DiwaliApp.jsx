import React, { useState, useEffect } from 'react';
import CelebrationEffect from './CelebrationEffect';
import CountdownTimer from './CountdownTimer';
import GreetingCardGenerator from './GreetingCardGenerator';
import Quiz from './Quiz';
import WrongAnswersReview from './WrongAnswersReview';
import { Sparkles, Timer, Trophy, ArrowRight, Mail, Info } from 'lucide-react';


const DiwaliApp = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [greeting, setGreeting] = useState(false);
  const [quizResults, setQuizResults] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleQuizComplete = (score, wrongAnswers) => {
    setQuizResults({ score, wrongAnswers });
    setQuizCompleted(true);
    setCurrentView('results');
  };

  if (showWelcome) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <CelebrationEffect />
        <div className="text-center animate-bounce">
          <h1 className="text-6xl font-bold text-yellow-500 mb-4">Happy Diwali!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <CountdownTimer />

      {currentView === 'home' && (
        <div className="text-center space-y-4">
          <button
            onClick={() => setCurrentView('quiz')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full text-xl font-bold"
          >
            Start Diwali Quiz
          </button>
          <button
            onClick={() => setCurrentView('greetings')}
            className="block mx-auto bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold"
          >
            Create Greeting Card
          </button>
        </div>
      )}

      {currentView === 'quiz' && !quizCompleted && (
        <Quiz onComplete={handleQuizComplete} />
      )}

      {currentView === 'results' && quizResults && (
        <div className="max-w-2xl mx-auto text-center bg-purple-800 p-8 rounded-lg">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-3xl mb-4">Quiz Completed!</h3>
          <p className="text-xl mb-6">Your Score: {quizResults.score} out of 10</p>

          {quizResults.score >= 5 && <CelebrationEffect />}

          <div className="space-y-4">
            <button
              onClick={() => {
                setQuizCompleted(false);
                setCurrentView('quiz');
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-bold"
            >
              Try Again
            </button>

            {quizResults.wrongAnswers.length > 0 && (
              <button
                onClick={() => setCurrentView('wrongAnswers')}
                className="block mx-auto bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-bold"
              >
                Review Wrong Answers
              </button>
            )}
            <button
              onClick={() => {
                setQuizCompleted(false)
                setCurrentView('home');
              }}
              className='hover:underline hover:text-black'>Back</button>
          </div>
        </div>
      )}

      {currentView === 'wrongAnswers' && quizResults && (
        <WrongAnswersReview
          wrongAnswers={quizResults.wrongAnswers}
          onBack={() => setCurrentView('results')}
        />
      )}

      {currentView === 'greetings' && (
        <div>
          <GreetingCardGenerator />
          <button
            onClick={() => {
              setGreeting(false)
              setCurrentView('home');
            }}
            className='hover:underline'>Back</button>
        </div>
      )}
    </div>
  );
};

export default DiwaliApp;
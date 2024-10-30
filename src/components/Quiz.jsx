import React, { useState, useEffect } from 'react';
import { Sparkles, Timer, Trophy, ArrowRight, Mail, Info } from 'lucide-react';
import quizData from '../utils/question.json';

const Quiz = ({ onComplete }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [isReview, setIsReview] = useState(false);

    useEffect(() => {
        // Select 10 random questions
        const shuffledQuestions = [...quizData.questions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
        setQuestions(shuffledQuestions);
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) {
            onComplete(score, wrongAnswers);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleAnswer = (selectedOption) => {
        const currentQ = questions[currentQuestion];
        if (selectedOption !== currentQ.correct) {
            setWrongAnswers(prev => [...prev, {
                question: currentQ.question,
                userAnswer: currentQ.options[selectedOption],
                correctAnswer: currentQ.options[currentQ.correct]
            }]);
        } else {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            onComplete(score, wrongAnswers);
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    if (timeLeft <= 0) {
        return (
            <div className="max-w-2xl mx-auto bg-purple-800 p-8 rounded-lg text-center">
                <h3 className="text-2xl mb-4">Time's Up!</h3>
                <p>You scored {score} out of 10</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-purple-800 p-8 rounded-lg">
            <div className="flex justify-between mb-4">
                <div>Question {currentQuestion + 1} of 10</div>
                <div className="text-yellow-400">
                    <Timer className="inline mr-2" />
                    {formatTime(timeLeft)}
                </div>
            </div>

            {questions[currentQuestion] && (
                <>
                    <h3 className="text-2xl mb-6">{questions[currentQuestion].question}</h3>
                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                className="w-full text-left p-4 rounded bg-purple-700 hover:bg-purple-600 transition-colors"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};


export default Quiz;
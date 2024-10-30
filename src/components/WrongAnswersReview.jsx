const WrongAnswersReview = ({ wrongAnswers, onBack }) => {
    return (
        <div className="max-w-2xl mx-auto bg-purple-800 p-8 rounded-lg">
            <h3 className="text-2xl mb-6">Review Wrong Answers</h3>
            {wrongAnswers.map((answer, index) => (
                <div key={index} className="mb-6 p-4 bg-purple-700 rounded">
                    <p className="font-bold mb-2">{answer.question}</p>
                    <p className="text-red-400 mb-2">Your answer: {answer.userAnswer}</p>
                    <p className="text-green-400">Correct answer: {answer.correctAnswer}</p>
                </div>
            ))}
            <button
                onClick={onBack}
                className="bg-yellow-500 text-black px-6 py-2 rounded-full"
            >
                Back to Results
            </button>
        </div>
    );
};


export default WrongAnswersReview;
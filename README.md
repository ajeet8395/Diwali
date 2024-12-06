🎆 Diwali Celebration App 🎇
Welcome to the Diwali Celebration App! This web app adds festive vibes to Diwali by offering a countdown to Diwali, a Diwali quiz, and a greeting card creator that users can customize and share on social media.

## Features

High-Level Description
This is a multi-feature React application celebrating Diwali, designed to provide an engaging and interactive user experience. The application consists of several key components that showcase different interactive features:

## Welcome Screen

1. Displays a festive welcome message with a celebration effect
2. Automatically transitions after 3 seconds


## Countdown Timer

1. Displays a real-time countdown to Diwali 2025
2. Dynamic calculation of remaining days, hours, minutes, and seconds


## Quiz Component

1. 10-question quiz about Diwali
2. Timed quiz (10 minutes)
3. Tracks score and wrong answers
4.  Provides result analysis and review option


## Greeting Card Generator

1. Allows users to create personalized Diwali greeting cards
2. Multiple background templates
3. Share functionality across social platforms


## React and Component Design

1. How do you manage state across different components in this application?
"In this Diwali application, I've used React's useState and useEffect hooks for state management. The primary state management is centralized in the DiwaliApp component, which acts as a parent component. For example, I use state variables like currentView to manage different screens, quizCompleted to track quiz status, and quizResults to store quiz performance. This approach allows for a clean, hierarchical state management where child components receive props and trigger state changes through callback functions."

2. Explain the use of useEffect in the CountdownTimer and Quiz components
"In the CountdownTimer, useEffect is used to create a real-time countdown. It sets up an interval that updates every second, calculating the time difference between the current date and Diwali 2025. For the Quiz component, I use useEffect for two primary purposes: first, to randomly select 10 questions from the question bank when the component mounts, and second, to implement a timer mechanism that decrements time and triggers quiz completion when time runs out."

3. What strategies did you use to randomize quiz questions?
"I used JavaScript's Math.random() method with the sort() function to shuffle the questions. Specifically, I implemented this logic:

4. How does the component hierarchy work in this application?
"The application follows a nested component structure with DiwaliApp as the root. It manages the overall application state and renders child components like CountdownTimer, Quiz, GreetingCardGenerator, and WrongAnswersReview based on the current view state. Each child component is responsible for a specific feature and communicates with the parent through props and callback functions."

5. Describe your approach to creating reusable components
"I focused on creating modular, single-responsibility components. For instance, CelebrationEffect is a completely reusable component that can be used anywhere we want a sparkle effect. The ShareModal is designed to be flexible, accepting card data as props. This approach promotes code reusability and makes the components easily maintainable and testable."


6. How do you handle state transitions between different views?
"I use a currentView state variable in the DiwaliApp component to manage view transitions. It's essentially an enum-like state that can be 'home', 'quiz', 'results', 'wrongAnswers', or 'greetings'. When a user clicks a button, I update this state, which triggers a re-render and shows the corresponding component. For example:

7. Explain the state management in the Quiz component
"The Quiz component manages multiple state variables:

questions: Stores the randomly selected questions
currentQuestion: Tracks the current question index
score: Keeps track of correct answers
wrongAnswers: Stores details of incorrect answers
timeLeft: Manages the quiz timer

When a user answers a question, the handleAnswer function updates these states, moving to the next question or completing the quiz based on the current state."

8. How do you track and store wrong answers during the quiz?
"I maintain a wrongAnswers state array. When a user selects an incorrect answer, I push an object with the question, user's answer, and correct answer:


9. What performance considerations did you make?
"I used React's built-in optimization techniques like:


Minimal state management
Using functional components with hooks
Lazy loading of components
Efficient use of useEffect with proper cleanup
Memoization could be added for complex calculations

For the celebration effect, I used a performant approach by generating a fixed number of sparkle elements with randomized positions and delays."

10. How would you optimize rendering?
"I would consider implementing:


React.memo() for preventing unnecessary re-renders
Using useMemo() for complex calculations
Implementing code splitting with React.lazy()
Virtualizing long lists if we expand the quiz questions

In the current implementation, the components are relatively lightweight, so major optimizations aren't crucial."
Technical Challenges

11. Countdown timer logic explanation
"The countdown is implemented using JavaScript's Date object. In the useEffect, I calculate the difference between the target date (Diwali 2025) and the current time. Then I break down this difference into days, hours, minutes, and seconds using mathematical operations:
🎆 Diwali Celebration App 🎇
Welcome to the Diwali Celebration App! This web app adds festive vibes to Diwali by offering a countdown to Diwali, a Diwali quiz, and a greeting card creator that users can customize and share on social media.

Features
Welcome Banner: A 3-second splash screen with a Diwali wish and fireworks.
Countdown Timer: Displays the days remaining until Diwali in large, prominent text.
Quiz Game: A timed quiz with 10 questions about Diwali history, traditions, and celebrations. Users can review answers at the end.
Greeting Card Creator: Users can craft custom Diwali messages and share them across various social media platforms.
Tech Stack
Frontend: React.js + Vite
Styling: Tailwind CSS
Icons: Lucide-react (optional for social sharing icons)
Getting Started
To run this project locally, follow these steps:

Prerequisites
Node.js and npm installed.
Basic knowledge of React and Tailwind CSS.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/diwali-celebration-app.git
cd diwali-celebration-app
Install Dependencies:

bash
Copy code
npm install
Run the App:

bash
Copy code
npm run dev
Open the App: Go to http://localhost:3000 in your browser to view the app.

Project Structure
src/components: Contains all reusable components, including the splash banner, countdown timer, quiz components, and greeting card creator.
src/utils: Holds any helper functions (e.g., date handling, quiz question data).
src/assets: Stores images, icons, and other static assets.
How to Use
Welcome Screen: Wait for the 3-second Diwali wish and fireworks animation.
Home Page:
Countdown Timer: See the countdown to Diwali at the top.
Start Quiz: Begin a 10-question quiz with a 10-minute timer.
Greeting Card Creator: Customize a message and share it on social media.
Quiz and Review: After finishing the quiz, users can review their answers and check correct responses.
Available Scripts
In the project directory, you can run:

npm run dev: Runs the app in development mode.
npm run build: Builds the app for production to the dist folder.
npm run preview: Runs a local preview of the production build.
Customization
Modify Quiz Questions: Update or add new quiz questions in src/utils/questions.js.
Adjust Countdown Date: Set the Diwali date in src/utils/countdown.js.
Greeting Card Styles: Customize the card layout and styles in src/components/GreetingCard.jsx and update Tailwind configurations as needed.
Dependencies
React: JavaScript library for building user interfaces.
Vite: Fast build tool for modern web projects.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
Lucide-react: Icons for social media sharing.
Deployment
To deploy this project on Vercel or any other platform:

Create a Vercel account and link it to your GitHub repository.
Import the repository in Vercel and deploy.
Live Demo: Diwali Celebration App

License
This project is licensed under the MIT License. See LICENSE for more details.
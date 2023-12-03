# Trivia Game

A simple trivia game built with React, TypeScript, Redux Toolkit, and Axios.

## Features

- **Quiz Component:** Interactive quiz component where users can answer multiple-choice questions.
- **Result Page:** Displays the total number of questions served, correct answers, and incorrect answers.
- **Async Thunk for Quiz Fetching:** Utilizes Redux Toolkit's async thunk to fetch quiz data from an API, handling rate limiting.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Redux Toolkit:** State management library for React applications.
- **TypeScript:** Adds static typing to JavaScript for enhanced development experience.
- **Axios:** HTTP client for making API requests.
- **React Router:** Library for navigation in a React application.
- **HTML-React-Parser:** Converts HTML strings to React components.
- **Testing Library:** Suite of utilities for testing React components.

## Project Structure

- **src/:** Contains the source code of the React application.
  - **components/:** Reusable React components.
  - **context/:** Application-wide context providers.
  - **store/:** Redux store configuration, slices, and async thunks.
  - **api/:** Axios instance setup for API requests.
  - **common/:** Common utilities and components.
  - **pages/:** Top-level pages for routing.

## Setup

- **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/trivia-game.git
   cd trivia-game
   npm install
   npm start

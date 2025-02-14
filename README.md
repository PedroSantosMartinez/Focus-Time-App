# Focus Timer

A simple and elegant focus timer application built with React, TypeScript, and Tailwind CSS. This app helps you stay focused by providing a countdown timer with start, pause, and reset functionality.

## Table of Contents

1. Setup Instructions

2. Dependencies List

3. Usage Guidelines

4. Component Documentation

## Setup Instructions
Prerequisites

    Node.js (v16 or higher)

    npm or yarn (package manager)

Steps

    Clone the repository:
    bash
    Copy

    git clone https://github.com/your-username/focus-timer.git
    cd focus-timer

    Install dependencies:
    bash
    Copy

    npm install

    or
    bash
    Copy

    yarn install

    Start the development server:
    bash
    Copy

    npm start

    or
    bash
    Copy

    yarn start

    Open the app:
    Visit http://localhost:3000 in your browser.

Dependencies List
Core Dependencies

    React: JavaScript library for building user interfaces.

    TypeScript: Adds static typing to JavaScript.

    Tailwind CSS: Utility-first CSS framework for styling.

    shadcn/ui: Reusable UI components built with Tailwind CSS.

Development Dependencies

    Vite: Fast build tool for modern web development.

    ESLint: Linting tool for JavaScript/TypeScript.

    Prettier: Code formatting tool.

Usage Guidelines
Starting the Timer

    Click the Start Focus Session button to begin the countdown.

    The timer will count down from 25 minutes (default session duration).

Pausing the Timer

    Click the Pause Focus Session button to pause the timer.

Resetting the Timer

    Click the Reset button to reset the timer to 25 minutes.

Customizing Session Duration

    (Optional) Modify the time state in TimerDisplay.jsx to set a custom session duration.

Component Documentation
1. TimerDisplay.jsx

    Description: Displays the countdown timer and integrates the TimerControls component.

    Props: None.

    State:

        time: Tracks the remaining time in seconds.

        isRunning: Tracks whether the timer is active.

    Methods:

        formatTime(seconds): Converts seconds into MM:SS format.

        useEffect: Manages the timer logic and interval cleanup.

2. TimerControls.jsx

    Description: Provides buttons to start, pause, and reset the timer.

    Props:

        onStart: Function to start or pause the timer.

        onReset: Function to reset the timer.

        isRunning: Boolean indicating whether the timer is running.

        sessionDuration: Current session duration in minutes.

    State: None.

    Methods: None.
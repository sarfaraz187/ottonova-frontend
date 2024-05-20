# Ottonova Frontend Codebase

The repository holds code for ottonova coding challenge. The primary objective of the application is to fetch a list of cities from the backend and have it displayed in the webpage. The application is response based on the screen sizes.

## Tech Stack

- **Vite**: Next-generation frontend tooling. It's fast, modern, and provides instant server start.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Swiper.js**: A powerful and modern slider library for building touch-enabled sliders and carousels.
- **shadcn/ui**: Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
- **Playwright**: Playwright enables reliable end-to-end testing for modern web apps.
- **TankStack Query**: Powerful asynchronous state management for TS/JS, React,

### Preview

The application has been deployed to Github Pages. Kindly use the below link to preview the application.

```
 https://sarfaraz187.github.io/ottonova-frontend/
```

**Note:** Make sure to run the backend which in the website

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your local machine.

### Installation

Clone the repository:

```
git clone https://github.com/sarfaraz187/ottonova-frontend.git
```

Navigate to the project directory and install dependencies

```
yarn or npm install
```

### Running the Application

To start the development server, run

```
yarn or npm run dev
```

This will start the development server and open the application in your default web browser. The server automatically reloads when you make changes to the source code.

### Building for Production

To build the application for production, run:

```
yarn or npm run build
```

This will generate a production-ready build of your application in the dist directory.

### Test Cases

Playwright has been installed and test cases have been added to the Home and City pages. In order to run the test cases in UI mode. Please run the below command:

```
yarn or npm run test
```

### Pages

- **Home Page:** The home page lists the cities in the form of clickable cards and displays basic details and thumbnail of the city.

- **City Page:** When one of the cards from the home page is clicked the user is redirected to the city page. Where the user can see in detail about the city.

# Ottonova Frontend Codebase

The repository holds code for ottonova coding challenge. The primary objective of the application is to fetch a list of cities from the backend and have it displayed in the webpage. The application is response based on the screen sizes.

## Tech Stack

- **Vite**: Next-generation frontend tooling. It's fast, modern, and provides instant server start.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Swiper.js**: A powerful and modern slider library for building touch-enabled sliders and carousels.
- **shadcn/ui**: Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

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

### Pages

- **Home Page:** The home page lists the cities in the form of clickable cards and displays basic details and thumbnail of the city.

- **City Page:** When one of the cards from the home page is clicked the user is redirected to the city page. Where the user can see in detail about the city.

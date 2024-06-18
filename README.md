# News Aggregator Application

Welcome to the NEWS aggregator Application! This web application aggregates and displays personalized news articles fetched from various APIs based on user preferences.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Keys Setup](#api-keys-setup)
- [Usage](#usage)

## Features

- **Personalized Feed:**
  - Select sources, categories, and authors to fetch personalized articles.
  - Display fetched articles in a responsive grid layout on the Home page.

- **Search Functionality:**
  - Search for articles using keywords on the Search page.
  - Filter search results by sources, categories, and authors.

- **Session Storage:**
  - Persist fetched articles using session storage to maintain state between page navigations.

- **Loading Indicator:**
  - Display a loading indicator while fetching articles to improve user experience.

- **Responsive Design:**
  - Utilizes Tailwind CSS for responsive styling, ensuring compatibility across devices.

## Technologies Used

- **Frontend:**
  - React.js: JavaScript library for building user interfaces.
  - React Router: Declarative routing for React applications.
  - Redux: State management library for managing application state.
  - Axios: Promise-based HTTP client for making API requests.
  - Tailwind CSS: Utility-first CSS framework for styling.

- **APIs:**
  - News API: Provides access to news articles from various sources.
  - Guardian API: Offers news articles and content from The Guardian.
  - New York Times API: Retrieves articles and content from The New York Times.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kmdurga67/news-aggregator.git
   cd news-aggregator

2. **Install Dependencies**

    ```bash
    npm install

3. **Set up API keys**
   - Obtain API keys for News API, Guardian API, and New York Times API.
   - Create a .env file in the main directory.
   - Take help of .env.example file for creating variables of News API, Guardian API & New York Times API.

4. **Run the app;ication**
   
   ```
   npm start

## Usage

## Home Page:

- Displays a personalized feed of articles based on default or user-selected preferences.
- Clicking on "Search" redirects to the Search page.

## Search Page:

- Allows users to search for articles using keywords.
- Search for source, category to filter articles. After searching any source, category hit button "filter data".
- Selet date to filter articles from the searched articles. After selecting any date hit button "filter data".
- Clicking "Search" fetches and displays relevant articles.
 
## Article List:

- Displays fetched articles in a responsive grid layout.
- Uses session storage to persist and display articles between page navigations.

## Personalized feed 

- Select any value from the categories, sources & authors to get relevant data.
-  If saving data to sessionstorage to display data when switches between pages.

## Use Docker

- Modify Dockerfile as per your directory
- Build and Run the Docker Container
  ```bash
  docker build -t news-aggregator .

- Run the Docker Container with the .env File
  ```bash
  docker run --env-file .env -p 3000:3000 news-aggregator

- Run docker to your system
  

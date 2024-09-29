# Weather Dashboard

This is a simple weather dashboard web application that allows users to search for weather data by city name. The dashboard provides both the current weather and a 5-day forecast for the selected city. The application fetches data from the OpenWeather API and allows users to save and recall their search history.

## Table of Contents

Features
Technologies Used
Setup Instructions
Usage
API Information
Local Storage
Contributing
License

## Features

Search Functionality: Users can search for any city to get real-time weather updates.
Current Weather: Displays current temperature, wind speed, and humidity.
5-Day Forecast: Provides a 5-day weather outlook, including temperature, wind speed, and humidity.
Search History: The last searched city is saved and shown automatically upon page reload. The city history is saved in local storage.
Predefined Cities: Quick buttons to view weather for popular cities (e.g., Miami and Chicago).

## Technologies Used

HTML5: The structure of the application.
CSS3: Basic styling, with Bootstrap 5 for responsive design.
JavaScript (ES6+): Used for fetching weather data, manipulating the DOM, and handling local storage.
Day.js: For date manipulation and formatting.
OpenWeather API: Provides real-time weather data and 5-day forecasts.

## Setup Instructions

Prerequisites
A modern web browser (Chrome, Firefox, Safari, etc.)
Internet connection to fetch weather data from the OpenWeather API
Steps:
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/weather-dashboard.git
Navigate to the Project Directory:

bash
Copy code
cd weather-dashboard
Open the HTML File in a Browser:
Simply open the index.html file in a web browser:

On most systems, you can double-click the file or right-click and choose "Open With" and select a browser.
Install Bootstrap Locally (Optional):
The project already uses the Bootstrap CDN, but you can install Bootstrap locally if needed:

bash
Copy code
npm install bootstrap

## Usage

Search for a City:
Enter a city name in the search bar and click "Search" to retrieve the weather data. The current weather and a 5-day forecast will be displayed.

City History:
After a city is searched, it is saved in localStorage and will be available for future sessions. When you refresh the page, the most recently searched city will automatically display.

Quick Access:
There are buttons for quick access to Miami and Chicago's weather data.

## API Information

This project uses the OpenWeather API to retrieve weather data. You'll need to sign up for an API key.

API Key Setup
You can replace the provided API key (apiKey = '72979675a19cce8d2b57ed1f7ce224a2') with your own in the JavaScript code.
Find this line in the index.html file:
javascript
Copy code
const apiKey = 'your-api-key-here';
Replace 'your-api-key-here' with your actual API key.
OpenWeather API Endpoints Used:
Current Weather Data:
Endpoint: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial

5-Day Weather Forecast:
Endpoint: https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}&units=imperial

## Local Storage

The application uses browser localStorage to persist the search history.

City Search History:
When a city is searched, its name is saved in the cityHistory array in localStorage. This allows users to automatically retrieve the last searched city when they reload the page.

Retrieving Data:
When the page is reloaded, the last searched city is fetched from localStorage and the weather data for that city is displayed.

## Contributing
If you want to contribute to this project, please follow these steps:

Fork the Repository:
Click the "Fork" button on the top-right of the repository page to fork this project.

Create a Branch:

bash
Copy code
git checkout -b feature-branch
Commit Changes:
Make your changes and commit them with a descriptive message.

bash
Copy code
git commit -m "Added new feature"
Push the Branch:

bash
Copy code
git push origin feature-branch
Submit a Pull Request:
Go to the original repository and submit a pull request with your changes.

## License

This project is open-source and available under the MIT License.
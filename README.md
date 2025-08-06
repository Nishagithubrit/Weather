🧪 Features
City Search – Enter a city name and click the button to get current weather data.

Weather Display – Shows temperature, weather description, humidity (optionally), wind speed (if implemented), and location name.

Error Handling – Displays a friendly message when the user enters an invalid city or if the request fails.

Responsive Design – Optimized for desktop and mobile screens.

📂 Project Structure
bash
Copy
Edit
/index.html     # Main HTML layout including search input, button, and weather display container  
/style.css     # CSS to style the UI: fonts, colors, layout, responsiveness  
/script.js     # JavaScript: listens for user input, calls OpenWeatherMap API, updates UI accordingly  
⚙️ Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Nishagithubrit/Weather.git
cd Weather
Obtain a free API key by signing up at OpenWeatherMap.

Open script.js and replace* the placeholder API key with your own:

js
Copy
Edit
const apiKey = "YOUR_API_KEY_HERE";
Run the app by opening index.html in your browser (no server required).

🚀 Usage
Enter the name of any city in the search input.

Click "Get Weather" (or whatever your button is labeled).

View the current weather information displayed on the screen.

If the city is not found or there’s an error, you'll see an error message like: “City not found!” or a similar notification.

🧩 Code Overview
HTML (index.html)
Basic page structure with:

A form or input for entering city names

A button to initiate the fetch request

A container (e.g. a div#weather-info) to display weather details

CSS (style.css)
Styles for layout, font choices, buttons, input styling, and visual feedback.

Media queries to ensure the app is mobile responsive.

JavaScript (script.js)
Grabs user input (city name) from the DOM.

Constructs a request URL:

bash
Copy
Edit
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
Sends a fetch() request, processes the JSON response.

Updates the UI with temperature, description, and other details.

Handles errors by showing user-friendly messages.

📈 Future Enhancements
Add 5-day or hourly forecast

Style improvements (e.g. dynamic icons, background changes based on condition)

Geolocation support to auto-detect and show local weather

Light/dark theme toggle

Allow users to save favorite cities or switch between them

📜 License
This project is available under the MIT License — feel free to use, modify, and expand it as you wish.


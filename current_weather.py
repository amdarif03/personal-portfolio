import requests
from tkinter import *
from PIL import Image, ImageTk

# Function to fetch weather data from OpenWeatherMap API
def get_weather(city):
    API_KEY = "2666fb25aae6f7ba3e7b784500d8938a" 
    API_KEY ="2666fb25aae6f7ba3e7b784500d8938a"
    API_KEY ="2666fb25aae6f7ba3e7b784500d8938a"
     # Replace with your API key
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        weather_desc = data['weather'][0]['description'].capitalize()
        temperature = data['main']['temp']
        humidity = data['main']['humidity']
        wind_speed = data['wind']['speed']

        result = f"Weather: {weather_desc}\nTemperature: {temperature}°C\nHumidity: {humidity}%\nWind Speed: {wind_speed} m/s"
        weather_result_label.config(text=result)
    else:
        weather_result_label.config(text="City not found or error in fetching data")

# Function to handle the search event
def search_weather():
    city = city_entry.get()
    if city:
        get_weather(city)

# Create the main application window
app = Tk()
app.title("Real-Time Weather Monitor")
app.geometry("400x400")
app.config(bg="#87CEEB")

# Add a header with the application name
header_label = Label(app, text="Real-Time Weather Monitor", font=("Arial", 20, "bold"), bg="#87CEEB", fg="white")
header_label.pack(pady=20)

# Entry box to input city name
city_entry = Entry(app, width=20, font=("Arial", 14), justify='center')
city_entry.pack(pady=10)

# Button to search weather
search_button = Button(app, text="Check Weather", font=("Arial", 14, "bold"), bg="#4682B4", fg="white", command=search_weather)
search_button.pack(pady=10)

# Label to display the weather result
weather_result_label = Label(app, text="", font=("Arial", 14), bg="#87CEEB", fg="white", justify="left")
weather_result_label.pack(pady=20)

# Load and display a weather icon (optional) for design
try:
    image = Image.open("weather_icon.png")  # Replace with your weather icon path
    image = image.resize((100, 100), Image.ANTIALIAS)
    weather_icon = ImageTk.PhotoImage(image)
    icon_label = Label(app, image=weather_icon, bg="#87CEEB")
    icon_label.pack(pady=10)
except:
    pass  # No image file found

# Run the Tkinter main loop
app.mainloop()
{
   "coord": {
      "lon": 7.367,
      "lat": 45.133
   },
   "weather": [
      {
         "id": 501,
         "main": "Rain",
         "description": "moderate rain",
         "icon": "10d"
      }
   ],
   "base": "stations",
   "main": {
      "temp": 284.2,
      "feels_like": 282.93,
      "temp_min": 283.06,
      "temp_max": 286.82,
      "pressure": 1021,
      "humidity": 60,
      "sea_level": 1021,
      "grnd_level": 910
   },
   "visibility": 10000,
   "wind": {
      "speed": 4.09,
      "deg": 121,
      "gust": 3.47
   },
   "rain": {
      "1h": 2.73
   },
   "clouds": {
      "all": 83
   },
   "dt": 1726660758,
   "sys": {
      "type": 1,
      "id": 6736,
      "country": "IT",
      "sunrise": 1726636384,
      "sunset": 1726680975
   },
   "timezone": 7200,
   "id": 3165523,
   "name": "Province of Turin",
   "cod": 200
}  
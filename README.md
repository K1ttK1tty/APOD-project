# Astronomy Picture of the Day
Made by fan, that application allow you to view APOD with data you want. Also it has a fancy UI.
# How to run
##### The `/Back` directory contains the server application, and a `/Front` directory contains the web app.
Inside the `/Back` folder create file `.env` and write following:
```
PORT = <YOUR-PORT>
URL='https://api.nasa.gov/planetary/apod?api_key='
KEY='<YOUR-NASA-API-KEY>'
```
Then run the following commands:
```
npm install
npm start
```

Inside the `/Front` run the following commands:
```
npm install
npm start
```
Application should run at http://localhost:3000

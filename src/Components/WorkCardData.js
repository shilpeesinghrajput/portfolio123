import pro from "../assets/max.jpg";
import pro1 from "../assets/max1.jpg";
import pro2 from "../assets/max2.jpg";

const projectCardData = [
  {
    imageSrc: pro,
    title: "Weather App ",
    text: "This is a simple weather app made on react using openWeather API. it fetches weather data based on cities. ",
    view:  "/projects/weatherApp",
  },

  {
    imageSrc: pro1,
    title: "Todo List App",
    text: "It’s a list of tasks you need to complete or things that you want to do. ",
    view: "/projects/todo",
  },

  {
    imageSrc: pro2,
    title: "Weather Website Design ",
    text: "Weather is something that never remains constant.Getting to know precise weather conditions helps people to plan out their daily shedule. with  weather forecasting technology reaching to the skies. dissenination of the forecast to has taken diverse routes. ",
    view: "url.com",
  },
];
export default projectCardData;

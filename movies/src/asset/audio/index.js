import {
  faMoon,
  faSun,
  faVolumeHigh,
  faCloudRain,
  faDove,
  faRoad,
  faFire,
  faKeyboard,
  faThunderstorm
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const audios = [
  { icon: {faDove}, id: "birds", path: require("./birds.mp3"), name: "Bird" },
  {
    icon: {faRoad},
    id: "city_traffic",
    path: require("./city_traffic.mp3"),
    name: "City traffic",
  },
  {
    icon: {faFire}, 
    id: "campfire",
    path: require("./campfire.mp3"),
    name: "Campfire",
  },
  {
    icon: {faCloudRain},
    id: "window_rain",
    path: require("./window_rain.mp3"),
    name: "Window rain",
  },
  {
    icon: {faKeyboard},
    id: "keyboard",
    path: require("./keyboard.mp3"),
    name: "Keyboard",
  },
  {
    icon: {faThunderstorm},
    id: "thunders",
    path: require("./thunders.mp3"),
    name: "Thunder",
  },
  {
    icon: {faRoad}, 
    id: "brown-noise",
    path: require("./brown-noise.mp3"),
    name: "Brown noise",
  },
  
  {
    icon: {faDove},
    id: "deepspace",
    path: require("./deepspace.mp3"),
    name: "Deepspace",
  },
  { icon: {faDove}, id: "fan", path: require("./fan.mp3"), name: "Fan" },
  {
    icon: {faDove},
    id: "fireplace",
    path: require("./fireplace.mp3"),
    name: "Fireplace",
  },
  {
    icon: {faDove},
    id: "forest_night",
    path: require("./forest_night.mp3"),
    name: "Forest night",
  },


  { icon: {faDove}, id: "ocean", path: require("./ocean.mp3"), name: "Ocean" },
  {
    icon: {faDove},
    id: "people_talk_inside",
    path: require("./people_talk_inside.mp3"),
    name: "People talking",
  },
  {
    icon: {faDove},
    id: "pink-noise",
    path: require("./pink-noise.mp3"),
    name: "Pink noise",
  },
  {
    icon: {faDove},
    id: "rain_city",
    path: require("./rain_city.mp3"),
    name: "Rain city",
  },
  {
    icon: {faDove},
    id: "rain_forest",
    path: require("./rain_forest.mp3"),
    name: "Rain forest",
  },
  { icon: {faDove}, id: "river", path: require("./river.mp3"), name: "River" },
  { icon: {faDove}, id: "snow", path: require("./snow.mp3"), name: "Snow" },
  {
    icon: {faDove},
    id: "summer_storm",
    path: require("./summer_storm.mp3"),
    name: "Summer storm",
  },
  
  { icon: {faDove}, id: "train", path: require("./train.mp3"), name: "Train" },
  {
    icon: {faDove},
    id: "underwater",
    path: require("./underwater.mp3"),
    name: "Underwater",
  },
  { icon: {faDove}, id: "waves", path: require("./waves.mp3"), name: "Waves" },
  {
    icon: {faDove},
    id: "white-noise",
    path: require("./white-noise.mp3"),
    name: "White noise",
  },
  { icon: {faDove}, id: "wind", path: require("./wind.mp3"), name: "Wind" },
  {
    icon: {faDove},
    id: "window_rain",
    path: require("./window_rain.mp3"),
    name: "Window rain",
  },
];

export default audios;

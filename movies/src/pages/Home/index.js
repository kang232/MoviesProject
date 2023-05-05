import "./home.css";
import image from "../../asset/image";
import ControlAudio from "../../components/ControlAudio/ControlAudio";
import LeftControl from "../../components/LeftControl/LeftControl";
import RightControl from "../../components/RightControl/RightControl";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [day, setDay] = useState(true);
  const [raining, setRaining] = useState(true);
  const [a, setA] = useState(0);

  const handleChangeMode = (e) => {
    console.log("day:", day);
    setDay(!day);
    console.log(e);
    console.log("day:", day);
    console.log("change mode");
    console.log("rain:", raining);
    const mode = document.querySelectorAll(".mode");
    const rain = document.querySelectorAll(".rain");

    if (day) {
      mode[1].classList.add("visible");
      mode[0].classList.remove("visible");
    } else if (!day ) {
      mode[0].classList.add("visible");
      mode[1].classList.remove("visible");
        }
  };

  const handleChangeWeather = (e) => {
    console.log(e);
    console.log("day:", day);

    console.log("change Weather");
    setRaining(!raining);
    console.log("rain:", raining);

    const rain = document.querySelectorAll(".rain");
    const mode = document.querySelectorAll(".mode");
    // if (day && raining) {
    //   rain[1].classList.add("visible");
    //   rain[0].classList.remove("visible");
    //   mode[1].classList.remove("visible");
    //   mode[0].classList.remove("visible");
    // } else if (day && !raining) {
    //   rain[0].classList.add("visible");
    //   mode[1].classList.remove("visible");
    //   rain[1].classList.remove("visible");
    //   rain[0].classList.remove("visible");
    // } else if (!day && raining) {
    //   mode[1].classList.add("visible");
    //   mode[0].classList.remove("visible");
    //   rain[1].classList.remove("visible");
    //   rain[0].classList.remove("visible");
    // } else if (!day && !raining) {
    //   mode[1].classList.add("visible");
    //   mode[0].classList.remove("visible");
    //   rain[0].classList.remove("visible");
    //   rain[0].classList.remove("visible");
    // }
  };

  return (
    <>
      <div className="home-page">
        <Switch onChange={handleChangeMode} className="mode-switch" 
          unCheckedChildren={
            <FontAwesomeIcon
                    icon={faMoon}
                    color="white"
                  />
                  
                }
                checkedChildren={
                  <FontAwesomeIcon
                    icon={faSun}
                    color="white"
                  />
                }
                style={{ backgroundColor: "orange" }}
        />
        <video
          src={image.outside}
          loop
          muted
          autoPlay
          className="outside mode day visible"
        ></video>
        <video
          src={image.outsidenight}
          loop
          muted
          autoPlay
          className="outsidenight mode night"
        ></video>
        <video
          src={image.outside_rain}
          loop
          muted
          autoPlay
          className="outsiden-rain dayrain "
        ></video>
        <video
          src={image.outsidenight_rain}
          loop
          muted
          autoPlay
          className="outsidenight nightrain"
        ></video>
        <LeftControl />
        {/* <RightControl /> */}
        <ControlAudio />
      </div>
    </>
  );
}

export default Home;

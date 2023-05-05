import { Tooltip, Switch, Popover, Slider } from "antd";
import React, { useState } from "react";
import {
  faMoon,
  faSun,
  faVolumeHigh,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomButton({ path, tooltip, id, icon }) {
  const [state, setState] = useState({
    muted: false,
    volume: 0.5,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClickPlay = (e) => {
    const audio = document.querySelector(`#${id}`);
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      audio.play();
      audio.volume = 0.5;
    }
  };
  const handleVolumeChange = (e) => {
    const audio = document.querySelector(`#${id}`);
    audio.volume = e / 100;
    setState({ ...state, volume: e / 100 });
  };
  const content = () => {
    if (isPlaying) {
      return (
        <div className="slider-audio">
          <Slider
            min={0}
            max={100}
            value={state.muted ? 0 : state.volume * 100}
            onChange={handleVolumeChange}
          />
        </div>
      );
    } else {
      return false;
    }
  };
  return (
    <>
      <Tooltip title={tooltip}>
        <>
          {isPlaying ? (
            <Popover placement="left" content={content}>
              <Switch
                onChange={handleClickPlay}
                unCheckedChildren={
                  <FontAwesomeIcon
                    icon={Object.entries(icon)[0][1]}
                    color="white"
                  />
                }
                checkedChildren={
                  <FontAwesomeIcon
                    icon={Object.entries(icon)[0][1]}
                    color="white"
                  />
                }
                style={{ backgroundColor: "orange" }}
                checked={isPlaying}
                className="switch-item"
              />
            </Popover>
          ) : (
            <Switch
              onChange={handleClickPlay}
              unCheckedChildren={
                <FontAwesomeIcon
                  icon={Object.entries(icon)[0][1]}
                  color="white"
                />
              }
              checkedChildren={
                <FontAwesomeIcon
                  icon={Object.entries(icon)[0][1]}
                  color="white"
                />
              }
              style={{ backgroundColor: "orange" }}
              checked={isPlaying}
              className="switch-item"
            />
          )}
        </>
        <audio src={path} id={id} loop />
      </Tooltip>
    </>
  );
}

export default CustomButton;

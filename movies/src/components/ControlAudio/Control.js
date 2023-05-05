import { Slider, Popover } from "antd";
import React, { forwardRef, useState } from "react";
import {
  faMoon,
  faSun,
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeHigh,
  faHeart,
  faVolumeLow,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/control.css";
const Controls = forwardRef(
  (
    {
      onPlayPause,
      playing,
      onMute,
      muted,
      volume,
      onVolumeChange,
      onVolumeSeekDown,
      onSeekMouseDown,
    },
    ref
  ) => {
    return (
      <div ref={ref} className="control">
        <div className="fav">
          <FontAwesomeIcon icon={faHeart} color="white" />
        </div>
        <div className="prev">
          <FontAwesomeIcon icon={faBackward} color="white" />
        </div>

        <button onClick={onPlayPause} className="toggle-play">
          {playing ? (
            <FontAwesomeIcon icon={faPause} color="white" />
          ) : (
            <FontAwesomeIcon icon={faPlay} color="white" />
          )}
        </button>
        <div className="next">
          <FontAwesomeIcon icon={faForward} color="white" />
        </div>
        <Popover
        
          content={
            <div className="container-volume" >
              <Slider
                min={0}
                max={100}
                value={muted ? 0 : volume}
                onChange={onVolumeChange}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onVolumeSeekDown}
                className="volume"
              />
            </div>
          }
        >
          <button onClick={onMute} className="icon-volume">
            {muted ? (
              <FontAwesomeIcon icon={faVolumeMute} color="white" fontSize={18}/>
            ) : volume > 50 ? (
              <FontAwesomeIcon icon={faVolumeHigh} color="white" fontSize={18}/>
            ) : (
              <FontAwesomeIcon icon={faVolumeLow} color="white" fontSize={18}/>
            )}
          </button>
        </Popover>
        {/* <div className="control">
          
          
          <div className="toggle-play" onClick={handleClickPlay}>
            <FontAwesomeIcon icon={faPlay} color="white" className="play" />
            <FontAwesomeIcon icon={faPause} color="white" className="pause" />
          </div>
         
          <div className="volume">
            <FontAwesomeIcon icon={faVolumeHigh} color="white" />
          </div>
        </div> */}
      </div>
    );
  }
);

export default Controls;

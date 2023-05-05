import {
  faMoon,
  faSun,
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeHigh,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import audio from "../../asset/audio/audio.mp3";
import ReactPlayer from 'react-player'
import Controls from "./Control";


function ControlAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [state, setState] = useState({
    playing: false,
    controls: false,
    muted: false,
    played: 0,
    volume: 50,
    loop: false,
  })
  const playerRef = useRef(null);
  const controlsRef = useRef(null);
  const handleVolumeChange = (e) => {
    setState({
      ...state,
      volume: e,
      muted: e === 0 ? true : false,
    });
  };
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };
  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleVolumeSeekDown = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };
  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };
  return (
    <>
      <div className="bot">
      <ReactPlayer
      width={0}
      height={0}

            ref={playerRef}
            url="https://www.youtube.com/watch?v=hlWiI4xVXKY&ab_channel=SoothingRelaxation"
            playing={state.playing}
            controls={false}
            volume={state.volume / 100}
            muted={state.muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
            }}
          />
          <Controls 
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={state.playing}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            muted={state.muted}
            volume={state.volume}
            onMute={hanldeMute}
            onSeekMouseDown={handleSeekMouseDown}
          />
      <audio id="audio" src={audio} />
      </div>
    </>
  );
}

export default ControlAudio;

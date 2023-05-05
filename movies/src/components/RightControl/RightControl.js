import { Switch } from "antd";
import "./css/index.css";
import {
  faMoon,
  faSun,
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RightControl() {
  return (
    <>
      <div className="right">
      <Switch
              // onChange={handleClickPlay}
              unCheckedChildren={
                <FontAwesomeIcon
                  icon={faSun}
                  color="white"
                />
              }
              checkedChildren={
                <FontAwesomeIcon
                  icon={faMoon}
                  color="white"
                />
              }
              style={{ backgroundColor: "orange" }}
              className="switch-item"
            />
      </div>
    </>
  );
}

export default RightControl;

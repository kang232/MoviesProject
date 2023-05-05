import audios from "../../asset/audio";
import CustomButton from "../ButtonCustom";
import "./css/index.css";

function LeftControl() {
  return (
    <>
      <div className="left">
        <div className="wrap-button">
          {audios.map((item, index) => {
            return (
              <div className="switch-btn"
                key={index}
              >
              <CustomButton
                path={item.path}
                tooltip={item.name}
                id={item.id}
                icon={item.icon}
                iconName={item.iconName}
              />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LeftControl;

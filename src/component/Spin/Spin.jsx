import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";

import "./Spin.scss";

export const Spin = (props) => {
  const spinner = useSelector((state) => state.appReducer.loading);

  return (
    <div className="loader-styles">
      <Audio
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinner}
      />
    </div>
  );
};

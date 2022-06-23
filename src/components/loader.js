import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const loader = useSelector((state) => state.loaderReducer.loader);

  return (
    <Fragment>
      {loader && (
        <div className="progress-loading-wrapper">
          <div className="loading-content">
            <span>Loading...</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Loader;

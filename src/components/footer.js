import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-4">
          <div className="col-12">
            <hr />
            <p>
              <FontAwesomeIcon icon={faCopyright} /> 2020 | Movie Time
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

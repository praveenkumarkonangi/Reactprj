import React from "react";
import im1 from "./1.png";
const One = () => {
  return (
    <div>
      <div className="continer">
        <div className="row">
          <div className="col">
            <nav class="navbar navbar-dark bg-dark">
              <form class="form-inline">
                <img src={im1} alt="im1" />
              </form>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </nav>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default One;

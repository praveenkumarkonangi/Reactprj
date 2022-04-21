import React from "react";
import im from "./1.png";
import im2 from "./2.png";
import im3 from "./3.png";
import Header from "./Header";

const Components = () => {
  return (
    <>
    <Header/>
      <div className="container w-50 mt-5">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <center>
                  <img src={im} alt="Cake"  />
                  <h5>Coffee</h5>
                </center>

                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <center>
                  <img src={im2} alt="Cake" className="bg" />
                  <h5>Muffins</h5>
                </center>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <center>
                  <img src={im3} alt="Cake" style={{ width: 130 }} />
                  <br />
                  <h3>Cakes</h3>
                </center>

                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;

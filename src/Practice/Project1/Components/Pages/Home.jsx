import React from "react";
import Banner from "../Images/banner-image.jpg";
export const Home = () => {
  return (
    <div>
      <section>
        <div className="continer">
          <div className="row m-0">
            <img src={Banner} alt="Banner" class="banner" />
          </div>
        </div>
      </section>
      <section>
        <div className="continer my-5">
          <div className="row m-0 py-3">
            <div className="col text-center ">
              <h4 className="sm-heading">PROVIDE HIGH QUALITY </h4>
              <h1 class="lg-heading">The Consultancy</h1>
            </div>
          </div>

          <div className="col  m-6">
            <div className="text-content">
              <p>
                All Dimensions Design Consulting was formed by Gus Affara in
                2019 as an independant consultacy driven to provide high quality
                specialist advice and design in the field of building services
                engineering.
              </p>

              <p>
                Gus is a mechanical enginner, registered with the Institute of
                Engineers Australia. He is a registered building practitioner
                (RBP) in victoria. Gus has over 20 years of extensive experience
                related to most sectors of the building services industry.
              </p>
              <p>
                All Dimensions Design is fully committed to provide high
                quality, cost effective and personalised service to a broader
                range of clients and sub-contractors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="continer my-md-5 mb-5">
          <div className="row m-0">
            <div className="col pt-0 py-3 ">
              <div class="gutter">
                <h4>Mechanical HVAC Services:</h4>
              </div>
            </div>
          </div>
          <div className="row py-3 pt-0 m-0">
            <div className="col md-6">
                <div className="column">
                    <div className=" d-flex home-services-list ">
                        <i class='bi bi-asterisk '></i>
                        <p className="ml-2">Refrigeration Plants.</p>
                        

                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;

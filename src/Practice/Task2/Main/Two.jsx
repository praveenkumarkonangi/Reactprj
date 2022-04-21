import React from "react";
/* import im1 from "./5.jpg"; */
import im2 from "./2.png";
import im3 from "./3.png";
import im4 from "./2014.png";
import im5 from "./pp.png";
import im6 from "./our.png";
import im7 from "./groom.png";
import im8 from "./bride.jpg";
import im9 from './photos.png'
const Two = () => {
  return (
    <div>
      <div className="continer">
        <div className="row m-0">
          <div className="col ml-0">
            <div className="Asside">
              {/* <img src={im1} alt="im1" width="108.5%"   className="ml-0"/> */}
            </div>
          </div>
          <div className="col ">
            <div>
              <div className="img2">
                <img src={im2} alt="im2" />
              </div>
              <div className="heading">
                <p>INVITE YOU TO CELEBRATE AT THEIR WEDDING</p>
              </div>
              <div className="im3">
                <img src={im3} alt="im3" />
              </div>
            </div>
            <div className="row">
              <div className="colborder border-secondary">
                <div className="col2">
                  <h1>THURSDAY, SEPTEMBER 10</h1>
                  <img src={im4} alt="k" />
                </div>
                <hr />
              </div>
              <div className="col border-1">
                <div className="sh">
                  <h2>FIVE O'CLOCK IN THE EVENING</h2>
                </div>
                <div className="col3 border-1">
                  <img src={im5} alt="fsf" className="m-2" />
                </div>

                <hr />
              </div>
              <hr />
            </div>
            <div class="callout">
              <a href="#section-6" class="button radius js-scroll">
                <i class="fa fa-envelope"></i>{" "}
                <span class="btn-label">Click here to RSVP today</span>
              </a>
            </div>
            <div className="our m-5">
              <img src={im6} alt="im5" className="text-center" />
            </div>
            <div class="card-group">
              <div class="card">
                <img class="card-img-top" src={im7} alt="Card" />
                <div class="card-body">
                  
                  <p class="card-text">
                    When I hear the buzz of the little world among the stalks,
                    and grow familiar with the countless indescribable forms of
                    the insects and flies, then I feel the presence of the
                    Almighty, who formed us in his own image, and the breath
                  </p>
                  <p class="card-text">
                    I throw myself down among the tall grass by the trickling
                    stream; and, as I lie close to the earth, a thousand unknown
                    plants are noticed by me:
                  </p>
                  <h5 className="float-right">- Kevin's Story</h5>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={im8} alt="Card" />
                <div class="card-body">
                  <p class="card-text">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart.
                  </p>
                  <p class="card-text">
                    I am alone, and feel the charm of existence in this spot,
                    which was created for the bliss of souls like mine. I am so
                    happy, my dear friend, so absorbed in the exquisite sense of
                    mere tranquil existence, that I neglect my talents.
                  </p>
                  <h5 className="float-right">- Cecelia's Story</h5>
                </div>
              </div>
            </div>
            <div className='potos'>
              <div className="row">
              <img src={im9} alt="im9"/>
              
              </div>
              <div className="col d-md-flex">
                <h1>hello world</h1>
                <div className="col">
                  <h1>hello</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;

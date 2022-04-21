import React from "react";
import im from "./heading.png";

const Wedding = () => {
  return (
    <>
      {/* Section */}
      <div className="container">
        {/* Row 1 */}
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img src={im} alt="heading" />
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="col-12">
            <div>
              <fieldset className="scheduler-border w-100">
                <legend class="scheduler-border">
                  Kindly respond by March 14, 2014. We look forward to
                  celebrating with you!
                </legend>

                <div className="d-flex" style={{ columnGap: 15 }}>
                  <div className="form-group w-50">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your first name is required"
                    />
                  </div>
                  <div className="form-group w-50">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Your last name is required"
                    />
                  </div>
                </div>
                <div className="d-flex" style={{ columnGap: 15 }}>
                  <div class="form-group w-50">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="name@yourdomain.com"
                    />
                  </div>
                  <div className="form-group w-50">
                    <label for="exampleInputPassword1">Phone</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="A phone number is optional"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border1 w-100 ">
                <legend className="scheduler-border">
                  Will you be attending?
                </legend>
                <div className="d-flex" style={{ columnGap: 20 }}></div>
                <form>
                  <div class="row">
                    <div class="col">
                      <input
                        type="radio"
                        class="form-control"
                        placeholder="First name"
                      />
                      <label>Accepts with Pleasure!</label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </form>
              </fieldset>
              <fieldset className="border2 w-100 ">
                <legend className="scheduler-border">
                  Please select your meal choices
                </legend>
                <div className="d-flex" style={{ columnGap: 15 }}>
                  <div className="form-group w-100">
                    <div class="dropdown">
                      <label>desirt</label>
                      <br />
                      <select>
                        <option>None</option>
                        <option>veg</option>
                        <option>NoN-veg</option>
                        <option>beef</option>
                      </select>
                    </div>
                  </div>
                  <div class="dropdown">
                    <label>meal</label>
                    <select>
                      <option>None</option>
                      <option>veg</option>
                      <option>NoN-veg</option>
                      <option>beef</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <input type="submit" className="btn btn-danger " />
        </div>
      </div>
      <div className="continer">
        <div className="row m-0">
          <div className="col text-center">
            <p>
              For any questions please email us:
              <a href="mailto:info@yourdomain.com" title="E-mail Us">
                info@yourdomain.com
              </a>
            </p>
          </div>
        </div>
        <div className="row m-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1648311162534!5m2!1sen!2sin"
            width="100%"
            height="450"
            title=".."
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="float-left mt-5">
          <p>
            2013<a href="http://demo.themechills.com/eternity">Eternity</a>/BUY
            IT ON<a href="https://themechills.com/eternity">ThemeForest</a>
          </p>
        </div>
        <div className="float-right mt-5">
          <p>
            <a href="http://demo.themechills.com/eternity">Eternity</a>POWERED
            BY<a href="https://themechills.com/eternity">ThemeForest</a>
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Wedding;

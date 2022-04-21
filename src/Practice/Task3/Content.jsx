import React from "react";
import im from "./1.png";
import im1 from "./2.png";
import im2 from "./3.png";
const Content = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-4  ml-0">
            <div class="girl">
            <img src={im} alt="im"/>

            </div>
          </div>
          <div className="col-7 ml-5">
            <div id="about">
              <h1 >About</h1>
            </div>
            <div id="about">
              <p>Natalie Pereira</p>
            </div>
            <div id="p">
              <p>
                {" "}
                Bespoke, custom-designed, one-off, unique. However you say it,
                fashion is designed to make a statement as individual as you
                are. Specialising in bespoke, one-of-a-kind wedding rings and
                engagement rings, as well as unique statement jewellery pieces
                featuring exquisite gemstones and pearls, Natalie Pereira offers
                a personal, exclusive, one-on-one design experience, where the
                only limits are your imagination.
              </p>
            </div>
            <div id="p">
              <p>
                Natalie’s design process involves working closely with her
                clients, getting to know them on a personal level, and
                interpreting their style to perfectly capture their personality
                and lifestyle in a custom jewellery piece. With Natalie as both
                your personal designer, and the artisan bringing your special
                piece of jewellery to life, you can be assured that no detail is
                missed, and no one else will have something exactly the same.
              </p>
            </div>
          </div>
        </div>
        <div id="p">
          <p>
            Sometimes, you don’t know exactly what your style is until you see
            it, and feel it. Natalie offers a collection of ready-to-wear,
            limited edition designs, created with love, and inspired by the
            beauty of both natural and architectural forms. With an emphasis on
            Australian-sourced gemstones and metals, every piece of jewellery,
            whether custom-made just for you, or part of a limited edition
            collection, is carefully designed and handcrafted by Natalie,
            on-site in her Brisbane studio.
          </p>
        </div>
        <div id="p">
          <p>
            {" "}
            Contact Natalie to book an appointment to discuss your design ideas,
            or join our VIP list to receive exclus ive access to upcoming events
            and new collections.
          </p>
        </div>
        <div className="row -12">
          <div className="col md-6">
            <img src={im1} alt="im2" width="450" height="400" />
          </div>
          <div className="col md-6">
            <img src={im2} alt="kk"/>
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
                
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Name"
                 className="btn btn-primary"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

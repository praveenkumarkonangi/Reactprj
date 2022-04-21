import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/Logo.png'
const Header = () => {
  return (
    <div>
      <header>
        <div className="continer bg-primary py-2">
          <section className="d-flex justify-content-end ">
            <p>
              <i className="bi bi-telephone text-white pe-2"></i>
              <Link to="tel:0435 946 330" className="text-white">
                {" "}
                0435946330
              </Link>
            </p>
            <p className="mb-0 mr-3">
              <i className="bi bi-envelope text-white pe-2"></i>
              <Link to="mailto:info@alldimensionsdesign.com.au" className="text-white">
                info@alldimensionsdesign.com.au
              </Link>
            </p>
          </section>
        </div>
       <div className="navbar bg-dark d-flex">
         <ul className="d-flex ml-2 m-2">
           <li className="text-white">
             <Link to='home'>Home</Link>
           </li>
           <li className="text-white">
             <Link to='home'>Home</Link>
           </li>
           <li className="text-white">
             <Link to='home'>Home</Link>
           </li>
         </ul>
       </div>
      </header>
    </div>
  );
};

export default Header;

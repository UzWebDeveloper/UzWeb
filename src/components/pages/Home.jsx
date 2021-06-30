import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
export class Home extends Component {
  render() {
    return (
      <div className="section">
        <div className="header-box__right">
          <div className="box-right__continer">
            <div className="box-right__text">
              <div className="text">
                <h2>Mukhammad</h2>
                <h2>Razzakberganov</h2>
                <p>I am Front-end <span>Developer</span></p>
                <div className="resumeLink">
                  <Link className="Link"  to="/resume">
                    <p>Resume</p>
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="grafiks">
              <div className="grafik grafik-one">
                <p>
                  <FaHtml5 color="#E44D26" size="44px" /> 65%
                </p>
              </div>
              <div className="grafik grafik-two">
                <p>
                  <FaCss3Alt color="#42A5F5" size="33px" />
                  <FaSass color="#BE3361" size="33px" /> 65%
                </p>
              </div>
              <div className="grafik grafik-three">
                <p>
                  <SiJavascript color="#FFCA28" size="45px" /> 40%
                </p>
              </div>
              <div className="grafik grafik-four">
                <p>                  
                  <FaReact color="#61DAFB" size="45px" /> 35%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

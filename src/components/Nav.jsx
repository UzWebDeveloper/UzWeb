import React, { Component } from "react";
import { Link  } from "react-router-dom";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

import logo from "./img/logo.png";
export class Nav extends Component {
  render() {
    return (
      <div className="header">
        <div className="continer">
          <div className="header-box__left">
            <div className="box-left__left">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="header-left__bottom">
                <div className="messengrs">
                  <a href="https://t.me/UzWeb_Development" target="blank">
                    <FaTelegramPlane size="22px" />
                  </a>
                  <a href="https://www.instagram.com/uzweb_development" target="blank">
                    <FaInstagram size="22px" />
                  </a>
                  <a href="https://www.facebook.com/muxammad.razzakberganov" target="blank">
                    <FaFacebook size="22px" />
                  </a>
                  <a href="https://github.com/UzWebDeveloper" target="blank">
                    <FaGithub size="22px" />
                  </a>
                </div>
                <div className="num">
                  <p>
                    (99) (33) <br />
                    963-70-91
                  </p>
                </div>
              </div>
            </div>
            <div className="box-left__right">
              <ul>
              <Link className="Link" to="/">
                <li>Home</li>
              </Link>
                  
              <Link className="Link" to="/resume">
                <li>Resume</li>
              </Link>

              <Link className="Link" to="/projects">
                <li>Projects</li>
              </Link>

              
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

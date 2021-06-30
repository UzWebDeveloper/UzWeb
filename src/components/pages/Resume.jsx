import React, { Component } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import resumeImg from "../img/resume-img.jpg";

export class Resume extends Component {
  render() {
    return (
      <div className="section-two">
        <div className="continer">
          <div className="title">
            <h2>Resume</h2>
          </div>

          <div className="resume">
            <div className="resume-text">
              <p>
                <span>F.I.O: </span> Mukhammad Razzakberganov Bakhadirovich
              </p>
              <p>
                <span>Tug'ilgan sanasi: </span> 13-07-2002
              </p>
              <p>
                <span>Tug'ilgan joyi: </span> Kharezm, Khazorasp
              </p>
              <p>
                <span>Yashaydigan joyi: </span> Uzbekistan, Tashkent
              </p>
              <p>
                <span>Bilim olgan joylari: </span> DataLerningCenter, Udacity
                (online qurslari)
              </p>
              <p>
                <span>Texnalogiyalar: </span> Html Css/Sass JavaScript/React.js
                Git/GitHub
              </p>
              <p>
                <span>Tajriba: </span> 8 oy
              </p>
              <p>
                <span>Ishlagan joylai: </span> Smart Soft Development
              </p>
              <p>
                <span>Qo'shimcha: </span> Vyorstka (React/Html), animation card/button, va h.k.  O'z ishimga malsulyatliman. Va juda tirishqoq o'z soham bo'yich muammoga duch kelsam yechimini topmaguncha tashlab qo'ymayman.
 
              </p>
            </div>
            <div className="resume-img">
              <Zoom className="zoom">
                <img
                  alt="that wanaka tree"
                  src={resumeImg}
                  width="500"
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: "20px",
                    background: "#000",
                  }}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;

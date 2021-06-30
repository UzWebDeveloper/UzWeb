import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import europrint from "../img/eoroprint.png";
import profUborka from "../img/profUborka.jpg"
import testApp from "../img/test-app.jpg"
import WebNews from "../img/WebNews.jpg"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

export class Projects extends Component {
  render() {
    return (
      <div className="section-three">
        <div className="continer">
          <div className="title">
            <h2>Projects</h2>
          </div>

          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide className="SwiperSlide">
              <div className="cards">
                <div class="card middle">
                  <div class="front">
                    <img src={europrint} alt="europrint-img" />
                  </div>

                  <div class="back">
                    <div class="back-content middle">
                    <a href="https://euro-print-uzweb.netlify.app/" target="blank" className="view">view project</a>
                    <a href="https://github.com/UzWebDeveloper/europrint.uz" target="blank">download code</a>
                    </div>
                  </div>
                </div>

                <div class="card middle">
                  <div class="front">
                    <img src={profUborka} alt="profUborka-img" />
                  </div>

                  <div class="back">
                    <div class="back-content middle">
                      <a href="https://uzwebdeveloper.github.io/ProfUborka/" target="blank" className="view">view project</a>
                      <a href="https://github.com/UzWebDeveloper/ProfUborka" target="blank">download code</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <div className="cards">
                <div class="card middle">
                  <div class="front">
                    <img src={testApp} alt="europrint-img" />
                  </div>

                  <div class="back">
                    <div class="back-content middle">
                    <a href="https://test-app-uzweb.netlify.app/" target="blank" className="view">view project</a>
                    <a href="https://github.com/UzWebDeveloper/test-js" target="blank">download code</a>
                    </div>
                  </div>
                </div>

                <div class="card middle">
                  <div class="front">
                    <img src={WebNews} alt="profUborka-img" />
                  </div>

                  <div class="back">
                    <div class="back-content middle">
                      <a href="https://epic-thompson-1e759f.netlify.app/" target="blank" className="view">view project</a>
                      <a href="https://github.com/UzWebDeveloper/WebNews" target="blank">download code</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            </Swiper>
          <div className="more-btn">
            <a href="https://github.com/UzWebDeveloper" target="blank">more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

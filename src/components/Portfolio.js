import styled from "styled-components";
import "./Portfolio.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Portfolio = () => {
  const PortfolioBox = styled.section`
    font-family: "Courier New", Courier, monospace;
    padding-top: 1rem;
    background-color: #fff;
    background-color: #f6f8f9;
  `;

  const PortfolioPiece = styled.div`
    text-align: center;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background-color: #f6f8f9;
    margin-left: 2vw;
    margin-right: 2vw;
    // background-color: #8599c0;
    // color: #f6f8f9;
    // padding: 2%;
    display: flex;
    flex-direction: column;
    // gap: 5%;
    align-items: center;
    min-width: 60%;
    overflow-inline: 20%;
  `;

  const PortfolioParagraph = styled.p`
    padding-left: 10vw;
    padding-right: 10vw;
  `;

  const PortfolioImg = styled.img`
    // padding-left: 10vw;
    // padding-right: 10vw;
    max-width: 700px;
    max-height: 50vh;
    margin-bottom: 1rem;
  `;

  return (
    <>
      <PortfolioBox>
        <h2 className="portfoliotitle">Projects</h2>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: true,
          // }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PortfolioPiece>
              <h3 className="projecttitle"> Python Project - "pyGym"</h3>
              <PortfolioImg id="pygymimg" src={require("./media/screenshot_1.png")} />
              <div>
                <PortfolioParagraph>
                  A full stack flask application to manage bookings for a gym.
                </PortfolioParagraph>
                <PortfolioParagraph>
                  Built with Python, Flask, Jinja, Postgresql HTML5 & CSS3.
                </PortfolioParagraph>
                <PortfolioParagraph>
                  The app had to be constructed over a 6 day period and so I
                  focussed my efforts on infrastructure and building for future
                  extensibility, including implementing multiple many-to-many
                  database relationships.
                </PortfolioParagraph>
              </div>
              <a href="https://github.com/EJDC/pyGym_Project" target="_blank">
                Full ReadME and Video Walkthrough
              </a>
              <br></br>
            </PortfolioPiece>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioPiece>
              <h3 className="projecttitle"> React Project - "Mariana Trench Explorer"</h3>
              <PortfolioImg id="marianaimg" src={require("./media/mariana.png")} />
              <div>
                <PortfolioParagraph>
                  A full stack Javascript educational app about the layers of the ocean and what lies beneath...
                </PortfolioParagraph>
                <PortfolioParagraph>
                  Built with Javascript, React, Express, MongoDB, HTML5 & CSS3.
                </PortfolioParagraph>
                <PortfolioParagraph>
                  Completed as a group project in Week 10 of CodeClan.
                </PortfolioParagraph>
              </div>
              <a href="https://github.com/EJDC/Mariana_Trench_Project" target="_blank">
                Full ReadME and Video Walkthrough
              </a>
              <br></br>
            </PortfolioPiece>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </PortfolioBox>
    </>
  );
};

export default Portfolio;

import styled from "styled-components";
import "./Portfolio.css";

const Portfolio = () => {
  const PortfolioBox = styled.section`
    font-family: "Courier New", Courier, monospace;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    /* padding-top: rem; */
    padding-bottom: 4rem;
    background-color: #f6f8f9;
    justify-content: center;
  `;

  const PortfolioPiece = styled.div`
    text-align: center;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background-color: #f6f8f9;
    margin-left: 20%;
    margin-right: 20%;
    background-color: #8599c0;
    color: #f6f8f9;
    padding: 2%;
    display: flex;
    gap: 5%;
    align-items: center;
    min-width: 60%;
    overflow-inline: 20%;
  `;

  return (
    <>
      <PortfolioBox>
        <h2 className="portfoliotitle">Projects</h2>
        <PortfolioPiece>
          <div>
            <h3> Python Project - "pyGym"</h3>
            <p>
              I created a bookings application for a local gym. The brief
              mandated the use of only Python, Flask, HTML, CSS and SQL.
            </p>
            <p>
              The app had to be constructed over a 6 day period and so I
              focussed my efforts on infrastructure and building for future
              extensibility, including implementing multiple many-to-many
              database relationships.
            </p>
          </div>
          <div>
            <img src={require("./media/Screenshot_1_1.png")} />
          </div>
        </PortfolioPiece>
        <PortfolioPiece>
          <div>
            <h3> Python Project - "pyGym"</h3>
            <p>
              I created a bookings application for a local gym. The brief
              mandated the use of only Python, Flask, HTML, CSS and SQL.
            </p>
            <p>
              The app had to be constructed over a 6 day period and so I
              focussed my efforts on infrastructure and building for future
              extensibility, including implementing multiple many-to-many
              database relationships.
            </p>
          </div>
          <div>
            <img src={require("./media/Screenshot_1_1.png")} />
          </div>
        </PortfolioPiece>
      </PortfolioBox>
    </>
  );
};

export default Portfolio;

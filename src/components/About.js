import styled from "styled-components";
import './About.css'          

const About = () => {
  const AboutSection = styled.section`
    font-family: "Courier New", Courier, monospace;
    color: #f6f8f9 ;
    background-color: #2843a2;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18%;
    padding: 2rem;
  `;

  const MainSection = styled.div`
    border-radius: 1rem;
    min-width: 15rem;
    max-width: 40%;
    text-align: left;
    padding-bottom: 3rem;
  `;

  const ProfileSection = styled.div`
    align-self: flex-end;
    background-color: #1d3691;
    /* color: #2843a2; */
    border-radius: 0.5rem;
    min-width: 15rem;
    max-width: 10%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    list-style: none;
  `;

  const ProfileImage = styled.img`
    max-width: 100%;
    border-radius: 0.5rem;
  `;

  return (
    <>
      <AboutSection>
        <MainSection>
          <h1>Hello World!</h1>
          <p>
            My name is Ewan, and I am software developer based in Edinburgh,
            Scotland.
          </p>
          <p>
            High-quality results delivered through collaborative problem
            solving, excellent communication, organisation and innovation.
          </p>
          
        </MainSection>
        <ProfileSection>
          <ProfileImage src={require("./media/profile_image.jpg")} />
          <h2>Ewan Connor</h2>
          <p>ewansemail@gmail.com</p>
          <ul>
          <li><i class="devicon-linkedin-plain-wordmark"></i></li>
          <li><i class="devicon-github-original-wordmark"></i></li>
          </ul>
          
        </ProfileSection>
      </AboutSection>
    </>
  );
};

export default About;

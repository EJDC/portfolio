import styled from "styled-components";
import "./Skills.css";

const Skills = () => {
  const SkillsBox = styled.section`
    font-family: "Courier New", Courier, monospace;
    color: #f6f8f9;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2rem;
    margin-bottom: 5rem;
  `;

  const SkillArea = styled.div`
    background-color: #2843a2;
    padding: 0.5rem;
    text-align: center;
    border-radius: 1rem;
    color: #f6f8f9;

  `;

  return (
    <>
      <h2 className="skillssection">Technical</h2>
      <SkillsBox>
        <SkillArea>
          <h3>Languages</h3>
          <ul>
            <li>
              <i id="c" class="devicon-c-plain"></i> 
              <br></br> <br></br>
              <label for="c">C</label>
            </li>
            <li>
              <i id="python" class="devicon-python-plain"></i>
              <br></br> <br></br>
              <label for="python">Python</label>
            </li>
            <li>
              <i id="javascript" class="devicon-javascript-plain"></i>
               <br></br><br></br>
              <label for="javascript">Javascript</label>
            </li>
            <li>
              <i id="html5" class="devicon-html5-plain"></i> 
              <br></br> <br></br>
              <label for="html5">HTML5 </label>
            </li>
            <li>
              <i id="css3" class="devicon-css3-plain"></i> 
              <br></br> <br></br>
              <label for="css3">CSS3 </label>
            </li>
            <li>
              <i id="markdown" class="devicon-markdown-original"></i> 
              <br></br> <br></br>
              <label for="markdown">Markdown</label>
            </li>
          </ul>
        </SkillArea>
        <SkillArea>
          <h3>Frameworks</h3>
          <ul>
            <li>
              <i id="flask" class="devicon-flask-original"></i> 
              <br></br> <br></br>
              <label for="flask">Flask</label>
            </li>
            <li>
              <i id="nodejs" class="devicon-nodejs-plain"></i>
               <br></br><br></br>
              <label for="nodejs">Node.js</label>
            </li>
            <li>
              <i id="express" class="devicon-express-original"></i> 
              <br></br> <br></br>
              <label for="express">Express.js </label>
            </li>
          </ul>
        </SkillArea>
        <SkillArea>
          <h3>Libraries</h3>
          <ul>
          <li>
              <i id="react" class="devicon-react-original"></i>
              <br></br> <br></br>
              <label for="react">React</label>
            </li>
            <li>
              <i id="npm" class="devicon-npm-original-wordmark"></i>
              <br></br> <br></br>
              <label for="npm">NPM</label>
            </li>
            <li>
              <i id="jquery" class="devicon-jquery-plain"></i>
               <br></br><br></br>
              <label for="jquery">jquery</label>
            </li>
          </ul>
        </SkillArea>
        <SkillArea>
          <h3>Testing</h3>
          <ul>
          <li>
              <i id="mocha" class="devicon-mocha-plain"></i>
              <br></br> <br></br>
              <label for="react">Mocha</label>
            </li>
            <li>
              <i id="jest" class="devicon-jest-plain"></i>
              <br></br> <br></br>
              <label for="npm">Jest</label>
            </li>
            <li>
              <i id="cypress" class="devicon-spring-plain"></i>
               <br></br><br></br>
              <label for="cypress">Cypress</label>
            </li>
          </ul>
        </SkillArea>
        <SkillArea>
          <h3>Databases</h3>
          <ul>
          <li>
              <i id="postgressql" class="devicon-postgresql-plain"></i>
              <br></br> <br></br>
              <label for="react">PostgreSQL</label>
            </li>
            <li>
              <i id="npm" class="devicon-mongodb-plain"></i>
              <br></br> <br></br>
              <label for="npm">MongoDB</label>
            </li>
          </ul>
        </SkillArea>
        <SkillArea>
          <h3>Cloud</h3>
          <ul>
          <li>
              <i id="aws" class="devicon-amazonwebservices-plain"></i>
              <br></br> <br></br>
              <label for="aws">AWS</label>
            </li>
            <li>
              <i id="circleci" class="devicon-circleci-plain"></i>
              <br></br> <br></br>
              <label for="circleci">CircleCi</label>
            </li>
            <li>
              <i id="github" class="devicon-github-original"></i>
              <br></br> <br></br>
              <label for="github">GitHub</label>
            </li>
          </ul>
        </SkillArea>
        <SkillArea>
          <h3>Other</h3>
          <ul>
          <li>
              <i id="github" class="devicon-vscode-plain"></i>
              <br></br> <br></br>
              <label for="github">VSCode</label>
            </li>
          <li>
              <i id="trello" class="devicon-trello-plain"></i>
              <br></br> <br></br>
              <label for="aws">Trello</label>
            </li>
            <li>
              <i id="trello" class="devicon-figma-plain"></i>
              <br></br> <br></br>
              <label for="aws">Figma</label>
            </li>
            <li>
              <i id="circleci" class="devicon-slack-plain"></i>
              <br></br> <br></br>
              <label for="circleci">Slack</label>
            </li>
          </ul>
        </SkillArea>
      </SkillsBox>
    </>
  );
};

export default Skills;

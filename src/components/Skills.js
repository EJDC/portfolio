import styled from "styled-components";

const Skills = () => {
  const SkillsBox = styled.section`
    font-family: 'Courier New', Courier, monospace;
  `;

  const SkillArea = styled.div`
  `

  return (
    <>
    <SkillsBox>
      <h1> Skills </h1>
      <SkillArea>
        <h3>Backend</h3>
      </SkillArea>
      <SkillArea>
        <h3>Frontend</h3>
      </SkillArea>
      </SkillsBox>
    </>
  );
};

export default Skills;

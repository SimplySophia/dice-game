import styled from "styled-components";

const TotalScore = ( {score} ) => {
  return (
    <ScoreContainer>
        <div>
        <h1>{score}</h1>
        <p>Total Score</p>
        </div>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
text-align: center;
max-width: 200px;
color: blue;
  h1{
    font-size: 40px;
    line-height: 15px;
  }
  p{
    font-size: 20px;
    font-weight: 500;
  }
`

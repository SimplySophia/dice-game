import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import { useState } from "react";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [diceRoll, setDiceRoll] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return;
    };

    const randomNumber = generateRandomNumber(1, 7);
    setDiceRoll((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined)
  }
  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector 
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}s
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice diceRoll={diceRoll} 
        roleDice={roleDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button>Show Rules</Button>
      </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
padding-top: 60px;

.top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;
  gap: 0.5rem;
}
`

import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({roleDice, diceRoll}) => {
    
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${diceRoll}.png`} alt="dice 1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3rem;

.dice {
    cursor: pointer;
}
p {
    font-size: 1.2rem;
}
`;



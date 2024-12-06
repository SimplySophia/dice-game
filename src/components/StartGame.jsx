import styled from "styled-components";
import { Button } from "../styled/Button";



const StartGame = ( {toggle} ) => {
  return (
    <Container>
      <img src="/images/dice.png" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;

.content {
    h1 {
        white-space: nowrap;
        font-size: 4rem;
    }
}


`;



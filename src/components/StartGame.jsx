import styled from "styled-components"

const StartGame = () => {
  return (
    <Container>
      <img src="/images/dice.png" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
justify-content:center;
align-items: center;
margin: 0 auto;

.content {
    h1 {
        white-space: nowrap;
        font-size: 4rem;
    }
}
`;

const Button = styled.button`
background-color: red;
color: white;
padding: 0.5rem 1.2rem;
margin-left: 4.5rem;
width: 220px;
height: 44px;
border-radius: 5px;
border: none;
cursor: pointer;
&:hover {
    background-color: white;
    border: 1px solid red;
    color: red;
    transition: 0.3s background ease-in;
}
`;

import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ({ 
  setError, 
  error, 
  selectedNumber, 
  setSelectedNumber, 
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }
    
  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
        <div className="flex">
           {arrNumber.map((value, i) => (
            <Box 
               isSelected={value === selectedNumber}
               key={i} 
               onClick={() => NumberSelectorHandler(value)}>
               {value}
            </Box>      
            ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  
   .flex {
    display: flex;
    gap: 1.5rem;
   }
   p{
    font-size: 1rem;
    font-weight: 700;
    color: blue;
   }
   .error {
    color: red;
   }
`

const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 2px solid blue;
  display: grid;
  place-items: center;
  gap: 2rem;
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "blue" : "white")};
  color: ${(props) => (!props.isSelected ? "blue" : "white")}

`

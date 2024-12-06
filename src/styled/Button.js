import styled from "styled-components";


export const Button = styled.button`
background-color: blue;
color: white;
padding: 0.5rem 1.2rem;
margin-left: 4rem;
width: 200px;
height: 35px;
border-radius: 5px;
border: none;
font-weight: 500;
cursor: pointer;
&:hover {
    background-color: white;
    border: 1px solid blue;
    color: blue;
    transition: 0.3s background ease-in;
}
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid blue;
color: blue;
&:hover {
    background-color: blue;
    border: 1px solid blue;
    color: white;
}
`;
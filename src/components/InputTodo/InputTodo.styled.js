import styled from "styled-components"


export const BoxForm = styled.form`
display:flex;
justify-content: center;
margin-top:30px;
`

export const Input = styled.input`
width:400px;
padding: 10px;
margin: 8px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;
outline: none;
&:focus {
    border-color:#48637f; 
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);

`

export const Button = styled.button`
padding: 9px 25px;
  font-size: 16px;
  cursor: pointer;
  background-color: #48637f;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  &:hover{background-color:  #b5b5b5} ;
`
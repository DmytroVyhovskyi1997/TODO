import styled from "styled-components"
import {FaRegWindowClose} from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
export const ButtonDelete = styled(FaRegWindowClose)`
width:32px;
color:red;
`

export const Box = styled.ul`
margin-top:40px;
padding:30px;
`

export const BoxTitle = styled.li`
font-size: 24px;
display: flex;
align-items: center;
margin-bottom:15px;
`

export const ButtonEdit = styled.button`
  font-size: 16px;
  margin-left:10px;
  cursor: pointer;
  background-color: #48637f;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  &:hover{background-color:  #b5b5b5} ;
`

export const BokIcon = styled(FaAddressBook)`
color:#444141;
margin-right:5px;
`

export const BoxMain = styled.main`
border-radius: 10px;
    border: 3px solid #48637f;
`

import styled from "styled-components"
import {NavLink} from "react-router-dom"

export const Link = styled(NavLink)`
color: black;
font-size:42px;
margin-right:50px;
font-weight:bold;
&.active {
  color: orange;
}
`

export const Container = styled.div`
margin: 0 auto;
  padding: 0 16px;
@media screen and (max-width: 767px){
    max-width: 480px;
}
@media screen and (min-width: 768px){
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
}
@media screen and (min-width: 1280px){
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
}
`

export const Box = styled.header`
display:flex;
justify-content: space-around;
margin-top:30px;
margin-bottom:40px;
`

export const BoxContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

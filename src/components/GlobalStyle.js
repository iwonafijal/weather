import { createGlobalStyle } from "styled-components";
import bg2 from "../img/bg2.jpg";

const GlobalStyle = createGlobalStyle`

  

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    color: white;
    font-family: 'Raleway', sans-serif;
    position: relative;    
    background-size: cover;

    &::after {
    content: "";
    background-image: url(${bg2});
    background-size: cover;
    opacity: 0.8;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
            
  input{
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: rgb(255 255 255 / 60%);
  transition: 0.3s;
  outline: none;
  padding: 5px;
  width: 100%;
  margin-right: 40px;
  transition: all 0.3s ease;
  &:hover{
          background-color: #d2d5d6;          
      }
  }
  

  button{
    border: 2px solid rgba(0, 0, 0, 0);
    background-color: rgb(255 255 255 / 60%);
    outline: none;
    padding: 5px;
    border: none;
    background-color: #6b90b4;       
    cursor: pointer;        
    color: white;
    transition: all 0.3s ease;
    width: 40%;
      &:hover{
          background-color: #81a4c7;          
      }
  }

}
`;

export default GlobalStyle;

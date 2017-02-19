import styled from 'styled-components';

const AuthStyle = styled.section`
margin: 10em auto;
background: rgb(31, 37, 61);
height: 30vh;
padding: 2em 0;
box-shadow: 2px 0px 19px 6px rgba(31, 37, 61, 0.4);
width: 500px;
border-radius: 3px;
div {
  margin-bottom: 0.8em;
}
 button{
   background: green;
   color: #fff;
   width: 100%;
 }
 .input-div {
   width: 100%;
   padding-left: 1em;
 }
 input {
   outline: none;
   width: 100%;
 }
`;

export default AuthStyle;

import { Container, Button, Typography } from "@material-ui/core";
import styled from "styled-components";

export const BodyStyle = styled.div`
  background: linear-gradient(
    135deg,
    rgba(0, 29, 94, 0.969625350140056) 0%,
    rgba(48, 51, 82, 1) 30%,
    rgba(125, 86, 63, 1) 70%,
    rgba(255, 144, 30, 1) 100%
  );
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerStyle = styled(Container)`
  &.MuiContainer-root {
    padding: 20px 20px 0 20px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;   
    justify-content: space-around;
    max-width: 550px;
    width: 450px;
  }

  &.MuiContainer-root:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  } 
  
`;

export const ButtonStyle = styled(Button)`
    &.MuiButton-root {
      margin-top: 30px;
      height: 39px;
      background-color: var(--color-primary);
      border-radius: 5px;
      text-align: center;
    }
`;

export const LoginStyle = styled.div`
  text-align: center;
  color: var(--color-primary);
  padding: 10px;
  font-weight: bold;
`;

export const TypographyStyle = styled(Typography)`
  font-size: 15px;
  opacity: 0.5;
`;
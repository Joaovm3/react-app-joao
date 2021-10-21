import { Container, Button } from "@material-ui/core";
import styled from "styled-components";

export const BodyStyle = styled.body`
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
  align-items: center;
  justify-content: center;
`;

export const ContainerStyle = styled(Container)`
  &.MuiContainer-root {
    padding: 20px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;   
    min-width: 200px;
    max-width: 550px;
    width: 250px;
    height: 90%;
  } 
`;

export const ButtonStyle = styled(Button)`
    &.MuiButton-root {
        background-color: var(--color-primary);
        border-radius: 0;
    }
`;

export const LoginStyle = styled.div`
    padding: 10px;
    font-weight: bold;
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 77vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const TextTitle = styled.h1`
  color: ${({ theme }) => theme.title};
  margin-top: 10%;
  font-size: 4vh;

  @media only screen and (max-width: 1800px) {
    text-align: center;
  }

  @media only screen and (max-width: 1600px) {
    font-size: 3.5vh;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    width: 80vw;
  }
`;

export const SubmitLogin = styled.form``;

export const CardLogin = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background: ${({ theme }) => theme.feed};
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;

  @media only screen and (max-width: 1800px) {
    width: 70%;
  }

  @media only screen and (max-width: 1600px) {
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h1`
  color: ${({ theme }) => theme.title};
  font-weight: 800px;
  margin-bottom: 10%;
`;

export const ProductHunt = styled.img`
  width: 35vw;

  @media only screen and (max-width: 1600px) {
    width: 40vw;
  }

  @media only screen and (max-width: 1024px) {
    width: 45vw;
  }

  @media only screen and (max-width: 768px) {
    width: 50vw;
    margin-top: 20%;
  }

  @media only screen and (max-width: 600px) {
    width: 60vw;
  }

  @media only screen and (max-width: 480px) {
    width: 70vw;
  }
`;

// ProductHunt.defaultProps = {
//   src: ImageProductHunt,
// };

export const TextField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Field = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 15px;
  color: black;
  font-size: 12pt;
  border: none;
  box-shadow: 0px 10px 40px #00000056;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const LabelField = styled.label`
  color: ${({ theme }) => theme.title};
  margin-bottom: 10px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 16px 0px;
  margin: 25px;
  border: none;
  background-color: ${({ theme }) => theme.buttons};
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: white;
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px #256ce1;

  :hover {
    /* background: rgb(37, 108, 225, 0.7); */
    opacity: 0.7;
  }
`;

export const ForgotPassword = styled.p`
  cursor: pointer;
  color: ${({ theme }) => theme.title};
`;

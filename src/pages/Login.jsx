import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.dreamstime.com/z/seamless-pattern-cute-cats-pink-background-vector-design-fabrics-wallpapers-backgrounds-wrapping-paper-etc-206161987.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;

`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 20px;
`;

const Agreement = styled.span`
  font-size: 50px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 80%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Huy Huy Shelter</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Agreement>
            Welcome to my CatWorld
          </Agreement>
            <Link style={{ textDecoration: "none", color: "black", width: "50%" }} to="/"><Button>Sign In</Button></Link>
            <Link style={{ textDecoration: "none", color: "black", width: "50%"}} to="/register"><Button>Register</Button></Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
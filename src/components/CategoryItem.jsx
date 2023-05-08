import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}

`

const Info = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-size: 60px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
`
const CategoryItem = ({item}) => {
  return (
      <Container>
          <Image src = {item.img} />
          <Info>
              <Title>{item.title}</Title>
              <Link style={{ textDecoration: "none", color: "black" }} to="/product"><Button>Adopt Me</Button></Link>
              
          </Info>
    </Container>
  )
}

export default CategoryItem
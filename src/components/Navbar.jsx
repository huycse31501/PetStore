import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { mobile } from "../responsive"
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "100%" })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;

const Language = styled.span`
  font-size: 14px;
 cursor: pointer; 
 ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px ;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "12px" })}

`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color: "gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Huy Huy Cat World</Logo>
        </Center>
        <Right>
        <MenuItem > <Link style={{ textDecoration: "none", color: "black" }} to="/">Home</Link>
          </MenuItem>
          <MenuItem > <Link style={{ textDecoration: "none", color: "black" }} to="/productlist">ShopList</Link>
          </MenuItem>
          <MenuItem > <Link style={{ textDecoration: "none", color: "black" }} to="/register">Register</Link>
          </MenuItem>
          <MenuItem><Link style={{ textDecoration: "none", color: "black"  }} to="/login">Login</Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "blue"}} to="/cart">
                <Badge badgeContent={2} color="primary">
                  <PetsIcon/>
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
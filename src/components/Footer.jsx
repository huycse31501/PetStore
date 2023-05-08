
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``;


const Desc = styled.p`
    margin: 20px 0px;

`;

const SocialContainer = styled.h1`
    display: flex;
`;

const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;



const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;

`
const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>HuyHuy</Logo>
              <Desc>
                  Thank you for visiting my CatWorld. I hope you could take a look and pick 
                  one of these beautiful cats.
              </Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999">
                      <FacebookIcon/>
                  </SocialIcon>
                  <SocialIcon color="E4405F">
                      <InstagramIcon />
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                        <TwitterIcon />
                  </SocialIcon>
                  <SocialIcon color="E60023">
                      <PinterestIcon/>
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Visit Us</Title>
              <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Baby Cat</ListItem>
                <ListItem>Cat Food</ListItem>
                <ListItem>Cat Health</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Pet Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right>
              <Title>Contact Us</Title>
              <ContactItem>
                  <HomeIcon style={{marginRight:"10px"}} /> Floor -19, Hell
              </ContactItem>
              <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}} /> +1 234 56 78   
              </ContactItem>
              <ContactItem>
                <EmailIcon style={{marginRight:"10px"}} />  huyhuy@catworld.com
              </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
    </Container>
  )
}

export default Footer
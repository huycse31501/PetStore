import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";
const Container = styled.div``


const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
    flex: 1;
`


const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 200;


`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;

`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 30px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
    width: 50%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    &:hover{
        background-color:#f8f4f4;
    }
`;

const Product = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                <Image src = "./pic/catsit.png"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Persian Cat</Title>
                  <Desc>Lonely Boy Need A Home</Desc>
                  <Price>$ 300</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          <FilterColor color = "black" />
                          <FilterColor color = "gray" />
                          <FilterColor color = "white" />
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                                <FilterSizeOption>Small</FilterSizeOption>
                                <FilterSizeOption>Normal</FilterSizeOption>
                                <FilterSizeOption>Fat</FilterSizeOption>
                                    <FilterSizeOption>Chonky</FilterSizeOption>
                              </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <RemoveIcon />
                          <Amount>1</Amount>
                          <AddIcon />
                      </AmountContainer>
                      <Button>Add To Shelter</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer/>
    </Container>
  )
}

export default Product
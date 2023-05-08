


import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive";

const Container = styled.div`


`

const Title = styled.h1`
  margin: 10px;
`;


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`


const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  font-size:20px;

`

const Option = styled.option`
  

`
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Cats</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Cats</FilterText>
          <Select>
            <Option>Breed</Option>
            <Option>Britist Shortfur</Option>
            <Option>Egypt Cat</Option>
            <Option>Orange Cat</Option>
            <Option>Stupid Cat</Option>
          </Select>
          <Select>
            <Option>Size</Option>
            <Option>Small</Option>
            <Option>Normal</Option>
            <Option>Big</Option>
            <Option>Chonky</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Cats</FilterText>
          <Select>
            <Option>Age</Option>
            <Option>Color</Option>
            <Option>Size</Option>
            <Option>Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList
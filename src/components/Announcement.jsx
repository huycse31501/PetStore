import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: lightpink;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
      <Container>
          Summer Sales! Cat Food Is 30% On Sales
    </Container>
  )
}

export default Announcement
import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title ="Mode S"
          description = "Delivery"
          leftbtnText= "Order"
          rightbtnText= "inventory"
          backgroundImg= "model-s.jpg"
        />
        <Section 
          title ="Mode S"
          description = "Delivery"
          leftbtnText= "Order"
          rightbtnText= "inventory"
          backgroundImg= "model-s.jpg"
        />
        {/* <Section />
        <Section />
        <Section /> */}
    </Container>
  )
}

export default Home

const Container = styled.div`
    height : 100vh;
`
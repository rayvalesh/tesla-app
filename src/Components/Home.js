import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title ="Mode S"
          description = "Orde Online for Touchless Delivery"
          leftbtnText= "Order"
          rightbtnText= "inventory"
          backgroundImg= "model-s.jpg"
        />
        <Section 
          title ="Mode 3"
          description = "Orde Online for Touchless Delivery"
          leftbtnText= "Order"
          rightbtnText= "inventory"
          backgroundImg= "model-3.jpg"
        />
        <Section 
          title ="Mode X"
          description = "Orde Online for Touchless Delivery"
          leftbtnText= "Order"
          rightbtnText= "inventory"
          backgroundImg= "model-x.jpg"
        />
        <Section 
          title ="Mode Y"
          description = "Orde Online for Touchless Delivery"
          leftbtnText= "Order"
          rightbtnText= "inventory"
          backgroundImg= "model-y.jpg"
        />
        <Section 
          title ="Accessories"
          description = "Orde Online for Touchless Delivery"
          leftbtnText= "Order"
          backgroundImg= "accessories.jpg"
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
import React from 'react'
import { Container, Header, Content, Footer, Text } from 'native-base'

const ContentExample = () => (
  <Container>
    <Header />
    <Content padder>
      <Text>This is Content Section</Text>
    </Content>
    <Footer />
  </Container>
)

export default ContentExample
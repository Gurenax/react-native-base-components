import React from 'react'
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from 'native-base'

const FooterExample = () => (
  <Container>
    <Header />
    <Content />
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
)
export default FooterExample

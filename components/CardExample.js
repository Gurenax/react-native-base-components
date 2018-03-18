import React from 'react'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from 'native-base'

const CardExample = () => (
  <Container>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Text>Hello World!</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>
)

export default CardExample

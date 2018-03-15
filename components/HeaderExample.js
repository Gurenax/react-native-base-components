import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Label
} from 'native-base'

const HeaderExample = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right>
        <Label>Right</Label>
      </Right>
    </Header>
  </Container>
)

export default HeaderExample

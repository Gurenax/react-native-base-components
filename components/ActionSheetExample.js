import React, { Component } from 'react'

/* Needed for ActionSheet */
import { Root } from 'native-base'
import { StackNavigator } from 'react-navigation'

import {
  Container,
  Header,
  Button,
  Content,
  ActionSheet,
  Text
} from 'native-base'

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel']
const DESTRUCTIVE_INDEX = 3
const CANCEL_INDEX = 4

const AppNavigator = StackNavigator({
  Page: { screen: Container }
})

export default class ActionSheetExample extends Component {
  state = {}

  render() {
    return (
      <Root>
        <Container>
          <Header />
          <Content padder>
            <Button
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: 'Testing ActionSheet'
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] })
                  }
                )
              }
            >
              <Text>Actionsheet</Text>
            </Button>
          </Content>
        </Container>
      </Root>
    )
  }
}
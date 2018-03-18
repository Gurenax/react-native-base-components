import React, { Component } from 'react'

/* Components */
import BasicExample from './components/BasicExample'
import AnatomyExample from './components/AnatomyExample'
import HeaderExample from './components/HeaderExample'
import ContentExample from './components/ContentExample'
import FooterExample from './components/FooterExample'
import ActionSheetExample from './components/ActionSheetExample'
import ActionSheetIconExample from './components/ActionSheetIconExample'
import BadgeExample from './components/BadgeExample'
import ButtonExample from './components/ButtonExample'

export default class App extends Component {
  state = {
    loading: true
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    
    return (
      // <BasicExample />
      // <AnatomyExample />
      // <HeaderExample />
      // <ContentExample />
      // <FooterExample />
      // <ActionSheetExample />
      // <ActionSheetIconExample />
      // <BadgeExample />
      <ButtonExample />
    )
  }
}

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

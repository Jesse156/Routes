
import React, {Component} from 'react';
import {
Platform, 
StyleSheet, 
Text, 
View,
ImageBackground,


} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class ModalScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}> 
            INRESSANTE TIO
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AA0000',
  },
  titulo:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
  
});

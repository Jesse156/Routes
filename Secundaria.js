
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Secundaria extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tituloContainer}>
          <Text 
          style={styles.titulo}
          onPress={() => Actions.modal()}>
            Conteúdo da página 2
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tituloContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
  }
  
});

/** @format */

import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Principal from './src/components/Principal';
import Secundaria from './src/components/Secundaria';

import {Router, Scene} from 'react-native-router-flux';

import ModalScreen from './src/components/ModalScreen';

export default class Teste extends Component {
    render (){
        return(       
            <Router>
                <Scene key="root">                  
                    <Scene
                        key="principal"
                        component={Principal}
                        title="Principal"
                        hideNavBar
                    />
                    <Scene
                        key="secundaria"
                        component={Secundaria}
                        title="Secundaria"
                    />
                    <Scene
                        key="modal"
                        component={ModalScreen}
                        direction="vertical"
                        hideNavBar
                    />
                </Scene>
            </Router>
        );
    }
}



AppRegistry.registerComponent('teste', () => Teste);

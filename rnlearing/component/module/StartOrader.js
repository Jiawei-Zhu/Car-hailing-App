import React, {Component} from 'react';
import {StyleSheet, View, Image, Text,TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import Radio from './radio';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var screenWidth = width;

export default class StartOrder extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          ...this.props.data,
          select:true,
        }
      }

      render(){
          return(
              <View>
                  <Text>
                      qw
                  </Text>
              </View>
          )
      }
}
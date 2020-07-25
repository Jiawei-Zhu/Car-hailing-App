import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity,
    Button,
    ScrollView,
} from 'react-native';
import Radio from './radio';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var screenWidth = width;

export default class PayMode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { alert("扣钱那些东西") }} >
                    <Text>
                        给钱
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props._cancelOrder() }}>
                    <Text>
                        返回
                    </Text>
                </TouchableOpacity>
            </View >
        )
    }
}
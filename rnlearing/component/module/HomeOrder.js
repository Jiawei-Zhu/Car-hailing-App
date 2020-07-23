import React, {Component} from 'react';
import {StyleSheet, View, Image, Text,TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import Radio from './radio';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var screenWidth = width;

//这个页面现在只针对一个类型的车辆选择
export default class HomeOreder extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          ...this.props.data,
          select:true,
        }
      }
      componentWillReceiveProps(){
        this.setState({
            ...this.props.data
        })
    }
      submitOrder(){
        const {select} = this.state
        if(!select)
        {
          alert("请选择至少一种业务")
          return
        }
        if(this.props.data.UserData == undefined || this.props.data.UserData.token == undefined)
        {
          alert("请登陆")
          return
        }
        //这里可以根据这里的业务选择改变
        this.props.data.mode =1;
        //使用回调返回具体订单信息
        this.props._startOrder(this.props.data)

      }
  
      render() {
     const {select} = this.state
      return (
          <View style={styles.container}>
            
            <View style={styles.carChoice}>
              <ScrollView style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{this.setState({select:!select});}}>
                  <View style={styles.catLabel}> 
                      <Image style={{height:30,width:30,margin:15}} source={require('../../images/car.png')}></Image>
                      <Text style={{flex:1}}>快车 </Text>
                      <Text style={{flex:2}}>预估价格：{this.props.data.taxi_cost} </Text>
                      <Radio style={styles.radio} value={1}  clicked ={select}></Radio>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>{this.submitOrder()}}>
                <Text >确定订单 </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 5,
      flexDirection:"column",
      justifyContent:'center',
      alignItems:'center'

    },
    carChoice:{
      flexDirection:'column',
      flex:5,
 
    },
    button:{
      
      justifyContent:'center',
      alignItems:'center',
      flex:2
    },
    catLabel:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      width:screenWidth*0.7,
    },
    radio:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'

    }
   
   
  });
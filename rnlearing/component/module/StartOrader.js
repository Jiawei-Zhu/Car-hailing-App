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

        }
      }

      componentWillMount(){
        console.log(this.props.data)
      }
      render(){
          return(
              <View style={{flexDirection:'column',flex:1,justifyContent:'center',alignItems:'center'}}>
                 <View style={styles.top}>
                    <View style={styles.carMess}>
                         <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:17,color:'#024212',fontWeight:'bold'}}>
                              {this.props.data.DriverData.carNumber}
                            </Text>
                            <Text style={{fontSize:12}}>
                              {this.props.data.DriverData.carType}
                            </Text>
                          </View>
                          <Image style={{height:40,width:40,borderRadius:15}} source={require('../../images/head_icon.png')} />

                    </View>
                    <View style={styles.DriverMess}>
                        <Text>
                          {this.props.data.DriverData.name}
                        </Text>
                        <Text style={{fontSize:10}}>
                          金牌司机
                        </Text>
                    </View>
                 </View>
                 <View style={styles.bottom}>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                          <Text>
                            你好世界
                            </Text>
                    </View>
                    <View style={styles.button}>
                      <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={{width:20,height:20}} source={require('../../images/urgent_icon.png')} />
                        <Text style={styles.buttonText}>紧急电话</Text>
                      </TouchableOpacity >
                      <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={{width:20,height:20}} source={require('../../images/phone_icon.png')} />
                        <Text  style={styles.buttonText}>司机电话</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={{width:20,height:20}} onProgress={()=>this.props._cancelOrder()} source={require('../../images/cancel_icon.png')} />
                        <Text  style={styles.buttonText}>取消订单</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={{width:20,height:20}} source={require('../../images/complaint_icon.png')} />
                        <Text  style={styles.buttonText}>投诉</Text>
                      </TouchableOpacity>
                      
                    </View>
                 </View>
              </View>
          )
      }
}

const styles = StyleSheet.create({
  top:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
   
    marginHorizontal:-20
  },
  bottom:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

  },
  carMess:{
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   
  },
  DriverMess:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
   
  },
  button:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  buttonStyle:{
    flexDirection:'row',
    marginLeft:7,
    backgroundColor:'#e6e6e6'
    

  },
  buttonText:{
    marginLeft:2,
    fontSize:13,
  }
})
import React, {Component} from 'react';
import {StyleSheet, View, Image, Text,TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import Radio from './radio';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var screenWidth = width;

export default class waitOrder extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          ...this.props,
          waittimer:'00:00',
          hour:0,
          min:0,
          sec:0,
          predictwaitTime:'1小时以上'
        }
      }
      componentWillMount(){
          //这里获取预计等待时间
      }
      componentDidMount(){
          //等待时间的计数器
        this.timerHandle = setInterval(()=>{
            let {waittimer,hour,min,sec} =this.state
            sec = sec+1;
            if(sec == 60)
            {
                sec = 0;
                min =min+1;
                if(min == 60)
                {
                    min = 0;
                    hour = hour+1;
                }
            }
            secString = ''
            minString = ''
            hourString = 0
            sec<10? secString = '0'+sec:secString=sec;
            min<10? minString = '0'+min : minString=min;
            hour<10? hourString = '0'+hour  : hourString=hour
            if(hour == 0)
            {
                waittimer = minString+':'+secString
            }
            else{
                waittimer = hourString + ':' +minString+':'+secString
            }
            this.setState({waittimer:waittimer,sec:sec,min:min,hour:hour})
        },1000)
      }
      _cancelOrder(){
          console.log("取消订单接口")
          //fetch

          this.props._cancelOrder();

      }
      componentWillUnmount(){
          clearInterval(this.timerHandle)
      }
      render(){
          return(
              <View style={styles.container}>
                  <View style={styles.title}> 
                    <Text numberOfLines={1} style={styles.titleFont}> 叫车人数过多，感谢你的耐心等待</Text>
                  </View>
                  <View style={styles.top}>
                    <View style = {styles.NowWaitTime}> 
                        <Text>等待时间:</Text> 
                        <Text style={styles.HightLight}>{this.state.waittimer} </Text>
                    </View>
                    <View style = {styles.predictWaitTime}> 
                        <Text>预估等待时间:</Text>
                        <Text style={styles.HightLight}>{this.state.predictwaitTime}</Text>
                    </View>
                  </View>
                  <View style ={styles.bottom}>
                      <TouchableOpacity onPress={()=>{this._cancelOrder()}} style={styles.button}>
                        <Text>取消订单</Text>
                      </TouchableOpacity>
                  </View> 
              </View>
          )
      }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        
    },
    titleFont:{
        fontSize:13,
        justifyContent:'center',
        alignItems:'center',

    }
    ,
    title:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    NowWaitTime:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#b0c2ca'
       
    },
    predictWaitTime:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#b0c2ca'
       
    },
    top:{
        flex:2,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#b0c2ca'
       
    },
    bottom:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:2,
        borderWidth:1,
        borderColor:'red'
       
    },
    button:{
        justifyContent:'center',
        alignItems:'center'
    },
    HightLight:{
        fontSize:18,
        color:'#e9f13d'
    }

}) 
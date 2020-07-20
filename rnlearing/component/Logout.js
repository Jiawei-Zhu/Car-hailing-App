import  React,{Component} from 'react'
import {Alert,View,Text,TouchableOpacity} from 'react-native';
import DeviceStorage from './global/DeviceStorage'
import {StyleSheet,DeviceEventEmitter} from 'react-native'
//屏幕宽度
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var screenWidth = width;
var screenheight =height;

export default class LogoutScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    Logout(){
        DeviceStorage.save('User',null).then((data)=>{
            DeviceEventEmitter.emit("Logout", null);
            this.props.navigation.goBack(null)
            console.log(data)
        });
    }

componentWillMount(){
   
}
  
    render(){
        
        return(
            <View style={styles.background}>
                <View style={styles.Main}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>注销</Text>
                    </View>
                    <View style={styles.content}><Text style={styles.contentText}>你确定退出吗？</Text></View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button} onPress = {()=>{this.Logout()}}>
                            <Text>确定</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress = {()=>{this.props.navigation.goBack(null)}}>
                            <Text>取消</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

//设置样式
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    Main:{
        position:"absolute",
        left: screenWidth *0.1,
        top:screenheight*0.3,
        width:screenWidth*0.8,
        height:200,
        backgroundColor: 'white',
        borderRadius:9
    },
    title:{
        borderBottomWidth:2,
        borderBottomColor:'rgba(0,0,0,0.3)',
        height:55,
        padding:10,
    },
    titleText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fb0000"
        
    },
    content:{
        padding:15,
        height:80
    },
    bottom:{
        padding:15,
        height:45,
        flex:1,
        justifyContent:"space-evenly",
        flexDirection:'row',
    },
    contentText:{
        fontWeight:"bold",
        color:"#000000"
    },
    button:{
        borderRadius:13,
        width:70,
        height:43,
        padding:15,
        backgroundColor:'#1195d5'
    },
    buttonText:{

    }
})
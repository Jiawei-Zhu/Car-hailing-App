import  React,{Component} from 'react'
import {Text,Image,View,TextInput,StyleSheet,FlatList,Botton,TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {Back} from './module/Back'
import DeviceStorage from './global/DeviceStorage'
//屏幕宽度
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var screenWidth = width;

export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            Apassword:'',
            PhoneNumber:'',
            Sex:'',
            token:'',
            logs:[],
            flag:false,
            isSame:false,
        }
    }


    componentDidMount(){}


    Register(){
        
        const{username,password}=this.state
        // fetch("https://www.kingdom174.work",{method:'GET',body:JSON.stringify(data)})   
        // .then(response => response.json()) // parses response to JSON
        fetch("https://www.kingdom174.work/register?sex=register&r_username="+username+"&r_password="+password,{method:'GET'})   
    }
    Login(){
        
        const{username,password}=this.state

        // fetch("https://www.kingdom174.work",{method:'GET',body:JSON.stringify(data)})   
        // .then(response => response.json()) // parses response to JSON
        fetch("https://www.kingdom174.work/Login?username="+username+"&password="+password+"&location=",{method:'GET'})   
        .then(response=>response.json())
        .then(json=>{
            this.setState({token:json.token})
            this.UserMessage()
        })
    }


    _Back=()=>this.props.navigation.goBack()
    _renderItem = ({ item }) =>
  <Text style={styles.logText}>{item. UserID} {item. Sex}  {item.Status}</Text>

    render(){
        return(
            <View style ={[styles.container]}>
            {/* <Back/> */}
              <TouchableOpacity style={styles.back} activeOpacity={0.2} onPress={this._Back}>
                <Image style={styles.backimg} source={require('../images/back_img.png')}></Image>
              </TouchableOpacity>
                 
                <TextInput style={styles.textInputStyle} 
                    onChangeText={(username)=>this.setState({username})}
                    value={this.state.username}
                    placeholder={'请输入用户名(admin)'}/>
                <TextInput style={styles.textInputStyle} 
                    onChangeText={(password)=>this.setState({password,flag:true})}
                    value={this.state.password}
                    secureTextEntry ={true}
                     placeholder={'请输入密码(admin)'}/>
                <TextInput style={styles.textInputStyle} 
                    onChangeText={
                        (Apassword)=>{
                        if (Apassword == this.state.password) 
                            Same = true;
                        else
                            Same =false;
                        this.setState({Apassword,isSame:Same}) 
                    } }
                    value={this.state.Apassword}
                    secureTextEntry ={true}
                    placeholder={'请再次输入密码(admin)'}/>
                {
                    this.state.flag == false ? 
                    this.state.isSame ? 
                    <View>
                        <Text>请输入第二次密码</Text>
                    </View>
                    :
                    <View>
                    </View>
                    :<View>
                        <Text>两次密码输入不同</Text>
                    </View>
                }
                

                <TextInput style={styles.textInputStyle} 
                    onChangeText={(PhoneNumber)=>this.setState({PhoneNumber})}
                    value={this.state.PhoneNumber}
                    secureTextEntry ={true}
                     placeholder={'请输入手机号'}/>
                
                <TouchableOpacity style={styles.loginBtnStyle} onPress={()=>{this.Register()}} >
                     <Text style={{color:'white',textAlign:'center'}}>注册</Text>
                </TouchableOpacity>
 
                {/*其他登录方式*/}
                {/* 调试部分 */}
                <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Text style={styles.login}>以下为调试部分</Text>
                    <Text style={styles.login} onPress={()=>{this.Register()}}>Register</Text>
                    <Text style={styles.login} onPress={()=>{this.UserMessage()}}>Message</Text>
                    <Text style={styles.login} onPress={() => this.props.navigation.navigate('Home')}>ToHome</Text>
                </View>
                <FlatList style={styles.logs} data={this.state.logs} renderItem={this._renderItem}
	        />
            </View>
        );
    }
}

//设置样式
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd',
    //    设置侧轴的对齐方式
        alignItems:'center',
    },
     iconStyle:{
         marginTop:50,
         width:80,
         height:80,
         borderRadius:40,
         borderWidth:2,
         borderColor:'white',
         marginBottom:30
     },
     textInputStyle:{
         height:38,
         width:screenWidth,
         backgroundColor:'white',
         marginBottom:1,
         textAlign:'center'
     },
     //登录按钮
     loginBtnStyle:{
         height:44,
         width:screenWidth * 0.9,
         backgroundColor:'green',
         marginTop:30,
         justifyContent:"center",
         alignItems:'center',
         borderRadius:5
     },
     //无法登录和新用户样式
     settingStyle:{
         flexDirection:'row',
         width:screenWidth * 0.9,
         height:44,
         alignItems:'center',
  
         justifyContent:'space-between'
     },
     // 其他登录方式
     otherLoginStyle:{
         flexDirection:'row',
         justifyContent:'space-around',
         alignItems:'center',
 
     // 绝对定位
         position:'absolute',
         bottom:10,
     },
     otherLoginIcon:{
         width:50,
         height:50,
         borderRadius:25,
         marginLeft:10,
     },
     back:{
        // flexDirection: 'row',
        // backgroundColor: 'white',
        width: 20,
        height: 20,
        position:'absolute',
        left:10,
        top:20,
      },
      backimg:{
        width:30,
        height:30,
      }
     
 });
 
 
 

const styles2=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white'
        },
        title:{
            fontSize:40,
            fontWeight:'bold',
            marginBottom:20
        },
        input:{
            fontSize: 20,
            width: 300,
            margin: 10,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderColor: '#841584',
            padding: 5,
            marginBottom:20
        },
        login:{
            fontSize:24,
            fontWeight:'bold',
            color: 'white',
            margin: 10,
            backgroundColor: 'orange',
            width: 150,
            height: 50,
            lineHeight: 50,
            textAlign: 'center',
   
        },
        logs: {
            elevation: 8,
            flex: 1,
            backgroundColor: '#fff',
          },
          logText: {
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
            paddingBottom: 10,
          },
    }
);

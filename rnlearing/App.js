/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator, createAppContainer,DrawerNavigator,createDrawerNavigator} from 'react-navigation'

import HomeScreen from './component/Home'
import LoginScreen from './component/Login'
import LoginView from './component/NewLogin'
import Search from './component/Search copy'
import Search2 from './component/Search-'
import MessageScreen from './component/Message'
import OrderFormScreen from './component/OrderForm'
import storage from './component/global/storage'
import RegisterSearch from './component/Register'
import {TabAppNavigator}  from './component/TabNavigation'
import Storage from './component/global/DeviceStorage'
import LogoutScreen from './component/Logout'
import {DeviceEventEmitter} from 'react-native'
global.storage = storage;
const HomeNavigator =createStackNavigator(
  {
    Home:HomeScreen,
    Search:Search
  }
)
const LoginNavigator =createStackNavigator(
  {
    Login:LoginScreen,
    Register:RegisterSearch
  }
)
var Login = {
  Login:{
  screen: LoginNavigator,
  navigationOptions: ({navigation}) => ({header: null})
}}

var Message = {
  Message:{
  screen:MessageScreen,
}}

var Logout = {
  Logout:{
    screen:LogoutScreen
  }
}

var DNavigation = {
  Home: {
    screen:HomeNavigator,
    navigationOptions: ({navigation}) => ({header: null})
  },
  Main: {
    screen: TabAppNavigator,
  },
  OrderFrom:{
    screen:OrderFormScreen,
  },
  Test:{
    screen:Search,
  }
}


function createNavigator( object ){
  return  createDrawerNavigator(
    object
  , {
    initialRouteName: 'Home',
    headerMode: 'screen'  ,
    hideStatusBar: true,
    drawerWidth:200,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    drawerType:'front',
    hideStatusBar:false,
    overlayColor: 'rgba(135, 206, 250,.4)',
    contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#87CEFA',
  
    },
  })
}

AppNavigator = createNavigator(DNavigation)
AppContainer1 = createAppContainer(AppNavigator); 


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      temp:DNavigation,
      DNavigation:{},
      AppContainer:AppContainer1,
      Mode:{},
    }
}

RefreshNavigator(){
  let Login1 = Login
  let Message1 = Message
  let Logout1= Logout
  Storage.get("User").then((data)=>{
    if(data !=null && data.token!=null)//代表已经登录
      { 
        let temp = {}
        Object.assign(temp,Message1,Logout1)
        this.setState({Mode:temp}) 
      }
    else 
      this.setState({Mode:Login1})

    let {Mode,DNavigation,temp} = this.state;
    DNavigation = {}
    Object.assign(DNavigation,temp,Mode)
    AppNavigator = createNavigator(DNavigation)
    AppContainer1 = createAppContainer(AppNavigator); 
    this.setState({AppContainer:AppContainer1})
  })
}

componentDidMount(){
  this.RefreshNavigator();
  this.LogoutEvent = DeviceEventEmitter.addListener("Logout", ()=>{
    this.RefreshNavigator();
  });
  this.LoginEvent = DeviceEventEmitter.addListener("Login", ()=>{
    this.RefreshNavigator();
  });
}

componentWillMount(){
  
}

componentWillUpdate(){
  // let {DNavigation,Mode} = this.state;
  // Object.assign(DNavigation,Mode)
  // AppNavigator = createNavigator(DNavigation)
  // AppContainer1 = createAppContainer(AppNavigator);
  // this.state.AppContainer = AppContainer1;
}
componentWillUnmount(){
  this.LogoutEvent.remove();
  this.LoginEvent.remove();
}
render() {
  const {AppContainer} = this.state
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',  
//     marginBottom: 5,
//   },
// });

// export default App;

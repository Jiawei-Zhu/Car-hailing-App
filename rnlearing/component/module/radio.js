import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	TouchableHighlight,
	Text,
	Image,
	Dimensions
} from 'react-native'

var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
var img = require('../../images/selt.png')
var Clickimg = require('../../images/selted.png')
export default class Radio extends Component{
    constructor(props){
        super(props);
          this.state={
              clicked:this.props.clicked == undefined?false:this.props.clicked,
          }
      }

      click(value){
          const {clicked} = this.state;
          this.props.Beclick(value)
          this.setState({clicked:!clicked});
      }
    render(){
        const {clicked} = this.props;
        return(
            <View style={{...this.props.style}} onPress ={this.click.bind(this,this.props.value)}>
                {
                clicked == true ? <Image  style={{width:14,height:14,marginRight:7}} source={Clickimg}></Image> : <Image style={{width:14,height:14,marginRight:7}}  source={img}></Image>
                }
            </View>
        )
    }
}
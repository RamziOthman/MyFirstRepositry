import React, { Component } from 'react'
import { View, StyleSheet, img } from 'react-native'

export default class ButtonBasics extends Component {  
     //const Home = (props) => {}
     //export default Home
    render() {  
        return ( 
      <View style = {styles.container}>
         <View style = {styles.redbox} />
         <View style = {styles.bluebox} >
         <img src='https://tinyurl.com/stpc12' width='46' ></img>
         </View>
         <View style = {styles.blackbox} />
      </View>
   );
    }
}


const styles = StyleSheet.create ({
   container: {
      //flexDirection: 'column',
      flexDirection: 'row',
      justifyContent: 'space-between',
      //alignItems: 'flex-top',
      //alignItems: 'space-between',
      backgroundColor: 'green',
      height: 600
   },
   redbox: {
     borderRadius: 50,
      width: 100,
      height: 100,
      backgroundColor: 'red',
      alignSelf:'end',
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      borderRadius: 15,
      alignSelf:'center',
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black',
      borderRadius: 15,
   },
})

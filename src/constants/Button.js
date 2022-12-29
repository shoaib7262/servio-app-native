import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {COLORS} from '../constants/theme';

const Button = (props) => {
  return (
    <View style={styles.button}>
        
        <TouchableOpacity style={styles.buttonStyle} {...props}>
            <Text style={styles.nextStyle}>{props.name}</Text>
        </TouchableOpacity>
      
    </View>
  )
}


const styles = StyleSheet.create({
 button:{
   
 },
 buttonStyle:{
    backgroundColor: COLORS.button,
    paddingVertical:10,
    paddingHorizontal:80,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginBottom:20,

},
nextStyle:{
    fontWeight:"bold"
},
})

export default Button
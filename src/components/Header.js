import { View, Text ,StyleSheet, TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import MenuComponent from './Menu'

export default function Header({open,visible}) {

  return (
    <View style={{paddingTop: Platform.OS==='android'&&50,backgroundColor:colors.white}}>
    <View style={styles.headercon}>
      <TouchableOpacity>
      <Ionicons name="chevron-back-sharp" size={30} color={colors.greyver3} />
      </TouchableOpacity>
      <Text style={styles.text}>Bitcoin Wallet</Text>
      <TouchableOpacity onPress={()=>open(!visible)}>
      <Feather name="more-vertical" size={26} color={colors.greyver3} />
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    headercon:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:colors.white,
        paddingHorizontal:10,
        paddingTop:25,
        paddingBottom:15
    },
    text:{
        fontWeight:"bold",
        fontSize:22,
        color:colors.secondary
    }
})
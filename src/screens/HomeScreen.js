import { View, Text,StyleSheet,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {colors} from "../utils/colors"
import Header from '../components/Header'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import CoinCard from '../components/CoinCard'
import MiniCard from '../components/MiniCard'
import GraphCard from '../components/GraphCard'
import MenuComponent from '../components/Menu'
export default function HomeScreen() {
    const [isopen,setisopen]=React.useState(false)

    const closisopen=()=>{
        setisopen(false)
    }
    const openisopen=()=>{
        setisopen(true)
    }
    const [visible, setVisible] = React.useState(false);

    const openMenu = (state) => setVisible(state);
  
    const closeMenu = () => setVisible(false);
  return (
    <View style={styles.mncontainer}>
        <Header visible={visible} open={openMenu}/>
        <MenuComponent closeMenu={closeMenu} visible={visible}/>
    
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.con2}>
           <CoinCard status={isopen} close={closisopen} open={openisopen}/>
            <GraphCard/>
          {
            isopen&& <View style={styles.con3}>
            <MiniCard btncolor={colors.skyblue} btntext={"Buy BTC"}/>
            <MiniCard btncolor={colors.pink} btntext={"Sell BTC"}/>
       </View>
          }
        </View>
    </ScrollView>
    </View>
  )
}


const styles=StyleSheet.create({
    mncontainer:{
        flex:1,
        backgroundColor:colors.primary
    },
    con2:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:15
    },
    con3:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:15
    }
})
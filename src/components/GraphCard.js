import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LineChart, Grid,AreaChart } from 'react-native-svg-charts'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../utils/colors";
import * as shape from 'd3-shape'
import { LineChartComponent } from "./Chart";
export default function GraphCard() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
  return (
      <View
        style={{
            minHeight:150,
          width: "100%",
          borderRadius: 14,
          paddingHorizontal: 15,
          paddingVertical: 15,
          backgroundColor: colors.white,
          shadowColor: colors.greyver3,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.18,
          shadowRadius: 4.59,
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
            overflow:"hidden"
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width:"50%"

            }}
          >
            <View
              style={{
                height: 7,
                width: 7,
                borderRadius: 3.5,
                backgroundColor: colors.pink,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Text style={{ marginLeft: 8 ,  color: colors.greyver3,
              fontWeight: "bold",
              textTransform: "uppercase",flex:14}}>Lower: $4.895</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
                  }}
          >
        
            <View
              style={{
                height: 7,
                width: 7,
                borderRadius: 3.5,
                backgroundColor: "green",
               }}
            />
            <Text style={{ marginLeft: 8 ,  color: colors.greyver3,
              fontWeight: "bold",
              textTransform: "uppercase",flex:14}}>Higher: $6.857</Text>
          </View>
        </View>
       <LineChartComponent/>
       
      </View>
    
  );
}

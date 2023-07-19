import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { colors } from '../utils/colors';

export const LineChartComponent = () => {
  const data2 = [80, 10, 95, 48, 24, 67, 51, 12, 33, 0, 24, 20, 50];

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        style={{ height: 130 }}
        gridMax={120}
        data={data2}
        curve={shape.curveNatural}
        svg={{
          stroke: colors.yellow,
          strokeWidth: 2,
        }}
        contentInset={{ top: 20, bottom: 20 }}
      >
      </LineChart>
      <View
        style={{
          position: 'absolute',
          left: 10,
          bottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
       <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <View style={{height:10,width:10,borderRadius:5,backgroundColor:colors.yellow}}></View>
        <Text style={{marginLeft:10,color:colors.secondary,fontWeight:"bold"}}>1 BTC=$5.483</Text>
       </View>
    </View>
    </View>
  );
};

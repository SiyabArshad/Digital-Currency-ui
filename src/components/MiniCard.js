import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../utils/colors";

export default function MiniCard({ btntext, btncolor }) {
  return (
    <View
      style={{
        width: "46%",
        minHeight: 110,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
        borderRadius: 14,
        shadowColor: colors.greyver3,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: btncolor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="dollar-sign" size={24} color={colors.white} />
        </View>
        <Text
          style={{ fontWeight: "bold", color: colors.secondary, fontSize: 16 }}
        >
          {btntext}
        </Text>
      </View>
    </View>
  );
}

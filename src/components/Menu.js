import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { colors } from "../utils/colors";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Ionicicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
const MenuComponent = ({ closeMenu, visible }) => {
  return (
    <View
      style={{
        display: visible ? "flex" : "none",
        paddingHorizontal: 8,
        paddingVertical: 10,
        backgroundColor: colors.primary,
        position: "absolute",
        zIndex: 99,
        right: 10,
        top: 60,
        borderRadius: 10,
        width: 200,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
      }}
    >
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 18 }}>Edit</Text>
        <FontAwesome5Icon name="edit" size={20} color="black" />
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.greyver2,
          marginVertical: 5,
        }}
      />
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 18 }}>Courier info</Text>
        <FontAwesome5Icon name="info-circle" size={20} color="black" />
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.greyver2,
          marginVertical: 5,
        }}
      />
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 18 }}>Share</Text>
        <Fontisto name="share-a" size={20} color="black" />
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.greyver2,
          marginVertical: 5,
        }}
      />
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 18, color: "red" }}>Remove</Text>
        <Ionicicons name="ios-remove-circle-outline" size={24} color={"red"} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuComponent;

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../utils/colors";
export default function CoinCard({open,close,status}) {
  const [currtab, setcurrtab] = React.useState("Day");
  return (
    <View>
      <View
        style={{
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
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: colors.yellow,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="bitcoin" size={24} color={colors.white} />
            </View>
            <Text style={{ marginLeft: 20 }}>Bitcoin</Text>
          </View>
          <Text
            style={{
              color: colors.greyver3,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            BTC
          </Text>
        </View>
        <Text
          style={{
            marginVertical: 5,
            fontSize: 32,
            color: colors.secondary,
            fontWeight: "bold",
          }}
        >
          3.529020 BTC
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: colors.greyver1, fontWeight: "600", fontSize: 22 }}
          >
            $19.153 USD
          </Text>
          <View
            style={{
              backgroundColor: colors.pink,
              paddingHorizontal: 7,
              paddingVertical: 5,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: colors.white, fontWeight: "bold" }}>
              - 2.32%
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        {
          status?
          <TouchableOpacity onPress={()=>close()}>
          <Feather name="chevron-up" size={30} color={colors.greyver3} />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>open()}>
        <Feather name="chevron-down" size={30} color={colors.greyver3} />
      </TouchableOpacity>
        }
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        {["Day", "Week", "Month", "Year"].map((item, i) => (
          <TouchableOpacity
            onPress={() => setcurrtab(item)}
            style={{
              backgroundColor:
                item === currtab ? colors.greyver2 : colors.primary,
              paddingHorizontal: 14,
              paddingVertical: 4,
              borderRadius: 14,
            }}
          >
            <Text
              style={{
                color: item === currtab ? colors.white : colors.greyver4,
                fontSize: 16,
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

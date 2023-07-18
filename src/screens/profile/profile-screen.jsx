import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SafeAreaView from "../../components/templates/safe-area-view";

const Avatar = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          backgroundColor: "#6D0101",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="account" size={60} color={"#fff"} />
      </TouchableOpacity>
    </>
  );
};
const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "right",
          marginHorizontal: 4,
          marginVertical: 8,
          fontSize: 14,
          color: "#D31111",
          fontWeight: "bold",
        }}
      >
        {`{User id}`}
      </Text>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <Avatar />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontWeight: "700",
              fontSize: 16,
              letterSpacing: 2,
            }}
          >
            Ryan Mercurio
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              right: -15,
            }}
          >
            <Icon name="pen" size={25} color={"#ccc"} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: "#625C58",
            fontSize: 14,
          }}
        >
          0948482192
        </Text>
      </View>

      <View
        style={[
          styles.walletBanner,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            marginVertical: 10,
            paddingHorizontal: 14,
            backgroundColor: "#D31111",
          },
        ]}
      >
        <View>
          <Text
            style={{
              fontWeight: "500",
              color: "#fff",
              fontSize: 16,
            }}
          >
            My Wallet
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "200",
              letterSpacing: 1,
            }}
          >
            Auto - Mate Balance
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: 20,
          }}
        >
          <Image source={require("../../../assets/coins.png")} />
          <Text
            style={{
              fontWeight: "600",
              color: "#fff",
              fontSize: 18,
            }}
          >
            0
          </Text>
        </View>
      </View>
      {/* <Button title="Cart" onPress={() => navigation.navigate("Cart")} />
      <Button
        title="Transaction"
        onPress={() => navigation.navigate("Transaction")}
      />
      <Button title="Vehicle" onPress={() => navigation.navigate("Vehicle")} /> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

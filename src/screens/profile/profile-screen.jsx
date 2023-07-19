import {
  Button,
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
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

const WalletBanner = ({ wallet }) => (
  <View style={[styles.walletBanner]}>
    <View>
      <Text style={styles.title}>My Wallet</Text>
      <Text style={styles.subTitle}>Auto - Mate Balance</Text>
    </View>
    <View style={styles.rightColumn}>
      <Image source={require("../../../assets/coins.png")} />
      <Text style={styles.coinText}>{wallet}</Text>
    </View>
  </View>
);

const ProfileScreen = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      title: "Auto - Cart",
      action: () => navigation.navigate("Cart"),
      iconName: "cart",
      subTitle: "Manage your cart items",
    },
    {
      id: "2",
      title: "My Vehicles",
      action: () => navigation.navigate("Vehicle"),
      name: "Vehicle",
      iconName: "car-info",
      subTitle: "Add new car, manage car",
    },
    {
      id: "3",
      title: "My Transactions",
      action: () => navigation.navigate("Transaction"),
      name: "Transaction",
      iconName: "car-wrench",
      subTitle: "Ongoing service, finished service",
    },
    {
      id: "4",
      title: "Settings",
      action: () => navigation.navigate("Settings"),
      name: "Cart",
      iconName: "bolt",
      subTitle: "Manage settings",
    },
    {
      id: "5",
      title: "Terms of Use",
      action: () => navigation.navigate("Terms"),
      name: "Cart",
      iconName: "newspaper",
      subTitle: "About our policy",
    },
    {
      id: "6",
      title: "About us",
      action: () => navigation.navigate("About"),
      name: "Cart",
      iconName: "account-box-multiple",
      subTitle: "About our company",
    },
    {
      id: "7",
      title: "Log out",
      action: () => console.log("logout"),
      name: "Cart",
      iconName: "logout",
      subTitle: "Sign out",
    },
  ];
  const keyExtractor = useCallback((item) => item?.id);
  const renderItem = useCallback(({ item }) => {
    return (
      <TouchableOpacity
        onPress={item.action}
        style={[
          styles.row,
          {
            flex: 1,
            alignItems: "center",
            marginHorizontal: 24,
          },
        ]}
      >
        <View
          style={{ marginRight: 34, alignSelf: "flex-start", paddingTop: 2 }}
        >
          <Icon name={item.iconName} size={22} color={"#000"} />
        </View>

        <View style={{ alignSelf: "flex-start" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 12,
              color: "#625C58",
            }}
          >
            {item.subTitle}
          </Text>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Icon name="chevron-right" size={22} color={"#000"} />
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView>
      <Text style={styles.userId}>{`{User id}`}</Text>

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

        <Text style={styles.smallText}>0948482192</Text>
      </View>

      <WalletBanner wallet={0} />

      <FlatList
        data={DATA}
        ListHeaderComponent={<View style={{ marginTop: 15 }} />}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={<View style={styles.spacing} />}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userId: {
    textAlign: "right",
    marginHorizontal: 4,
    marginVertical: 8,
    fontSize: 14,
    color: "#D31111",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  walletBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: "#D31111",
  },
  smallText: {
    color: "#625C58",
    fontSize: 14,
  },
  title: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 16,
  },
  subTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "200",
    letterSpacing: 1,
  },
  rightColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 20,
  },
  coinText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 18,
  },
  spacing: {
    marginVertical: 14,
  },
});

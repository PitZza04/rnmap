import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { FC, useCallback } from "react";
import Icon from "react-native-vector-icons/Feather";

interface ListVehicleProps {
  vehicle: Vehicle;
  onPress: () => void;
}

const Header = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontFamily: "Roboto-Bold",
          fontSize: 20,
          color: "#000",
        }}
      >
        Manage car
      </Text>
    </View>
  );
};
const ListVehicle: FC<ListVehicleProps> = ({ vehicle, onPress }) => {
  const { id, brand, model, year, plate } = vehicle;
  return (
    <View style={styles.root}>
      <Image source={require("../../../assets/swift.png")} />
      <View style={{ marginLeft: 30 }}>
        <Text style={styles.vehicleName}>{`${brand.name} ${model.name}`}</Text>
        <Text style={styles.plate}>{`Plate: ${plate}`}</Text>
      </View>

      <View
        style={[
          $row,
          {
            position: "absolute",
            alignSelf: "flex-start",
            paddingTop: 5,
            right: 0,
          },
        ]}
      >
        <TouchableOpacity>
          <Icon name="edit" size={20} color={"#229BDF"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="trash" size={20} color={"#b61616"} />
        </TouchableOpacity>
      </View>

      <View
        style={[
          $row,
          {
            position: "absolute",
            alignSelf: "flex-end",
            paddingBottom: 3,
            right: 0,
            borderWidth: 1,
            borderColor: "yellow",
          },
        ]}
      >
        <Text style={styles.smText}>Show More Details</Text>
      </View>
    </View>
  );
};

interface Vehicle {
  id: string;
  brand: {
    name: string;
    img_url: string;
    created_at?: string;
  };
  model: {
    name: string;
    img_url: string;
    created_at?: string;
  };
  year: number;
  plate: string;
}

const VehicleScreen: FC = () => {
  const keyExtractor = useCallback((item: Vehicle) => item.id, []);
  const renderListItem = useCallback(
    ({ item }: ListRenderItemInfo<Vehicle>) => {
      return (
        <ListVehicle
          vehicle={item}
          onPress={() => console.log("hello World")}
        />
      );
    },
    []
  );
  const renderItemSeparator = () => <View style={$paddingMedium} />;
  const data = [
    {
      id: "1",
      brand: {
        name: "Mazda",
        img_url: "",
      },
      model: {
        name: "Guzada",
        img_url: "",
      },
      year: 2000,
      plate: "ABD 512",
    },
    {
      id: "2",
      brand: {
        name: "Mazda",
        img_url: "",
      },
      model: {
        name: "Guzada",
        img_url: "",
      },
      year: 2000,
      plate: "ABD 512",
    },
    {
      id: "3",
      brand: {
        name: "Mazda",
        img_url: "",
      },
      model: {
        name: "Guzada",
        img_url: "",
      },
      year: 2000,
      plate: "ABD 512",
    },
  ];
  return (
    <View style={$root}>
      <FlatList<Vehicle>
        data={data}
        renderItem={renderListItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={<Header />}
        ItemSeparatorComponent={renderItemSeparator}
      />
      <TouchableOpacity
        style={{
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D0D3D9",
          flexDirection: "row",
          gap: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Icon name="plus" size={20} color={"#000"} />
        <Text
          style={{
            fontSize: 14,
            color: "#000",
          }}
        >
          Add another vehicle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VehicleScreen;

const $root: ViewStyle = {
  flex: 1,
};
const $paddingMedium: ViewStyle = {
  padding: 8,
};
const $row: ViewStyle = {
  flexDirection: "row",
};
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    height: 70,
    borderWidth: 1,
    borderColor: "red",
  },
  smText: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
  },
  plate: {
    fontSize: 13,
    fontFamily: "Roboto-Bold",

    color: "#625C58",
  },
  vehicleName: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    color: "#000",
  },
});

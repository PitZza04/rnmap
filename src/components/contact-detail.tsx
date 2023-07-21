import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ChannelDetailProps {
  id: string;
  name: string;
}
const ContactDetail = ({ id, name }: ChannelDetailProps) => {
  console.log(id, name);
  return (
    <View>
      <Text>ContactDetail</Text>
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({});

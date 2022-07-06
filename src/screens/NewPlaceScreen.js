import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const NewPlaceSreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>NewPlaceSreen</Text>
    </View>
  );
};

export default NewPlaceSreen;

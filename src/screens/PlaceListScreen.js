import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const PlaceListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>PlaceListScreen</Text>
    </View>
  );
};

export default PlaceListScreen;

import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import colors from "../utils/colors";

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
})

const LocationSelector = ({ onLocation }) => {
    const [pickedLocation, setPickedLocation] = useState();

    const handleGetLocation = async () => {
        const isLocationPermissionGranted = await verifyPermissions();

        if(!isLocationPermissionGranted) return;

        const location = await Location.getCurrentPositionAsync({
            timeInterval: 5000
        })

        const { latitude, longitude } = location.coords;

        setPickedLocation({
            lat: latitude,
            lng: longitude
        })

        onLocation({
            lat: latitude,
            lng: longitude
        });
    }

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permisos insuficientes", "Necesitas permisos para usar la localización", [{ text: "Ok" }]);
            return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedLocation ? (
                    <Text>No hay una ubicación seleccionada</Text>
                ) : (
                    <Text>{`latitud: ${pickedLocation.lat}, longitud: ${pickedLocation.lng}`}</Text>
                )}
            </View>
            <Button 
                title="Obtener ubicación"
                onPress={handleGetLocation}
                color={colors.primary}
            />
        </View>
    )
}

export default LocationSelector;
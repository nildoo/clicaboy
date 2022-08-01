import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, Dimensions, StyleSheet } from "react-native";
import { Container, Header, MiniMenu, Bars } from "./styles";
import MapView, { Marker, MarkerProps, Heatmap } from 'react-native-maps';
import * as Location from 'expo-location';
import { Colors } from "../../constants/Colors";
import Menu from "../../components/Menu";
import { Octicons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const [location, setLocation] = useState(null);
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLoadMap(true);
            console.log(location);
        })();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Bars onPress={() => navigation.navigate('Account')}>
                    <Octicons name="three-bars" size={32} color={Colors.blueInput} />
                </Bars>
                <MiniMenu>
                    <Menu icon="cloud-circle" text="Você está online" color={Colors.greenClean} />
                    {/* <Menu icon="wallet" text="R$ 128,00" color={Colors.blueStrong} /> */}
                </MiniMenu>
            </Header>
            <Container style={styles.container}>
                {(loadMap == true) ?
                    <Container>
                        <MapView loadingEnabled={loadMap} style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.100,
                                longitudeDelta: 0.100,
                            }}
                        >
                            <Heatmap radius={50} opacity={0.6}
                                gradient={{
                                    colors: ["#5915AB", "#210445", "#97E31D"],
                                    startPoints: [1, 10, 100]
                                }}
                                points={[
                                    { latitude: 37.78825, longitude: -122.4324 },
                                    { latitude: 37.78125, longitude: -122.4314 },
                                    { latitude: 37.78225, longitude: -122.4214 },
                                    { latitude: 37.71125, longitude: -122.4114 },
                                    { latitude: 37.73125, longitude: -122.4114 },
                                    { latitude: 37.71125, longitude: -122.4514 }
                                ]} />
                            <Marker
                                coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                                image={require('../../assets/image/custom_pin.png')} />
                        </MapView>
                    </Container>
                    : null
                }
            </Container>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: 500,
        height: '100%',
    }
})
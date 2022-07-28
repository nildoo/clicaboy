import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import Menu from "../../components/Menu";

export default function Home({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: '#cdcdcd' }}>

            <View style={{width: 190, marginTop: 40}}>
                <Menu icon="cloud-circle" text="Você está online" color={Colors.greenClean} />
                <Menu icon="wallet" text="R$ 128,00" color={Colors.blueStrong} />
            </View>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}
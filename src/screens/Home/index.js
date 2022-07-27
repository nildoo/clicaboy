import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from "react-native";
import {Colors} from '../../constants/Colors';

export default function Home({navigation}){

    return(
        <View>
            <Text>Home</Text>
            <Button title="Contato" onPress={() => navigation.navigate('Contact')} />
            <StatusBar style="light" />
        </View>
    )
}
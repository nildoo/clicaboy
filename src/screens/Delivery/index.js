import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Container, Header, Bars, LabelPage, Title, ImageBottom } from "./styles";
import { Colors } from "../../constants/Colors";
import { Octicons } from '@expo/vector-icons';

export default function Delivery({navigation}) {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: Colors.white }}>
            <Container>
                <Header>
                    <Bars>
                        <Octicons name="three-bars" size={32} color={Colors.blueInput} />
                    </Bars>
                    <LabelPage>
                        <Title style={{fontFamily: "Arboria-Bold"}}>Minhas entregas</Title>
                    </LabelPage>
                </Header>
                <ImageBottom>
                    <Image source={require('../../assets/image/rodape_fundobranco.png')} resizeMode="cover" style={{ width: 440, height: 254 }} />
                </ImageBottom>
            </Container>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}
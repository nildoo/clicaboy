import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import { Container, Header, Bars, LabelPage, Title, Imagem } from "./styles";
import { Colors } from "../../constants/Colors";
import CardDelivery from "../../components/Card";
import { AntDesign } from '@expo/vector-icons';

export default function Delivery({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: Colors.white }}>
            <Container>
                <Header>
                    <Bars onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="arrowleft" size={32} color={Colors.blueInput} onPress={() => navigation.goBack()} />
                    </Bars>
                    <LabelPage>
                        <Title style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput}}>Minhas entregas</Title>
                    </LabelPage>
                </Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardDelivery />
                    <CardDelivery />
                    <CardDelivery />
                    <CardDelivery />
                    <CardDelivery />
                    <CardDelivery />
                    <CardDelivery />
                </ScrollView>
                <Imagem source={require('../../assets/image/city-bike.png')} />
            </Container>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}
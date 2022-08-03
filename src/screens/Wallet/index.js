import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Container, Header, Bars, LabelPage, Title, Balance, SideLeft, SideRight, Content, Imagem } from "./styles";
import { Colors } from "../../constants/Colors";
import CardWallet from "../../components/CardWallet";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Wallet({ navigation }) {

    return (

        <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: Colors.white }}>
            <Container>
            <Header>
                    <Bars onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="arrowleft" size={32} color={Colors.blueInput} onPress={() => navigation.goBack()} />
                    </Bars>
                    <LabelPage>
                        <Title style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput}}>Carteira</Title>
                    </LabelPage>
                </Header>
                <Balance>
                    <SideLeft>
                        <Title style={{ color: "white", fontFamily: "Arboria-Bold" }}>R$ 1.431,00</Title>
                    </SideLeft>
                    <SideRight>
                        <FontAwesome name="money" size={18} color="white" />
                        <Title style={{ color: "white", fontFamily: "Arboria-Bold" }}> Sacar</Title>
                    </SideRight>
                </Balance>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                    <CardWallet />
                </ScrollView>
                <Imagem source={require('../../assets/image/city-bike.png')} />
            </Container>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}
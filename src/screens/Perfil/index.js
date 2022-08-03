import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { Container, Content, Header, Bars, LabelPage, SideLeft, SideRight, Label, Title, AreaPhoto, PhotoPerfil, InfoPerfil, ComplementaryInfo, AreaButton, Imagem } from './styles';
import { Colors } from "../../constants/Colors";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import ButtonCad from "../../components/ButtonCad";

export default function Perfil({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <Header>
                    <Bars onPress={() => navigation.navigate('Account')}>
                        <AntDesign name="arrowleft" size={32} color={Colors.blueInput} onPress={() => navigation.goBack()} />
                    </Bars>
                    <LabelPage>
                        <Title style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput }}>Meu Perfil</Title>
                    </LabelPage>
                </Header>
                <AreaPhoto>
                    <PhotoPerfil source={require('../../assets/image/images.jpg')} />
                    <Text style={{ fontFamily: "Arboria-Bold", fontSize: 20, color: Colors.blueInput, padding: 10 }}>Rodrigo da Silva</Text>
                    <Text style={{ fontFamily: "Arboria-Bold", fontSize: 16, color: Colors.blueInput, lineHeight: 18 }}><Ionicons name="star-sharp" size={18} color="#FFD800" /> 4.3</Text>
                </AreaPhoto>
                <Content>
                    <InfoPerfil>
                        <SideLeft>
                            <Label style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput }}>Nome Completo:</Label>
                            <Title style={{ fontFamily: "Arboria-Book", color: Colors.blueInput }}>Rodrigo da Silva</Title>
                        </SideLeft>
                        <SideRight>
                            <Label style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput }}>CPF:</Label>
                            <Title style={{ fontFamily: "Arboria-Book", color: Colors.blueInput }}>999.999.999-99</Title>
                        </SideRight>
                    </InfoPerfil>
                    <ComplementaryInfo>
                        <Label style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput }}>Email:</Label>
                        <Title style={{ fontFamily: "Arboria-Book", color: Colors.blueInput }}>rodrigo.silva@gmail.com</Title>
                    </ComplementaryInfo>
                    <ComplementaryInfo>
                        <Label style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput }}>Telefone:</Label>
                        <Title style={{ fontFamily: "Arboria-Book", color: Colors.blueInput }}>47 9 99644-4478</Title>
                    </ComplementaryInfo>
                    <ComplementaryInfo>
                        <Label style={{ fontFamily: "Arboria-Bold", color: Colors.blueInput }}>Status:</Label>
                        <Title style={{ fontFamily: "Arboria-Book", color: Colors.blueInput }}>Aprovado</Title>
                    </ComplementaryInfo>
                    <AreaButton>
                        <ButtonCad icon="edit" text="Alterar perfil" background={Colors.blueStrong} color={Colors.white} onPress={() => navigation.navigate('Home')} />
                        <ButtonCad icon="close" text="Excluir minha conta" background={Colors.buttonRed} color={Colors.white} onPress={() => navigation.navigate('Home')} />
                    </AreaButton>
                </Content>
                <Imagem source={require('../../assets/image/city-bike.png')} />
            </Container>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}
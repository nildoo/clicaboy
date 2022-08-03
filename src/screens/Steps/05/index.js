import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from "react-native";
import { Container, Content, AreaIndentifier, Photo, RNCamera, Perfil, PhotoPerfil, AreaUser, Hello, User, ImagemTop, H1, Imagem, Description } from './styles';
import { Colors } from "../../../constants/Colors";

export default function Five({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <ImagemTop source={require('../../../assets/image/ceu.png')} resizeMode="cover" />
            <Container>
                <Content>
                    <AreaIndentifier>
                        <Photo>
                            <PhotoPerfil source={require('../../../assets/image/images.jpg')} />
                        </Photo>
                        <AreaUser>
                            <Hello style={{ fontFamily: "Arboria-Book" }}>Seja Bem vindo,</Hello>
                            <User style={{ fontFamily: "Arboria-Bold" }}>Rodrigo</User>
                        </AreaUser>
                    </AreaIndentifier>
                    <RNCamera>
                        <Perfil />
                    </RNCamera>
                    <H1 style={{ fontFamily: "Arboria-Bold" }}>Documento Recebido</H1>
                    <Description style={{ fontFamily: "Arboria-Book" }}>
                        O recebimento de toda a sua documentação  foi realizada pelo aplicativo e agora vamos realizar uma
                        avaliação e você receberá uma notificação.
                    </Description>
                </Content>
            </Container>
            <Imagem source={require('../../../assets/image/city-bike.png')} />
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}
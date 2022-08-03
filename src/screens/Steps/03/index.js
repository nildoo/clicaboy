import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from "react-native";
import { Container, Content, AreaIndentifier, Photo, RNCamera, Perfil, PhotoPerfil, AreaUser, Hello, User, ImagemTop, AreaButton, Imagem, Description } from './styles';
import { Colors } from "../../../constants/Colors";
import ButtonCad from "../../../components/ButtonCad";
import { AntDesign } from '@expo/vector-icons';

export default function StepTree({ navigation }) {

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
                    <Description style={{ fontFamily: "Arboria-Book" }}>
                        Para dar continuidade ao processo de cadastro, será necessário enviar documentos para análise do ClicaBoy.
                    </Description>
                    <Description style={{ fontFamily: "Arboria-Book" }}>
                        Basta seguir o passo a passo para continuar seu cadastro.
                    </Description>
                    <Description style={{ fontFamily: "Arboria-Black" }}>
                        Carteira Nacional de Habilitação
                    </Description>
                    <Description style={{ fontFamily: "Arboria-Book" }}>
                        Envie uma foto aberta da CNH ou o arquivo PDF gerado no aplicativo Carteira de Habilitação.
                    </Description>
                    <RNCamera>
                        <Perfil>
                            <AntDesign name="download" size={32} color="#bbb" />
                        </Perfil>
                    </RNCamera>
                    <AreaButton style={{ marginTop: 40 }}>
                        <ButtonCad icon="arrow-circle-right" text="PRÓXIMO" background={Colors.blueScreen} color={Colors.white} onPress={() => navigation.navigate('StepFour')} />
                    </AreaButton>
                </Content>
            </Container>
            <Imagem source={require('../../../assets/image/city-bike.png')} />
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}
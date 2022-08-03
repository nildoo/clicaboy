import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from "react-native";
import { Container, Content, AreaIndentifier, Photo, PhotoPerfil, AreaUser, Hello, User, ImagemTop, RNCamera, AreaButton, Imagem, Description } from './styles';
import { Colors } from "../../../constants/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonCad from "../../../components/ButtonCad";

export default function StepOne({navigation}) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <ImagemTop source={require('../../../assets/image/ceu.png')} resizeMode="cover" />
            <Container>
                <Content>
                    <AreaIndentifier>
                        <Photo>
                            <MaterialCommunityIcons name="camera-plus" size={32} color="gray" />
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
                        Basta seguir o passo a passo para continuar com o Cadastro.
                    </Description>
                    <Description style={{ fontFamily: "Arboria-Black" }}>
                        Foto Perfil
                    </Description>
                    <Description style={{ fontFamily: "Arboria-Book" }}>
                        Insira uma foto que será exibida no seu perfil. Esta foto deve ser sem óculos e/ou capacete.
                        Seu rosto deve estar amostra.
                    </Description>
                    <RNCamera>
                        <PhotoPerfil>
                            <MaterialCommunityIcons name="camera-plus" size={32} color="#bbb" />
                        </PhotoPerfil>
                    </RNCamera>
                    <AreaButton>
                        <ButtonCad icon="arrow-circle-right" text="PRÓXIMO" background={Colors.blueScreen} color={Colors.white} onPress={() => navigation.navigate('Home')} />
                    </AreaButton>
                </Content>
            </Container>
            <Imagem source={require('../../../assets/image/city-bike.png')} />
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}
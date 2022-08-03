import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text } from "react-native";
import { Container, Content, AreaIndentifier, Photo, Vehicle, PhotoPerfil, AreaUser, Hello, User, ImagemTop, AreaButton, Imagem, Description } from './styles';
import { Colors } from "../../../constants/Colors";
import ButtonCad from "../../../components/ButtonCad";
import Tag from '../../../components/Tag';

export default function StepTwo({ navigation }) {

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
                        Tipo de Veículo
                    </Description>
                    <Description style={{ fontFamily: "Arboria-Book" }}>
                        Escolha como você irá fazer o transporte dos alimentos ou entregas.
                    </Description>
                    <View style={{marginTop: 30}}>
                        <Tag text="Bicileta" color={Colors.blueStrong} />
                        <Tag text="Moto" color={Colors.blueStrong} />
                    </View>
                    <AreaButton style={{ marginTop: 40 }}>
                        <ButtonCad icon="arrow-circle-right" text="PRÓXIMO" background={Colors.blueScreen} color={Colors.white} onPress={() => navigation.navigate('StepTree')} />
                    </AreaButton>
                </Content>
            </Container>
            <Imagem source={require('../../../assets/image/city-bike.png')} />
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}
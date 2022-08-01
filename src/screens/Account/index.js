import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Header, AreaBack, Perfil, Name, Photo, Content, Line, Title, ImageBottom } from "./styles";
import { Colors } from "../../constants/Colors";
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Account({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.blueScreen }}>
            <Container>
                <Header>
                    <AreaBack>
                        <AntDesign name="arrowleft" size={32} color="#fff" onPress={() => navigation.goBack()} />
                    </AreaBack>
                    <Perfil>
                        <Name style={{ fontFamily: "Arboria-Bold" }}>Rodrigo da Silva {'\n'}
                            <Ionicons name="star-sharp" size={16} color="#FFD800" /> 4.3</Name>
                        <Photo><MaterialIcons name="account-circle" size={118} color="white" /></Photo>
                    </Perfil>
                </Header>
                <Content>
                    <Line />
                    <TouchableOpacity onPress={()=> navigation.navigate('Delivery')}>
                        <Title style={{ fontFamily: "Arboria-Bold" }}>Minhas entregas</Title>
                    </TouchableOpacity>
                    <Line />
                    <TouchableOpacity>
                        <Title style={{ fontFamily: "Arboria-Bold" }}>Carteira</Title>
                    </TouchableOpacity>
                    <Line />
                    <TouchableOpacity>
                        <Title style={{ fontFamily: "Arboria-Bold" }}>Meu Perfil</Title>
                    </TouchableOpacity>
                    <Line />
                    <TouchableOpacity>
                        <Title style={{ fontFamily: "Arboria-Bold" }}>Sair</Title>
                    </TouchableOpacity>
                </Content>
                <ImageBottom>
                    <ImageBackground source={require('../../assets/image/cidade_menu_roxo.png')} style={{width: 440, height: 201}} />
                </ImageBottom>
            </Container>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}
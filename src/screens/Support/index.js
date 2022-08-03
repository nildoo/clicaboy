import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView } from "react-native";
import { Header, MiniMenu, Bars, Content, AreaIndentifier, Photo, AreaUser, Hello, User, Ask } from './styles';
import { Colors } from "../../constants/Colors";
import Menu from "../../components/Menu";
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonCad from "../../components/ButtonCad";

export default function Support({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <Header>
                <Bars onPress={() => navigation.navigate('Account')}>
                    <Octicons name="three-bars" size={32} color={Colors.blueInput} />
                </Bars>
                <MiniMenu>
                    <Menu icon="cloud-circle" text="Você está online" color={Colors.greenClean} />
                </MiniMenu>
            </Header>
            <Content>
                <AreaIndentifier>
                    <Photo>
                        <MaterialCommunityIcons name="camera-plus" size={32} color="gray" />
                    </Photo>
                    <AreaUser>
                        <Hello style={{ fontFamily: "Arboria-Book" }}>Olá,</Hello>
                        <User style={{ fontFamily: "Arboria-Bold" }}>Rodrigo</User>
                    </AreaUser>
                </AreaIndentifier>
                <Ask style={{ fontFamily: "Arboria-Book" }}>Como podemos te ajudar?</Ask>
                <ButtonCad text="Cliente não encontra-se no local" background={Colors.blueStrong} color={Colors.white}  />
                <ButtonCad text="Endereço está errado" background={Colors.blueStrong} color={Colors.white}  />
                <ButtonCad text="Meu veículo apresentou problema" background={Colors.blueStrong} color={Colors.white}  />
            </Content>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}
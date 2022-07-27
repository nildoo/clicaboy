import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, KeyboardAvoidingView, Platform, Text } from "react-native";
import { Header, Logo, Container, IconAbs, Hiden, AreaButton, Account, AreaText, Terms } from "./styles";
import Button from "../../components/Button";
import Input from '../../components/Input';
import { Colors } from "../../constants/Colors";
import { Feather } from '@expo/vector-icons';

export default function Login({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [hide, setHide] = useState(true);

    return (
        <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', backgroundColor: Colors.blueScreen }}>
            <Header>
                <Logo source={require('../../assets/image/logo-splash.png')} />
            </Header>
            <Container>
                <Input icon="user" placeholder="Digite seu Email" onChange={setEmail} keyboardType="email-address" placeholderTextColor={Colors.white} />
                <Hiden>
                    <Input icon="lock" placeholder="***" isSecure={hide ? true : false} onChange={setPassword} placeholderTextColor={Colors.white} />
                    <IconAbs>
                        <Feather name={hide ? 'eye-off' : 'eye'} size={18} color={Colors.inputIcon} onPress={() => setHide(!hide)} />
                    </IconAbs>
                </Hiden>
                <AreaButton>
                    <Button text="ACESSAR" background={Colors.blueStrong} color={Colors.white} />
                </AreaButton>
                <Account>
                    <Button text="Esqueci minha senha" background={Colors.blueStrong} color={Colors.white} />
                    <Button text="Quero me cadastrar" background={Colors.white} color={Colors.blueStrong} />
                </Account>
                <AreaText>
                    <Terms>
                        Termos e Condições de uso e Política de privacidade
                    </Terms>
                </AreaText>
            </Container>
            <StatusBar style="light" />
        </KeyboardAvoidingView>
    )
}
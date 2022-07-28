import React from "react";
import { ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import { Ionicons  } from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";

export default function Menu({ text, onPress, loading, icon, color }) {

    return (
        <Container>
            <Touchable disabled={loading} onPress={onPress}>
                <InputIcon>
                    <Ionicons name={icon} size={24} color={color} />
                </InputIcon>
                {loading ? (
                    <ActivityIndicator color='red' size='large' />
                ) : (
                    <ButtonText>{text}</ButtonText>
                )}
            </Touchable>
        </Container>
    );
}

const Container = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 5px 0;
`
const Touchable = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 17px;
  align-items: center;
`
const InputIcon = styled.View`
    display: flex;
    padding: 0 18px;
`
const ButtonText = styled.Text`
  font-size: 14px;
  color: ${Colors.blueStrong};
  font-weight: bold;
`
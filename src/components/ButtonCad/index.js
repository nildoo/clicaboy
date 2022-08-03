import React from 'react';
import { ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function ButtonCad({ text, onPress, loading, background, color, icon }) {

  return (
    <Container>
      <Touchable disabled={loading} onPress={onPress} style={{ backgroundColor: background }}>
        <InputField>
          <InputIcon>
            <FontAwesome name={icon} size={18} color={Colors.white} />
          </InputIcon>
          <ButtonText style={{ color: color, fontFamily: "Arboria-Bold" }}>   {text}</ButtonText>
        </InputField>
      </Touchable>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
const Touchable = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`
const ButtonText = styled.Text`
  font-size: 14px;
`
const InputField = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const InputIcon = styled.View`
`
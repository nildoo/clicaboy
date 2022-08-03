import React from 'react';
import { ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export default function Vehicle({ text, onPress, loading, background, color }) {

  return (
    <Container>
      <Touchable disabled={loading} onPress={onPress} style={{backgroundColor: background}}>
        {loading ? (
          <ActivityIndicator color='#FFF' size='large' />
        ) : (
          <ButtonText style={{color: color, fontFamily: "Arboria-Bold"}}>{text}</ButtonText>
        )}
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
  margin-bottom: 20px;
`
const Touchable = styled.TouchableOpacity`
  display: flex;
  width: 70%;
  height: 50px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.blueScreen}; 
`
const ButtonText = styled.Text`
  font-size: 14px;
`
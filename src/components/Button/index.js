import React from 'react';
import { ActivityIndicator } from "react-native";
import styled from 'styled-components/native';

export default function Button({ text, onPress, loading, background, color }) {

  return (
    <Container>
      <Touchable disabled={loading} onPress={onPress} style={{backgroundColor: background}}>
        {loading ? (
          <ActivityIndicator color='#FFF' size='large' />
        ) : (
          <ButtonText style={{color: color}}>{text}</ButtonText>
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
  width: 100%;
  height: 50px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`
const ButtonText = styled.Text`
  font-size: 12px;
`
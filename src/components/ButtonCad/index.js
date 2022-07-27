import React from 'react';
import { ActivityIndicator } from "react-native";
import styled from 'styled-components/native';

export default function ButtonCad({ text, onPress, loading }) {

  return (
    <ContainerBottom>
      <Touchable disabled={loading} onPress={onPress}>
        {loading ? (
          <ActivityIndicator color='#FFFF' size='large' />
        ) : (
          <ButtonText style={{fontFamily: 'Arboria-Medium'}}>{text}</ButtonText>
        )}
      </Touchable>
    </ContainerBottom>
  )
}

const ContainerBottom = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
`

const Touchable = styled.TouchableOpacity`
  display: flex;
  width: 80%;
  height: 50px;
  background-color: #fee6e6;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  font-size: 14px;
  color: #bb0000;
  text-transform: uppercase;
`
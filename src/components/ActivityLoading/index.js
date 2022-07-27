import React from "react"
import {Text} from 'react-native';
import styled from 'styled-components/native';

export default function ActivityLoading() {
    return (
        <AreaLoading>
            <Indicator size={60} color="#ffffff" />
            <Text style={{color: '#ffffff', lineHeight: 32}}>Carregando...</Text>
        </AreaLoading>
    )
}

const AreaLoading = styled.View`
  display: flex;
  flex: 1;
  position: absolute;
  top: 50vh;
  bottom: 50vh;
  right: 25vw;
  left: 25vw;
  align-items: center;
`
const Indicator = styled.ActivityIndicator`
  display: flex;
`
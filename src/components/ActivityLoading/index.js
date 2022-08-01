import React from "react"
import {Text} from 'react-native';
import styled from 'styled-components/native';

export default function ActivityLoading() {
    return (
        <AreaLoading>
            <Indicator size={60} color="red" />
            <Text style={{color: 'red', lineHeight: 32}}>Carregando...</Text>
        </AreaLoading>
    )
}

const AreaLoading = styled.View`
  display: flex;
  flex: 1;
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 25%;
  left: 25%;
  align-items: center;
`
const Indicator = styled.ActivityIndicator`
  display: flex;
`
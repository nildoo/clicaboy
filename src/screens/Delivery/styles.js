import React from "react";
import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";


export const Container = styled.View`
    flex: 1;
    width: 100%;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 20px;
    margin-top: 30px;
`
export const Bars = styled.TouchableOpacity`
    
`
export const LabelPage = styled.View`

`
export const Title = styled.Text`
    font-size: 16px;
    color: ${Colors.blueStrong};
`
export const Bottom = styled.View`
    flex: 1;
`
export const Content = styled.View`
  flex: 1;
`
export const Imagem = styled.Image`
  height: 150px;
  width: 100%;
  background: transparent;
`
import React from "react";
import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";


export const Container = styled.View`
    width: 100%;
    margin-top: 20px;
    padding: 20px;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 10px;
`
export const Bars = styled.TouchableOpacity`
    
`
export const LabelPage = styled.View`

`
export const Title = styled.Text`
    font-size: 16px;
    color: ${Colors.blueStrong};
`
export const ImageBottom = styled.View`
    width: 100%;
    height: 102%;
    align-items: center;
    justify-content: space-around;
`
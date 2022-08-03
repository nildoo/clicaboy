import React from "react";
import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-around;
`
export const MiniMenu = styled.View`
    width: 50%;
`
export const Bars = styled.TouchableOpacity`
    position: absolute;
    width: 40px;
    left: 20px;
    top: 50px;
    z-index: 999;
`
export const Content = styled.View`
    margin-top: 100px;
    width: 100%;
    padding: 18px;
    `
export const AreaIndentifier = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    background: transparent;
`
export const AreaUser = styled.View`
    padding: 10px;
`
export const Hello = styled.Text`
    font-size: 18px;
    color: ${Colors.blueStrong};
`
export const User = styled.Text`
    font-size: 32px;
    color: ${Colors.blueStrong};
`
export const Photo = styled.View`
    width: 90px;
    height: 90px;
    background: ${Colors.boxCard};
    border-radius: 45px;
    align-items: center;
    justify-content: center;
`
export const Ask = styled.Text`
    font-size: 18px;
    color: ${Colors.blueStrong};
    padding: 20px 0;
`

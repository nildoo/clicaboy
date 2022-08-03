import React from "react";
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
`
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
export const AreaBottom = styled.View`
    background: transparent;
    width: 100%;
    bottom: 10px;
    padding: 0 80px;
    position: absolute;
`
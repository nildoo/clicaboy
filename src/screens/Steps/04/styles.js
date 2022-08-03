import React from "react";
import styled from "styled-components/native";
import { Colors } from "../../../constants/Colors";


export const Container = styled.View`
    flex: 1;
    top: -85px;
`
export const Content = styled.View`
    padding: 20px;
`
export const AreaIndentifier = styled.View`
    flex-direction: row;
    justify-content: flex-start;
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
export const Imagem = styled.Image`
    height: 150px;
    width: 100%;
    background: transparent;
`
export const ImagemTop = styled.Image`
    width: 100%;
    height: 170px;
`
export const Description = styled.Text`
    text-align: justify;
    padding: 8px 5px;
    color: ${Colors.blueStrong};
 `
 export const AreaButton = styled.View`
    padding: 0 90px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const PhotoPerfil = styled.Image`
    height: 90px;
    width: 90px;
    background: transparent;
    border-radius: 45px;
`
export const RNCamera = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;
`
export const Perfil = styled.View`
    width: 150px;
    height: 150px;
    background: ${Colors.boxCard};
    border-radius: 75px;
    align-items: center;
    justify-content: center;
`
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
    padding: 20px 20px;
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
export const AreaPhoto = styled.View`
  align-items: center;
`
export const PhotoPerfil = styled.Image`
  height: 120px;
  width: 120px;
  background: transparent;
  border-radius: 60px;
`
export const Content = styled.View`
  flex: 1;
  margin-top: 25px;
  padding: 0 25px;
`
export const InfoPerfil = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const SideLeft = styled.View`
  color: ${Colors.blueStrong};
`
export const SideRight = styled.View`
  color: ${Colors.blueStrong};
`
export const Label = styled.Text`
  font-weight: bold;
  color: ${Colors.blueStrong};
`
export const ComplementaryInfo = styled.View`
  height: 80px;
  padding: 20px 0;
`
export const AreaButton = styled.View`
    padding: 10px 30px;
`
export const Imagem = styled.Image`
  height: 150px;
  width: 100%;
  background: transparent;
`
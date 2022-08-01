import React from "react";
import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";

export const Container = styled.View`
    width: 100%;
`
export const Header = styled.View`
    width: 100%;
    padding: 5px 20px;
    margin-top: 40px;
    background: transparent;
`
export const AreaBack = styled.View`
    width: 100%;
    padding: 5px;
`
export const Perfil = styled.View`
    width: 100%;
    padding: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Name = styled.Text`
    font-size: 18px;
    color: ${Colors.white};
    line-height: 23px;
`
export const Photo = styled.View`
    width: 118px;
    height: 118px;
    background: #cdcdcd;
    border-radius: 60px;

`
export const Content = styled.View`
    display: flex;
    padding-top: 40px;
`
export const Line = styled.View`
    border-bottom-width: 1px;
    padding: 0;
    width: 100%;
`
export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  padding: 20px;
`
export const ImageBottom = styled.ImageBackground`
    background-image: cover;
    bottom: 0;
    padding: 160px 100px;
    flex-direction: column-reverse;
    align-items: center;
`
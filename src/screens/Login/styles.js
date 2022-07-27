import React from "react";
import styled from 'styled-components/native';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  height: 36%;
  width: 100%;
  display: flex;
  align-items: space-around;
  justify-content: center;
  padding-bottom: 10px;
`

export const Logo = styled.Image`
  height: 190px;
`
export const Container = styled.View`
    display: flex;
    padding: 20px 60px;
`
export const AreaButton = styled.View`
    padding: 10px 0;
`
export const Error = styled.Text`
  text-align: center;
  width: 100%;
  color: #aa0a19;
  font-size: 14px;
  padding: 4px;
`
export const IconAbs = styled.View`
right: 20px;
position: absolute;
`
export const Hiden = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`
export const Account = styled.View`
  display: flex;
  margin-top: 50px;
`
export const AreaText = styled.View`
  display: flex;
  padding: 22px;
  `
export const Terms = styled.Text`
  color: white;
  text-align: center
`
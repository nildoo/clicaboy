import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export default function MsgError({ title, icon }) {

    return (
        <Content>
            <ContentBox>
                <AreaIcon>
                    <AntDesign name={icon} size={44} color='#AA0501' />
                </AreaIcon>
                <TitleError>{title}</TitleError>
            </ContentBox>
        </Content>
    )
}

const Content = styled.View`
    background: white;
    width: 100%;
    height: 100%;
    `
const ContentBox = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #ffefce;
`
const AreaIcon = styled.View`
    padding: 15px;
`
const TitleError = styled.Text`
    font-size: 18px;
    color: black;
    text-align: center;
    color: #AA0501;
    text-transform: uppercase;
`
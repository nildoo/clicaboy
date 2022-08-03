import React from "react";
import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";
import { FontAwesome } from '@expo/vector-icons';

export default function CardWallet() {

    return (
        <Canvas>
            <Info>
                <FontAwesome name="arrow-circle-up" size={36} color="black" />
            </Info>
            <Description>
                <SideLeft>
                    <Label style={{ fontFamily: "Arboria-Bold", color: "#000" }}>Data</Label>
                    <Data style={{ fontFamily: "Arboria-Bold", color: "#000" }}>01/08/2022 13:35</Data>
                </SideLeft>
                <SideRight>
                    <Price style={{ fontFamily: "Arboria-Bold", color: "#000" }}>R$ 18,00</Price>
                </SideRight>
            </Description>
        </Canvas>
    );
}

const Canvas = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px 20px;
`
const Info = styled.View`
    padding: 10px;
    background: ${Colors.boxGreen};
    width: 20%;
    align-items: center;
    justify-content: center;
`
const Description = styled.View`
    width: 80%;
    padding: 10px;
    background: ${Colors.boxCard};
    flex-direction: row;
    justify-content: space-between;
`
const SideLeft = styled.View`

`
const Data = styled.Text`
    font-size: 14px;
`
const Label = styled.Text`
    font-size: 12px;
`
const SideRight = styled.View`

`
const Price = styled.Text`
    font-size: 18px;
`
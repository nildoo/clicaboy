import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

export default function CardDelivery() {

    return (
        <Canvas>
            <Refenrece>
                <Hash style={{ fontFamily: "Arboria-Bold" }}>#001</Hash>
                <Data style={{ fontFamily: "Arboria-Bold" }}>Data retirada:</Data>
                <Label>01/08/2022 11:53</Label>
            </Refenrece>
            <Description>
                <Star>
                    <Ionicons name="star-sharp" size={16} color="#FFD800" /> 4
                </Star>
                <Price>R$ 28,00</Price>
                <Label style={{fontFamily: "Arboria-Bold", color: "#000"}}>Data Entrega</Label>
                <Data style={{fontFamily: "Arboria-Bold", color: "#000"}}>01/08/2022 13:35</Data>
            </Description>
        </Canvas>
    )
}

const Canvas = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
`
const Refenrece = styled.View`
    background: ${Colors.blueScreen};
    width: 40%;
    align-items: center;
    justify-content: center;
    padding: 25px;
`
const Hash = styled.Text`
    font-size: 20px;
    color: ${Colors.white};
    line-height: 34px;
`
const Data = styled.Text`
    font-size: 14px;
    color: ${Colors.white};
`
const Label = styled.Text`
    font-size: 10px;
    color: ${Colors.white};
`
const Description = styled.View`
    background: ${Colors.boxCard};
    width: 60%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 20px;
`
const Star = styled.Text`
    font-size: 14px;
    font-weight: bold;
`
const Price = styled.Text`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
`
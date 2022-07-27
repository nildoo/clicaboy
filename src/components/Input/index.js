import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

export default function Input({ icon, placeholder, placeholderTextColor, onChange, isSecure, keyboardType, value }) {

    return (
        <InputField>
            <InputIcon>
                <FontAwesome name={icon} size={24} color={Colors.inputIcon} />
            </InputIcon>
            <TextInput style={{ fontFamily: 'Arboria-Medium'}}
             secureTextEntry={isSecure}
             placeholder={placeholder}
             placeholderTextColor={placeholderTextColor}
             onChangeText={event => onChange(event)}
             keyboardType={keyboardType}
             value={value}
             />
        </InputField>
    );
}

const InputField = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin: 5px 0;
    align-items: center;
    background-color: ${Colors.blueInput};
    border-radius: 18px;
    padding: 16px;
`
const InputIcon = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.blueInput};
`
const TextInput = styled.TextInput`
    width: 100%;
    color: white;
    padding-left: 12px
`
import React from 'react';
import {BtnOpacity,Txt} from "./styles";
// import {Camera, CameraType} from 'expo-camera'

interface Props {
    onPress: () => void;
    children: React.ReactNode;
}

export function Button({onPress,children}:Props){
    return (
        <BtnOpacity activeOpacity={0.6}>
            <Txt>{children}</Txt>
        </BtnOpacity>
    )
}
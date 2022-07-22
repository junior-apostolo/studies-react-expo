import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import {} from "./styles";

interface Props {
    onPress: () => void;
    children: React.ReactNode;
}

export function Button({onPress,children}:Props){
    return (
        <TouchableOpacity>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}
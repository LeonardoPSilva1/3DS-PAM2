import React from "react";
import {TextInput, View, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import style from "./style";

export default function SearchBar(){
    return(

        <View style = {style.containerSearch}>
            <FontAwesome name="search" size={24} color="black" marginLeft='5%'/>
            <TextInput 
                placeholder="Digite algo do cardapio"
                style = {style.inputSearch}
            />
        </View>

    )
}
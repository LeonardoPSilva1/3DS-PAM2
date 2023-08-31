import React from "react";
import style from "./style";
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation } from "@react-navigation/native";

export default function Card(pizza){

    const Navigation = useNavigation();

    return(

        <TouchableOpacity style = {style.containerPizza}
            onPress={()=> Navigation.navigate('details',{titulo:pizza.sabor, nota:pizza.nota, preco:pizza.preco, imagem:pizza.imagem})}
        >

            <Image style = {style.imagemPizzas} source = {require(`../../img/${pizza.imagem}`)} />
            <Text style = {style.tituloPizzas} >{pizza.sabor}</Text>
            <Text style = {style.notaPizzas} >{pizza.nota}</Text>
            <Text style= {style.precoPizzas}>{pizza.preco}</Text>

        </TouchableOpacity>

    );
}

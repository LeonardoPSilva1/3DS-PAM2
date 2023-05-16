import React from "react";
import { Image, Text, TouchableOpacity} from "react-native";
import style from "./style";



export default function CardBebidas({nome, preco, imagem}){
    return(
        <TouchableOpacity style = {style.containerBebidas}>
            <Image style = {style.imagemBebidas} source = {require(`../../Img/${imagem}`)}/>
            <Text style={style.saborBebidas}>{nome}</Text>
            <Text style={style.precoBebidas}>{preco}</Text>
        </TouchableOpacity>

    );
    
}
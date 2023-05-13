import React from "react";
import { Image, Text, TouchableOpacity} from "react-native";
import styles from "../bannerFilmes/style";
import style from "./style";



export default function CardBebidas({sabor, preco, imagem}){
    return(
        <TouchableOpacity style = {style.containerBebidas}>
            <Image style = {style.imagemBebidas} source = {require(`../../Img/${imagem}`)}/>
            <Text style={style.saborBebidas}>{sabor}</Text>
            <Text style={style.precoBebidas}>{preco}</Text>
        </TouchableOpacity>

    );
    
}
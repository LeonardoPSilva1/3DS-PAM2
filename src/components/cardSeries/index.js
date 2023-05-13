import React from "react";
import { Image, Text, TouchableOpacity} from "react-native";
import style from "./style";



export default function CardSeries({titulo, nota, imagem}){
    return(
        <TouchableOpacity style = {style.containerSeries}>
            <Image style = {style.imagemSeries} source = {require(`../../Img/${imagem}`)}/>
            <Text style={style.tituloSeries}>{titulo}</Text>
            <Text style={style.notSeries}>{nota}</Text>
        </TouchableOpacity>

    );
    
}

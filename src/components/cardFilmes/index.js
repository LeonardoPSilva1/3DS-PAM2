import React from "react";
import { Image, Text, TouchableOpacity} from "react-native";
import styles from "../bannerFilmes/style";
import style from "./style";



export default function CardFilmes({titulo, nota, imagem}){
    return(
        <TouchableOpacity style = {style.containerFilmes}>
            <Image style = {style.imagemFilmes} source = {require(`../../Img/${imagem}`)}/>
            <Text style={style.tituloFilmes}>{titulo}</Text>
            <Text style={style.notaFilme}>{nota}</Text>
        </TouchableOpacity>

    );
    
}
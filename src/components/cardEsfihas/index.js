import React from "react";
import { Image, Text, TouchableOpacity} from "react-native";
import styles from "../cardEsfihas/style.js";



export default function CardEsfihas({nome, preco, imagem}){
    return(
        <TouchableOpacity style = {styles.containerEsfihas}>
            <Image style = {styles.imagemEsfihas} source = {require(`../../Img/${imagem}`)}/>
            <Text style={styles.nomeEsfihas}>{nome}</Text>
            <Text style={styles.precoEsfihas}>{preco}</Text>
        </TouchableOpacity>

    );
    
}

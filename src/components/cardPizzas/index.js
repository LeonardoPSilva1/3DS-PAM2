import React from "react";
import { Image, Text, TouchableOpacity} from "react-native";
import styles from "../cardPizzas/style.js";



export default function CardPizzas({nome, preco, imagem}){
    return(
        <TouchableOpacity style = {styles.containerPizzas}>
            <Image style = {styles.imagemPizzas} source = {require(`../../Img/${imagem}`)}/>
            <Text style={styles.nomePizzas}>{nome}</Text>
            <Text style={styles.precoPizzas}>{preco}</Text>
        </TouchableOpacity>

    );
    
}
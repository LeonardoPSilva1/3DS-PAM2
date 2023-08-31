import React from "react";
import { Image, Text } from "react-native";
import style from "./style";

export default function BannerPizzas(){
    
    const imagem = Math.floor(Math.random() * 10 +1);
    
    return(

       <>

            <Text style = {style.textoBanner}>Cardapio</Text>
            <Image style = {style.imagemBanner} source = {require(`../../img/pizzas/${imagem}.jpg`)} />

       </> 

    );
}

//`../../img/pizzas/${imagem}.jpg`
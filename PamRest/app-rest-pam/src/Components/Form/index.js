import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./style";

export default function Form (){

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
            <Text style={styles.formLabel}>Nome</Text>
            <TextInput style={styles.input}
                placeholder="Seu Nome"/>
            <Text style={styles.formLabel}>CPF</Text>
            <TextInput style={styles.input}
                placeholder="Seu CPF"
                keyboardType="numeric"/>
            <Text style={styles.formLabel}>Salario</Text>
            <TextInput style={styles.input}
                placeholder="Salario anual"
                keyboardType="numeric"/>

            <TouchableOpacity
            style={styles.buttonPost}
                onPress={ () =>{
                    validationIr()
                }}
            >
                <Text style={styles.textButtonPost}>post</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonPost}
                onPress={ () =>{
                    validationIr()
                }}
            >
                <Text style={styles.textButtonPost}>put</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonPost}
                onPress={ () =>{
                    validationIr()
                }}
            >
                <Text style={styles.textButtonPost}>delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonPost}
                onPress={ () =>{
                    validationIr()
                }}
            >
                <Text style={styles.textButtonPost}>get</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}
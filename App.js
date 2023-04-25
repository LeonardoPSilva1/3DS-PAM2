import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes';
import CardFilmes from './src/components/cardFilmes';
import CardSeries from './src/components/cardSeries';

import Filmes from './src/components/data/movies.js';
import Series from './src/components/data/serie.js';
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>


  <View style={{width:"90%"}}>

  <Text style={styles.text} >Filmes</Text>
     <FlatList
     horizontal = {true}
     data= {Filmes}
     keyExtractor = {(item) => item.id}
     renderItem = {({item}) => (

         
        <CardFilmes
        titulo = {item.nome}
        nota = {item.nota}
        imagem = {item.imagem}
        />
        
     )}

     
     />
<Text style={styles.text} >Séries</Text>
<FlatList
     horizontal = {true}
     data= {Series}
     keyExtractor = {(item) => item.id}
     renderItem = {({item}) => (

         
        <CardSeries
        titulo = {item.nome}
        nota = {item.nota}
        imagem = {item.imagem}
        />
        
     )}

     
     />

     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"


    
    
  },

  text:{
    fontSize: 30,
    color: 'white'

  }
});
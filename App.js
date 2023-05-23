import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import BannerPizzas from './src/components/bannerPizzas';

import CardPizzas from './src/components/cardPizzas';
import CardEsfihas from './src/components/cardEsfihas';
import CardBebidas from './src/components/cardBebidas';

import Pizzas from './src/components/data/pizzas';
import Esfihas from './src/components/data/esfihas';
import Bebidas from './src/components/data/bebidas';
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';


export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>

     <BannerPizzas></BannerPizzas>


  <View style={{width:"90%"}}>

  <Text style={styles.text} >Pizza - Sabores</Text>
     <FlatList
     horizontal = {true}
     data={Pizzas}
     keyExtractor = {(item) => item.id}
     renderItem = {({item}) => (

         
      <CardPizzas
        nome={item.nome}
        preco={item.preco}
        imagem={item.imagem}
      />
        
  )}

     
     />

  <Text style={styles.text} >Esfihas - Sabores</Text>
    <FlatList
      horizontal = {true}
      data={Esfihas}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (


    <CardEsfihas
      nome={item.nome}
      preco={item.preco}
      imagem={item.imagem}
    />
  )}

  />

  <Text style={styles.text} >Refrigerantes</Text>
    <FlatList
      horizontal = {true}
      data={Bebidas}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (


        <CardBebidas
          nome={item.nome}
          preco={item.preco}
          imagem={item.imagem}
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
    backgroundColor: '#8d1b1b',
    alignItems:"center",
    
    
  },

  text:{
    fontSize: 35,
    color: 'aliceblue'

  }
});
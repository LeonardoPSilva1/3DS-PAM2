import { Text, View, FlatList } from 'react-native';
import style from '../../components/header/style';


import Search from '../../components/searchBar/index';
import BannerFilmes from '../../components/bannerPizzas/index';
import Card from '../../components/cardPizzas';

import pizzas from '../../data/pizzas';
import esfihas from '../../data/esfihas';
import refris from '../../data/refris';
import titulo from '../../components/bannerPizzas/style';

export default function App() {

  document.title = 'Pizzaria Igarapé';

  return (
    <View style={style.container}>
      
      {/* <Header/> */}
      
      <Search/>
      <BannerFilmes/>

      <Text style={titulo.textoBanner}>Pizza</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {pizzas}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              sabor = {item.sabor}
              nota = {item.nota}
              preco = {item.preço}
              imagem = {item.imagem}
            
            />

          )}
        
        />
      </View>  

      <Text style={titulo.textoBanner}>Esfiha</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {esfihas}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              sabor = {item.nome}
              nota = {item.nota}
              preco = {item.preco}
              imagem = {item.imagem}
            
            />

          )}
        
        />
      </View>  

      <Text style={titulo.textoBanner}>Refri</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {refris}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              sabor = {item.sabor}
              nota = {item.nota}
              imagem = {item.imagem}


            
            />

          )}
        
        />
      </View>  

    </View>
  );
}

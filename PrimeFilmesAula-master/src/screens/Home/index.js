
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';


import React,{useState, useEffect} from 'react';








export default function App() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try{
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=001049ffac5df31516d05c1338284841&language=pt-BR&page=1');
        const data = await response.json();

        console.log(data.results)
        setMovies(data.results)

      }
      
      catch(error){
        console.log("REQUISIÇÃO FALHOU ", Error)
      }
    
    }
    getMovies();
  }, [])

  const [series, setSeries] = useState([]);

  useEffect(() => { 
    async function getSeries() {
      try{
        const response = await fetch(
          'https://api.themoviedb.org/3/tv/popular?api_key=001049ffac5df31516d05c1338284841&language=pt-br');
          const data = await response.json();

          console.log(data.results)
          setSeries(data.results)
        }

        catch(error){
          console.log("REQUISIÇÃO FALHOU ", Error)
        }
    }
    getSeries();
  }, [])
  




  return (
    <View style={styles.container}>
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerMovies></BannerMovies>
     
    
     <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={(item) => item.id}
            
            
            renderItem={({ item }) => (


              <CardMovies
                titulo={item.title}
                imagem={item.poster_path}
                nota={item.vote_average}
                descricao={item.overview}

              />
            )}
          />
        </View>

        <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={series}
            keyExtractor={(item) => item.id}
            
            
            renderItem={({ item }) => (


              <CardMovies
                titulo={item.name}
                imagem={item.poster_path}
                nota={item.vote_average}
                descricao={item.overview}
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
    alignItems:'center'
    
    
  },
});
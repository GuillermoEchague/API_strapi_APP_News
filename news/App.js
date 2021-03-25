import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {map} from "lodash";
import {getNewsApi} from "./src/api/news";
import News from "./src/components/News";


export default function App() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNewsApi().then((response)=>{
      setNews(response);
    });
  }, []);

if(!news) return null;


return(
  <SafeAreaView>
    <Text style={styles.title}>Últimas Noticias</Text>
    <ScrollView style={styles.scrollView}>
      {map(news, (data) => (
       // <Text key={data.id}>Hola</Text>
        <News key={data.id} data={data}/>
      ))}
    </ScrollView>
  </SafeAreaView>
);

}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10,
  },
  scrollView:{
    height: '100%',
  },
})
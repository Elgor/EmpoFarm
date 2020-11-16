import { StatusBar } from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import { ImagePropTypes,TouchableOpacity, StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native'
import Header from './component/Header.js'
import Input from './component/Input.js'
import SortAndFilterIcon from './component/SortAndFilterIcon.js'
import ProductTypeBtn from './component/Button.js'
import SearchBar from './component/SearchBar.js'


export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://empofarm-api.fanattics.tech/products/variants')
      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const Card = ({item, index}) => {
    <View>
      <Text>{item.productName}</Text>
      <Text>Rp{item.empofarmPrice} /Unit</Text>
      <Text>Stock: {item.draftStock}</Text>
    </View>
  }
  return (
    <View style={styles.container}>
      <Header text="PRODUK" />
      <View style={styles.searchContainer}>
        <SearchBar />
        <SortAndFilterIcon />
      </View>

      {/* <ScrollView 
      horizontal={true}
      automaticallyAdjustContentInsets={false}>
        <View style={styles.productBtnList}>
          <ProductTypeBtn title="Semua Produk"/>
          <ProductTypeBtn title="Hard"/>
          <ProductTypeBtn title="Soft"/>
          <ProductTypeBtn title="Liquid"/>
          <ProductTypeBtn title="Equipment"/>
        </View>
      </ScrollView> */}

      <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png', width: 50, height: 50}}/>
      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card props={item}></Card>
        )}
      >

      </FlatList>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   searchContainer: {
     flexDirection: 'row',
     marginTop: 25,
     marginHorizontal: 10,
   },
   productBtnList: {
     flexDirection: 'row',
     marginHorizontal: 10,
     marginVertical: 14,
   }
});

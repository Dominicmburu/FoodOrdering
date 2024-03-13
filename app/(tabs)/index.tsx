import Colors from '@/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import products from '@/assets/data/products';

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image }} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius:20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price:{
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  image:{
    width:'100%',
    aspectRatio: 1,
  }
  
});

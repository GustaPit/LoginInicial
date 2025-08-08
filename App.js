import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImagemDog from './assets/casual_dog.png';

export default function App() {
  return(
    <View style={styles.container}>
        <Image
         source={ImagemDog}
         style= {{width:350 , height: 350}}
         />
      <Text>Ótimo dia!</Text>
      <Text>Como deseja acessar?</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
                        style={{backgroundColor:'blue', padding: 20}}
                        onPress={() => alert('Toque detectado')}
      >  
                          <Text>Como deseja acessar?</Text>                       
      </TouchableOpacity>

      <TouchableOpacity
                        style={{backgroundColor:'blue', padding: 20}}
                        onPress={() => alert('Toque detectado')}
      >  
                          <Text>Outras opções</Text>                       
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F2C4',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
  });
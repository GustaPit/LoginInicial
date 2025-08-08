import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import ImagemDog from './assets/casual_dog.png';
import Google from './assets/Google.png';

const { width } = Dimensions.get('window');

export default function App() {
  return(
    <View style={styles.container}>
        <Image
         source={ImagemDog}
         style= {styles.imagem}
         resizeMode="contain"
         />
      <Text style={styles.textoInicial}>Ótimo dia!</Text>
      <Text style={styles.textoInicial2}>Como deseja acessar?</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
                        style={styles.texto}
                        onPress={() => alert('Google')} > 
                        <Image source={Google} style= {styles.Google}></Image>
                        <Text style={styles.textobotao}>Como deseja acessar?</Text>                       
      </TouchableOpacity>

      <TouchableOpacity
                        style={styles.texto2}
                        onPress={() => alert('Toque detectado')}  >  
                        <Text style={styles.textobotao2} >Outras opções</Text>                       
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9e9e9',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    texto: {
         backgroundColor:'#12b667',
         fontFamily: "arial",
         padding: 20,
         marginTop: 10,
         borderColor: 'black',
         borderRadius: 10,
         width: 330,
         alignItems: 'center',
         flexDirection: 'row',
         justifyContent:'center',
        
    },
    texto2: {
      backgroundColor:'white',
      padding: 20,
      marginTop: 10,
      borderColor: '#12b667',
      borderRadius: 10,
      width: 330,
      borderWidth: 1,
      alignItems: 'center',
 },

  textobotao:{
       fontSize: 15,
       color: 'white',
       fontWeight: 'bold',
        marginLeft: 5,
       
  },
  textobotao2:{
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  opacity: 0.5,
},

textoInicial:{
  fontSize: 40,
  marginBottom: 15,
  marginTop: 15,
  fontWeight:'bold',
  opacity: 0.5, 
},

textoInicial2:{

  marginBottom: 30,
  fontSize: 16 ,
  fontWeight: 'bold',
  opacity: 0.5,
  
},

imagem:{
  width: width * 0.9,
  height: width * 0.9,
  marginBottom: 20,
},

Google:{
  width: 30,
  height: 30,
},
  });
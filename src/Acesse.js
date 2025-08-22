import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Google from '../assets/Google.png';
import Facebook from '../assets/Facebook.png';

export default function Acesse({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrarSenha, setLembrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Acesse</Text>
      </View>

      <Text style={styles.subtitulo}>com E-mail e senha</Text>
                  
      <Text style={styles.rotulo}>E-mail</Text>
      <TextInput
        style={styles.campoTexto}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.rotulo}>Senha</Text>
      <View style={styles.containerSenha}>
        <TextInput
          style={[styles.campoTexto, { flex: 1 }]}
          placeholder="Digite sua senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Icon name={mostrarSenha ? "eye-off" : "eye"} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.linhaOpcoes}>
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setLembrarSenha(!lembrarSenha)}
          >
            {lembrarSenha && <Icon name="check" size={16} color="#143325ff" />}
          </TouchableOpacity>
          <Text>Lembrar senha</Text>
        </View>

        <TouchableOpacity style={styles.link}>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linhaBotoes}>
        <TouchableOpacity style={styles.botaoVerde}>
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoBranco}>
          <Text style={[styles.textoBotao, { color: "#00A859" }]}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textoOu}>Ou continue com</Text>

      <View style={styles.Redes}>
        <Image source={Google} style={styles.icones} />
        <Image source={Facebook} style={styles.icones} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  titulo: {
    fontSize: 40 ,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#666",
    marginBottom: 20,
  },
  rotulo: {
    marginTop: 15,
    fontWeight: "bold",
  },
  campoTexto: {
    backgroundColor: "#f0f2ff",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  containerSenha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2ff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  linhaOpcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  link: {
    color: "#00A859",
  },
  linhaBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  botaoVerde: {
    backgroundColor: "#00A859",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  botaoBranco: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#00A859",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  textoOu: {
    textAlign: "center",
    marginTop: 30,
    color: "#666",
  },
  Redes: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  icones: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});




import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [context, setContext] = useState("register");
  
  //para armazenar o contexto de login ou register
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //para armazenar os dados do usuário

//função para mudar o contexto de login para register e vice-versa
  const handleContext = () => {
    if (context === "login") {
      setContext("register");
    } else {
      setContext("login");
    }
  };

//função para fazer a requisição para o backend 
  const handleLogin = () => {
    //fazer a requisição para o backend
    if (username === "" || password === "") {
      Alert.alert("Login", "Preencha todos os campos!");
      return;
    } 
    if (username === "admin" && password === "admin") {
      setContext("home");
    } else {
      Alert.alert("Login", "Usuário ou senha inválidos!");
      return;
    }
  };
  
  return (
    <>
      {context === "login" && (
        <View style={styles.login}>
          <Text style={styles.title}>Bank App</Text>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} onChangeText={text=>setUsername(text)}/>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} onChangeText={text=>setPassword(text)}/>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 30 }} onPress={handleContext}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
      {context === "register" && (
        <View style={styles.login}>
          <Text style={styles.title}>Bank App</Text>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input}/>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={handleContext}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 30 }} >
            <Text style={styles.textButton}>Logar</Text>
          </TouchableOpacity>
        </View>
      )}
      {context === "home" && (
        <View style={styles.login}>
          <Text style={styles.title}>Bank App</Text>
          <Text style={styles.label}>Bem vindo {username}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },
  login: {
    backgroundColor: '#6187cd',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    marginBottom: 70,
    marginTop: 130,
    color: '#fff',
  },
  label: {
    fontSize: 20,
    color: '#fff',
    alignItems: 'flex-start',
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#316397',
    width: 300,
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
  },

});

export default App;

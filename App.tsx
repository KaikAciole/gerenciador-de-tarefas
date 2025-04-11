import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [tarefa, setTarefa] = React.useState('');
  const [tarefas, setTarefas] = React.useState<string[]>([]);


  const adicionar = () => {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa]); 
      setTarefa('');
    }
  }

  const removerTarefa = (index: number) => {
    const novaLista = [];

    for (let i = 0; i < tarefas.length; i++) {
      if (i !== index) {
        novaLista.push(tarefas[i]); // adiciona todas, menos a selecionada
      }
    }

  setTarefas(novaLista); 
  }
  

const renderizarTarefas = () => {
  return tarefas.map((valorTarefa, index) => {
    return (
      <View key={index} style={styles.tarefa}>
        <Text style={{ fontSize: 18, marginBottom: 5, marginLeft: 8, marginRight: 8, width: 220, textAlignVertical: 'center' }}>
          {valorTarefa}
        </Text> 
        <View style={{ width: 50, margin: 10 }}>
          <Button
            title='X'
            color='#ff0808'     
            onPress={() => removerTarefa(index)}                               
          />
        </View>                      
      </View>
    );
  });
}


  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Minhas tarefas</Text>
      <TextInput style={styles.input} value={tarefa} onChangeText={setTarefa}></TextInput>
      <View style={styles.buttont}>
        <Button 
          title='Adicionar Tarefa'        
          color='#0ba538'
          onPress={adicionar}
        />
      </View>      
      <ScrollView style={styles.tarefas} contentContainerStyle={{ paddingBottom: 40 }}>
        {renderizarTarefas()}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    margin: 0,
    padding: 20,
    paddingTop: 70,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  input: {
    borderWidth: 1,
    marginTop: 40,
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },

  buttont: {
    marginTop:10,
    alignSelf: 'flex-end',
    width: 160,
  },

  tarefas: {
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#e8fff7',
    borderRadius: 9,
  },

  tarefa: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    height: 60
  },

  tarefaButton: {
    width: 80,
    flexWrap: 'nowrap',
  },
});

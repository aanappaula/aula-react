import{ Text, View, StyleSheet } from 'react-native';

export default function App() {
    const tasks = [
      {nome: "Banana", idade: 17},
      {nome: "Laranja", idade: 16},
      {nome: "Bolacha", idade: 15},
      {nome: "Bombom", idade: 14},
      {nome: "Coxinha", idade: 13},
    ];
    return (
      <View style={styles.container}>
          <FlatList data={tasks} renderItem={({ item }) => <Text>{item.nome} - {item.idade}</Text>} />
        </View>
    );
  }
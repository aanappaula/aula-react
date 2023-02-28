import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  const tasks = [
    {nome: "Ana", idade: 17},
    {nome: "Elias", idade: 16},
    {nome: "Luiza", idade: 15},
    {nome: "Cardozo", idade: 14},
    {nome: "Larissa", idade: 13},
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item.nome} - {item.idade}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

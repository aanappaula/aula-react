import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Listagem from './src/components/Listagem';
export default function App() {

  return (
    <View style={styles.container}>
      <Header titulo="Listagem de Alimentos"/>
      <Listagem />
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

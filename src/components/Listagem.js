import{ Text, View, StyleSheet, FlatList } from 'react-native';

export default function Listagem() {
    const tasks = [
      {alimento: "Banana", caloria: 17},
      {alimento: "Laranja", caloria: 16},
      {alimento: "Bolacha", caloria: 15},
      {alimento: "Bombom", caloria: 14},
      {alimento: "Coxinha", caloria: 13},
    ];
    return (
      <View style={styles.container}>
          <FlatList data={tasks} renderItem={({ item }) => <Text>{item.alimento} - {item.caloria}</Text>} />
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
    header: {
      backgroundColor: '#9370DB',
      padding: 20,
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '30%',
      
    },
    headerText: {
      color: 'white',
      fontSize: 20,
    }
  
  });
  
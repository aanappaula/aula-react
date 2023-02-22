import{ Text, View, StyleSheet } from 'react-native';

export default function header(){
    return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Lista de tarefas</Text>
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
      padding: 50,
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      color: 'white',
      fontSize: 20,
    }
  
  });

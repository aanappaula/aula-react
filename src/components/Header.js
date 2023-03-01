import { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.titulo}</Text>
        </View>
    );
  }
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

import { Text, View, StyleSheet } from "react-native";
export default function ItemEstado(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.texto}>
        {props.estado.calorias} ({props.estado.alimento})
      </Text>
    </View>
  );
}

const styles = StyleSheetList.create({
    item: {
        backgroundColor: 'blue',
        padding: 10,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: 'white',
    },
});
import {Text, View, StyleSheet } from 'react-native'
export default function ItemEstado(props) {
    return (
        <View style={styles.item}>
            <Text style={styles.texto}>
                {props.estado.alimento }
            </Text>
        </View>

)
    }

    
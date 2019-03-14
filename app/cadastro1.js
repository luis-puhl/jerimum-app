import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TextInput, ScrollView } from 'react-native';
import { RoundBtn } from './round-btn';

export class Cadastro1 extends React.Component {
    static navigationOptions = {
        title: 'Cadastro',
        headerStyle: {
            backgroundColor: 'steelblue',

        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            textAlign: 'center',

        },
    };






    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1, margin: 20, }}>
                <View>
                    <TextInput
                        style={styles.textoEntrada}
                        underlineColorAndroid="gray"
                    />
                    <Text style={styles.texto}>
                        login/usuário
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textoEntrada}
                        underlineColorAndroid="gray"
                    />
                    <Text style={styles.texto}>
                        nome
                    </Text>
               </View>
                <View>
                    <TextInput
                        style={styles.textoEntrada}
                        underlineColorAndroid="gray"
                    />
                    <Text style={styles.texto}>
                        idade
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textoEntrada}
                        underlineColorAndroid="gray"
                    />
                    <Text style={styles.texto}>
                        país
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textoEntrada}
                        underlineColorAndroid="gray"
                    />
                    <Text style={styles.texto}>
                        estado/província
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <RoundBtn
                        style={{ ...styles.button, backgroundColor: 'orange' }}
                        size="40"
                        title="->"
                        onPress={() => navigate('Cadastro2')}></RoundBtn>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        // TextStyle
    },

    buttons: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    },
    textoEntrada: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: -10,
        marginTop: 20,
        height: 40,
        // TextStyle
    },

});

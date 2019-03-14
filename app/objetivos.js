import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TextInput, ScrollView } from 'react-native';
import { RoundBtn } from './round-btn';

export class Objetivos extends React.Component {
    static navigationOptions = {
        title: 'Objetivos & informações',
        headerStyle: {
            backgroundColor: 'steelblue',

        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            textAlign: 'center',

        },
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Área de estudo</Text>
                        </View>
                        <View style={styles.coluna2}>
                        <Text style={styles.option}>ciclo</Text>
                        </View>
                    </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Concurso / prova</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <Text style={styles.option}>ciclo</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Inicio dos estudos</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <Text style={styles.option}>ciclo</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Data da prova</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <Text style={styles.option}>ciclo</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>H. disp por semana</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <Text style={styles.option}>ciclo</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Dias disp. por semana</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <Text style={styles.option}>ciclo</Text>
                    </View>
                </View>

                    <View style={styles.buttons}>
                        <RoundBtn
                            style={{ ...styles.button, backgroundColor: 'orange', }}
                            size="40"
                            title="Ok"
                            onPress={() => { Alert.alert('You tapped the button!'); }}></RoundBtn>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    legenda: {
        fontSize: 20,
        marginTop: 15,
        // TextStyle
    },
    option: {
        fontSize: 20,
        marginTop: 15,
        backgroundColor: 'steelblue',
        color: 'white',
        // TextStyle
    },
    container: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    coluna1: {
        flex: 3,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    coluna2: {
        flex: 2,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    textInput: {
        flex: 0.5,
        padding: 20,
    },
    buttons: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        height: 40,
        width: 120,
    },
});

import React from 'react';
import { StyleSheet, View, Image, Text, DatePickerAndroid, Alert, TouchableHighlight, TextInput, ScrollView } from 'react-native';
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
    constructor(props) {
        super(props);
        this.state = {
            area: '',
            concurso: 'ex.: OAB',
            inicio: new Date(),
            dataDaProva: new Date(),
            horasSemana: 1,
            diasSemana: 1,
        };
    }

    validate(){
        return({

            diasSemana: this.state.diasSemana > 0 && this.state.diasSemana < 8,
            horasSemana: this.horasSemana >0 && this.horasSemana < 169,
        })
    }

    dataProva(){
            DatePickerAndroid.open({
            date: this.state.dataDaProva,
            minDate: new Date(),
        }).then(({ action, year, month, day })=>{
            console.log({ action, year, month, day, })
            if (action === DatePickerAndroid.dateSetAction) {
                const dataDaProva = new Date(year, month, day);
                this.setState(previousState => ({ ...previousState, dataDaProva })
                )
            }
        })
    }


    dataInicio() {
        DatePickerAndroid.open({
            date: this.state.inicio,
            minDate: new Date(),
        }).then(({ action, year, month, day }) => {
            console.log({ action, year, month, day, })
            if (action === DatePickerAndroid.dateSetAction) {
                const inicio = new Date(year, month, day);
                this.setState(previousState => ({ ...previousState, inicio })
                )
            }
        })
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Área de estudo</Text>
                        </View>
                        <View style={styles.coluna2}>
                        <TextInput style={styles.option}
                            onChangeText={area => this.setState(
                                previousState => ({ ...previousState, area })
                            )}
                            value={this.state.area}
                            placeholder="ex.: Tribunais"
                        />
                        </View>
                    </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Concurso / prova</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <TextInput style={styles.option}
                            onChangeText={concurso => this.setState(
                            previousState => ({ ...previousState, concurso })
                            )}
                            value={this.state.concurso}
                            placeholder="ex.: OAB"
                        />
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Inicio dos estudos</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <TouchableHighlight onPress={() => this.inicioEstudos()} underlayColor="white">
                            <Text style={styles.option2}>
                                {this.state.inicio.toLocaleDateString()}
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Data da prova</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <TouchableHighlight onPress={() => this.dataProva()} underlayColor="white">
                            <Text style={styles.option2}>
                                {this.state.dataDaProva.toLocaleDateString()}
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>H. disp por semana</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <TextInput style={styles.option}
                            onChangeText={horasSemana => this.setState(
                            previousState => ({ ...previousState, horasSemana })
                            )}
                        />
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.coluna1}>
                        <Text style={styles.legenda}>Dias disp. por semana</Text>
                    </View>
                    <View style={styles.coluna2}>
                        <TextInput style={styles.option}
                            onChangeText={diasSemana => this.setState(
                            previousState => ({...previousState, diasSemana })
                            )}
                        value={this.state.diasSemana}
                        />
                    </View>
                </View>

                    <View style={styles.buttons}>
                        <RoundBtn
                            style={{ ...styles.button, backgroundColor: 'orange', }}
                            size="40"
                            title="Ok"
                        onPress={() => Alert.alert(this.state.dataDaProva.toLocaleDateString())}>
                        </RoundBtn>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    legenda: {
        fontSize: 18,
        marginTop: 15,
        // TextStyle
    },
    option: {
        textAlign: 'center',
        height: 35,
        width: 140,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        fontSize: 18,
        marginTop: 15,
        backgroundColor: 'steelblue',
        color: 'white',
        // TextStyle
    },
    option2: {
        textAlign: 'center',
        height: 35,
        width: 140,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        fontSize: 25,
        marginTop: 15,
        backgroundColor: 'steelblue',
        color: 'white',
        // TextStyle
    },
    container: {
        marginTop: 30,
        flex: 1,
        //flexDirection: 'column',
        justifyContent: 'center',
       // justifyContent: 'space-between',
        //alignItems: 'stretch',
    },
    coluna1: {
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        marginBottom: 5,
        marginLeft: 10,
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    coluna2: {
        marginLeft: 10,
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
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

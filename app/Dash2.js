import React from 'react';
import { StyleSheet, View, Text, Alert, Button, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Badge } from 'react-native-elements'

import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';
import { colors, invertColor } from './components/Theme';

export class Ciclo extends React.Component {
    static navigationOptions = {
        title: 'Dashboard'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={{
                marginHorizontal: 20,
                marginBottom: 20,
            }}>
                <View style={{
                    marginTop: 40,
                    height: 100,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ width: '10%' }}></Text>
                    <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="chart-line" />
                    <MaterialCommunityIcons style={{ width: '20%', color: colors.primary }} size={30} name="chart-pie" />
                    <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="calendar-today" />
                    <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="trophy" />
                </View>
                <View>
                    <View style={{
                        borderBottomWidth: 2,
                        borderBottomColor: colors.primary,
                        alignItems: 'center',
                    }}>
                        <Text style={styles.text}>DESEMPENHO POR MATÉRIA</Text>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginVertical: 5, }}>
                        <Badge
                            value={''}
                            containerStyle={{ flex: 1, justifyContent: 'center', }}
                            badgeStyle={{
                                backgroundColor: 'white',
                                width: 40,
                                height: 35,
                            }}
                            textStyle={{
                                fontSize: 25,
                                textAlign: 'center',
                                color: 'white',
                            }}
                        />
                        <Badge
                            value={'D'}
                            containerStyle={{ flex: 1, justifyContent: 'center', }}
                            badgeStyle={{
                                backgroundColor: 'steelblue',
                                width: 40,
                                height: 35,
                            }}
                            textStyle={{
                                fontSize: 25,
                                textAlign: 'center',
                                color: 'white',
                            }}
                        />
                        <Badge
                            value={'S'}
                            containerStyle={{ flex: 1, justifyContent: 'center', }}
                            badgeStyle={{
                                backgroundColor: 'steelblue',
                                width: 40,
                                height: 35,
                            }}
                            textStyle={{
                                fontSize: 25,
                                textAlign: 'center',
                                color: 'white',
                            }}
                        />
                        <Badge
                            value={'M'}
                            containerStyle={{ flex: 1, justifyContent: 'center', }}
                            badgeStyle={{
                                backgroundColor: 'steelblue',
                                width: 40,
                                height: 35,
                            }}
                            textStyle={{
                                fontSize: 25,
                                textAlign: 'center',
                                color: 'white',
                            }}
                        />
                        <Badge
                            value={'T'}
                            containerStyle={{ flex: 1, justifyContent: 'center', }}
                            badgeStyle={{
                                backgroundColor: 'steelblue',
                                width: 40,
                                height: 35,
                            }}
                            textStyle={{
                                fontSize: 25,
                                textAlign: 'center',
                                color: 'white',
                            }}
                        />
                    </View>
                    {[
                        { sigla: 'DA', color: colors.weekDay[0], values: ['0:45', '1:30', '6:00', '72:00'] },
                        { sigla: 'LP', color: colors.weekDay[1], values: ['0:15', '1:00', '4:00', '48:00'] },
                        { sigla: 'DT', color: colors.weekDay[2], values: ['1:30', '3:30', '14:00', '108:00'] },
                        { sigla: 'DP', color: colors.weekDay[3], values: ['0:30', '1:15', '5:00', '110:00'] },
                        { sigla: 'RL', color: colors.weekDay[4], values: ['0:00', '3:00', '12:00', '134:00'] },
                        { sigla: 'AF', color: colors.weekDay[4], values: ['0:00', '2:30', '11:40', '125:00'] },
                    ].map(linha => (
                        <View key={linha.sigla} style={{ flexDirection: 'row', flex: 1, marginVertical: 5, }}>
                            <Badge
                                value={linha.sigla}
                                containerStyle={{ flex: 1, justifyContent: 'center', }}
                                badgeStyle={{
                                    // margin: 2,
                                    backgroundColor: linha.color,
                                    height: 30,
                                }}
                                textStyle={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: invertColor(linha.color),
                                }}
                            />
                            {linha.values.map((value, i) => (
                                <Text key={linha.sigla + i} style={{ ...itemStyle, color: linha.color }}>{value}</Text>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const itemStyle = {
    flex: 1,
    margin: 5,
    paddingTop: 5,
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 18,
}

const styles = StyleSheet.create({


    lines: {
        height: 40,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textContainer: {
        flex: 4,
    },
    siglaContainer: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        color: colors.primary,
        fontSize: 20,
    },
    text2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});

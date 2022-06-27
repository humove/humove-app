import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = (propbs) => {

    return (
        <View style={styles.item}>
            <View style={styles.previous}></View>
            <View style={styles.infoTask}>
                <Text style={styles.itemText}>{propbs.text}</Text>
                <View style={styles.begin}>
                    <Text style={styles.beginText}>Start</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#151515',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    infoTask: {
        flexDirection: 'row',
        marginTop: 20,
    },
    previous: {
        width: 320,
        height: 150,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    itemText: {
        marginTop: 5,
        maxWidth: '80%',
        color: '#FFF',
    },
    begin: {
        width: 80,
        height: 40,
        backgroundColor: '#0080FF',
        borderRadius: 10,
        marginLeft: 200,
    },
    beginText: {
        color: '#FFF',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 15,
    },
});

export default Task;
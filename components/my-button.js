import React, { Component } from 'react';
import { Platform, Button, Text, StyleSheet, View, TouchableHighlight } from 'react-native';

export default class MyButton extends Component {
    _onPressButton() {
        alert('You tapped the button');
    }

    _onLongPressButton() {
        alert(`You pressed for too long on ${Platform.OS}-${Platform.Version} device`);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={this._onPressButton}
                        onLongPress={this._onLongPressButton}
                        // title="Press here. Its me"
                        underlayColor="red"
                        >  
                        <View style={styles.highlightButton}>
                            <Text>Long press please!</Text>
                        </View> 
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title="Same same"
                        color="#841584"
                        />
                </View>
                <View 
                    style={styles.alternativeLayoutButtonContainer}
                    >
                    <Button 
                        onPress={this._onPressButton}
                        title="Looking good!"
                        />
               
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="green"
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    highlightButton: {
        marginBottom: 30,
        width: 360,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
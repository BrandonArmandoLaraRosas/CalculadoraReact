import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const Button = ({
    w = 0, 
    h = null, 
    text = '', 
    backgroundColor = '#333333', 
    textColor = 'white',
}) => {
    const height = h ?? w;
    const width = w;

    return (
        <View style={[styles.buttonContainer, {width: width, height: height}]}>
            <View style={[styles.button, {backgroundColor: backgroundColor}]}>
                <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
            </View>
        </View>
    )
}

const App = () => {
    const { width } = useWindowDimensions();
    const buttonContainerWidth = (width / 4) - 5;

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>0</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsRow}>
                    <Button 
                        w={buttonContainerWidth}
                        text={'AC'}
                        backgroundColor={'#A5A5A5'}
                        textColor={'#000'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'+/-'}
                        backgroundColor={'#A5A5A5'}
                        textColor={'#000'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'%'}
                        backgroundColor={'#A5A5A5'}
                        textColor={'#000'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'/'}
                        backgroundColor={'#FF9F0A'}
                    />
                </View>
                <View style={styles.buttonsRow}>
                    <Button 
                        w={buttonContainerWidth}
                        text={'7'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'8'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'9'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'x'}
                        backgroundColor={'#FF9F0A'}
                    />
                </View>
                <View style={styles.buttonsRow}>
                    <Button 
                        w={buttonContainerWidth}
                        text={'4'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'5'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'6'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'-'}
                        backgroundColor={'#FF9F0A'}
                    />
                </View>
                <View style={styles.buttonsRow}>
                    <Button 
                        w={buttonContainerWidth}
                        text={'1'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'2'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'3'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'+'}
                        backgroundColor={'#FF9F0A'}
                    />
                </View>
                <View style={styles.buttonsRow}>
                    <Button 
                        w={(width / 2) - 10}
                        h={buttonContainerWidth}
                        text={'0'}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={','}
                    />
                    <Button 
                        w={buttonContainerWidth}
                        text={'='}
                        backgroundColor={'#FF9F0A'}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    displayContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: 30
    },
    displayText: {
        fontSize: 70,
        color: 'white',
    },
    buttonsContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 30,
    },
    buttonsRow: {
        flexDirection: 'row',
    },
    buttonContainer: {
        padding: 10,
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    }
})

export default App;

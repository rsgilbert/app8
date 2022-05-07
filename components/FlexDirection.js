import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const FlexDirection = () => {
    const [flexDirection, setFlexDirection] = useState('column')

    return (
        <PreviewLayout
            label="flexDirection"
            values={
                ['column', 'row', 'row-reverse', 'column-reverse']
            }
            selectedValue={flexDirection}
            setSelectedValue={setFlexDirection}
        >
            <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
            <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
        </PreviewLayout>
    )


}



const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
}) => {
    return (
        <View style={{ padding: 10, flex: 1 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.row}>
                {values.map(value => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => setSelectedValue(value)}
                        style={[
                            styles.button,
                            selectedValue == value && styles.selected
                        ]}
                    >
                        <Text style={[
                            styles.buttonLabel,
                            selectedValue == value && styles.selectedButtonLabel
                        ]}>
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={
                [styles.container, { [label]: selectedValue }]
            }>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue'
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24
    },
    box: {
        width: 50,
        height: 50
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
        color: 'white'
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '40%',
        textAlign: 'center'
    },
    buttonLabel: {
        color: 'coral',
        fontWeight: '500',
        fontSize: 12
    },
    selectedButtonLabel: {
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})
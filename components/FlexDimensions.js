import React from 'react'

import { View } from 'react-native'

export const FlexDimensions = () => {

    return (
        <View style={{ flex: 1}}>
            <View style={{ flex: 1, backgroundColor: 'pink' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 3, backgroundColor: 'steelblue'}} >
                <View style={{height: '20%', width: '50%', backgroundColor: 'yellow' }} />
                <View style={{ height: '30%', width:'75%', backgroundColor: 'maroon'}} />
                <View style={{ flex: 1, backgroundColor: 'red' }} />

            </View>

        </View>
    )
}
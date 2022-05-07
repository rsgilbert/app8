import React, { useState } from 'react'
import FlatListBasics from './components/flat-list';
import { View, Text } from 'react-native';
import { MyStyledApp } from './components/MyStyledApp';
import { FlexDimensions } from './components/FlexDimensions';
import { Dimensions } from './components/Dimensions';
import { MyFlexbox } from './components/MyFlexbox';
import { FlexDirection } from './components/FlexDirection';

const MyApp = () => {

    return (
        <View style={{flex: 1 }}>
             <FlexDirection />
        </View>
   
    )
}


export default MyApp;
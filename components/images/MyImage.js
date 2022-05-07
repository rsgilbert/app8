import React from 'react' 
import { Image, View, Text, ImageBackground } from 'react-native'
import Flm from './TheFlame.png'

export const MyImage = () => {
    let imgName = './TheFlame.png'
    let remoteImgUrl = 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'
    let remoteImgUrl2 = 'https://reactjs.org/logo-og.png'
    let remoteImgUrl3 = 'http://www.passioncloud.net/passioncloud_white.png';
    if(true) {
    //    imgName = imgName // bad, invalid  call
    }
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={{ uri: remoteImgUrl2 }} style={{ height: 300, width: 200 }}>
                <Text>My image</Text>
                {/* <Image source={require(imgName)} /> */}
                {/* <Image source={Flm} /> */}
                <Image 
                    source={{ uri: remoteImgUrl3 , headers: { Pragma: 'no-cache'}}} 
                    style={{ width: 100, height: 100 }}
                />
            </ImageBackground>
        </View>
    )
}
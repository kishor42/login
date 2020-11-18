import React from 'react';
import { View,Image } from 'react-native';



const Logo = () => {
    return (
        <View>
            <Image source={{uri:'https://www.explorehimalaya.com/wp-content/uploads/visit-nepal-1998.jpg'}} style={{height:100, width:100}} />
        </View>
    );
}

export default Logo;
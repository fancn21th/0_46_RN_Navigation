import React from "react";
import { View, Text } from 'react-native'

class MeScreen extends React.Component {
    render() {
        return (
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
            }}>
                <Text>Me!</Text>
            </View>
        );
    }
}

export default MeScreen

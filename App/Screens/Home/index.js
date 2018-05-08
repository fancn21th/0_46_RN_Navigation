import React from "react";
import { Button } from 'native-base'
import { View, Text } from 'react-native'

class HomeScreen extends React.Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View>
                <Text>Home!</Text>
              </View>
              <View>
                <Button
                  primary
                  onPress={ () => { navigation.navigate('Product') }}
                >
                  <Text> Go to Product </Text>
                </Button>
              </View>
            </View>
        );
    }
}

export default HomeScreen

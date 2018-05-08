import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import { FooterTab, Button, Footer, Text } from 'native-base'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'

const Style = {
    footerIcon: {
        fontSize: 17,
        color: '#777',
        lineHeight: 20,
        fontWeight: '500',
    },
    footerIconActive: {
        fontSize: 17,
        color: '#7468C5',
        lineHeight: 20,
        fontWeight: '500',
    },
    footerIconTabText: {
        fontSize: 11,
        color: '#7468C5',
        lineHeight: 15,
        fontWeight: '100',
        textAlign: 'center',
    },
    footerIconText: {
        fontSize: 11,
        color: '#777',
        lineHeight: 15,
        fontWeight: '100',
        textAlign: 'center',
    },
}

const TabBar = props => (
    <Footer
        style={{
            marginHorizontal: -10,
            position: 'absolute',
            bottom: 0,
        }}
    >
        <FooterTab
            style={{
                width: Dimensions.get('window').width,
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}
        >
            <Button
                active={props.navigation.state.index === 0}
                style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
                onPress={() => props.navigation.navigate('Home')}
            >
                <IconSLI
                    style={
                        props.navigation.state.index === 0
                            ? Style.footerIconActive
                            : Style.footerIcon
                    }
                    name="home"
                />
                <Text
                    style={
                        props.navigation.state.index === 0
                            ? Style.footerIconTabText
                            : Style.footerIconText
                    }
                >
                    Home
                </Text>
            </Button>
            <Button
                active={props.navigation.state.index === 1}
                style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
                onPress={() => props.navigation.navigate('Me')}
            >
                <IconFA
                    style={
                        props.navigation.state.index === 1
                            ? Style.footerIconActive
                            : Style.footerIcon
                    }
                    name="user-o"
                />
                <Text
                    style={
                        props.navigation.state.index === 1
                            ? Style.footerIconTabText
                            : Style.footerIconText
                    }
                >
                    Me
                </Text>
            </Button>
        </FooterTab>
    </Footer>
)

TabBar.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            index: PropTypes.number.isRequired,
        }).isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

export default TabBar

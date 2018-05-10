import React from "react";
import {
  Container,
  Content,
  Header,
  Footer,
  Left,
  Body,
} from 'native-base'
import { Text } from 'react-native'

class ProductScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'green'}}>
          <Left>
            <Text>
              Back
            </Text>
          </Left>
          <Body>
            Product
          </Body>
        </Header>
        <Content style={{backgroundColor:'blue'}}>
          <Text>
            Content
          </Text>
        </Content>
        <Footer style={{backgroundColor:'red'}}>
          <Text>
            Footer Text
          </Text>
        </Footer>
      </Container>
    );
  }
}

export default ProductScreen

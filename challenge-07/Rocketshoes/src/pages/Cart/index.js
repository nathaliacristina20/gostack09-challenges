import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    ProductHeader,
    Products,
    ProductImage,
    ProductDetail,
    Product,
    ProductTitle,
    ProductPrice,
    Footer,
    Input,
    Total,
    TotalTitle,
    TotalPrice,
    ButtonOrder,
    ButtonOrderText,
    ProductAmount,
} from './styles';

import Header from '../../components/Header';

export default class Cart extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header {...navigation} />,
        title: 'Rocketshoes',
    });

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        console.tron.log(item);
        return (
            <Container>
                <Products>
                    <Product>
                        <ProductHeader>
                            <ProductImage source={{ uri: item.image }} />
                            <ProductDetail>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPrice>
                                    {item.priceFormatted}
                                </ProductPrice>
                            </ProductDetail>
                        </ProductHeader>
                        <Footer>
                            <ProductAmount>
                                <Icon
                                    name="remove"
                                    type="MaterialIcons"
                                    color="#000"
                                    size={20}
                                />
                                <Input editable={false}>3</Input>
                                <Icon name="add" size={20} color="#000" />
                            </ProductAmount>
                            <ProductPrice>{item.priceFormatted}</ProductPrice>
                        </Footer>
                    </Product>

                    <Product>
                        <ProductHeader>
                            <ProductImage source={{ uri: item.image }} />
                            <ProductDetail>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPrice>
                                    {item.priceFormatted}
                                </ProductPrice>
                            </ProductDetail>
                        </ProductHeader>
                        <Footer>
                            <ProductAmount>
                                <Icon
                                    name="remove"
                                    type="MaterialIcons"
                                    color="#000"
                                    size={20}
                                />
                                <Input editable={false}>1</Input>
                                <Icon name="add" size={20} color="#000" />
                            </ProductAmount>
                            <ProductPrice>{item.priceFormatted}</ProductPrice>
                        </Footer>
                    </Product>

                    <Total>
                        <TotalTitle>TOTAL</TotalTitle>
                        <TotalPrice>{item.priceFormatted}</TotalPrice>
                    </Total>

                    <ButtonOrder>
                        <ButtonOrderText>FINALIZAR PEDIDO</ButtonOrderText>
                    </ButtonOrder>
                </Products>
            </Container>
        );
    }
}

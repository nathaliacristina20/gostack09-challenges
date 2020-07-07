import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
    Container,
    Products,
    Product,
    ImageProduct,
    ContainerImage,
    Price,
    Title,
    ButtonCart,
    AmountProduct,
    AmountProductText,
    ButtonCartText,
    ContainerDescription,
    List,
} from './styles';

import { formatPrice } from '../../util/format';

import Header from '../../components/Header';

export default class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header {...navigation} />,
        title: 'Rocketshoes',
    });

    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    handleNavigate(item) {
        const { navigation } = this.props;
        navigation.navigate('Cart', { item });
    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                <Products>
                    <List
                        data={products}
                        keyExtractor={product => String(product.id)}
                        renderItem={({ item }) => (
                            <Product>
                                <ContainerImage>
                                    <ImageProduct
                                        source={{ uri: item.image }}
                                    />
                                </ContainerImage>
                                <ContainerDescription>
                                    <Title>{item.title}</Title>
                                    <Price>{item.priceFormatted}</Price>
                                </ContainerDescription>
                                <ButtonCart
                                    onPress={() => this.handleNavigate(item)}
                                >
                                    <AmountProduct>
                                        <Icon
                                            name="add-shopping-cart"
                                            type="MaterialIcons"
                                            color="#fff"
                                            size={16}
                                        />
                                        <AmountProductText>2</AmountProductText>
                                    </AmountProduct>
                                    <ButtonCartText>ADICIONAR</ButtonCartText>
                                </ButtonCart>
                            </Product>
                        )}
                    />
                </Products>
            </Container>
        );
    }
}

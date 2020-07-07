import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Image, ButtonAmount, ButtonAmountText } from './styles';
import Logo from '../../assets/Logo.png';

export default function Header() {
    return (
        <Container>
            <Image source={Logo} />
            <ButtonAmount>
                <Icon
                    name="shopping-basket"
                    type="MaterialIcons"
                    color="#fff"
                    size={24}
                />
                <ButtonAmountText>3</ButtonAmountText>
            </ButtonAmount>
        </Container>
    );
}

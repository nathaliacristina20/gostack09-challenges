import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background: #191920;
`;

export const Products = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    horizontal: true,
})`
    margin-top: 2px;
`;

export const Product = styled.View`
    background: #ffffff;
    width: 220px;
    margin-right: 15px;
    border-radius: 4px;
`;

export const ContainerImage = styled.View`
    align-items: center;
`;

export const ImageProduct = styled.Image`
    height: 200px;
    width: 200px;
    margin: 10px;
`;

export const Price = styled.Text`
    font-weight: bold;
    font-size: 21px;
    margin-bottom: 14px;
`;

export const Title = styled.Text`
    font-size: 16px;
`;

export const ContainerDescription = styled.View`
    margin-left: 10px;
`;
export const ButtonCart = styled(RectButton)`
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    align-self: center;
    width: 200px;
    height: 42px;
    margin-bottom: 10px;
    margin-top: auto;
`;

export const ButtonCartText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-right: 12px;
    margin: 0 auto;
`;

export const AmountProduct = styled.View`
    flex-direction: row;
    background: rgba(0, 0, 0, 0.1);
    width: 53px;
    height: 42px;
    align-items: center;
    justify-content: flex-end;
`;

export const AmountProductText = styled.Text`
    color: #fff;
    margin-right: 12px;
    margin-left: 5px;
`;

export const Teste = styled.Text``;

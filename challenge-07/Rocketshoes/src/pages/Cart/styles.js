import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background: #191920;
    align-items: center;
`;

export const Products = styled.View`
    width: 335px;
    height: 473px;
    margin: 20px;
    background: #fff;
    flex-direction: column;
`;

export const Product = styled.View`
    width: 305px;
    margin: 22px 15px;
    flex-direction: column;
`;

export const ProductHeader = styled.View`
    flex-direction: row;
`;

export const ProductImage = styled.Image`
    width: 80px;
    height: 80px;
`;

export const ProductDetail = styled.View`
    flex-direction: column;
    margin-top: 10px;
    margin-left: 10px;
    width: 163px;
    height: 60px;
`;

export const ProductTitle = styled.Text`
    font-size: 14px;
`;

export const ProductPrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
`;

export const Footer = styled.View`
    font-size: 16px;
    font-weight: bold;
    background: #eeeeee;
    width: 305px;
    height: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.TextInput`
    border: 1px solid #dddddd;
    width: 51px;
    height: 26px;
    border-radius: 4px;
    background: #fff;
    margin: 0;
    padding: 0;
    padding-left: 15px;
`;

export const Total = styled.View`
    margin: 0 98px;
    width: 139px;
    height: 59px;
    align-items: center;
`;

export const TotalTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #999999;
`;

export const TotalPrice = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const ButtonOrder = styled(RectButton)`
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    align-self: center;
    width: 315px;
    height: 42px;
    margin-bottom: 10px;
    margin-top: auto;
    justify-content: center;
`;

export const ButtonOrderText = styled.Text`
    color: #fff;
    align-items: center;
`;

export const ProductAmount = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`;

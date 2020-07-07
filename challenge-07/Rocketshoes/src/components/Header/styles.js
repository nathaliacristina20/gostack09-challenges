import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
    flex: 0;
`;

export const Container = styled.View`
    background: #141419;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.Image`
    width: 185px;
    height: 24px;
    margin: 20px;
`;

export const ButtonAmount = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    margin-right: 30px;
`;

export const ButtonAmountText = styled.Text`
    position: absolute;
    text-align: center;
    top: -8px;
    right: -8px;
    min-width: 18px;
    min-height: 18px;
    background: #7159c1;
    color: #fff;
    font-size: 12px;
    padding: 2px;
    border-radius: 9px;
    overflow: hidden;
`;

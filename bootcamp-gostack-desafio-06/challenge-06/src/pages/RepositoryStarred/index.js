import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Container, Header, Avatar, Name, Bio } from './styles';

export default class RepositoryStarred extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('repositorystarred').name,
    });

    render() {
        const { navigation } = this.props;
        const repository = navigation.getParam('repositorystarred');
        console.tron.log(navigation);
        return (
            <WebView
                source={{ uri: repository.html_url }}
                style={{ flex: 1 }}
            />
        );
    }
}

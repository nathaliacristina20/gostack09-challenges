import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        stars: [],
        loading: false,
        page: 1,
        refreshing: false,
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');
        this.setState({ loading: true });

        const { page } = this.state;

        const response = await api.get(`/users/${user.login}/starred`, {
            params: {
                per_page: 3,
                page,
            },
        });
        this.setState({ stars: response.data, loading: false });
    }

    async loadMore() {
        // this.setState({ loading: true });

        const { stars } = this.state;
        let { page } = this.state;

        const { navigation } = this.props;
        const user = navigation.getParam('user');

        page += 1;

        const response = await api.get(`/users/${user.login}/starred`, {
            params: {
                per_page: 3,
                page,
            },
        });

        this.setState({
            stars: stars.concat(response.data),
            loading: false,
            page,
        });
    }

    async refreshList() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');

        const response = await api.get(`/users/${user.login}/starred`, {
            params: {
                per_page: 30,
                page: 1,
            },
        });

        this.setState({
            stars: response.data,
        });
    }

    handleNavigate(repositorystarred) {
        const { navigation } = this.props;
        navigation.navigate('RepositoryStarred', { repositorystarred });
    }

    render() {
        const { navigation } = this.props;
        const { stars, loading, refreshing } = this.state;
        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>
                {loading ? (
                    <ActivityIndicator color="#000" />
                ) : (
                    <ActivityIndicator color="#fff" />
                )}
                <Stars
                    data={stars}
                    keyExtractor={star => String(star.id)}
                    onRefresh={() => this.refreshList()} // Função dispara quando o usuário arrasta a lista pra baixo
                    refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
                    onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
                    onEndReached={() => this.loadMore()} // Função que carrega mais itens
                    renderItem={({ item }) => (
                        <Starred onPress={() => this.handleNavigate(item)}>
                            <OwnerAvatar
                                source={{ uri: item.owner.avatar_url }}
                            />
                            <Info>
                                <Title>{item.name}</Title>
                                <Author>{item.owner.login}</Author>
                            </Info>
                        </Starred>
                    )}
                />
            </Container>
        );
    }
}

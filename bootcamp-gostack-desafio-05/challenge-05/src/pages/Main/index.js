import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Form, SubmitButton, List } from './styles';

import Container from '../../components/Container/Index';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
        error: false,
    };

    // Carrega os dados do localStorage
    componentDidMount() {
        const repositories = localStorage.getItem('repositories');
        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    // Salva os dados do localStorage
    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;
        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        try {
            this.setState({ loading: true });

            const { newRepo, repositories } = this.state;
            const response = await api.get(`repos/${newRepo}`);

            const existiRepo = repositories.filter(
                repository =>
                    repository.name.toLowerCase() === newRepo.toLowerCase()
            );

            if (existiRepo.length > 0) {
                throw new Error('Repositório duplicado');
            }

            const data = {
                name: response.data.full_name,
            };
            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: false,
                error: false,
            });
        } catch (err) {
            this.setState({
                loading: false,
                error: true,
            });
            alert(err.message);
        }
    };

    render() {
        const { newRepo, loading, repositories, error } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar repositório"
                        value={newRepo}
                        onChange={this.handleInputChange}
                        className={error ? 'invalid' : 'valid'}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#fff" size={14} />
                        ) : (
                            <FaPlus color="#fff" size={14} />
                        )}
                    </SubmitButton>
                </Form>
                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    repository.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}

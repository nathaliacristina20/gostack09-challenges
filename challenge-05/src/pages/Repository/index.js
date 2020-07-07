import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Loading, Owner, IssueList } from './styles';

import Container from '../../components/Container/Index';

export default class Repository extends Component {
    static propType = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            }),
        }).isRequired,
    };

    state = {
        repository: {},
        issues: [],
        loading: true,
        status: 'open',
        page: 1,
    };

    async componentDidMount() {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);
        const { page } = this.state;
        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 2,
                    page,
                },
            }),
        ]);

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
        });
    }

    filterIssues = async () => {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);
        const { page, state } = this.state;
        
        const response = await api.get(`/repos/${repoName}/issues`, {
            params: {
                state,
                per_page: 2,
                page,
            },
        });

        this.setState({
            issues: response.data,
            loading: false,
            error: false,
            state,
        });
    };

    async previousIssue() {
        const { page, status } = this.state;
        await this.setState({
            page: page - 1,
        });
        this.filterIssues(status);
    }

    async nextIssue() {
        const { page, status } = this.state;
        await this.setState({
            page: page + 1,
        });
        this.filterIssues(status);
    }

    async changeState(state){
        await this.setState({
            state
        });
        
        this.filterIssues();
    }
    render() {
        const { repository, issues, loading, state, page } = this.state;
        if (loading) {
            return <Loading>Carregando</Loading>;
        }
        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar aos repositórios</Link>
                    <img
                        src={repository.owner.avatar_url}
                        alt="Repository.owner.login"
                    />
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                    <div className="button-top">
                        <button
                            type="button"
                            className={state === 'open' && 'clicked'}
                            onClick={() => this.changeState('open')}
                        >
                            Ativo
                        </button>
                        <button
                            type="button"
                            className={state === 'closed' && 'clicked'}
                            onClick={() => this.changeState('closed')}
                        >
                            Inativo
                        </button>
                        <button
                            type="button"
                            className={state === 'all' && 'clicked'}
                            onClick={() => this.changeState('all')}
                        >
                            Tudo
                        </button>
                    </div>
                </Owner>
                <IssueList>
                    {issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>
                                    {issue.labels.map(label => (
                                        <span key={String(label.id)}>
                                            {label.name}
                                        </span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                    <div className="button-bottom">
                        <button
                            type="button"
                            disabled={page === 1}
                            onClick={() => this.previousIssue()}
                        >
                            Anterior
                        </button>
                        <button type="button" onClick={() => this.nextIssue()}>
                            Próximo
                        </button>
                    </div>
                </IssueList>
            </Container>
        );
    }
}
// }({ match }) {
//     return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
// }

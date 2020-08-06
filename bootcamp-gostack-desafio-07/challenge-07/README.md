<p align="center">
    <img width="300" align="center" src=".github/gostack.svg">   
</p>

<h1 align="center">
    Rocketshoes
</h1>

<h3 align="center">
E-commerce de sapatos
</h3>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a> | <a href="#computer-tecnologias">Tecnologias</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> | <a href="#pencil-como-contribuir">Como contribuir</a> | <a href="#page_with_curl-licença">Licença</a>
</p>

## Layout

<img src=".github/rocketshoes_web.gif">

## :rocket: Sobre o projeto

<p>Este é um e-commerce inspirado na Netshoes e desenvolvido durante o Bootcamp GoStack #09 da Rocketshoes.</p>

<p>Fez parte do desafio 7 afim de fixar conceitos de Hooks e Redux.</p>

<p>Esta é a versão cliente mobile.</p>
<ul>
  <li>Para a versão web, clique <a href="https://github.com/nathaliacristina20/rocketshoes-web">aqui</a>.</li>
</ul>

## :computer: Tecnologias
    
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Reactotron](https://github.com/infinitered/reactotron)
- [Babel](https://babeljs.io/)
- [Styled Components](https://styled-components.com/)

## :books: Guia de instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= v10.20
- [Yarn](https://yarnpkg.com/)
- Emulador ou Dispositivo físico

<blockquote>Acesse <a href="https://react-native.rocketseat.dev">aqui</a> a documentação da Rocketseat com o passo-a-passo e erros mais comuns para montar seu ambiente Mobile.</blockquote>

### Como executar

- Clone o repositório ```git clone https://github.com/nathaliacristina20/rocketshoes-mobile.git```
- Vá até o diretório ```cd rocketshoes-mobile```
- Execute ```yarn``` para instalar as dependências

<strong>Com um emulador</strong>

- Abra um dispositivo no seu emulador
- Execute ```yarn android``` ou ```yarn ios``` de acordo o sistema operacional que você deseja rodar
- Execute ```yarn start```
- Em outro terminal execute ```yarn json-server server.json --host xxx.xxx.x.xx -p 3333``` substituindo os x por seu ip para rodar o servidor backend fictício

Pronto! Feche e abra novamente o aplicativo.

<strong>Com um dispositivo físico</strong>

<i>Certifique-se que seu dispositivo esteja com o modo desenvolver ativado.</i>

- Conecte seu dispositivo físico em um cabo USB
- Execute ```yarn android``` ou ```yarn ios``` de acordo o sistema operacional que você deseja rodar
- Execute ```yarn start```
- Em outro terminal execute ```yarn json-server server.json --host xxx.xxx.x.xx -p 3333``` substituindo os x por seu ip para rodar o servidor backend fictício

Pronto! Feche e abra novamente o aplicativo.

## :pencil: Como contribuir

<b>Faça um fork deste repositório</b>

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd rocketshoes-mobile

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :page_with_curl: Licença

Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/nathaliacristina20/rocketshoes-mobile/blob/master/LICENSE">LICENSE</a> para mais detalhes.

<hr />
<p>by Nathalia Cristina :wave: <a href="https://linktr.ee/nathaliacristina20">Get in touch!</a></p>

import React from 'react';
import './App.css';

import PostList from './components/PostList'

import Logo from 'react-svg-loader!./assets/facebook-1.svg';

function App() {
  return <>
    <header>
      <Logo className="logo" />
      <a href="">Meu perfil</a>
    </header>
    <div className="main">
      <PostList />
    </div>
  </>;
  //return <img src={profile}></img>
}

export default App;
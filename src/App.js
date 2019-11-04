import React from 'react';
import './App.css';
import PostList from './components/PostList'
import Logo from './assets/facebook-1.svg';

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return <>
    <header>
      <Logo className="logo" />
      <a href="">Meu perfil <FontAwesomeIcon icon={faUserCircle} /></a>
    </header>
    <div className="main">
      <PostList />
    </div>
  </>;
}

export default App;
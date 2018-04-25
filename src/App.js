import React, { Component } from 'react';
import './App.css';
import color from './color.svg';
import twemoji from 'twemoji'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <HelloEmoji />
        </p>
        <h1>I am Wong Heung Sang</h1>
        <p className="i-love-movies">
          <ILM />!
        </p>
        <p className="last-movie">
          My Last <MoviesEmoji /> was <a href="https://www.criterion.com/films/28858-fanny">Fanny</a>.
        </p>
        <p>
          My Favorite Color is <img src={color} alt="My Favorite Color" />.
        </p>
        <p>
          <CoolEmoji />
        </p>
      </div>
    );
  }
}

function createMarkupILM() {
  return {__html: twemoji.parse('I ❤ 🎥')};
}

function createMarkupMovies() {
  return {__html: twemoji.parse('🎥')};
}

function createMarkupHello() {
  return {__html: twemoji.parse('👋')};
}

function createMarkupCool() {
  return {__html: twemoji.parse('😎')};
}

function ILM() {
  return <span dangerouslySetInnerHTML={createMarkupILM()} />;
}

function MoviesEmoji() {
  return <span dangerouslySetInnerHTML={createMarkupMovies()} />;
}

function HelloEmoji() {
  return <span dangerouslySetInnerHTML={createMarkupHello()} />;
}

function CoolEmoji() {
  return <span dangerouslySetInnerHTML={createMarkupCool()} />;
}

export default App;

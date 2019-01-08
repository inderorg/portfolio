import React, { Component } from 'react';
import Post from './components/Post';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Post />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default App;

import Time from './components/Time/Time'
import Form from './components/Form/Form'
import Image from './components/Image/Image'
import Videocheck from './components/Videocheck/Videocheck'


import { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';


export default class App extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {  
    return(
    <BrowserRouter>
    <Route path="/time" component={Time} />
    <Route path="/form" component={Form} />
    <Route path="/image" component={Image} />
    <Route path="/video" component={Videocheck} />


    
    </BrowserRouter>
    )}
}



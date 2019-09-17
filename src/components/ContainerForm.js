import React, { Component } from 'react';
import OptionsSelect from './OptionsSelect';
import axios from 'axios';

class ContainerForm extends Component{
  constructor() {
    super();
    this.state = {
        options: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/categories`)
    .then( response => {
      this.setState({options:response.data})
    })
  }
  render() {
    return (
      <div>
        <OptionsSelect options={this.state.options}/>
      </div>)
  }

}

export default ContainerForm

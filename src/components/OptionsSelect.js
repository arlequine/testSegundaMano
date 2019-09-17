import React from 'react';
import axios from 'axios';
import ContainText from './ContainText';

class OptionsSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      text: '',
      urlGif: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({selected: event.target.value});
  }
  handleSubmit(event) {
    const categorySelected = this.state.selected;
    axios.get(`https://api.chucknorris.io/jokes/random?category=${categorySelected}`)
      .then( response => {
        this.setState({text: response.data.value})
        this.getGif(this.state.text);
      })
      event.preventDefault();
    }
    getGif(text) {
      let textArr = text.split(" ");
      let word_1 = textArr[0];
      let word_2 = textArr[1];
      let word_3 = textArr[2];
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${word_1}+${word_2}+${word_3}&api_key=nd5fJFayTseYfM8Ii31gUJ9oMuqxEJVJ&limit=1`)
        .then( res => {
          this.setState({urlGif: res.data.data[0].images.original.url})
        })
      }
      render() {
        const categories = this.props.options;
        return (
          <div>
          <form className="inputs" onSubmit={this.handleSubmit}>
          <select value={this.state.selected} onChange={this.handleChange}>
          <option key='0' value='0' disabled>Select category</option>
          {
            categories.map((category) => {
              return ( <option key={category} value={category}> {category} </option> )
            })
          }
          </select>
          <input type="submit" value="Search" />
          </form>
          <div className="container-data">
          <ContainText category={this.state.text}></ContainText>
          <img className="image-gif" src={this.state.urlGif} alt=""/>
          </div>
          </div>
        );
      }
    }

    export default OptionsSelect;

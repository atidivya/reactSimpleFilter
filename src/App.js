import React, { Component } from 'react';
import './App.css';

const list = [
  {id: 0, text: 'react'},
  {id: 1, text: 'css'},
  {id: 2, text: 'html'},
  {id: 3, text: 'fetch'},
]

function searchingFor(term){
  return function(x){
    return x.text.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}
class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        list:list,
        term:''
      }
      this.searchHandler = this.searchHandler.bind(this);
    
  }

  searchHandler(event){
    this.setState({ term: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text"
              onChange={this.searchHandler}
          />
        </form>
       {
         this.state.list.filter(searchingFor(this.state.term)).map( tech =>
          <div key = {tech.id}>
            <h1>{tech.text}</h1>
          </div>
        )
       }
      </div>
    );
  }
}

export default App;

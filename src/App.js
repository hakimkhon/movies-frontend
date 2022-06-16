import React, {Component} from 'react'
import axios from 'axios'
class App extends Component{
  state = {
    films:[]
  };
  componentDidMount(){
    this.getFilms();
  }
  getFilms(){
    axios
    .get('http://127.0.0.1:8000/api/v/')
    .then(res=>{
      this.setState({films:res.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render(){
    return(
      <div>
        {this.state.list.map(item =>(
          <div class={item.id}>
            <h1>{item.title}</h1>
            <h2>{item.rejisor}</h2>
            <p>{item.about_film}</p>
            <h3>{item.pochta}</h3>
          </div>
        ))}
      </div>
    )
  }
}
export default App;

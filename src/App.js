import React from 'react';

//**** Start  Default Property values and Property Tyeps Definition  ****/
class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  //Update method for txt value
  update(e){
    this.setState({txt: e.target.value})
  }
  //Update method for cat value
  update2(e){
    this.setState({cat: e.target.value})
  }
  render() 
  {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <input type="text" onChange={this.update2.bind(this)} />
      <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}
export default App

import React from 'react';
import ReactDOM from 'react-dom'; // Getting react dom

//**** Start  Default Property values and Property Tyeps Definition  ****/
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      a: ''
    }

  }
  update() {
    console.log(this.a);
    this.setState({
      // a: this.a.value, this is a node setting the state a:
      // ReactDOM.findDOMNode(this.a).value,
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }

  render()
  {
    return (
      <div>
        <Input
          ref={component => this.a = component}
          update={this
          .update
          .bind(this)}/> {this.state.a}
        <hr/>
        <input
          ref="b"
          type="text"
          onChange={this
          .update
          .bind(this)}/> {this.state.b}

      </div>
    )
  }
}

class Input extends React.Component {
  render() {

    console.log('-----', this.props);
    return <div>
      <input ref="input" type="text" onChange={this.props.update}/>
    </div>
  }
}

export default App

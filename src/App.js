import React from 'react';
import ReactDom from 'react-dom';


//**** Start  Default Property values and Property Tyeps Definition  ****/
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      val:0
    }
    this.update = this.update.bind(this)

  }
  update() {
    this.setState({
      val:this.state.val+1
    })
  }

  
  componentWillMount() {
    console.log('componentWillMount')
    this.setState({m: 2})
  }
  
  componentDidMount() {
    console.log('componentDidMount')
    /*console.log(ReactDom.findDOMNode(this))*/
    this.inc = setInterval(this.update,500) 
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
    

  render()
  {
    console.log('render');
    console.log(this.state.val + ' - ' + this.state.m)
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    
  }
}

class Wrapper extends React.Component {
  mount(){
    ReactDom.render(<App/>, document.getElementById('a'))
  }
  unmount(){
    ReactDom.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}> Mount </button>
        <button onClick={this.unmount.bind(this)}> Unmount </button>
        <div id="a"></div>
        </div>
    )
  }
}

export default Wrapper // setting the Warpper here and include the App inside the wrapper

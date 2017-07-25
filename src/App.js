import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      increasing: false
    }

  }
  update() {
    ReactDom.render(<App val={this.props.val+1} />, document.getElementById('root'))
  }
  
  // Next updating phase
  componentWillReceiveProps(nextProps)
  {
    this.setState({increasing: nextProps.val > this.props.val})
  }

  // Next updating phase
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  
    

  render()
  {
    console.log(this.state.increasing)
    return (
    <button onClick={this.update.bind(this)}>
      {this.props.val}
      </button>
    )
  }

  // Next updating phase after update is finished this trigger...
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps:", prevProps.val)
  }
  
}

App.defaultProps = {val: 0}

export default App 

import React from 'react';

//**** Start  Default Property values and Property Tyeps Definition  ****/
class App extends React.Component {
   
  render() 
  {
    return <Button> I <Heart /> React</Button>
  }
}

const Button = (props) => <button> {props.children}</button> 

// Class component
class Heart extends React.Component {
  render()
  {
    return <span>&hearts;</span>
  }
}

export default App

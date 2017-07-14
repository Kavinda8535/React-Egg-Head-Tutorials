import React from 'react';

//**** Start  Default Property values and Property Tyeps Definition  ****/
class App extends React.Component {
   
  render() 
  {
    return <Title text="1234"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1> 

Title.protoType = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error('missing ${propName}')
    }
    if(props[propName].length < 6){
      return new Error('${propName} was too short')
    }
  }
}

export default App

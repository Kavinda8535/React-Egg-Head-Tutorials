import React from 'react';

// Class components
/*class App extends React.Component {
render(){
  return React.createElement('h1', null, 'Hello Egghead')
}

}*/

// Stateless function component
//const  App = () => <h1>Hello World </h1>

// Removing the white space in the class compnent with wrapping with brakets()
/*class App extends React.Component {
render(){
  return(
    //This upper brakets reduce the white spaces... Remove those and you will 
    // Get nothing for the result.
    <div>
      <h1>Hello Wolrd</h1>
      <b> Bold </b>
    </div>
  )
}

}*/

//**** Start  Default Property values and Property Tyeps Definition  ****/
class App extends React.Component {
  render() {
    let text = this.props.txt
    let sam = this.props.sam
    return (
      <div>
      <h1>{text}</h1>
      <h2>{sam}</h2>
      </div>
    )
  }
}

//Creating a Property Type as String / Number (Intiger/Double)
App.PropTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
  sam: React.PropTypes.string
}

// If the txt prop does not exit in index.js value of the default prop define like below.
// You have to include those props in Proptype defintly and also Class Component
App.defaultProps = {
  txt: "This is default Prop for Text",
  sam: "I'm sam and this is my default Text"
}

//**** End of Default Property values and Property Tyeps Definition  ****/

// const App = () => <h1>Hi</h1>

export default App

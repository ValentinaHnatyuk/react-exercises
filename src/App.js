
import React from 'react';
import  Welcome  from './Welcome'

class App extends React.Component{
  render() {
    return (
      <div>
        < Welcome name={<strong>Valentina</strong>} age={21} />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Valentina"
}
export default App;


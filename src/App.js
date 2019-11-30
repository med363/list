import React, {Component} from 'react';
import ToDo from './components/ToDo';

class App extends Component {

  state = {
    inputText: '',
    tasks: []
  }

  handleAddClick = () => {
    if (this.state.inputText.trim() !== '') {
      const tasksList = this.state.tasks;
      tasksList.push(this.state.inputText);
      this.setState({
        tasks: tasksList,
        inputText: ''
      })
    }
  }

  render() {
    
    return (
      <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
        <div>
          <input 
            style={{width: 500, height: 30}} 
            value={this.state.inputText} 
            onChange={(event) => this.setState({inputText: event.target.value})} 
          />
          <button onClick={this.handleAddClick} style={{height: 35, marginLeft: 4}}>Add</button>
        </div>
        {this.state.tasks.map((item) => {
          return <ToDo task={item} />
        })}
      </div>
    )
  }
}

export default App;
import React, {Component} from 'react';
class ToDo extends Component {

    state = {
        done: false
    }
    
    render() {

        let textDecorationStyle;
        if (this.state.done === true) {
            textDecorationStyle = 'line-through'
        } else {
            textDecorationStyle = 'none'
        }

        return (
            <div style={{border: 'blue solid 2px', marginTop: 10, padding: 4, width: '60%'}}>
                <p style={{textDecoration: textDecorationStyle, cursor: 'pointer'}}
                 onClick={() => this.setState({done: !this.state.done})}>{this.props.task}</p>
            </div>
        )

    }
}

export default ToDo;
import React, { Component } from 'react'
import ChildB from "./ChiledB";
import ChildA from "./ChildA";
import { addSirName } from "./SirnameAction";
import { connect } from "react-redux";

class Father extends Component {
    addItem = (e) => {
        e.preventDefault()
        console.log("Prps ", this.props)
        this.props.dispatch(addSirName(
            this.input.value
        ))
    }

    componentDidMount() {
        console.log("Father mounted " , this.props.name)
    }

    render() {
        return (
            <div>
                <h2>Father</h2>
                <h3>{this.props.name}</h3>
                <input type="text"
                       placeholder="Add Todo"
                       ref={(input) => this.input = input}/>
                <button onClick={this.addItem}>Add Todo</button>
                <ChildA/>
                <ChildB/>
            </div>

        );
    }
}
export default connect((state) => (
    {
        name: state.name
    }
))(Father)

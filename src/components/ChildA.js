import React, {Component} from 'react'
import { addSirName } from "./SirnameAction";
import { connect } from "react-redux";

class ChildA extends Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(addSirName(
            this.input.value
        ))
    }
    componentDidMount() {
        console.log("Child A mounted " , this.props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Child A DidUpdate " , prevProps)
    }
    render() {
        return (
            <div>
                <h2>Child B</h2>
                <h3>{this.props.name}</h3>
                <input type="text"
                       placeholder="Add Todo"
                       ref={(input) => this.input = input}/>
                <button onClick={this.addItem}>Add Sir name</button>
            </div>

        );
    }
}
export default connect((state) => (
    {
        name: state.sirname
    }
))(ChildA)

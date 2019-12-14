import React, { Component } from 'react'
import './index.css';
import { connect } from 'react-redux'
import { addTodo } from '../actions/itemActions'

{/*  -In this component, user will create a new Todo.
  -Here we are using redux so, first of all install it.
  -Other components needs to know when the user creates a new Todo. So,
    basically in redux these works are done by Actions.
  -To play with redux, Create a folder named actions then add new file actionsType.js inside 
  -Inside actionsType.js create ADD_TODO constatnt and export it.
  -And now, use the ADD_TODO constant on the action creators.
  -For that create a new file named itemActions inside actions folder.
  -Actions creators that are functions that create actions: ADD,EDIT,DELETE.....etc
    which means Actions always listen to the user and other events and send them to JS functions.
  -handleInput stores the value of the input field whatever the user types or selects which
    is passed from onChange event of that particular input field.
  -onSubmit is a respective handler that pass data as a prop.
  -event.preventDefault() is used to stop the page refresh/ form submitting.
  -mapDispatchToProps connects Redux actions to React props.
  -dispatch is not a function, So first argument for connect must be null when mapStateToProps is absent.
  -the action is dispatched in the onSubmit method.
  -Finally the component connect with redux store and get exported.

  */}

class AddItem extends Component {
	state = {
    text: ''
  }


  handleInput = e => {
    this.setState({
        text: e.target.value
    });
  }


  onSubmit = e => {
    e.preventDefault();

    const newItem = this.state.text;

    this.props.addTodo(newItem);

    this.setState({
      text:''
    });
  }

  render() {
    const text= this.state.text;
    console.log(this.props);
    return (
    	<form className="item" onSubmit={this.onSubmit}>

				<input type="text" placeholder="What needs to be done?"
				  className="text1"
          name='todoText'
          required="required"
				  value={text} 
				  onChange={this.handleInput} 
          autocomplete="off"  
				/>

				<button className="btnadd" type="submit">
					Add
				</button>
			</form>
    )
  }
}

const mapDispatchToProps= (dispatch) => {
  return  {
    addTodo: todo =>
  dispatch(addTodo(todo))
  };
}

export default connect(null, mapDispatchToProps)(AddItem);
import React, {Component, PropTypes} from 'react';

import ListGroup from '../UIModules/ListGroup';
import ListItem from '../UIModules/ListItems';

import '../styles/dashboard.css';


export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoListValues: [],
      packingListValues: [],
      todoInputValue: '',
      packingInputValue: ''
    }
    this.onTodoChange = this.onInputChange.bind(this, 'todoInputValue');
    this.onPackingChange = this.onInputChange.bind(this, 'packingInputValue');
    this.onTodoSubmit = this.onTodoSubmit.bind(this);
    this.onPackingSubmit = this.onPackingSubmit.bind(this);
  }

  onInputChange(value, e){
    this.setState({[value]: e.target.value})
    console.log(this.state.inputValue)
  }

  onTodoSubmit(e){
    e.preventDefault();
    this.setState({
      todoListValues: [...this.state.todoListValues, this.state.inputValue],
      inputValue: ''
    })
  }

  onPackingSubmit(e){
    e.preventDefault();
    this.setState({
      packingListValues: [...this.state.packingListValues, this.state.inputValue],
      inputValue: ''
    })
  }

  render(){

    const todoListItems = this.state.todoListValues.map((item, index) => {
      return (
        <div>
          <ListItem
            key={index}
            classes={'col-lg-12 list-group-item'}
            value={item}/>
        </div>
      )
    })

    const packingListItems = this.state.packingListValues.map((item, index) => {
      return (
        <div>
          <ListItem
            key={index}
            classes={'col-lg-12 list-group-item'}
            value={item}/>
        </div>
      )
    })

    return(
      <div>
        <h1>Dashboard</h1>
        <div className='row dashboard-list-container'>
          <ListGroup
            listItems={todoListItems}
            value={this.state.inputValue}
            onChange={this.onTodoChange}
            formClass={'list-input'}
            classes={'col-lg-12'}
            submit={this.onTodoSubmit}
            placeholder={'Add ToDo Item...'}/>
            
          <ListGroup
            listItems={packingListItems}
            value={this.state.inputValue}
            onChange={this.onPackingChange}
            formClass={'list-input'}
            classes={'col-lg-12'}
            submit={this.onPackingSubmit}
            placeholder={'Add ToDo Item...'}/>
        </div>

      </div>
    )
  }
}

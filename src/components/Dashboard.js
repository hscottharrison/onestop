import React, {Component, PropTypes} from 'react';

import ListGroup from '../UIModules/ListGroup';
import ListItem from '../UIModules/ListItems';

import '../styles/dashboard.css';


export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      listValues: [],
      inputValue: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({inputValue: e.target.value})
    console.log(this.state.inputValue)
  }

  onInputSubmit(e){
    e.preventDefault();
    this.setState({
      listValues: [...this.state.listValues, this.state.inputValue, ],
      inputValue: ''
    })
  }

  render(){

    const listItems = this.state.listValues.map((item, index) => {
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
        <ListGroup
          listItems={listItems}
          value={this.state.inputValue}
          onChange={this.onInputChange}
          formClass={'list-input'}
          classes={'col-lg-12'}
          submit={this.onInputSubmit}
          placeholder={'Add ToDo Item...'}/>
          
      </div>
    )
  }
}

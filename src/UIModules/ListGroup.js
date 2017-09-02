import React from 'react';

import ListInput from './ListInput'

export default function ListGroup (props) {

    return(
      <div className='col-lg-3 dashboard-group'>
        <div className='list-group'>
          {props.listItems}
        </div>
        <ListInput
          value={props.value}
          onChange={props.onChange}
          formClass={props.formClass}
          classes={props.classes}
          submit={props.submit}
          placeholder={props.placeholder}/>
      </div>
    )


}

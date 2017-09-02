import React from 'react'

import '../styles/dashboard.css'

export default function ListInput (props) {

  return(
      <form className={props.formClass} onSubmit={props.submit} className="row">
        <div className={props.classes}>
            <input value={props.value} onChange={props.onChange} type="text" className="form-control" placeholder={props.placeholder} />
        </div>
      </form>
  )
}

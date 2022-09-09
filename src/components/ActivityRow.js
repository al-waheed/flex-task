import React from 'react'
import {getDays} from './../utils'
export const ActivityRow = ({details}) => {
 
	return (
	<div className='activity_Row'>
	  <h5 className='text_bold'> {details.author}</h5>
	  <div className="text">
	  <span className='text_light'> has change Status to <span className='red_dot'></span></span>
	  <span>{details.activity.status}</span>
	  <span className="date">{getDays(details?.createdAt)}</span>
	  </div>
	  <h5 className='text_bold'> {details.status} </h5>
	  </div>
  )
}


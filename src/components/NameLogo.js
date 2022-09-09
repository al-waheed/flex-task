import React from 'react'

const NameLogo = ({title}) => {
  return (
	<span className='name-logo'>{title?.charAt(0)}</span>
  )
}

export default NameLogo
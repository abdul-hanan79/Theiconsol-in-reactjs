import React from 'react'

export default function ViewResourcesList(props) {
  return (
        <ul className='view-resources-ul'>
            <li className='my-3'>{props.lia}</li>
            <li className='my-3'>{props.lib}</li>
            <li className='my-3'>{props.lic}</li>
            <li className='my-3'>{props.lid}</li>
            <li className='my-3'>{props.lie}</li>
        </ul>
  )
}

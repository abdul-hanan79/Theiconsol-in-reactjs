import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterSecondList(props) {
    // console.log(props.address)
  return  (
    <div>
         <ul className='view-resources-ul'>
            <li className='my-3 fw-bold text fs-7'>{props.lih}</li>
            <li className='my-3'><Link to="/footer/params">{props.lia}</Link></li>
            <li className='my-3 '><Link to="/footer/params">{props.lib}</Link></li>
            <li className='my-3'><Link to="/footer/params">{props.lic}</Link></li>
            <li className='my-3'><Link to="/footer/params">{props.lid}</Link></li>
            <li className='my-3'><Link to="/footer/params">{props.lie}</Link></li>
            <li className='my-3'><Link to="/footer/params">{props.lif}</Link></li>
            <li className='my-3'><Link to="/footer/params">{props.lig}</Link></li>
        </ul>
    </div>
  )
}

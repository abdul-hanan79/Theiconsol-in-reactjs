import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function FooterSecondList(props) {
  // console.log(props.address)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
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
    </motion.div>
  )
}

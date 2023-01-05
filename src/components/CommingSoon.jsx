import React from 'react'
import {motion} from 'framer-motion'
const CommingSoon = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      CommingSoon
    </motion.div>

  )
}

export default CommingSoon
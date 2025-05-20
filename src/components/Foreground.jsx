import React, { useRef } from 'react'
import AddCardButton from './AddCardButton'
import RemoveAllButton from './RemoveAllButton'

const Foreground = () => {
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full p-2'>
        <AddCardButton />
        <RemoveAllButton />
    </div>
  )
}

export default Foreground
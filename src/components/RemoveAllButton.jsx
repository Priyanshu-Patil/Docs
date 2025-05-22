import React from 'react'
import { FaTrash } from 'react-icons/fa'

const RemoveAllButton = () => {
return (
    <div>
        <button
            className='fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group'
            onClick={() => {
                if (window.confirm('Are you sure you want to remove all cards?')) {
                    localStorage.removeItem('cards')
                    window.location.reload()
                }
            }}
        >
            <FaTrash size={20} /> {}
        </button>
    </div>
)
}

export default RemoveAllButton
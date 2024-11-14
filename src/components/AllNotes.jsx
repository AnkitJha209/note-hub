import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const AllNotes = () => {
  const notes = useSelector(state => state.notes)
  console.log(notes)
  return (
    <div className='w-[70%]'>
      {notes.length > 0 && notes.map(note => (
        <div key={note.id} className='bg-gray-700 text-gray-300 rounded-lg px-5 py-2 mb-5 w-full'>
          <h2 className='text-2xl font-bold text-gray-400 text-left'>{note.title}</h2>
          <div className='flex justify-between items-center'>
            <h5>{`${note.content.substring(1,100)}...`}</h5>
            <div>
              <button>
                <NavLink to={`/?noteId=${note.id}`}>Edit</NavLink>
              </button>
              <button>
                <NavLink to={`${note.id}`} title={note.title}>View</NavLink>
              </button>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default AllNotes

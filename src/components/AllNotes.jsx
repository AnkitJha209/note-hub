import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteNote } from '../features/noteSlice/noteSlice'

const AllNotes = () => {
  const notes = useSelector(state => state.note.notes)
  const dispatch = useDispatch()
  console.log(notes)
  const handleDelete = (id) => {
    dispatch(deleteNote(id))
  }
  return (
    <div className='w-[70%]'>
      {notes.length > 0 && notes.map(note => (
        <div key={note.id} className='bg-gray-700 text-gray-300 rounded-lg px-5 py-2 mb-5 w-full'>
          <h2 className='text-2xl font-bold text-gray-400 text-left'>{note.title}</h2>
          <div className='flex justify-between items-center'>
            <h5>{`${note.content.substring(1,100)}...`}</h5>
            <div>
                <NavLink to={`/?noteId=${note.id}`}>Edit</NavLink>
                <NavLink to={`${note.id}`} title={note.title}>View</NavLink>
              <button onClick={() => handleDelete(note.id)}>
                Delete
              </button>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default AllNotes

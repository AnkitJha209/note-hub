import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteNote } from '../features/noteSlice/noteSlice'
import { toast } from 'react-toastify'
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const AllNotes = () => {
  const notes = useSelector(state => state.note.notes)
  const dispatch = useDispatch()
  console.log(notes)
  const handleDelete = (id) => {
    dispatch(deleteNote(id))
  }
  const handleCopy = (id) => {
    const n = notes.filter(note => note.id === id)
    window.navigator.clipboard.writeText(n[0].content)
    toast.success('Copied To Clipboard' )
  }
  return (
    <div className='w-[70%]'>
      {notes.length > 0 && notes.map(note => (
        <div key={note.id} className='bg-gray-700 text-gray-200 rounded-lg px-5 py-2 mb-5 w-full'>
          <h2 className='text-2xl font-bold text-gray-400 text-left'>{note.title}</h2>
          <div className='flex flex-col sm:justify-between mt-5 gap-5 sm:flex-row'>
            <h5 className='text-left'>{`${note.content.substring(1,100)}...`}</h5>
            <div className='flex justify-center items-center gap-10 sm:gap-5'>
                <NavLink className='text-green-800 bg-green-500 hover:bg-green-700 hover:text-black rounded-md text-lg p-1' to={`/?noteId=${note.id}`}><CiEdit/></NavLink>
                <NavLink className='text-gray-800 bg-blue-500 hover:bg-blue-700 rounded-md text-lg p-1' to={`${note.id}`} title={note.title}><FaEye/></NavLink>
                <button className='bg-red-500 text-black p-1 hover:bg-red-700 text-lg rounded-md' onClick={() => handleDelete(note.id)}>
                  <MdDelete/>
                </button>
                <button className='bg-purple-500 text-black hover:bg-purple-700 p-1 text-lg rounded-md' onClick={() => handleCopy(note.id)}>
                  <FaCopy/>
                </button>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default AllNotes

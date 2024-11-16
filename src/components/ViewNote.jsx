import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewNote = () => {
  const {id} = useParams();

  console.log(id)

  const notes = useSelector(state=>state.note.notes)

  const note = notes.filter(note => note.id === id)[0]

  console.log(note);
  return (
    <div className='flex flex-col items-start justify-start text-left'>
      <div className='text-3xl text-gray-600 font-bold uppercase'>
      {note.title}
      </div>
      <div className='mt-5 text-xl text-gray-400 font-semibold'>
        {note.content}
      </div>

    </div>
  )
}

export default ViewNote

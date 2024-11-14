import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewNote = () => {
  const {id} = useParams();

  console.log(id)

  const notes = useSelector(state=>state.notes)

  const note = notes.filter(note => note.id === id)[0]

  console.log(note);
  return (
    <div className='text-3xl text-white'>
      {note.title}
      <br />
      {note.content}
    </div>
  )
}

export default ViewNote

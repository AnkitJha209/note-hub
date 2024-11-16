import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { createNote, editNote } from "../features/noteSlice/noteSlice";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useSearchParams()
  const noteId = search.get('noteId')
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.notes)
  
  const handleClick = () => {
    const newNote = {
      id: noteId || nanoid(),
      title: title,
      content: content,
    }
    if(newNote.title === '' || newNote.content === ''){
      toast.error('Please Add Something first')
      return
    }

    if(noteId){
      dispatch(editNote(newNote))
    }
    else{
      dispatch(createNote(newNote))
    }
    setTitle('')
    setContent('')
    setSearch({})
  }

  useEffect(() => {
    if(noteId){
      const note = notes.find(p => p.id === noteId)
      if(note){
        setTitle(note.title)
        setContent(note.content)
      }
    }
  }, [noteId, notes])
  return (
    <div>
      <div className="px-10 sm:px-0 flex gap-10 mb-5 place-content-evenly justify-between">
        <input
          type="text"
          className="px-3 dark:bg-gray-700 bg-gray-500 text-gray-200 py-1 rounded-lg w-[65%]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title here...."
        />
        <button onClick={handleClick} className="px-2 bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-800 py-1 rounded-lg">
          {noteId ? <div>Update Note</div> : <div>Create Note</div>}
        </button>
      </div>
      <div className="flex justify-center">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-w-[350px] sm:min-w-[500px] min-h-[350px] bg-gray-600 dark:bg-gray-900 text-gray-400 rounded-lg px-5 py-2"
          placeholder="Enter content here...."
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;

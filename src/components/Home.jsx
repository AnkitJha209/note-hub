import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { createNote, editNote } from "../features/noteSlice/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useSearchParams()
  const noteId = search.get('noteId')
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes)
  
  const handleClick = () => {
    const newNote = {
      id: noteId || nanoid(),
      title: title,
      content: content,
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
      <div className="flex gap-10 mb-5 place-content-evenly justify-between">
        <input
          type="text"
          className="px-3 bg-gray-700 text-gray-200 py-1 rounded-lg w-[65%]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter title here...."
        />
        <button onClick={handleClick} className="px-2 dark:bg-purple-600 dark:hover:bg-purple-800 py-1 rounded-lg">
          {noteId ? <div>Update Note</div> : <div>Create Note</div>}
        </button>
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-w-[500px] bg-gray-800 text-gray-400 rounded-lg px-5 py-2"
          placeholder="enter content here...."
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;

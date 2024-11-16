import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    notes : localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers : {
        createNote: (state, action) => {
            const newNote = action.payload
            state.notes.push(newNote)
            localStorage.setItem('notes', JSON.stringify(state.notes))
            toast.success("Note Created Succesfully")
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
            localStorage.setItem('notes', JSON.stringify(state.notes))
            toast.success("Note Deleted Succesfully")
        },
        editNote: (state, action) => {
            const {title, content, id} = action.payload
            state.notes.forEach(note => (
                note.id === id ? (
                    note.title = title,
                    note.content = content
                ) : ''
            ));
            localStorage.setItem('notes', JSON.stringify(state.notes))
            toast.success("Note Updated Succesfully")
        },
    }
})

export const {createNote, deleteNote, editNote} = noteSlice.actions

export default noteSlice.reducer
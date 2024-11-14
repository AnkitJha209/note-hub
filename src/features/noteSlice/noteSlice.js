import { createSlice } from "@reduxjs/toolkit";

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
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
            localStorage.setItem('notes', JSON.stringify(state.notes))
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
        },
        deleteAllNotes: (state) => {
            state.notes = []
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
    }
})

export const {createNote, deleteNote, editNote, deleteAllNotes} = noteSlice.actions

export default noteSlice.reducer
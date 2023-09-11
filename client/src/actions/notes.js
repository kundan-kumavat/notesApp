import * as api from '../api';

export const createNote = (noteData, setIsLoading) => async(dispatch) => {
    try {
        await api.createNote(noteData);
        setIsLoading(false)
        // navigate('/notes')
    } catch (error) {
        setIsLoading(false);
        console.log(error);
    }
}

export const getNotes = (setNotes, setIsLoading) => async(dispatch) => {
    try {
        const { data } = await api.getNotes();
        setNotes([...data]);
        // setIsLoading(false)
    } catch (error) {
        // setIsLoading(false)
        console.log(error);
    }
}

export const updateNote = (noteId, noteData, navigate) => async(dispatch) => {
    try {
        await api.updateNote(noteId, noteData);
        navigate('/notes');
    } catch (error) {

    }
}

export const deleteNote = (noteId, navigate) => async(dispatch) => {
    try {
        await api.deleteNote(noteId);
        navigate('/notes')
    } catch (error) {
        
    }
} 
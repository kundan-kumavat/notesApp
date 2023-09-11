import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5000/'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem("Profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req;
});

export const login = (authData) => API.post('/users/signin', authData);
export const signUp = (authData) => API.post('/users/signup', authData);

export const getNotes = () => API.get(`/notes/`);
export const createNote = (noteData) => API.post('/notes/', noteData);
export const updateNote = (noteId, noteData) => API.put(`/notes/${noteId}`, noteData);
export const deleteNote = (noteId) => API.delete(`/notes/${noteId}`);
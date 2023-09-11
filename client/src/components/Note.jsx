import dots from '../assets/Vector.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateNote, deleteNote } from '../actions/notes';
import Cross from '../assets/cross.png';
import { MdDelete } from 'react-icons/md';
import { BsPencilFill } from 'react-icons/bs';

const Note = ({title, description, id}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate(false);
    const [toggle, setToggle] = useState(false);
    const [updateToggle, setUpdateToggle] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleDelete = (id) => {
        dispatch(deleteNote(id, navigate));
    };

    const handleUpdate = (id) => {
        dispatch(updateNote(id, {
            "title": newTitle,
            "description": newDescription
        }, navigate));
    };

    return(
            <div className="flex flex-col p-[1.5rem] bg-blue items-left rounded-[10px] relative">
            <div className="absolute right-5 top-4">
                <img
                className="w-[3px] cursor-pointer"
                onClick={() => {
                    setToggle((prev) => (!prev));
                }}
                src={dots} alt="" />
            </div>
            <div className={`${toggle ? 'flex' : 'hidden'} absolute py-[.5rem] px-[2rem] rounded-md bg-yellow right-5 top-7 py-[1rem] px-[1rem] flex-col justify-between`}>
                <button 
                 onClick={() => {
                    handleDelete(id);
                    setToggle(false);
                 }}
                >
                 <div className='flex flex-row'>
                    <MdDelete className='w-[20px] h-auto mr-[.3rem]' />
                    <p>Delete</p>
                    </div></button>
                <button 
                 onClick={() => {
                    setUpdateToggle(true);
                    setToggle(false);
                 }}
                ><div className='flex flex-row'>
                <BsPencilFill className='w-[20px] h-auto mr-[.3rem]' />
                <p>Edit</p>
                </div></button>
            </div>
            <div className='p-[0.5rem]'>
                <p className="font-semibold text-[1rem]">{title}</p>
                <p className="text-[1rem] max-w-[300px]">{description}</p>
            </div>

            <div className={`${updateToggle ? 'flex' : 'hidden'} overlay`}>
             <div className={`${updateToggle ? 'flex' : 'hidden'} absolute z-[10]`}>
              <div className="form w-[320px] ">
                <form action="">
                    <img 
                    className="absolute w-[15px] h-[15px] top-6 right-6 cursor-pointer"
                    onClick={() => {
                        setUpdateToggle(false);
                    }}
                    src={Cross} alt="" />
                    <p className="heading">Update Note</p>
                    <div className="inputBox">
                    <span>Title</span>
                    <input 
                    onChange={(e) => {
                        setNewTitle(e.target.value);
                    }}
                    type="text"
                    placeholder="Title"
                    required />
                    </div>
                    <div className="inputBox">
                        <span>Description</span>
                        <textarea 
                        onChange={(e) => {
                            setNewDescription(e.target.value);
                        }}
                        row="20"
                        placeholder="Enter Description..." 
                        required />
                    </div>
                    <button onClick={() => {
                        handleUpdate(id)
                    }}>Submit</button>
                </form>
              </div>
             </div>
            </div>
        </div>
    )
}

export default Note;
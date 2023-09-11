import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getNotes, createNote } from '../../actions/notes';
import Note from "../../components/Note";
import Cross from "../../assets/cross.png";
import Loader from "../../components/Loader";

function Notes(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [toggle, setToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem("Profile")){
            navigate('/signin');
        }
        
        dispatch(getNotes(setNotes));

    }, []);

    const handleSubmit = (e) => {

        setIsLoading(true);
        dispatch(createNote({
            "title": title,
            "description": description
        }, setIsLoading));
    }

    return(
        <section className="relative flex flex-col">
            {
                isLoading ? 
                <Loader /> : 
                <></>
            }
            <div className="flex flex-row w-full gap-[1.5rem] flex-wrap">
            {
                notes.map((note, index) => {
                    return <Note key={index} title={note.title} description={note.description} id={note._id} />
                })
            }
            </div>

            

            <div className={`${toggle ? 'rotate-45' : 'rotate-0'} flex transition-all fixed bottom-5 right-7 z-[10]`}>
                <button
                className="text-[2rem] font-bold w-[70px] h-[70px] bg-yellow rounded-full"
                onClick={() => {
                    setToggle((prev) => (!prev));
                }}>+</button>
            </div>
        <div className={`${toggle ? 'flex' : 'hidden'} overlay`}>
        <div className={`${toggle ? 'flex' : 'hidden'} absolute z-[10]`}>
            <div className="form w-[320px] ">
                <form action="">
                    {/* <img 
                    className="absolute w-[15px] h-[15px] top-6 right-6 cursor-pointer"
                    onClick={() => {
                        setToggle(false);
                    }}
                    src={Cross} alt="" /> */}
                    <p className="heading">New Note</p>
                    <div className="inputBox">
                    <span>Title</span>
                    <input 
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    type="text"
                    placeholder="Title"
                    required />
                    </div>
                    <div className="inputBox">
                        <span>Description</span>
                        <textarea 
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        row="20"
                        placeholder="Enter Description..." 
                        required />
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
        </div>
        </section>
    )
}

export default Notes;
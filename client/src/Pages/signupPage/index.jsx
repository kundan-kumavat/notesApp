import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from '../../actions/auth';
import signupImage from '../../assets/signupPageImage.jpg';
import Loader from "../../components/Loader";
import {FiMail} from 'react-icons/fi';
import {BiSolidKey, BiUserCircle} from 'react-icons/bi';

function SignUpPage(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        dispatch(signup({
            "email": email,
            "password": password,
            "userName": userName
        }, setIsLoading, navigate));

    }

    return(
        <section className="flex justify-center items-center min-h-[85vh]">

           {
            isLoading ? 
            <Loader /> : 
            <></>
           }

<div className="formBox ss:flex-row md:w-[75%]">

<div className="sm:w-[50%] w-full leftArea bg-[#9d96b7]">
    <img 
    className="h-[100%] w-auto"
    src={signupImage} alt="image" />
</div>

<div className="bg-[#27223A] sm:w-[50%] w-full rightArea">
    <p className="text-[2rem] font-semibold">Welcome!</p>
    <p className="">Exicted to you see onboard.</p>

    <form>
        <div className="inputbox">
            <FiMail className="w-[25px] h-auto mr-[1rem]" />
            <input
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            type="text"
            placeholder="Enter email" />
        </div>
        <div className="inputbox">
            <BiUserCircle className="w-[25px] h-auto mr-[1rem]" />
            <input
            onChange={(e) => {
                setUserName(e.target.value);
            }}
            type="text"
            placeholder="Enter username" />
        </div>

        <div className="inputbox">
            <BiSolidKey className="w-[25px] h-auto mr-[1rem]" />
            <input
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter password" />
        </div>

        <button
        onClick={handleSubmit}
        >
            Signup
        </button>
    </form>

    <div>
        <p>Already have an account? {' '}
            <span className="text-yellow"><Link to='/signin'>login</Link></span>
        </p>
    </div>
</div>
</div>
        </section>
    )
}

export default SignUpPage;
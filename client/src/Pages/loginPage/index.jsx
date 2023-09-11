import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import loginPageImage from '../../assets/index';
import {FiMail} from 'react-icons/fi';
import {BiSolidKey} from 'react-icons/bi';
import Loader from "../../components/Loader";

function LoginPage(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if( !email || !password ) return alert("Please enter email and password")

        setIsLoading(true)
        dispatch(login({
            "email": email,
            "password": password
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

                <div className="sm:w-[50%] w-full leftArea bg-[#646993]">
                    <img 
                    src={loginPageImage} alt="image" />
                </div>

                <div className="bg-[#27223A] sm:w-[50%] w-full rightArea">
                    <p className="text-[2rem] font-semibold">Welcome Back!</p>
                    <p className="">Login to continue</p>

                    <form>
                        <div className="inputbox">
                            <FiMail className="w-[25px] h-auto mr-[1rem]" />
                            <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="text"
                            placeholder="Enter Email"
                            required />
                        </div>
                        <div className="inputbox">
                            <BiSolidKey className="w-[25px] h-auto mr-[1rem]" />
                            <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Enter Password"
                            required />
                        </div>

                        <button
                        onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </form>

                    <div>
                        <p>Don`t have an account? {' '}
                            <span className="text-yellow"><Link to='/signup'>Register</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;
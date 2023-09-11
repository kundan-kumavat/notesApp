import react, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from 'react-redux';
import { BsList} from 'react-icons/bs';
import {RxCross2} from 'react-icons/rx';

function Navbar(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        navigate('/');
    }

    return(
        <section className="w-full py-[1rem] flex flex-row justify-between">
            <div className="flex items-center">
                <Link to={'/'}>
                  <p className="text-[1.5rem] font-bold">Notes App</p>
                </Link>
            </div>

            <div className="sm:flex hidden items-center justify center flex-row gap-[2rem]">
            <Link to={'/'}>Home</Link>
            <Link to={''}>
                  <p className="">About</p>
            </Link>
            <Link to={'/notes'}>
                  <p className="">Notes</p>
            </Link>
            </div>

            {
                !localStorage.getItem('Profile') ? 
                <div className="sm:flex hidden items-center">
                <Link to={'./signin'}>
                    <p className="mr-[1rem] font-poppins">Login</p>
                </Link>
                <Link to={'./signup'}>
                    <Button name="Sign up" />
                </Link>
                </div> : 
                <div className="sm:flex hidden items-center justify-center">
                    <button onClick={() => {
                        handleLogout();
                    }}>Logout</button>
                </div>
            }

            <div className="sm:hidden flex items-center justify-center">
                <BsList onClick={() => {
                    setToggle(true);
                }} className={`${toggle ? 'hidden' : 'flex'} w-[25px] h-auto`} />
            </div>

            <div
                 className={`${toggle ? 'translate-x-[0]' : 'translate-x-[-100%]'} py-6 px-8 bg-primary absolute left-0 top-[0] h-[100vh] w-[200px] border-[1px] border-[#6a6b6a] z-[50] sidebar`}
                >
                    <div className="flex w-full justify-end">
                    <RxCross2
                     onClick={() => {
                        setToggle(false);
                     }}
                    />
                    </div>

                    <div className="flex items-center justify-center flex-col gap-[2rem]">
                    <Link to={'/'}>Home</Link>
                     <Link to={''}>
                      <p className="">About</p>
                     </Link>
                     <Link to={'/notes'}>
                      <p className="">Notes</p>
                     </Link>
                    </div>

                {
                !localStorage.getItem('Profile') ? 
                <div className="flex items-center justify-center flex-col gap-[2rem] mt-[2rem]">
                <Link to={'./signin'}>
                    <p className="font-poppins">Login</p>
                </Link>
                <Link to={'./signup'}>
                    <p>Signup</p>
                </Link>
                </div> : 
                <div className="flex items-center justify-center mt-[2rem]">
                    <button onClick={() => {
                        handleLogout();
                    }}>Logout</button>
                </div>
            }
            </div>
        </section>
    )
};

export default Navbar;
import react from 'react';
import heroImg from '../assets/Hero img.jpg';
import Button from '../components/Button';
import shape from '../assets/Subtract.png';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <section className='flex sm:flex-row flex-col-reverse py-[1.5rem] justify-between w-full min-h-[100vh]'>

            <div className='flex flex-col justify-center items-left relative sm:mt-[0rem] mt-[2rem]'>
                <img className='absolute w-[40px] h-auto top-[12%] left-0 z-[0]' src={shape} alt="shapes" />
                <img className='absolute w-[50px] h-auto top-[2%] right-[12%] z-[0]' src={shape} alt="shapes" />
                <img className='absolute w-[40px] h-auto bottom-[40%] left-[60%] z-[0]' src={shape} alt="shapes" />
                <p className='md:text-[4rem] text-[2rem] font-poppins font-semibold max-w-[500px] z-[1]'>Bring all <br /> your thoughts together</p>
                <p className='text-[1rem] font-medium font-poppins max-w-[500px] my-[1rem] z-[1]'>Empower Your Thoughts: Unlock Creativity and Productivity 
                     with Our Note-Making Website. Your Ideas,  Effortlessly 
                     Captured and Organized.
                </p>
                <div className='my-[3rem] sm:my-[1rem]'>
                 <Link to={'/signin'}>
                 <Button name="Get Started" />
                 </Link>
                </div>
                <p className='absolute bottom-0 left-0 text-dimWhite'>Created By Kundan Kumavat</p>
            </div>
            <div className='flex md:w-[50%] w-[100%] justify-end'>
             <img className='md:w-[80%] w-[100%] h-auto' src={heroImg} alt="Hero Image" />
            </div>
        </section>
    )
}

export default Home;
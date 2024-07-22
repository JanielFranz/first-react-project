import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from "react";

//show the navbar
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4 '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            {/*icon from  react icons, if I click it change*/}
            <div onClick={handleNav}>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className='fixed left-0 top-0 w-[60%] h-full  border-r border-r-gray-900 bg-[#000300]'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

                <ul className='pt-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
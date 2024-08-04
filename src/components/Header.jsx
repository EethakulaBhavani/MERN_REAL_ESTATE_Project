import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-red-200 shadow-lg'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
        <span className='text-rose-800'>Home</span>
        <span className='text-red-600'>Haven</span>
        </h1>
        </Link>
        <form className='bg-red-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-red-950'/>
        </form>
        <ul className='flex gap-5'>
           <Link to='/'> <li className='font-semibold hidden sm:inline text-red-700 hover:underline'>Home</li> </Link> 
           <Link to='/about'><li className='font-semibold hidden sm:inline text-red-700 hover:underline'>About</li> </Link>
           <Link to='/sign-in'> <li className='font-semibold text-red-700 hover:underline'>Sign in</li> </Link>
        </ul>
    </div>
      
    </header>
  )
}

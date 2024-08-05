import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default function Header() {
  const {currentUser}=useSelector(state=>state.user);
  return (
    <header className='bg-orange-200 shadow-lg'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
        <span className='text-amber-700'>Home</span>
        <span className='text-amber-950'>Haven</span>
        </h1>
        </Link>
        <form className='bg-orange-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-red-950'/>
        </form>
        <ul className='flex gap-5'>
           <Link to='/'> <li className='font-semibold hidden sm:inline text-amber-900 hover:underline'>Home</li> </Link> 
           <Link to='/about'><li className='font-semibold hidden sm:inline text-amber-900 hover:underline'>About</li> </Link>
           <Link to='/profile'>
           {currentUser?(
            <img className='rounded-full h-8 w-8 object-cover' src={currentUser.avatar} alt='profile' />
           ):(
            <li className='font-semibold text-amber-900 hover:underline'>Sign in</li> 
           )}
            </Link>
          
        </ul>
    </div>
      
    </header>
  )
}

import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-bold my-7 text-center'>
        Profile
      </h1>
      <form className="flex flex-col gap-3">
        <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg"/>
        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg"/>
        <input type="text" placeholder="password" id="password" className="border p-3 rounded-lg"/>
        <button className="text-white bg-blue-900 rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-80">Update</button>
        
      </form>
      <div className="flex mt-4 justify-between">
        <span className="hover:cursor-pointer text-red-800">Delete Account</span>
        <span className="hover:cursor-pointer text-red-800">Sign Out</span>
      </div>
    </div>
  )
}

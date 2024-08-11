import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Create your List</h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-3 flex-1'>
          <input type="text" placeholder='Name' className='p-3 rounded-lg border' 
          id='name' maxLength='70' minLength='10' required/>
          <textarea type="text" placeholder='Description' className='p-3 rounded-lg border' 
          id='description' required/>
          <input type="text" placeholder='Address' className='p-3 rounded-lg border' 
          id='address'  required/>
          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input type="checkbox" id='sale'className='w-5'/>
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='rent'className='w-5'/>
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='parking'className='w-5'/>
              <span>Parking Spot</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='furnished'className='w-5'/>
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='offer'className='w-5'/>
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input type="number" id='bedrooms' min='1' max='10' required className='p-3 border border-gray-200 rounded-lg'/>
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" id='bathrooms' min='1' max='10' required className='p-3 border border-gray-200 rounded-lg'/>
              <p>Bathrooms</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" id='regularPrice' min='1' max='10' required className='p-3 border border-gray-200 rounded-lg'/>
              <div className="flex flex-col items-center">
              <p>Regular Price</p>
              <span className='text-xs'>($ / Month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" id='discountPrice' min='1' max='10' required className='p-3 border border-gray-200 rounded-lg'/>
              <div className="flex flex-col items-center">
              <p>Discounted Price</p>
              <span className='text-xs'>($ / Month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className='font-semibold'>Add Images:
            <span className='font-normal text-gray-800 ml-2'>The first image will be the cover (max 6)</span>
          </p>
          <div className="flex gap-4">
            <input className='w-full border border-gray-300 p-3 rounded' type="file" id='images' accept='images/*' multiple />
            <button className='uppercase text-green-600 border border-green-600 rounded p-3 hover:shadow-lg hover:bg-green-600 hover:text-white active:bg-green-700 disabled:opacity-80'>Upload</button>
          </div>
          <button className='rounded-lg uppercase text-white p-3 bg-orange-950 hover:opacity-90 disabled:opacity-80'>Create List</button>
        </div>
      </form>
    </main>
  )
}

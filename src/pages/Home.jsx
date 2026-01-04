import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 min-h-screen md:min-h-0'>
      <div className='w-full md:w-1/2 px-6 sm:px-10 md:px-20 py-8 md:pt-10 md:pb-10 flex flex-col justify-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white pt-2 pb-2'>
          Welcome to my portfolio
        </h1>
        <h1 className='text-lg sm:text-xl md:text-2xl text-white pt-2 pb-2'>
          ខ្ញុំបាទឈ្មោះ សុភាជ វិសិដ្ឋ ជានិស្សិតឆ្នាំទី២នៃសកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-white pt-2 pb-2 leading-relaxed'>
          My goal is to become a full-stack developer specializing in web and mobile applications, while building a professional career with a degree in Information Technology.
        </p>
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-center py-8 md:py-0'>
        <img 
          className='w-48 sm:w-64 md:w-72 lg:w-80 rounded-full shadow-lg' 
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Profile" 
        />
      </div>
    </div>
  )
}

export default Home
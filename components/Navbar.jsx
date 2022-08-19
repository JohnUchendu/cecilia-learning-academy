import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='mx-3 md:mx-20 font-mono'>
      <nav className='shadow-sm rounded grid grid-cols-2 pt-3 '>
        <div className=' font-semibold cursor-pointer'>
          <p><Image className='w-[3rem] md:w-[100%] h-[4rem] md:h-[2rem] rounded-md object-cover'
            src='/img/cla.jpg' alt='Cecilia Learning Academy -Logo' height='100' width='50' />
            
          </p>
          <div className='w-100'>
              <span
                className='block'>CECILIA</span>
              <span
                className='block'>LEARNING</span>
              <span
                className='block'>ACADEMY</span>
            </div>
        </div>




        <ul className='flex gap-3.5 flex-row-reverse content-around text-[0.8rem] md:text-lg font-bold pl-2.5 '>
          <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 duration-1000 ease-in'>FAQs</li>
          <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 duration-1000 ease-in'>ADMISSIONS</li>
          <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 duration-1000 ease-in'>ABOUT</li>
        </ul>


      </nav>


      <div className="mx-3 md:mx-20 pl-3 font-mono text-[0.8rem] md:text-5xl">hello
      </div>
    </div>

























  )
}
export default Navbar;
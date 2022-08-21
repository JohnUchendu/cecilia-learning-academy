import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='mx-3 md:mx-20'>
      <nav className='shadow-lg rounded grid grid-cols-2 pt-3 '>
       
          <p><Image className='w-[3rem] md:w-[100%] h-[4rem] md:h-[2rem] rounded-md object-cover cursor-pointer'
            src='/img/cla.jpg' alt='Cecilia Learning Academy -Logo' height='50' width='50' />
            
          </p>
       




        <ul className='flex gap-8 flex-row-reverse content-around text-[0.8rem] md:text-lg font-bold pl-2.5 '>
          <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 '>FAQs</li>
          <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 '>ADMISSIONS</li>
          <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 '>ABOUT</li>
        </ul>


      </nav>


      <div className="mx-3 md:mx-20 pl-3 font-mono text-[0.8rem] md:text-5xl">
      </div>
    </div>

























  )
}
export default Navbar;
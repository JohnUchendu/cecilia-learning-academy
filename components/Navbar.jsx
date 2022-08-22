import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='mx-3 md:mx-20'>
      <nav className='shadow-lg rounded grid grid-cols-2 pt-3 '>
       
          <p>
            <Link href='/'>

            <Image className='w-[3rem] md:w-[100%] h-[4rem] md:h-[2rem] rounded-md object-cover cursor-pointer'
            src='/img/cla.jpg' alt='Cecilia Learning Academy -Logo' height='50' width='50' />
            </Link>
            
          </p>
       




        <ul className='flex gap-8 flex-row-reverse content-around text-[0.8rem] md:text-lg font-bold pl-2.5 '>
         
         <Link href='/FAQs'>
          <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 '>FAQs</li>
          </Link>

          <Link href='/Admissions/Admissions'>
         <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 '>ADMISSIONS</li>
          </Link>
          
          <Link href='/About/About-Us'>
         <li className='pt-2.5 text-md cursor-pointer hover:text-blue-700 '>ABOUT</li>
          </Link>
          
        </ul>


      </nav>


      <div className="mx-3 md:mx-20 pl-3 font-mono text-[0.8rem] md:text-5xl">
      </div>
    </div>

























  )
}
export default Navbar;
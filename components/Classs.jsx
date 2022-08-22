import Image from "next/image";
import Link from 'next/link';

const Classs = (props) => {
  return (

    <div className='grid grid-cols-1 md:grid-cols-5 gap-4  shadow-md p-3 '>
      <div>
        <div className='text-center font-semibold bg-blue-400  text-lg pb-3'>Creche</div>
        <Image className='rounded-lg object-cover'
          src="/img/smiling-school-girl-backpack-standing-600w-692415091.webp"
          alt="Kids playing in school"
          height='450'
          width='600' />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <Link href='/Academics/Classes/Creche'>
          <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>
        </Link>

      </div>
      <div>
        <div className='text-center font-semibold bg-red-400  text-lg pb-3'>Pre-Nursery</div>
        <Image className='rounded-lg object-cover'
          src="/img/smiling-school-girl-backpack-standing-600w-692415091.webp"
          alt="Kids playing in school"
          height='450'
          width='600' />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <Link href='/Academics/Classes/Pre-nursery'>
          <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>
        </Link>


      </div>
      <div>
        <div className='text-center font-semibold bg-yellow-400  text-lg pb-3'>Nursery</div>
        <Image className='rounded-lg object-cover'
          src="/img/smiling-school-girl-backpack-standing-600w-692415091.webp"
          alt="Kids playing in school"
          height='450'
          width='600' />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <Link href='/Academics/Classes/Nursery'>
          <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>
        </Link>

      </div>
      <div>
        <div className='text-center font-semibold bg-orange-400  text-lg pb-3'>Primary</div>
        <Image className='rounded-lg object-cover'
          src="/img/smiling-school-girl-backpack-standing-600w-692415091.webp"
          alt="Kids playing in school"
          height='450'
          width='600' />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <Link href='/Academics/Classes/Primary'>
          <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>
        </Link>

      </div>
      <div>
        <div className='text-center font-semibold bg-violet-400  text-lg pb-3'>Secondary</div>
        <Image className='rounded-lg object-cover'
          src="/img/smiling-school-girl-backpack-standing-600w-692415091.webp"
          alt="Kids playing in school"
          height='450'
          width='600' />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <Link href='/Academics/Classes/Secondary'>
          <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>
        </Link>

      </div>



    </div>




  )
}

export default Classs
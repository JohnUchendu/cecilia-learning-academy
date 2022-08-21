import Image from "next/image"

const Classs = () => {
  return (

    <div className='grid grid-cols-1 md:grid-cols-5 gap-3  shadow-md p-3 '>
      <div>
        <div className='text-center font-semibold bg-blue-400  text-lg pb-3'>Creche</div>
        <img className='rounded-lg'
          src="/img/pupils-computer-class-teacher-600w-480125899.webp"
          alt="Kids playing in school" />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>

      </div>
      <div>
        <div className='text-center font-semibold bg-red-400  text-lg pb-3'>Pre-Nursery</div>
        <img className='rounded-lg'
          src="/img/pupils-computer-class-teacher-600w-480125899.webp"
          alt="Kids playing in school" />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>

      </div>
      <div>
        <div className='text-center font-semibold bg-yellow-400  text-lg pb-3'>Nursery</div>
        <img className='rounded-lg'
          src="/img/pupils-computer-class-teacher-600w-480125899.webp"
          alt="Kids playing in school" />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>

      </div>
      <div>
        <div className='text-center font-semibold bg-orange-400  text-lg pb-3'>Primary</div>
        <img className='rounded-lg'
          src="/img/pupils-computer-class-teacher-600w-480125899.webp"
          alt="Kids playing in school" />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>

      </div>
      <div>
        <div className='text-center font-semibold bg-violet-400  text-lg pb-3'>Secondary</div>
        <img className='rounded-lg'
          src="/img/pupils-computer-class-teacher-600w-480125899.webp"
          alt="Kids playing in school" />
        <p className='font-semibold my-3 '>Join Tim and Ada with the class on adventures of counting numbers and more
        </p>
        <button className='bg-blue-200 rounded w-full hover:text-slate-100 hover:bg-blue-300 transition duration-1000 ease-in-out p-3 my-3 cursor-pointer'>Check now</button>

      </div>



    </div>




  )
}

export default Classs
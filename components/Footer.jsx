import Image from 'next/image'

function Footer() {
    return (
        <>
            <div className='bg-red-400 py-6 mt-'>
                <footer className='grid grid-cols-4 gap-2 text-[0.49rem] sm:text-2xl shadow-lg py-4  mx-3 md:mx-12'>
                    <ul></ul>
                    {/*<ul className='pl-0 '><p className='font-bold'>ABOUT US</p><br />
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Our Vision</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Our Mission</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Our History</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>School Anthem</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Our Logo</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Our Policy</li>
                    </ul>*/}
                    <ul className='pl-0'><p className='font-bold'>ACADEMICS</p><br />
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Classes</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Scholarship</li>
                    </ul>
                    <ul className='pl-0 '><p className='font-bold'>ADMISSIONS</p><br />
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>How to apply</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Admission Criteria</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>School fees</li>
                        <li className='hover:text-blue-700 duration-1000 pb-4 cursor-pointer'>Contact</li>
                    </ul>
                    <div>
                        <div className='grid grid-cols-2 gap-1.5 font-semibold cursor-pointer'>
                            <p><Image className='w-100 h-[4rem] md:h-[5.5rem] rounded-md object-cover'
                                src='/img/cla.jpg' alt='Cecilia Learning Academy -Logo' height='100' width='100' />

                            </p>
                            <div className='text-[0.5rem] sm:text-lg'>
                                <span
                                    className='block'>CECILIA</span>
                                <span
                                    className='block'>LEARNING</span>
                                <span
                                    className='block'>ACADEMY</span>
                            </div>
                        </div>
                        <address>4 Miller Avenue, off Ignatius Ajuru University
                        </address>
                        <p>Call Head Teacher on: 0703 005 5448</p>
                    </div>
                </footer >
            </div>
            <div className="bg-red-300  ">

                <div className='grid grid-cols-1 sm:grid-cols-2 text-[0.54rem] md:text-lg pt-10  p-5 mx-3 md:mx-12 font-semibold'>
                    <p>Made with ❤️ By C.L.A. ICT</p>
                    <p>CECILIA LEARNING ACADEMY 2022</p>
                </div>
            </div>
        </>
    )
}
export default Footer




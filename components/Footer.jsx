import Image from 'next/image'

function Footer () {
    return (
        <div className='bg-orange-200 font-mono py-10'>
            <footer className='container text-[0.69rem] md:text-2xl grid grid-cols-4 gap-1 shadow-sm  py-4 duration-1000 ease-in'>

                <ul className='pl-0 '><p className='font-bold'>ABOUT US</p>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Our Vision</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Our Mission</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Our History</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>School Anthem</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Our Logo</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Our Policy</li>
                </ul>
                <ul className='pl-0'><p className='font-bold'>ACADEMICS</p>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Classes</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Parents</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Partners</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Scholarship</li>
                </ul>
                <ul className='pl-0 '><p className='font-bold'>ADMISSIONS</p>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>How to apply</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Admissions Criteria</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>School fees</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Contact</li>
                    <li className='hover:text-blue-700 duration-1000 pb-2 cursor-pointer'>Home</li>
                </ul>
                <div>
                    <div className='grid grid-cols-2 gap-1.5 font-semibold cursor-pointer'>
                        <p><Image className='w-100 h-[4rem] md:h-[5.5rem] rounded-md object-cover'
                            src='/img/cla.jpg' alt='Cecilia Learning Academy -Logo' height='100' width='100'/>

                        </p>
                        <div>
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
                    <p>Call Head Teacher on: 07067047975</p>
                </div>





            </footer >
            <div className='container grid grid-cols-2 text-[0.54rem] md:text-lg pt-10 font-semibold'>
                <p>Made with LOVE By C.L.A. ICT</p>
                <p>CECILIA LEARNING ACADEMY 2022</p>
            </div>
        </div >
    )
}
export default Footer




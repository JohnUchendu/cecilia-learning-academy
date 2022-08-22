import Head from 'next/head';
import Image from 'next/image';
import Classs from '../components/Classs';
import Titles from '../components/Titles'




const Home = () => {
  return (
    <>
      <Head>
        <title>Cecilia Learning Academy Nursery and Primary School -Obio Akpor, Port Harcourt.</title>
        <meta name="description" content="Best Nursery and Primary school in Rumuolumeni" />
        <link rel="icon" href='/img/cla.ico' />
      </Head>



      <div className='mx-3 md:mx-20 duration-1000 ease-in'>
        <Titles title='Welcome Back To School' />
        <br />

        <section className='h-sm grid grid-cols-1 md:grid-cols-2 gap-3 pb-1 sm:pb-10 justify-items-start justify-center items-center w-100'>
          <Image className="rounded-md object-cover "
            src="/img/happy-school-kids-sitting-together-600w-447170968.webp"
            alt="Head Teacher of CLA Nursery and Primary School Rumuolumeni, Obio Akpor."
            height='300'
            width='600'
          />
          <blockquote className='text-[0.7rem] md:text-2xl max-h-100 items-center'>
            Welcome to back to school, it is always lovely and warm to have us back here,
            some more text..,

          </blockquote><br />
        </section>

      </div>
      <Titles title='Classes' /><br />
      <Classs />



    </>
  )
}
export default Home;
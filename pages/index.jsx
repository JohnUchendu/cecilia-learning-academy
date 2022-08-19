import Head from 'next/head'
import Titles from '../components/Titles'
import Image from 'next/image'


const Home = () => {
  return (
    <div className='container bg-orange-400'>
      <Head>
        <title>Cecilia Learning Academy -Port Harcourt</title>
        <meta name="description" content="Best Nursery and Primary school in Rumuolumeni" />
        <link rel="icon" href="/favicon.ico" />

      </Head> 
   


     <Titles title='Welcome Back' />
      <br />
      <div className='container font-mono '>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-start justify-center items-center w-100'>
          <Image className="h-100 w-100 rounded object-cover" src="/img/pupils-wearing-school-uniform-computer-600w-541632628.webp" alt=""
          height='100' 
          width='100' />
          <i className='text-[0.96rem] md:text-4xl max-h-100'>Welcome to back to school, it is always lovely and warm to have us back here,
            Welcome to back to school, it is always lovely and warm to have us back here,
            Welcome to back to school, it is always lovely and warm to have us back here, s
          </i>
        </section>

        </div>
        </div>
  )
}
export default Home;
import Head from 'next/head'
import Titles from '../component/Titles'


const Home = () => {
  return (
    <div className='bg-blue-300'>
      <Head>
        <title>Cecilia Learning Academy -Port Harcourt</title>
        <meta name="description" content="Best Nursery and Primary school in Rumuolumeni" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head> 
   


     <Titles title='Welcome Back' />
      <br />
      <div className='container font-mono '>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-start justify-center items-center w-100'>
          <img className="h-100 w-100 rounded object-cover" src="img/pupils-wearing-school-uniform-computer-600w-541632628.webp" alt="" />
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
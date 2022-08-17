import Layout from '../component/Layout'
//import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-mono bg-blue-200'>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </div>
  )

}

export default MyApp

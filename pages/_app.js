import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-mono bg-blue-300 text-neutral-700'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )

}

export default MyApp

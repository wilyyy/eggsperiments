import '../styles/globals.css';
import Head from 'next/head';

//add metadata later


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Head>
        <title>Eggsperiments</title>
      </Head>
    </div>
    
  )
}

export default MyApp

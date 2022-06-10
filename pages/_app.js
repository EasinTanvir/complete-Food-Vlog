import {SessionProvider} from 'next-auth/react'
import Layout from "../Components/Header/Layout"
import { ExtraContext } from "../Context/Context"




function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <ExtraContext>
    <SessionProvider session={session}>
    <Layout>
       <Component {...pageProps} />            
    </Layout>
    </SessionProvider>
    </ExtraContext>
     )
}

export default MyApp

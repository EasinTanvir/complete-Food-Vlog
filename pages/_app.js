import {SessionProvider} from 'next-auth/react'
import Layout from "../Components/Header/Layout"
import { ExtraContext } from "../Context/Context"




function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <SessionProvider session={session}  refetchInterval={5 * 60}>
    <ExtraContext>   
    <Layout>
       <Component {...pageProps} />            
    </Layout>   
    </ExtraContext>
    </SessionProvider>
     )
}

export default MyApp

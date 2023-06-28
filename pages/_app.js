import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

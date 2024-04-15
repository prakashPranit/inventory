
import Home from './structure'
import Footer from '@/components/Footer'
export default function Layout({ children }) {
    return (
      <>
  <Home>
  <main>{children}</main>
  </Home>
  <Footer/>
     
    
      </>
    )
  }
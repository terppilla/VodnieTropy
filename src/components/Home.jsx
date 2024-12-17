import '../App.css'
import Header from './Header'
import Banner from './Banner'
import Features from './Features'
import About from './About'
import Popularcards from './Popular-cards'
import Contacts from './Contacts'
import Footer from './Footer'
import FAQ from './FAQ'

export default function Home() {
  return (
    <div>
        <Header />
        <main>
          <Banner />
          <Features />
          <About />
          <Popularcards />
          <FAQ />
          <Contacts />
        </main>
        <Footer />
        </div>
  )
}

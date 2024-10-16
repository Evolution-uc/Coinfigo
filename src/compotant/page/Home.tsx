
import Blog from '../Blog'
import Body from '../Body'
import Body2 from '../Body2'
import Body3 from '../Body3'
import Body4 from '../Body4'
import Body5 from '../Body5'
import Custormes from '../Custormes'
import Footer from '../Footer'
import Hero from '../Hero'
import Navbar from '../Navbar'
import Number from '../Number'
import Prodect from '../Prodect'
import Screen from '../Screen'



function Home() {
  return (
    <div>
      
        <Navbar/>
        <Hero/>
        <Prodect/>
        <Body/>
        <Body2/>
        <Body3/>
        <Body4/>  
        <Screen/>
        <Number/>
        <Custormes/>
        <Blog/>
        <Footer/>
        
    </div>
  )
}

export default Home
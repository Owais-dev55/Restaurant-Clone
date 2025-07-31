import Hero from '../components/HomeOne/Hero'
import Welcome from '../components/HomeOne/Welcome'
import Menu from '../components/HomeOne/Menu'
import LatestNews from '../components/HomeOne/Latest-news'
import Counter from '../components/HomeOne/counter'
import Testimonial from '../components/HomeOne/Testimonial'
import Reservation from '../components/HomeOne/Reservation'
const Homeone = () => {
  return (
    <div>
      <Hero/> 
      <Welcome/>
      <Menu />
      <Counter/>
      <Testimonial/>
      <Reservation />
      <LatestNews/>
    </div>
  )
}

export default Homeone

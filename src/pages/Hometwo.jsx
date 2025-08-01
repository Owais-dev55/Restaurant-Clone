import Reservation from '../components/HomeTwo/Reservation'
import Testimonial from '../components/HomeTwo/Testimonial'
import Hero from '../components/HomeTwo/Hero'
import FoodSection from '../components/HomeTwo/second'
import Discovery from '../components/HomeTwo/Discovery'
import Team from '../components/HomeTwo/Team'

const Hometwo = () => {
  return (
    <div>
      <Hero/>
      <FoodSection />
      <Discovery/>
      <Team />
      <Testimonial/>
      <Reservation />
    </div>
  )
}

export default Hometwo

import Contact from "../components/Contact"
import Doctors from "../components/Doctors"
import CombinedHeroImg from "../components/HeroImage"
import News from "../components/News"
import OurServices from "../components/OurServices"
import Specialties from "../components/Specialties"
import WcMedical from "../components/WcMedical"

const Home = () => {
  return (
    <div>
      <CombinedHeroImg />
      <WcMedical />
      <OurServices />
      <Specialties />
      <Doctors />
      <News />
      <Contact />
    </div>
  )
}
export default Home
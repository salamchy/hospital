import Contact from "../components/Contact"
import DoctorsCard from "../components/DoctorCards"
import DoctorCoverImg from "../components/DoctorCoverImg"
import News from "../components/News"
import Testimonial from "../components/Testinomial"

const Doctors = () => {
  return (
    <div>
      <DoctorCoverImg />
      <DoctorsCard />
      <Testimonial />
      <News />
      <Contact />
    </div>
  )
}
export default Doctors